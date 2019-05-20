'use strict';

const Config = require('../config');
const Hapi = require('@hapi/hapi');
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');
const Api = require('../api');

const server = Hapi.server({
    port: Config.port,
    host: Config.host
});

server.route(Api);

exports.init = async () => {
    await server.initialize();
    return server;
};

exports.start = async () => {
    await server.register([
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
    await server.start();
    console.log(`Serve running on ${server.info.uri}`);
    return server;
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});
