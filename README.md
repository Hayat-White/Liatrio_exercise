#Liatrio Node.js Application with Docker and GitHub Actions

This is a basic Node.js application that serves a message at an endpoint. The repository uses Docker for containerization and GitHub Actions to automate testing and deployment to Docker Hub.

## Features

- **Node.js Application**: A simple Express.js server that returns a JSON message with a name and timestamp.
- **Dockerized**: The application is packaged into a Docker container for easy deployment.
- **GitHub Actions**: Continuous integration pipeline that tests the application and pushes the Docker image to Docker Hub upon successful tests.

## Prerequisites

Before running this project, make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- A [Docker Hub](https://hub.docker.com/) account

## Setup and Running the Application

1. **Clone the repository**:
   ```bash
   git clone https://github.com/hayat-white/Liatrio_exercise.git
   cd Liatrio_exercise

2. **Install dependencies**:
   ```bash
   npm install

3. **Run the application locally**:
   ```bash
   node app.js

The application will be running on http://localhost:80.

## Docker

1. **Build the Docker image**:
   ```bash
   docker build -t your-dockerhub-username/my-image-name .


2. **Run the Docker container**:
   ```bash
   docker run -p 80:80 your-dockerhub-username/my-image-name

The application will now be accessible at http://localhost:80.

## Pushing the Docker Image to Docker Hub

1. **Log in to Docker Hub**:
   ```bash
   docker login -u your-dockerhub-username

2. **Tag and push the image**:
   ```bash
   docker tag your-dockerhub-username/my-image-name:latest
   docker push your-dockerhub-username/my-image-name:latest


## GitHub Actions CI/CD Pipeline

**This repository is configured with a CI/CD pipeline using GitHub Actions. The pipeline will:**
1. **Check out the code** from the repository.
2. **Build the Docker image** from the provided Dockerfile.
3. **Run the application** in a Docker container.
4. **Run tests** using the pre-configured test suite.
5. **Push the Docker image **to Docker Hub if the tests pass.

The pipeline is triggered automatically on pushes or pull requests to the main branch.
   
