var redisClient = require('redis-connection')();
exports.register = function (server, options, next) {

  server.route([
  {
    method: 'POST',
    path: '/click',
    config: {
      description: 'increment the click variable',
      handler: function (request, reply) {
          //get redis value click
          redisClient.get('click', function(err, res) {

            if(err) {
              console.log(err)
              return reply('500')
            }
            var click = 1;
            if(res) {
              console.log('increment');
              click = parseInt(res,10) + 1
            }
            redisClient.set('click', click);
          })
          return reply('200');
      }
    }
  },
  {
    method: 'GET',
    path: '/click',
    config: {
      description: 'return the click variable',
      handler: function (request, reply) {
        redisClient.get('click', function(err, res) {

          if(err) {
            console.log(err)
            return reply('500')
          }
          var click = 0;
          if (res) {
            click = res
          }
          return reply('Number of click: ' + click);
        })
      }
    }
  }

  ]);

  return next();
};

exports.register.attributes = {
  name: 'Click'
};
