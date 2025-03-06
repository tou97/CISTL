# backend/Dockerfile
FROM golang:1.24-alpine
WORKDIR /app
# Build argument to determine environment
ARG GO_ENV=production
ENV GO_ENV=${GO_ENV}
# Install Air for development only (using the correct package path)
RUN if [ "$GO_ENV" != "production" ]; then \
        go install github.com/air-verse/air@latest; \
    fi
# Copy go mod file
COPY go.mod ./
# Copy source code
COPY . .
# Build the application in production mode
RUN if [ "$GO_ENV" = "production" ]; then \
        CGO_ENABLED=0 GOOS=linux go build -ldflags="-w -s" -o api-server .; \
    fi
# Set the appropriate command based on environment
CMD if [ "$GO_ENV" = "production" ]; then \
        ./api-server; \
    else \
        air -c .air.toml; \
    fi
EXPOSE 8080