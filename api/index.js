'use strict';

const Config = require('../config');

module.exports = function(server) {
    server.route({
        method: 'GET',
        path:'/',
        handler: (request, h) => {
            return {
                "name": Config.name,
                "version": Config.version
            }
        },
        options: {
            tags: ['api']
        }
    });
}