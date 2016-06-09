'use strict';
// 1.import HAPI
const Hapi = require('hapi');
const Inert = require('inert');

// 2.create new istance
const server = new Hapi.Server();

// 3.connection
server.connection({
  host: 'localhost',
  port: 8000
});



server.ext('onRequest', (req, reply) => {
  console.log('onRequest');
  reply.continue();
});

server.register(Inert, (err) => {
  if (err) throw err;
  // 4.routing
  // Home page
  server.route({
    method: 'GET',
    path: '/',
    handler (req, res) {
      res.file('./public/index.html')
    }
  });

  // About page
  server.route({
    method: 'GET',
    path: '/about',
    handler (req, res) {
      res.file('./public/about.html')
    }
  });

  // Static resources
  server.route({
    method: 'GET',
    path: '/public/{param*}',
    handler: {
      directory: {
        path: 'public'
      }
    }
  });

  // 5.kick off
  server.start(() => console.log('Hapi server running on port ', server.info.uri ));

});
