# Docker - Webpack Containers

This repro contains examples on how to setup Docker containers for webpack. This repro comes with both plain webpack and laravel-elixir (6.0+).


## Running tests

Change the var `NPM_COMMAND` to `test` in your docker-compose.yml.

### Locally

`docker exec -i <containername> npm test`

### On CI:

`docker-compose -f docker-compose.yml -f docker-compose-test.yml up`


## Contributing

Want to contribute? Awesome. Just send a pull request.


## License

Docker-Webpack-Containers is released under the [MIT License](http://www.opensource.org/licenses/MIT).
