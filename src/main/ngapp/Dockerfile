### STAGE 1: BUILD ANGULAR APP ###
FROM node:11 as builder

COPY . ./bank

WORKDIR "/bank"

RUN npm install -g @angular/cli
RUN npm install node-sass
RUN ng build --prod

### STAGE 2: RUN WEB APP ON NGINX SERVER ###
FROM nginx:1.15.9

RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /bank/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]