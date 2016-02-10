var Hapi = require('hapi');
var Inert = require('inert');

var Home = require('./home.js');
var Dashboard = require('./dashboard.js');

exports.init = function (port, next) {

  var server = new Hapi.Server();
  server.connection({port: port});
  server.register([Inert, Home, Dashboard], function (err) {
    if (err) {
      return next(err);
    }


    server.start(function (err) {

      return next(err, server);
    });
  });
};
