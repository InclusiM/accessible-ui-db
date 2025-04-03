# Dockerfile

# ====== Base Image ======
FROM node:16-alpine

WORKDIR /app

# Copy package files and install dependencies
COPY client/package*.json ./client/
COPY server/package*.json ./server/


RUN cd client && npm install
RUN cd server && npm install

# Copy source code
COPY client ./client
COPY server ./server

# Expose necessary ports
EXPOSE 8080 5000

# Start both client and server in parallel
CMD ["sh", "-c", "npm --prefix server start & npm --prefix client run dev"]
