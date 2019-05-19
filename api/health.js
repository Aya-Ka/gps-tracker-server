'use strict';

const config = require('../config');

module.exports  = {
    name: 'healthCheck',
    version: config.version,
    register: async function(server, options) {
        server.route({
            method: 'GET',
            path:'/health',
            handler: (request, h) => {
                return {'status': 'I am still alive!'};
            }
        });
    }
}

