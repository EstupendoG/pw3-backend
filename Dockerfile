FROM node:alpine AS build

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma

RUN npm ci

COPY . .

RUN npx prisma generate
RUN npm run build


FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev

COPY --from=build /app/out ./out

COPY --from=build /app/src/generated ./src/generated
COPY --from=build /app/prisma ./prisma

EXPOSE 3000

CMD ["node", "out/server.js"]