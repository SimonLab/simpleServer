exports.register = function (server, options, next) {

  server.route([
  {
    method: 'GET',
    path: '/{param*}',
    config: {
      description: 'return the home page',
      handler: {
        directory:{
          path:'public',
          listing: true
        }
      }
    }
  }

  ]);

  return next();
};

exports.register.attributes = {
  name: 'Home'
};
