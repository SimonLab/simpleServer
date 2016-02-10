exports.register = function (server, options, next) {

  server.route([
  {
    method: 'GET',
    path: '/dashboard',
    config: {
      description: 'return the data receive',
      handler: function (request, reply) {

          

          return reply('dashboard')
      }
    }
  }

  ]);

  return next();
};

exports.register.attributes = {
  name: 'Dashboard'
};
