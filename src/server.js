const Hapi = require('@hapi/hapi'); // for Hapi
const routes = require('./routes');
const HapiCors = require('hapi-cors');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: process.env.NODE_ENV !== 'production'?'localhost':'0.0.0.0',
  });

  // Register the CORS middleware plugin
  await server.register({
    plugin: HapiCors,
    options: {
      origins: ['*'], // Replace with your own domain
    },
  });

  server.route(routes);
  await server.start()
  console.log(`Server berjalan pada ${server.info.uri}`)
}

init()

