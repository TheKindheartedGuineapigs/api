/* globals undefined*/
/* eslint no-undefined: 0 */

const express = require('express');

const bodyParser = require('body-parser');

module.exports = (logger) => {
  const app = express();
  logger.debug('Creating Express application...');

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true,
  }));

  return app;
};
