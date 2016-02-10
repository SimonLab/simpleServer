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
            var twentyFourHourData = {
              labels: ["Data 1", "Data 2", "Data 3", "Data 4", "Data 5", "Data 6", "Data 7"],
              datasets: [{
                fillColor: "rgba(220,220,220,0)",
                strokeColor: "rgba(220,180,0,1)",
                pointColor: "rgba(220,180,0,1)",
                data: [20, 30, 80, 20, 40, 10, 60]
              }, {
                fillColor: "rgba(151,187,205,0)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                data: [60, 10, 40, 30, 80, 30, 20]
              }]

            };
          }
          soundObj = {
            now: 30,
            twentyfourhour: 70,
            weekly: 90,
            monthly: {geth:"loony"},
            // twentyfourhourchart: [{
            //   time: "5.00",
            //   soundReading: 50
            // }]
            // twentyfourhourchart: JSON.stringify(twentyFourHourData)
            "twentyfourhourchart": "90000"
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
