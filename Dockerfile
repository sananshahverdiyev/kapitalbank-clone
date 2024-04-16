# Use an appropriate Node.js base image
FROM node:14

# Create app directory
RUN mkdir /app
WORKDIR /app

# Install app dependencies by copying
# package.json and package-lock.json
COPY package*.json ./

# If you have a .npmrc file for private modules, copy it as well
# COPY .npmrc ./

RUN npm install

# Bundle app source
COPY . .

# Your app binds to port 3000, so expose this port
EXPOSE 3000

# Define the command to run your app
CMD ["npm", "start"]
