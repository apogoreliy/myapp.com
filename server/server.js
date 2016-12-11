const express = require('express');
const app = express();
const http = require('http');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router = require('./router');

const controller = require('./controllers/controllers');

const opts = {
    server: {
        socketOptions: { keepAlive: 1 }
    }
};
//mongoose.connect('mongodb://apogoreliy:7spirits@ds131878.mlab.com:31878/myapp', opts);

// App Setup
app.use(express.static('public'));
app.use(bodyParser.json({ type: '*/*' }));

//controller.registerRoutes(app);
router(app);

// Server Setup
const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);
