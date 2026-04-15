#!/bin/bash
set -e

echo "⬇️ Pulling latest changes..."
git pull origin main

echo "🔨 Building and starting containers..."
docker compose -f compose.prod.yml up -d --build

echo "🧹 Cleaning up old images..."
docker image prune -f

echo "✅ Deployment complete!"
