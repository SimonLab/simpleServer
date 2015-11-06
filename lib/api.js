exports.register = function (server, options, next) {

  server.route([
  {
    method: 'POST',
    path: '/data',
    config: {
      description: 'return the data receive',
      handler: function (request, reply) {
          return reply('Here is what I receive: ' + JSON.stringify(request.payload));
      }
    }
  }

  ]);

  return next();
};

exports.register.attributes = {
  name: 'Data'
};
