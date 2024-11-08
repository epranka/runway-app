FROM node:20.13.1-alpine AS node

WORKDIR /app

COPY package.json /app
COPY package-lock.json /app
COPY .npmrc /app
RUN npm ci

COPY server /app/server

ENV SERVER_PORT=80
ENV NODE_ENV=production

EXPOSE 80

CMD ["node", "server/main.cjs"]