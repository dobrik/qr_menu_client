# Установка зависимостей
FROM node:18-alpine AS deps
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Сборка проекта
FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ARG BACKEND_URL
ENV NEXT_PUBLIC_BACKEND_URL=$BACKEND_URL
RUN yarn build

# Финальный рантайм-контейнер
FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_PUBLIC_BACKEND_URL=$BACKEND_URL

# Копируем всё необходимое
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.js ./next.config.js
COPY --from=builder /app/yarn.lock ./yarn.lock

EXPOSE 3000
CMD ["yarn", "start"]
