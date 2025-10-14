FROM node:lts-alpine

# arm64 or amd64
ARG PLATFORM
ARG ARCH

RUN apk add --no-cache --upgrade bash

ENV BOS_DEFAULT_SAVED_NODE=embassy
RUN npm i -g balanceofsatoshis@18.2.9

WORKDIR /balanceofsatoshis/

ADD credentials.json /credentials.json
