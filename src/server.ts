import http from 'http';
import * as app from './app';
const port = 3001;
const server = http.createServer(app.app);
server.listen(port);
console.log(`\nServidor On-line\nhttp://localhost:3001 `);