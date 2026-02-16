#!/bin/bash
set -e

# ============================================
# Deploy script for NatanRivera.com
# VPS: Hostinger — 62.72.0.52
# ============================================

VPS_HOST="62.72.0.52"
VPS_USER="root"
APP_DIR="/var/www/natan-rivera-webpage"
IMAGE_NAME="natan-web"

echo "=========================================="
echo "  Deploying natanrivera.com"
echo "  Target: ${VPS_USER}@${VPS_HOST}"
echo "=========================================="

# Step 1: Build Docker image locally
echo ""
echo "[1/4] Building Docker image locally..."
docker build -t ${IMAGE_NAME}:latest .

# Step 2: Save and transfer image to VPS
echo ""
echo "[2/4] Transferring image to VPS..."
docker save ${IMAGE_NAME}:latest | gzip | ssh ${VPS_USER}@${VPS_HOST} "gunzip | docker load"

# Step 3: Transfer docker-compose.yml
echo ""
echo "[3/4] Syncing docker-compose.yml..."
ssh ${VPS_USER}@${VPS_HOST} "mkdir -p ${APP_DIR}"
scp docker-compose.yml ${VPS_USER}@${VPS_HOST}:${APP_DIR}/docker-compose.yml

# Step 4: Restart on VPS
echo ""
echo "[4/4] Restarting container on VPS..."
ssh ${VPS_USER}@${VPS_HOST} "cd ${APP_DIR} && docker compose down && docker compose up -d && docker compose logs --tail 20"

echo ""
echo "=========================================="
echo "  Deployed! Live at http://${VPS_HOST}:3005"
echo "=========================================="
