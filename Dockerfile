# syntax = docker/dockerfile:1

ARG NODE_VERSION=22.13.0

FROM node:${NODE_VERSION}-slim as base

ARG PORT=3000

WORKDIR /app

# Build
FROM base as build

COPY --link ./app/package.json ./app/package-lock.json .
RUN npm install

COPY --link ./app/ .

RUN npm run build

# Run
FROM base

ENV PORT=$PORT
ENV NODE_ENV=production

COPY --from=build /app/.output /app/.output
# Optional, only needed if you rely on unbundled dependencies
# COPY --from=build /app/node_modules /app/node_modules

CMD [ "node", ".output/server/index.mjs" ]