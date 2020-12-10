# CampusPlus

## Table Of Contents
- [About](#about)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
  - Deploy [via local network](#deploying-local-database--api--docker-containers-local) or [w/ AWS Tools](#deploying-rds-cloud-database--api--docker-containers-ec2-linux-instance)
- [Configuration](#configuration)

## About

## Prerequisites
- `Docker` v^19.03.13 & `Docker-compose` v^1.27.4
- `Node.js` v^14.15.0
- `npm` v^6.14.9 & `yarn` v^1.22.5

## Installation

### Deploying `local database` + `API` ➡ docker-containers (`local`)
1. Deploy Frontend & Backend (Using Docker) ➡ `$ docker-compose up`
- or Backend ONLY ➡ `$ cd FrontAndBackEnd/backend; yarn run dev`
- or Frontend ONLY ➡ `$ cd FrontAndBackEnd/frontend; yarn start`

### Deploying `RDS cloud database` + `API` ➡ docker containers (`EC2 Linux Instance`)
1. AWS Management Console
2. Create RDS MySQL Database
3. Create EC2 Linux Instance
4. Install `Node.js` + `Docker`, & clone repository in EC2 Instance
6. Within the `CampusPlus/backend` folder, create `.env` file & enter cloud database credentials :

> MYSQL_CLOUD_USER=<br>
  MYSQL_CLOUD_PASS=<br>
  MYSQL_CLOUD_HOST=

7. Deploy Frontend & Backend (Using Docker) ➡ `$ docker-compose up`
- or Backend ONLY ➡ `$ cd FrontAndBackEnd/backend; yarn run dev`
- or Frontend ONLY ➡ `$ cd FrontAndBackEnd/frontend; yarn start`

## Configuration
