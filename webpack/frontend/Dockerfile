FROM node:6-onbuild
MAINTAINER Frojd

ENV NPM_COMMAND start

COPY ./docker-entrypoint.sh /usr/src/app/
CMD ["/usr/src/app/docker-entrypoint.sh"]
