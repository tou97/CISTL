# Church in St. Louis Web Application

A web application designed to serve the Church in St. Louis. The app utilizes a frontend built with Next.js and a backend with TBD. It supports efficient deployment using Docker and local development with Docker Compose.

---

## 📚 Table of Contents
- [🛠️ Technology Stack](#️-technology-stack)
- [📦 Project Structure](#-project-structure)
- [💡 Deployment](#-deployment)

---

## 🛠️ Technology Stack
### **Frontend**:
- **Framework**: [Next.js](https://nextjs.org/) with TypeScript
- **UI Components**: [Mantine](https://mantine.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)

### **Backend**:
- **Framework**: TBD
- **Database**: TBD

### **Containerization**:
- **Docker**: Containerizes the app for consistent environments.
- **Docker Compose**: Manages multi-container setups for local development.

---

## 📦 Project Structure
```
CISTL/
├── .github/            # Github Actions deployment
├── frontend/           # Frontend application (Next.js)
├── backend/            # Backend services
├── docker-compose.yml  # Configuration for local development
├── Dockerfile          # Docker Artifact instructions
└── README.md           # This documentation
```

---

## 💡 Deployment
This project uses GitHub Actions to deploy the app to a Hetzner VPS whenever changes are merged into the `main` branch, as well as adhering to trunk based development methodology. Read more here: https://trunkbaseddevelopment.com/
