FROM node:6-onbuild
MAINTAINER Frojd
LABEL version="v0.0.1"

ENV NPM_COMMAND start

COPY ./docker-entrypoint.sh /usr/src/app/
CMD ["/usr/src/app/docker-entrypoint.sh"]
