# World Clock App

The project is developed with [create-react-app](https://github.com/facebook/create-react-app) that uses [moment-timezone](https://momentjs.com/timezone/) to get the time in principal cities of the world.
The main objective of the project is create a dockered app to presents an academic work.

<br />

# Dockered App

There is a starter image version is uploaded at dockerhub.

### `docker pull zoruka/world-clock:0.1.0`

It will pull the docker image from [dockerhub](https://hub.docker.com/r/zoruka/world-clock/tags).

### `docker run -itd --name world-clock -p 80:3000 -d zoruka/world-clock:0.1.0`

It will start the docker image inside 80 port service.<br />
After a few seconds you can access by opening [`http://localhost`](http://localhost) in any web browser.

<br />

# React App

Inside the `app` folder you can run the common create-react-app commands to start a development server.

### `npm install`

Run it before start the development server to install the node dependencies.

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
