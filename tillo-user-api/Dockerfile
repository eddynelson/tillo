FROM node:10.15.3-alpine

WORKDIR /app

COPY package.json /app

RUN npm i --production

COPY . /app

ENV PORT=4000
ENV NODE_ENV=production


EXPOSE 4000

CMD ["npm", "start"]
