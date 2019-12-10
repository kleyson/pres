FROM node:10

WORKDIR /usr/src/app

COPY . .

RUN npm install pm2 -g && yarn install --pure-lockfile --production

EXPOSE 80

CMD [ "pm2-runtime", "ecosystem.config.json" ]