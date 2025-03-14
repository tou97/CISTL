# 🙏 Church in St. Louis Web Application
A modern, responsive web application serving the church in St. Louis.
Built with Next.js and Golang (Go), this application aims to provide a scalable and reusable architecture for all future needs.

---

## 📚 Table of Contents
- [🛠️ Technology Stack](#️-technology-stack)
- [📦 Project Structure](#-project-structure)
- [🚀 Getting Started](#-getting-started)
- [💡 Deployment](#-deployment)

---

## 🛠️ Technology Stack
- **Frontend**: Next.js with TypeScript
- **Backend**: Go
- **UI Components**: Mantine
- **Containerization**: Docker and Docker Compose

And yes, I recognize we're building a rocket ship to go to the grocery store 🙃

---

## 📦 Project Structure
```
CISTL/
├── .github/                # Github Actions deployment workflows
├── backend/                # Go backend code
├── frontend/               # Next.js frontend code
├── docker-compose.prod.yml # Orchestration for Hetzner VPS
├── docker-compose.yml      # Configuration for local development
├── Dockerfile              # Docker build instructions
└── README.md               # This documentation
```

---

## 🚀 Getting Started
### Prerequisites
Ensure the following are installed on your system:
- Docker

### Local Development with Docker Compose
- `docker compose up --build` or `docker compose up` to start the application.
- `docker compose down` to remove the application.

Visit http://localhost:3000 to see your application in action!

---

## 💡 Deployment
This project embraces modern DevOps practices with GitHub Actions automatically deploying to a Hetzner VPS whenever changes are merged into the main branch.
We follow trunk-based development methodology for streamlined collaboration and continuous delivery.