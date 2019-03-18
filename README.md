# Bank-account-kata-full-stack

This project is a kata made with TDD method. The program simulates a bank accounts.

## Getting Started

### Prerequisites

You must have Docker installed on your computer. Otherwise, you can download Docker at this [address](https://www.docker.com)

### Running

Download or clone this repository
```
git clone https://github.com/MrArkasia/Bank-account-kata-full-stack.git
```
Go to project directory
```
cd Bank-account-kata-full-stack/
```
Build the images from the docker files
```
docker build -t back .
docker build -t front ./src/main/ngapp
```
Create the containers
```
docker run -d -p 8090:8090 back
docker run -d -p 8080:80 front
```
You can try the application at this URL http://localhost:8080

## Rules

You can deposit, withdrawal and view account history.

## Controls

 bank account simulator performs several checks during money transfers

## Authors

* **Amaury DOUDEMENT** - *Initial work* - [MrArkasia](https://github.com/MrArkasia)

## License

This project is licensed under the MIT License
