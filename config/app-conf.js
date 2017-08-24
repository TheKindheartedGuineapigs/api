module.exports = (logger) => {
    const config = require('./config');
    const app = require('./express-conf')(logger);
    const express = require('express');

    return require('../database').connection(config.connectionString)
        .then((db) => {
            const data = require('../data')(db);

            const controllers = require('../api/controllers')(data);

            require('../api/routers')(app, express, controllers);

            return Promise.resolve(app);
        });
};
