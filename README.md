<img src="https://d1qb2nb5cznatu.cloudfront.net/startups/i/834564-b37cb0b04f07235c820a59111fe22961-medium_jpg.jpg" width="127px" height="127px" align="left"/>

# casafari-challenge

> Node.js Developer challenge solution<br>
> A simple yet powerful CRUD app using Hapi.js + Mongo + React Hooks + Bootstrap + Docker!

<p align="center">
  <img src="https://i.imgur.com/dLyj2jZ.png" width=780>
</p>

## What does it do?

It is a Contact list app, where you can create, read, edit and delete a contact using the browser – or just the API.

## How it works?

Despite being a simple CRUD app, I opted for two core decisions:

### Dockerize the entire application

The main reason why I'm using Docker is to have an easier setup. Installing Mongo might be an error-prone and boring task, and we can ensure that everyone is using the same Mongo and Node version. Also, using Docker will provide an easy way to run the server application on a container that will communicate with the database on another container.<br>
That is a simpler setup on a new environment.

### Use a single repo

Yeah, we could build the entire application on a single project, but I chose to build two: `contract_server` and `contract_front`. The first application is responsible for providing an API that the second application uses to render a web app. We could have `contract_server` using Hapi to provide static content, but it would result in extra coupling between the front and the back-end - which can become something critical at scale.

These two decisions are also handy when deploying: we could write a `Dockerfile` focused to deploy the `contract_server` project on something like AWS Fargate, and then deploy the `contract_front` on a static content provider, such as AWS S3.

### Other decisions

On the back-end, I picked mongoose instead of just using plain mongodb because, with mongoose, we can write better code for models. 

On the front-end, since one of the requirements of the challenge is to use bootstrap, I used reactstrap, because it allowed me to write a simpler and more declarative JSX code.

## How to run?

First, you need to have Docker and Docker Compose on your machine. If you don't, check [this page](https://docs.docker.com/install/) to install Docker and [this one](https://docs.docker.com/compose/install/) to install Docker Compose.

Then, run the following command to start the MongoDB container:

```
> docker-compose up database
```

After Mongo is initialized (it takes a few seconds), you need to run the back-end project:

```
> cd contact_server
> npm i
> docker-compose up contact_server
```

Then, the API will be running at [`http://localhost:3000`](http://localhost:3000). You can check if everything is fine using the API [`GET http://localhost:3000/status`](http://localhost:3000/status); if you see `"ok"`, then the server is running.

Now, to run the front-end start the following service:

```
> cd contact_front
> npm i
> docker-compose up contact_front
```

Finally, just head to [`http://localhost:8080`](http://localhost:8080) to see the application running!

### Tests & Linting

You can run the tests using:

```
docker-compose run --rm contact_tests
```

And the lint using:

```
docker-compose run --rm contact_front_lint
docker-compose run --rm contact_lint
```

### Restart database

If you want to restart your database, you can do it by running:

```
rm -rf database_data/
```

Then, restart the `database` service.
