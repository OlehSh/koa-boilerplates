FROM node:14.15.4-alpine As development

WORKDIR /app

ADD package*.json /app/

RUN npm ci

ADD  . /app

RUN npm run build