'use strict';

module.exports  = [
    {
        method: 'GET',
        path:'/health',
        handler: (request, h) => {
            return {'status': 'I am still alive!'};
        },
        options:{
            tags: ['api']
        }
    }
]