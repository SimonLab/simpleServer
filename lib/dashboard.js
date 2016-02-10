exports.register = function(server, options, next) {

  server.route([{
      method: 'GET',
      path: '/dashboard',
      config: {
        description: 'return the data receive',
        handler: function(request, reply) {
          var request = require('request');

          request('http://www.modulus.io', function(error, response, body) {
            if (!error && response.statusCode == 200) {
              console.log(body); // Show the HTML for the Modulus homepage.
            }
          });


          return reply.view('dashboard')
        }
      }
    }

  ]);

  return next();
};

exports.register.attributes = {
  name: 'Dashboard'
};
