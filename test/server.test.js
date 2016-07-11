require('env2')('.env');
var test = require('tape');
//display 
var dir  = __dirname.split('/')[__dirname.split('/').length-1];
var file  = dir + __filename.replace(__dirname, '') + ' >';
var Server   = require('../lib/index');
var Hapi = require('hapi');
//require one pluging for monkey patching
var Assets = require('../lib/assets');

test(file+' The Server is started', function(t) {

    Server.init(0, function(err, server) {

      t.ok(server instanceof Hapi.Server, 'The server is started');
      server.stop(t.end);
      redis.quit();
    })
});


test(file+' The Server listen on a given port', function(t) {

    Server.init(5000, function(err, server) {

      t.ok(server.info.port === 5000, 'The port of the server is 5000');
      server.stop(t.end);
      redis.quit();
    })
});

test(file+' The server return an error if a wrong plugin is register', function(t) {

  var orig = Assets.register;
  Assets.register = function (server, options, next) {

    //put back the original code
    Assets.register = orig;
    return next(new Error('register assets failed'));
  };

  Assets.register.attributes = {
    name: 'fake version'
  };

  Server.init(5000, function(err, server) {
    t.ok(err.message === 'register assets failed', 'Returns an error for wrong assets plugin');
    t.end();
    redis.quit();
  })
});
