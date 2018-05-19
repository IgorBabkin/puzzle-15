FROM kkarczmarczyk/node-yarn

ENV NPM_CONFIG_LOGLEVEL warn

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json ./src

RUN yarn install

CMD yarn start
