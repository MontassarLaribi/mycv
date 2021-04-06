# Dockerfile

# base image
FROM node:alpine

RUN apt-get update \
    && apt-get install certbot

# create & set working directory
RUN mkdir -p /mycv

WORKDIR /mycv

# copy source files
COPY . /mycv

ENV NODE_ENV production

# install dependencies
RUN npm install

# start app
RUN npm run build

EXPOSE 80
EXPOSE 443

CMD npm run startprod