FROM alpine:latest
MAINTAINER Ansgar Sonntag <jobs@ansgarsonntag.de> 

VOLUME ["/bingo"]
WORKDIR /bingo

RUN apk update && apk add --no-cache bash

EXPOSE 5000/tcp

