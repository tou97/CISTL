FROM node:22-alpine

WORKDIR /app

COPY frontend/package.json frontend/package-lock.json ./

RUN npm ci

COPY frontend/ .

RUN npm run build

EXPOSE 3000

ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV

CMD ["sh", "-c", "if [ \"$NODE_ENV\" = \"development\" ]; then npm run dev; else npm run start; fi"]
