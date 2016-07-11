'use strict';

/**
* Create a route which define multiple cookies
*/

exports.register = function (server, options, next) {

  server.route([
  {
    method: 'GET',
    path: '/cookies',
    config: {
      description: 'define two cookies',
      handler: function (request, reply) {

          return reply('The cookies are defined! Check your ressources on your browser')
          .state('cookie1', 'cookie11')
          .state('cookie2', 'cookie22');
      }
    }
  }

  ]);

  return next();
};

exports.register.attributes = {
  name: 'Cookies'
};
