# Base stage
FROM node:23-alpine AS base
WORKDIR /app
COPY package.json package-lock.json* ./

# Development image
FROM base AS development
ENV NODE_ENV=development
RUN npm install && npm cache clean --force
COPY . .
CMD ["npm", "run", "dev"]
EXPOSE 3000

# Production build stage
FROM base AS builder
ENV NODE_ENV=production
RUN npm ci && npm cache clean --force
COPY . .
RUN npm run build

# Production image
FROM node:23-alpine AS production
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/node_modules ./node_modules
# Copy the entire app directory to handle different build output paths
COPY --from=builder /app ./
CMD ["node", "server.js"]
EXPOSE 3000

# Default to development for local builds
FROM ${NODE_ENV:-development}