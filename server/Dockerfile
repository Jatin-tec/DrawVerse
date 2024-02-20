# Use the latest official Node.js runtime as a parent image
FROM node:latest

# Set the working directory in the container
WORKDIR /server

# Bundle app source
COPY . .

# Install dependencies
RUN npm install

# The app binds to port 3001, make it available outside the container
EXPOSE 3001

# Command to run the server
CMD ["npm", "run", "devStart"]
