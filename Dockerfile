FROM node:12.3.0

ARG NODE_ENV

WORKDIR /app

COPY package.json /app
COPY yarn.lock /app

RUN npm install -g nodemon jest coveralls

RUN npm install

COPY src /app/src

EXPOSE 8080

CMD ["yarn", "start-prod"]