FROM node:14.15.4-alpine

ARG PORT
ARG SALT_ROUNDS
ARG AUTH_STRATEGY=local
ARG SECRET_KEY

ENV PORT=$PORT
ENV SALT_ROUNDS=$SALT_ROUNDS
ENV SECRET_KEY=$SECRET_KEY

WORKDIR /app

ADD package.json /app/package.json

RUN npm ci

ADD  . /app

RUN npm run build

EXPOSE $ARG_PORT

CMD [ "npm", "start" ]