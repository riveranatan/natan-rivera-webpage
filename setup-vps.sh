#!/bin/bash
set -e

# ============================================
# One-time VPS setup script
# Run this ONCE on your Hostinger VPS to
# install Docker and prepare the app directory.
#
# Usage: ssh root@62.72.0.52 'bash -s' < setup-vps.sh
# ============================================

echo "Installing Docker..."
curl -fsSL https://get.docker.com | sh

echo "Starting Docker..."
systemctl enable docker
systemctl start docker

echo "Creating app directory..."
mkdir -p /opt/natan-web

echo ""
echo "=========================================="
echo "  VPS is ready!"
echo "  Now run: ./deploy.sh"
echo "=========================================="
