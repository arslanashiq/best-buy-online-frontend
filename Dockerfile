# Stage 1: Build the Vite app
FROM node:18 AS build

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the source code to the working directory
COPY . .

# Build the app for production
RUN npm run build

# Expose port 3001 to the host
EXPOSE 3001

# Start the Vite preview server

CMD ["npm", "run", "preview", "--", "--port", "3001", "--host"]
