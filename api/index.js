'use strict';

const config = require('../config');

module.exports = function(server) {
    server.route({
        method: 'GET',
        path:'/',
        handler: (request, h) => {
            return {
                "name": config.name,
                "version": config.version
            }
        }
    });
}