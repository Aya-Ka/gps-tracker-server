'use strict';

const Lab = require('@hapi/lab');
const { expect } = require('@hapi/code');

const { afterEach, beforeEach, describe, it } = exports.lab = Lab.script();
const { init } = require('../lib/server');

describe('GET /health', () => {
    let server;

    beforeEach(async () => {
        server = await init();
    });

    afterEach(async () => {
        await server.stop();
    });

    it('response with 200', async () => {
        const res = await server.inject({
            method: 'get',
            url: '/health'
        });
        expect(res.statusCode).to.equal(200);
    });
});
