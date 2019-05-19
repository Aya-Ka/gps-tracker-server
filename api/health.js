'use strict';

const Config = require('../config');

module.exports  = {
    name: 'healthCheck',
    version: Config.version,
    register: async function(server, options) {
        server.route({
            method: 'GET',
            path:'/health',
            handler: (request, h) => {
                return {'status': 'I am still alive!'};
            },
            options:{
                tags: ['api']
            }
        });
    }
}

