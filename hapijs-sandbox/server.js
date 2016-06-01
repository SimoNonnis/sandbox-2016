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



server.register(Inert, () => {

  // 4.routing
  server.route({
    method: 'GET',
    path: '/',
    handler (req, res) {
      res.file('./public/logo.svg')
    }
  });

  // 5.kick off
  server.start(() => console.log('Hapi server running on port ', server.info.uri ));

});
