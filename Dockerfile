FROM node:lts-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build && npm prune --production

ENV PORT 8080
EXPOSE 8080

CMD ["node", "build"]