FROM node:alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Executar os testes
# RUN npm test

EXPOSE 2020

# CMD npm start
CMD [ "npm", "start" ]

