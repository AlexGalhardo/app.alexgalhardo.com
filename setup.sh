#!/bin/bash
bun install
cp .env.example .env
bun run format
docker-compose down
docker-compose up -d
bun prisma format
bun prisma generate
bun prisma migrate dev
bun prisma db push
bun prisma db seed
