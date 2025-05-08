FROM node:18-alpine

WORKDIR /app

# Copy package.json files for both server and client
COPY package.json ./
COPY client/package.json ./client/

# Install dependencies for server
RUN npm install

# Install dependencies for client
WORKDIR /app/client
RUN npm install
WORKDIR /app

# Copy the rest of the application
COPY . .

# Expose ports for both server and client
EXPOSE 3000 8080

# Start both applications
CMD ["sh", "-c", "npm run dev & cd client && npm run serve"]