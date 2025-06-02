FROM node:22.15.0

WORKDIR backend

COPY package*.json ./

RUN npm install

EXPOSE 3000

CMD ["node", "server.js"]

