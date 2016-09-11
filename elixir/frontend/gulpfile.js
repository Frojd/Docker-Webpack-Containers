'use strict'

// Disable annoying terminal notice
process.env.DISABLE_NOTIFIER = true;

// Always run in production
// elixir.config.production = true;
//process.env.NODE_ENV = 'production';

var elixir = require('laravel-elixir');
var elixirConfig = require('./elixir.json');

require('laravel-elixir-webpack-official');

Elixir.webpack.mergeConfig({
    watchOptions: {
        poll: true
    }
});

elixir(function(mix) {
    var publicPath = elixirConfig.publicPath;

    // Add trailing slash
    publicPath += publicPath.endsWith("/") ? "" : "/";

    mix.sass("./sass/index.scss", publicPath+"css/index.css")
        .copy('fonts', publicPath+'css/fonts');

    mix.webpack("./js/index.js", publicPath+"js/index.js");

    mix.copy('img', publicPath+'img');
});
