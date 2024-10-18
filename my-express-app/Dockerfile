# Use node.js
FROM node:18
# Set the working directory inside the container
WORKDIR /user/src/app #
# Copy the package.json and package-lock.json to the working directory
COPY package*.json ./
# Install the project dependancies 
RUN npm install
# Copy the rest of the application to the working directory
COPY . .
# Expose the port we want the application to run on
EXPOSE 80
# run the command node app.js to run the app
CMD ["node", "app.js"]
