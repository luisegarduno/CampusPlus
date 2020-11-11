# FrontAndBackEnd

## First time installation

**1.)** Open `.env` file located within the `FrontAndBackEnd/backend`
folder & enter cloud db credentials :

> MYSQL_CLOUD_USER=<br>
  MYSQL_CLOUD_PASS=<br>
  MYSQL_CLOUD_HOST=


**2.)** Install node_modules (if not already installed)

- Backend  &rarr; `$ cd FrontAndBackEnd/backend; yarn`
- Frontend &rarr; `$ cd FrontAndBackEnd/frontend; yarn`

Or Both Simultaneously &rarr; `$ cd FrontAndBackEnd/backend; yarn; cd ../frontend; yarn`

------------------------ 

## How To Deploy
- Backend ONLY &rarr; `$ cd FrontAndBackEnd/backend; yarn run dev`
- Frontend ONLY &rarr; `$ cd FrontAndBackEnd/frontend; yarn start`
- Frontend & Backend *(Not working properly)* &rarr; `$ docker-compose build; docker-compose up`


