# Use the official Node.js image from Docker Hub
FROM node:14

# Set the working directory inside the container
# Use the official Node.js image from the Docker Hub
FROM node:16

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and install the dependencies
COPY package.json ./
RUN npm install

# Copy the rest of the application files (including app.js) into the container
COPY . .

# Expose port 80 to allow external access to the app
EXPOSE 80

# Define the command to run your app
CMD ["node", "app.js"]