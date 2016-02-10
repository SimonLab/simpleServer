exports.register = function(server, options, next) {

  server.route([{
      method: 'GET',
      path: '/dashboard/{dashtype}',
      config: {
        description: 'return the data receive',
        handler: function(request, reply) {
          var requestAPI = require('request');

          var dashtype = request.params.dashtype;
          console.log('/dashboard/{dashtype}', dashtype);

          // request('http://www.modulus.io', function(error, response, body) {
          //   if (!error && response.statusCode == 200) {
          //     console.log(body); // Show the HTML for the Modulus homepage.
          //   }
          // });
          var soundObj = {};
          if (dashtype === "twentyfourhour") {
            soundObj = {
              now: 30,
              twentyfourhour: 70,
              weekly: 90,
              monthly: 90,
              twentyhourchart: [{time: "5.00", soundReading: 50}]
            }

          }
          return reply.view('dashboard', soundObj);

        }
      }
    }

  ]);

  return next();
};

exports.register.attributes = {
  name: 'Dashboard'
};
