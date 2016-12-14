const express = require('express');
const app = express();
const http = require('http');
const bodyParser = require('body-parser');
const router = require('./router');

// App Setup
app.use(express.static('dist'));
app.use(bodyParser.json({ type: '*/*' }));
router(app);

// Server Setup
const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);
