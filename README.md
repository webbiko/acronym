## Overview

This project is part of a series of microservices that are in my repository in order to guide other developer regarding micro-services architecture in nodejs and on its group of services it will be included:

1. **development-tool** => This project supports the developer to setup easily the (mongodb, mysql) databases which is used on this solution.
2. **token** => It is a JWT token service which is used to control access to the main api acronyms.
3. **user-management** => In order to use the apis that are not public it is needed to have a user and this service provides basic api routes which allows us to create the credentials.
4. **acronym** => This is the core of this solution and provide acronyms.

---

## Requirements

*The project was developed on ubuntu 18.04 and all the instructions in this guide are based on this linux distribution.*
Before proceeding it is needed that you have installed on your machine the following tools:

1. nodejs => apt-get install nodejs
2. npm => apt-get install npm
3. [Docker](https://docs.docker.com/engine/install/ubuntu/)
4. [Docker compose](https://docs.docker.com/compose/install/)

**PS:** It may be needed that you have to install some npm packages that are not installed as part of the project but globally:

1. [enc-cmd](https://www.npmjs.com/package/env-cmd)
2. [mongoose-model-cli](https://www.npmjs.com/package/mongoose-model-cli)

---

## Env variables

In order to execute this project smoothly it is necessary to create a a file called **.env-cmdrc** with the following structure:

```json
{
  "development": {
    "NODE_ENV": "development",
    "SERVICE_PORT": 3000,
    "DATABASE_URI": "mongodb://mb:mb@your_docker_ip_address:27017/acronym",
    "TOKEN_SERVICE_URL": "localhost",
    "TOKEN_SERVICE_PORT": 3002
  },
  "stage": {
    "NODE_ENV": "stage",
    "SERVICE_PORT": 3000,
    "TOKEN_SERVICE_URL": "localhost",
    "TOKEN_SERVICE_PORT": 3002
  },
  "test": {
    "NODE_ENV": "test",
    "SERVICE_PORT": 3000,
    "TOKEN_SERVICE_URL": "localhost",
    "TOKEN_SERVICE_PORT": 3002,
    "DATABASE_URI": "mongodb://mb:mb@your_docker_ip_address:27017/acronym"
  },
  "production": {
    "NODE_ENV": "production",
    "SERVICE_PORT": 3000,
    "TOKEN_SERVICE_URL": "localhost",
    "TOKEN_SERVICE_PORT": 3002,
    "NEWRELIC_TOKEN": "yourNewRelicToken",
    "NEW_RELIC_LOG_LEVEL": "error"
  }
}
```
---

## Running the project in development mode

In order to run the project in development mode it is required to execute the steps below:

1. Access the project development-tool/setup;
2. Grant execution permission to setup.sh: **chmod +x setup.sh**;
3. Execute the script: ./setup.sh. (This will build all required docker images and launch them);
4. docker ps and you should see all docker images up and running.

After the steps above it is necessary to check which ip address which database is running and to do check that out follow the steps belo:

### Aconym (MONGODB)
1. As result of command **docker ps** copy the CONTAINER_ID;
2. Execute docker inspect <CONTAINER_ID> and you should see in the end of the output just look for the tah "Networks => IPAddress" then copy it.
3. Access the project acronyms;
4. Execute npm install;
5. Edit the file .env-cmdrc and past the IP address on DATABASE_URI env variable;
6. In the root folder of project user-management execute on terminal:
	- npm run seed;
	- npm run dev

After the steps about the service should be up and running on port 3000.
---

## Running tests

In order to run the tests it is required to execute the steps below:

1. Access the project development-tool/setup;
2. Grant execution permission to setup.sh: **chmod +x setup.sh**;
3. Execute the script: ./setup.sh. (This will build all required docker images and launch them);
4. docker ps and you should see all docker images up and running.

After the steps above it is necessary to check which ip address which database is running and to do check that out follow the steps belo:

### Aconym (MONGODB)

1. As result of command **docker ps** copy the CONTAINER_ID;
2. Execute docker inspect <CONTAINER_ID> and you should see in the end of the output just look for the tah "Networks => IPAddress" then copy it.
3. Access the project acronym;
4. Execute npm install;
5. Edit the file .env-cmdrc and past the IP address on DATABASE_URI env variable on test environment;
6. In the root folder of project user-management execute on terminal:
	- npm run test
---

## Production System Design suggestion

In order to deploy on production a good way to go it would be preserving the micro services behind a reverse proxy and Nginx is a good candidate since it distribute the traffic in a simple way and provide all the support for easy loading balance in case we need.
Below we can see the picture:

https://drive.google.com/file/d/11IMGAWzKxtOQ-iAC1m5oncb-PkJ750Nf/view?usp=sharing

The communication among the services are all in HTTP and are closed for the outside and the only way to communicate with the servier is through nginx.

---

## Monitoring tool

Monitoring the health, downtime and how your servier is reacting in production is really important so NewRelic was chosen as monitoring tool and it is integrated in the solution.
It only monitors production environment and it was tested pointing to development environment.

Check it out: https://login.newrelic.com/login?
Username: someemail@gmail.com
Password: *******

---

## Known issues

Currently there is a small bug that was not possible to fix so far.

**Scenario**: Calling app /api/v0/acronyms/random/:count i wanna receive random acronyms that are not adjacent to each data.
**Expected Result**: Acronyms are sent back to the caller and no of them are adjacents to each other.
**Actuial Result**: Since the strategy chosen for returning random data from DB it was random items with skip option it was causing the data to sometimes be adjacent and I still need to fix it.

**Side Effect**: Some tests are failing because of this bug.

---
