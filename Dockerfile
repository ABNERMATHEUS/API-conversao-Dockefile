

FROM node:14.11.0-alpine3.11
    WORKDIR /app
    COPY package*.json ./
    RUN npm install
    RUN apt-get update && apt-get install
    COPY . . 
    EXPOSE 8080
CMD ["node","index.js"]