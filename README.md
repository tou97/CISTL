# 🙏 Church in St. Louis Web Application
A modern, responsive web application serving the Church in St. Louis community. Built with Next.js at its core, this application combines beautiful UI with powerful functionality, all while maintaining an efficient deployment pipeline through Docker.

---

## 📚 Table of Contents
- [🛠️ Technology Stack](#️-technology-stack)
- [📦 Project Structure](#-project-structure)
- [🚀 Getting Started](#-getting-started)
- [💡 Deployment](#-deployment)

---

## 🛠️ Technology Stack
- **Framework**: [Next.js](https://nextjs.org/) with TypeScript - Powering both frontend and API routes
- **UI Components**: [Mantine](https://mantine.dev/) - For accessible UI elements
- **Data Fetching**: Next.js API routes handling Google service integrations
- **Containerization**: Docker and Docker Compose for environment packaging for consistent deployment and streamlined local development experience

---

## 📦 Project Structure
```
CISTL/
├── .github/            # Github Actions deployment workflows
├── backend/            # Golang backend code
├── frontend/           # Next.js frontend code
├── docker-compose.yml  # Configuration for local development
├── Dockerfile          # Docker build instructions
└── README.md           # This documentation
```

---

## 🚀 Getting Started
### Prerequisites
Ensure the following are installed on your system:
- Docker

### Local Development with Docker Compose
- `docker compose up --build` to start the application.
- `docker compose down` to remove the application.

Visit http://localhost:3000 to see your application in action!

---

## 💡 Deployment
This project embraces modern DevOps practices with GitHub Actions automatically deploying to a Hetzner VPS whenever changes are merged into the main branch. We follow trunk-based development methodology for streamlined collaboration and continuous delivery.