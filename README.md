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
