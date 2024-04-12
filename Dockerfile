FROM node:21

WORKDIR /app

COPY package.json .

RUN npm install && npm install supervisor -g && npm install concurrently -g

COPY . .