# Use the official Node.js image from the Docker Hub
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application code into the container
COPY . .

# Expose port 3000 to access the app outside the container
EXPOSE 3000

# Start the application
CMD ["npm", "start"]

# Add this at the end of your Dockerfile
HEALTHCHECK --interval=30s --timeout=5s --retries=3 --start-period=30s \
CMD curl --fail http://localhost:3000/ || exit 1

