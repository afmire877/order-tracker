# Use Node.js base image
FROM node:20

# Set working directory
WORKDIR /app/consumer

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

RUN npm install --save-dev ts-node-dev
# Copy app files
COPY . .

# Expose the port your app uses (optional)
EXPOSE 3000

# Define environment variables for Kafka connection (optional)
ENV KAFKA_BROKER=localhost:9092

# Start the app
CMD ["npm", "run", "dev"]
