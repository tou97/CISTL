package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"net/smtp"
	"os"

	"github.com/joho/godotenv"
)

type ContactFormData struct {
	Name    string `json:"name"`
	Email   string `json:"email"`
	Message string `json:"message"`
}

var (
	smtpHost       string
	smtpPort       string
	smtpUsername   string
	smtpPassword   string
	recipientEmail = "timothyou97@gmail.com"
)

func init() {
	err := godotenv.Load()
	if err != nil {
		log.Println("Info: No .env file found or error loading it, relying on external env vars")
	}
	smtpHost = os.Getenv("SMTP_HOST")
	smtpPort = os.Getenv("SMTP_PORT")
	smtpUsername = os.Getenv("SMTP_USERNAME")
	smtpPassword = os.Getenv("SMTP_PASSWORD")
}

func main() {
	if smtpHost == "" || smtpPort == "" || smtpUsername == "" || smtpPassword == "" {
		log.Println("WARNING: SMTP environment variables (SMTP_HOST, SMTP_PORT, SMTP_USERNAME, SMTP_PASSWORD) are not fully set. Email sending will fail.")
	}

	// Set up routes
	mux := http.NewServeMux()
	mux.HandleFunc("/api/health", healthCheck)
	mux.HandleFunc("/api/contact", contactHandler)

	// Add CORS middleware
	handler := enableCORS(mux)

	// Start server
	port := "8080"
	log.Printf("Server starting on port %s", port)
	if err := http.ListenAndServe(":"+port, handler); err != nil {
		log.Fatalf("Server error: %v", err)
	}
}

// API Handlers
func healthCheck(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(map[string]string{"status": "ok"})
}

func contactHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Invalid request method", http.StatusMethodNotAllowed)
		return
	}

	var formData ContactFormData
	decoder := json.NewDecoder(r.Body)
	err := decoder.Decode(&formData)
	if err != nil {
		log.Printf("Error decoding JSON: %v%", err)
		http.Error(w, "Bad request body", http.StatusBadRequest)
		return
	}
	defer r.Body.Close()

	if formData.Name == "" || formData.Email == "" || formData.Message == "" {
		log.Println("Validation failed: Missing form fields")
		http.Error(w, `{"error": "All fields (name, email, message) are required."}`, http.StatusBadRequest)
		return
	}
	log.Printf("Received contact form data: %+v", formData)

	auth := smtp.PlainAuth("", smtpUsername, smtpPassword, smtpHost)

	// Format the email message
	subject := "New Contact Form Submission from " + formData.Name
	body := fmt.Sprintf("From: %s <%s>\nSubject: %s\n\n%s",
		formData.Name,
		formData.Email,
		subject,
		formData.Message,
	)
	msg := []byte("To: " + recipientEmail + "\r\n" +
		"Subject: " + subject + "\r\n" +
		"\r\n" +
		body + "\r\n")

	err = smtp.SendMail(smtpHost+":"+smtpPort, auth, smtpUsername, []string{recipientEmail}, msg)
	if err != nil {
		log.Printf("Error sending email: %v", err)
		http.Error(w, `{"error": "Failed to send email. Please try again later."}`, http.StatusInternalServerError)
		return
	}

	log.Println("Email sent successfully to", recipientEmail)

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(map[string]string{"message": "Email sent successfully"})
}

// CORS middleware - essential for Next.js frontend
func enableCORS(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*") // Keep for development, restrict in production
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")
		w.Header().Set("Access-Control-Allow-Credentials", "true") // If needed

		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusOK)
			return
		}

		next.ServeHTTP(w, r)
	})
}
