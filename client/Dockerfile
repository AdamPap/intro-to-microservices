FROM node:alpine

ENV CI=true

WORKDIR /usr/src/app

COPY ./package.json ./

RUN npm install -registry=http://registry.npmjs.org/

COPY ./ ./

CMD ["npm", "start"]