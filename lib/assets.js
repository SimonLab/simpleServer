exports.register = function(server, options, next) {

  server.route([{
      method: 'GET',
      path: '/assets/{param*}',
      config: {
        description: 'return the assets',
        handler: {
          directory: {
            path: 'assets',
          }
        }
      }
    }

  ]);

  return next();
};

exports.register.attributes = {
  name: 'Assets'
};
