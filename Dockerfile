FROM node:latest

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json ./src
COPY yarn.lock ./src

RUN yarn install

CMD yarn start
