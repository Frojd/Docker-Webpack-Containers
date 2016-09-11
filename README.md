# Docker - Webpack Containers

This repro contains examples on how to setup Docker containers for webpack. This repro comes with both [plain webpack](/webpack) and [laravel-elixir (6.0+)](/elixir).


## Requirements

Docker 1.10+


## Running tests

Change the var `NPM_COMMAND` to `test` in your docker-compose.yml (you can find an example in `docker-compose-test.yml`).

### Locally

`docker exec -i <containername> npm test`

### Running on CI

`docker-compose -f docker-compose.yml -f docker-compose-test.yml up`


## Contributing

Want to contribute? Awesome. Just send a pull request.


## License

Docker-Webpack-Containers is released under the [MIT License](http://www.opensource.org/licenses/MIT).
