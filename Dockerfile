# 1 - Build
FROM node:18-alpine AS build

WORKDIR /app

RUN mkdir src/

COPY src/app.js src/

COPY package-lock.json .

COPY package.json .

RUN npm install

# 2 - Execução
FROM node:18-alpine

WORKDIR /app

COPY --from=build app/src/app.js src/

COPY --from=build app/package-lock.json .

COPY --from=build app/package.json .

RUN npm install

CMD ["npm","start"]