# Bank-account-kata-full-stack

This project is a kata made with TDD method. The program simulates a bank account.

## Getting Started

### Prerequisites

You must have Docker installed on your computer. Otherwise, you can download Docker at this [address](https://www.docker.com)

### Running

Download or clone this repository
```
git clone https://github.com/MrArkasia/Bank-account-kata-full-stack.git
```
Go to project repository
```
cd Bank-account-kata-full-stack/
```
Build an image from a Dockerfile
```
docker build -t bankapp .
```
Create a container based on "bankapp" image
```
docker run -p 8080:80 bankapp
```
You can try the application at this URL http://localhost:8080 

## Rules

You can deposit, withdrawal and view account history.

## Controles

 bank account simulator performs several checks during money transfers

## Authors

* **Amaury DOUDEMENT** - *Initial work* - [MrArkasia](https://github.com/MrArkasia)

## License

This project is licensed under the MIT License
