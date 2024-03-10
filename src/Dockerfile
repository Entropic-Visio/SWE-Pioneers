FROM node:latest

WORKDIR /app

COPY . .

RUN npm install && npm install -g supervisor

ENV PORT=5000

EXPOSE 5000 

CMD [ "npm", "start" ]