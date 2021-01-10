#!/usr/bin/env bash

set -e

docker-compose down -v
docker-compose up -d

source backend/node/.env

echo "Loading CampusPlus db..."
./backend/node/execution-tools/wait-until.sh "docker-compose exec -T -e MYSQL_PWD=${MYSQL_PASS} backend-db mysql -u ${MYSQL_USER} -D ${MYSQL_DB} -e 'select 1'" > /dev/null 2>&1
echo "Successfully loaded in CampusPlus db"

echo "Restarting Database & API containers"
docker restart campusplus_backend-db_1
docker restart campusplus_backend-api_1
docker-compose up