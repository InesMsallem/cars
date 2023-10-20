# Stage 1: Build the React Application
FROM node:14 
# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the React application for production
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Define the command to start your app
CMD [ "npm", "start" ]
