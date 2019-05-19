'use strict';

const config = require('./config');
const Hapi = require('@hapi/hapi');

const init = async() => {
    const server = Hapi.server({
        port: config.port,
        host: config.host
    });
    
    await server.register(require('./api/health'));
    require('./api')(server);
    await server.start();
    console.log(`Serve running on ${server.info.uri}`);
}

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
})

init();