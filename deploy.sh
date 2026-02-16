#!/bin/bash
set -e

# ============================================
# Deploy script for NatanRivera.com
# VPS: Hostinger — 62.72.0.52
#
# Syncs source to VPS and builds there.
# No image transfer — fast and lightweight.
# ============================================

VPS_HOST="62.72.0.52"
VPS_USER="root"
APP_DIR="/var/www/natan-rivera-webpage"

echo "=========================================="
echo "  Deploying natanrivera.com"
echo "  Target: ${VPS_USER}@${VPS_HOST}"
echo "=========================================="

# Step 1: Sync source code to VPS
echo ""
echo "[1/3] Syncing source code to VPS..."
rsync -avz --delete \
  --exclude node_modules \
  --exclude .next \
  --exclude .git \
  --exclude .claude \
  --exclude .DS_Store \
  --exclude .env* \
  ./ ${VPS_USER}@${VPS_HOST}:${APP_DIR}/

# Step 2: Build on VPS
echo ""
echo "[2/3] Building on VPS..."
ssh ${VPS_USER}@${VPS_HOST} "cd ${APP_DIR} && docker compose build"

# Step 3: Restart
echo ""
echo "[3/3] Restarting container..."
ssh ${VPS_USER}@${VPS_HOST} "cd ${APP_DIR} && docker compose down && docker compose up -d && docker compose logs --tail 20"

echo ""
echo "=========================================="
echo "  Deployed! Live at https://natanrivera.com"
echo "=========================================="
