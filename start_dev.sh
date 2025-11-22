#!/bin/bash

# Start DB
echo "Starting Database..."
docker compose -f ./db/docker-compose.yml up -d

# Start Backend
echo "Starting Backend..."
intellij-idea-community ./backend &
