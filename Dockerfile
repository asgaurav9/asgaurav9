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

# Expose port 8080 to access the app outside the container
EXPOSE 8080

# Start the application
CMD ["npm", "start"]

