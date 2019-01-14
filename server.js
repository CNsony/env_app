const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
global.base_dir = __dirname;
require('./server/config/default');
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', require(cerberus.routes.root_router));

app.listen(port, () => console.log(`Listening on port ${port}`));
