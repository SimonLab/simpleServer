'use strict'

const Hapi = require('hapi');
const Home = require('./home');
const Cookies = require('./cookies')

exports.init = function (port, next) {

  const server = new Hapi.Server();
  server.connection({port: port});
  server.register([Home, Cookies], function (err) {
    if (err) {
      return next(err);
    }
    server.start(function (err) {

      return next(err, server);
    });
  });
};
