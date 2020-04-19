const express = require('express');
const mongoose = require('mongoose');

const routes = require('./lib/routes');
const config = require('./lib/config');
const logger = require('./lib/logger');

const app = express();

app.use('/v1/dog', routes);

const dbPath = `mongodb://${config.MONGO_HOST}:${config.MONGO_PORT}/${config.MONGO_DB}`;

mongoose.connect(dbPath);

mongoose.connection.on('error', (err) => {
    console.log(err);
});

mongoose.connection.once('open', () => {
    console.log('Connected to mongodb');

    app.listen(config.PORT, () => {
        console.log(`dogs service listening at port: ${config.PORT}`);
    });
});
