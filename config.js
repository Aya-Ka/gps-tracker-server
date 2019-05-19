'use strict';

module.exports = {
    name: 'GPS Tracker API Server',
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'localhost',
    version: process.env.version || '1.0.0'
}