# Base Go builder
FROM golang:1.24-alpine AS base
WORKDIR /app
COPY go.mod go.sum* ./
RUN go mod download

# Development image
FROM base AS development
ENV GO_ENV=development
RUN go install github.com/air-verse/air@latest
COPY . .
CMD ["air", "-c", ".air.toml"]
EXPOSE 8080

# Build production binary
FROM base AS builder
COPY . .
RUN CGO_ENABLED=0 GOOS=linux go build -ldflags="-w -s" -o api-server .

# Production image (using minimal alpine)
FROM alpine:latest AS production
WORKDIR /app
ENV GO_ENV=production
# Add basic security and runtime dependencies
RUN apk --no-cache add ca-certificates tzdata && \
    adduser -D appuser
# Copy only the built binary
COPY --from=builder /app/api-server .
# Use non-root user
USER appuser
CMD ["./api-server"]
EXPOSE 8080

# Default to production for backward compatibility
FROM ${GO_ENV:-production}