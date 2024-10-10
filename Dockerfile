# Frontend Dockerfile
FROM node:16

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json /app/
RUN npm install

# Copy the project code
COPY . /app/

# Build the React app
RUN npm run build

# Expose port 3000 and start the app
EXPOSE 3000
CMD ["npm", "start"]