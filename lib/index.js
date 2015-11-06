var Hapi = require('hapi');
var Home = require('./home.js');
var Data = require('./api.js');

exports.init = function (port, next) {

  var server = new Hapi.Server();
  server.connection({port: port});

  server.register([Home, Data], function (err) {
    if (err) {
      return next(err);
    }

    server.start(function (err) {

      return next(err, server);
    });
  });
};
