# nodejs-docker-ci-cd

##overview

This repository demonstrates a basic __Node.js application__ configured with __Docker__ and a __CI/CD pipeline__ using __GitHub Actions__. It serves as an example of how to set up continuous integration and deployment for Node.js applications in a containerized environment.

##features
-Node.js Application: A simple Node.js app to demonstrate the setup.
-Docker Support: Dockerfile for containerizing the application.
-CI/CD Pipeline: GitHub Actions workflows for automated building, testing, and deployment.

##getting started
###prerequisites
-_Node.js_
-_Docker, Docker Hub account_
-_GitHub account_

###Installation
[ ]Clone the repository:
git clone https://github.com/oryaaharoni/nodejs-docker-ci-cd.git .
cd nodejs-docker-ci-cd
[ ]Install dependencies:
npm install
[ ]Build the Docker image:
docker build -t nodejs-docker-ci-cd .
[ ]Run the Docker container:
docker run -p 8080:8080 nodejs-docker-ci-cd

###GitHub Actions
The repository includes GitHub Actions workflows located in the `.github/workflows` directory. These workflows automate the following tasks:
**-Build:** Build the Node.js application and Docker image.
**-Test:** Run the tests to ensure the application works as expected.
**-Deploy:** Deploy the Docker container to a specified environment.

###CI/CD Pipeline
The ci.yaml file defines a workflow that runs on push events to the main branch and pull request events on main. 
It performs the following steps:
-Checks out the code from the repository.
-Sets up the desired Node.js version.
-Installs dependencies for the Node.js application.
-Runs tests for the application .
-Builds a Docker image for the application (only if tests pass).
-Pushes the Docker image to Docker Hub.

Before pushing your code to the main branch:
-Create a public repository on Docker Hub.
-Configure the DOCKER_HUB_USERNAME and DOCKER_HUB_PASSWORD secrets in your GitHub repository settings. This secrets is required to push the Docker image to your Docker Hub account.

##Project Structure
**- `.github/workflows`:** CI/CD pipeline configurations.
**-`Dockerfile`:** Instructions for building a Docker image for the application.
**-`index.js`:** The main application file for the Node.js server.
**-`test`:** Directory containing test cases.
**-`package.json`:** Dependencies and scripts.
