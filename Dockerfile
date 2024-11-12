# Prepare node

FROM node:20.13.1-alpine AS node

WORKDIR /app

COPY package.json /app
COPY package-lock.json /app
COPY .npmrc /app
RUN npm ci

COPY . /app

ARG VITE_APP_API_HOST
ARG VITE_APP_GA_ID
ARG VITE_APP_ADSENSE_CLIENT 

ENV VITE_APP_API_HOST=$VITE_APP_API_HOST
ENV VITE_APP_GA_ID=$VITE_APP_GA_ID
ENV VITE_APP_ADSENSE_CLIENT=$VITE_APP_ADSENSE_CLIENT

RUN npm run build

FROM nginx:alpine

COPY --from=node /app/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY --from=node /app/nginx.conf /etc/nginx/conf.d

CMD ["nginx", "-g", "daemon off;"]

EXPOSE 80