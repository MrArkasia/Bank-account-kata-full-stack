FROM maven:3.6.0

COPY . .

WORKDIR "/"

RUN mvn package
CMD java -jar target/bank-0.0.1-SNAPSHOT.jar