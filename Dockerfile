# Build Stage
FROM node:16-alpine AS build

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source files
COPY . .

# Build the project
RUN npm run build

# Production Stage
FROM node:16-alpine

# Install PM2 globally
RUN npm install --global pm2

# Set working directory
WORKDIR /app

# Copy built files from the build stage
COPY --from=build /app /app

# Expose the port the app runs on
EXPOSE 3000

# Start the application with PM2
CMD ["pm2-runtime", "start", "ecosystem.json"]