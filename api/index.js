'use strict';

const Config = require('../config');
const health = require('./health');

const root = {
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
}
module.exports = [].concat(root, health);