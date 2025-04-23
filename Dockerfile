FROM node:22-alpine

WORKDIR /app

COPY package.json ./

RUN npm install --frozen-lockfile

COPY . .

CMD [ "npm", "start" ]