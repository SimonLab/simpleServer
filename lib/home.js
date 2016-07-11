'use strict'

/**
* Create a simple route which return just some text
*/

exports.register = function (server, options, next) {

  server.route([
  {
    method: 'GET',
    path: '/',
    config: {
      description: 'return the home page',
      handler: function (request, reply) {

          return reply('Welcome on simpleServer');
      }
    }
  }

  ]);

  return next();
};

exports.register.attributes = {
  name: 'Home'
};
