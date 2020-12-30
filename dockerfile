# Dockerfile

# base image
FROM node:alpine

# create & set working directory
RUN mkdir -p /mycvtest
WORKDIR /mycvtest

# copy source files
COPY . /mycvtest

ENV NODE_ENV production

# install dependencies
RUN npm install

# start app
RUN npm run build
EXPOSE 3000
EXPOSE 3443
EXPOSE 80
EXPOSE 443
CMD npm run startprod