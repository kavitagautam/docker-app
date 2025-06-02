FROM node:22.15.0

WORKDIR /app

COPY . /app

RUN npm install -g @angular/cli

RUN npm install 

COPY . .

EXPOSE 4200

CMD ["npm", "run", "start"]