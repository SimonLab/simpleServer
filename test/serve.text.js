var test    = require('tape');
var path    = require('path');


test(file + " GET / returns status 200", function(t) {
  var options = {
    method  : "GET",
    url     : "/societyredis"
  };
  server.inject(options, function (res) {
    t.equal(res.statusCode, 404, 'server loads ok');

    setTimeout(function(){
      server.stop(t.end);
    },700);
    client.quit();

  });
});
