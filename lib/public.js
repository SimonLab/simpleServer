exports.register = function(server, options, next) {

  server.route([{
      method: 'GET',
      path: '/public/{param*}',
      config: {
        description: 'return the home page',
        handler: {
          directory: {
            path: 'public',
          }
        }
      }
    }

  ]);

  return next();
};

exports.register.attributes = {
  name: 'Public'
};
