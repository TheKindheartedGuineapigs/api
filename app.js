const config = require('./config/config');
const logger = require('./config/logger-conf');

const app = require('./config')(logger);

const https = require('https');
const fs = require('fs');
const options = { 
    key: fs.readFileSync('./server-key.pem'),
    cert: fs.readFileSync('./server-crt.pem'),
    ca: fs.readFileSync('./ca-crt.pem'),
};

app.then((application) => {
    application.listen(config.port, () =>
        logger.debug('Express server listening on port ' + config.port)
    );

    https.createServer(options, application).listen(443);
});
