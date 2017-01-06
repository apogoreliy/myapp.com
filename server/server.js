import express from 'express';
import http from 'http';
import path from 'path';
import bodyParser from 'body-parser';
import router from './router';

const app = express();

// App Setup
app.use(express.static('public'));
app.use(bodyParser.json({ type: '*/*' }));

app.get('/store', (request, response)=>{
    response.sendFile(path.resolve('public', 'index.html'))
});

router(app);

// Server Setup
const port = process.env.PORT || 3000;
//const server = http.createServer(app);
//server.listen(port);
app.listen(port);
console.log('Server listening on:', port);