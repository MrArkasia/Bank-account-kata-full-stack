#docker build -t myapp .
#docker run -p 8080:80 myapp

### STAGE 1: NODE ###
FROM node:11 as builder

COPY . ./bank-account

WORKDIR "/bank-account/src/main/ngapp"

RUN npm install -g @angular/cli
RUN npm install node-sass
RUN ng build --prod

### STAGE 3 MAVEN ###
FROM maven:3.6.0

COPY . .

WORKDIR "/"

RUN mvn package

CMD java -jar target/bank-0.0.1-SNAPSHOT.jar

### STAGE 2: NGINX ###
FROM nginx:1.15.9

RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /bank-account/src/main/ngapp/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
