# Prepare node

FROM node:lts as node

WORKDIR /app

COPY package.json /app
COPY yarn.lock /app
RUN yarn install
COPY . /app

RUN yarn build

FROM nginx:alpine

COPY --from=node /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY --from=node /app/nginx.conf /etc/nginx/conf.d

CMD ["nginx", "-g", "daemon off;"]

EXPOSE 80