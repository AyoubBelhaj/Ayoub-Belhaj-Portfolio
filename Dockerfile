FROM node:18-alpine

WORKDIR /portfolio/

COPY public/ /portfolio/public
COPY src/ /portfolio/src
COPY package.json /portfolio/

RUN npm install

CMD ["npm","start"]
