# 1 - Build
FROM node:18-alpine AS build

RUN apk update

WORKDIR /app

RUN mkdir src/

COPY src/app.js src/

COPY package-lock.json .

COPY package.json .

RUN npm install

# 2 - Execução
FROM node:18-alpine

RUN clear

RUN echo '\nhttps://github.com/devJunr/CotacaoAtualBot - Versão 1.2.0 (SemVer)\n\n'

RUN addgroup -S telegram-bot && adduser -S telegram-bot-user -G telegram-bot

RUN apk update

WORKDIR /app

COPY --from=build app/src/app.js src/

COPY --from=build app/package-lock.json .

COPY --from=build app/package.json .

RUN npm install

USER telegram-bot-user

CMD ["npm","start"]