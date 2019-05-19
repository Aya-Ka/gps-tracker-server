'use strict';

const Config = require('./config');
const Hapi = require('@hapi/hapi');
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');

const init = async() => {
    const server = Hapi.server({
        port: Config.port,
        host: Config.host
    });

    await server.register([
        require('./api/health'),
        Inert,
        Vision,
        {
            plugin: HapiSwagger,
            options: {
                info: {
                    title: 'GPS Tracker API Document',
                    version: Config.version
                }
            }
        }
    ]);
    require('./api')(server);
    await server.start();
    console.log(`Serve running on ${server.info.uri}`);
}

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
})

init();