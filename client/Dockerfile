# Use an official Node.js runtime as a parent image
FROM node:latest

# Set the working directory in the container
WORKDIR /app

# Bundle app source inside Docker image by copying it
# In development, you would mount your source code as a volume instead
COPY . .

# Set the fetch retry maxtimeout to 2 minutes
RUN npm config set fetch-retry-maxtimeout 120000
# Install the application's dependencies using the package.json and package-lock.json
RUN npm install

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Run the app in development mode
CMD ["npm", "start"]
