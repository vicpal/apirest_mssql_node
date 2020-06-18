FROM node:12

WORKDIR /Docker/VIP/Nivel

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]