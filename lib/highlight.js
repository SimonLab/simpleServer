var highlighter = require('./../node_modules/keyword-highlighter/lib/keyword-highlighter.js');
exports.register = function (server, options, next) {

  server.route([
  {
    method: 'GET',
    path: '/highlight/{keyword?}',
    config: {
      description: 'Highlight keyword',
      handler: function (request, reply) {
        var text = "Founders & Coders is setting a standard in education. We run the most comprehensive training in JavaScript web development in the UK without charging our students a penny. We are demonstrating elite education should not only be accessible to those that can afford to pay for it. We select on technical talent, capacity for hard work and desire to have a positive impact on the world. Everything we do is designed to help you towards becoming an exceptional software developer. We aim for 100% of our graduates to be earning a living in software development. We manage this by partnering with companies including Stack Overflow, 8th Light and The Guardian."
          if(request.params.keyword) {
            var result = highlighter(request.params.keyword, text);
            return reply(result);
          }
          else {
            return reply(text);
          }
      }
    }
  }

  ]);

  return next();
};

exports.register.attributes = {
  name: 'Highlighter'
};
