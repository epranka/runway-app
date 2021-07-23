# Prepare node

FROM node:lts as node

WORKDIR /app

COPY package.json /app
COPY yarn.lock /app
RUN yarn install
COPY . /app

CMD ./node_modules/pm2/bin/pm2-runtime ./main.js

EXPOSE 80