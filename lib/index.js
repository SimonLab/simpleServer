var Hapi = require('hapi');
var Inert = require('inert');
var Vision = require('vision');
var Handlebars = require('handlebars');

var Assets = require('./assets.js');
var Home = require('./home.js');
var Public = require('./public.js');
var Dashboard = require('./dashboard.js');

exports.init = function (port, next) {

  var server = new Hapi.Server();
  server.connection({port: port});
  server.register([Vision, Inert, Assets, Home, Public, Dashboard], function (err) {
    if (err) {
      return next(err);
    }

    server.views({
      engines: {
        html:Handlebars
      },
      relativeTo: __dirname + '/../public',
      path:'.',
      // layout: 'default',
      // layoutPath: 'layout',
      // helpersPath:'helpers',
      // partialsPath:'partials'
    });

    server.start(function (err) {

      return next(err, server);
    });
  });
};
