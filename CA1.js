const express = require('express');
const session = require('express-session');
const { Server } = require('socket.io');
const http = require('http');

const app = express();
const server = http.createServer(app);
const io = new Server(server);
const sessionMiddleware = session({
    secret: 'vistor-tracker-secret',
    resave: false,
    saveUninitialized: true
});
app.use(sessionMiddleware);

io.engine.use(sessionMiddleware);

app.get('/', (req, res) => {
    req.session.id_custom = "A12X9";
    req.session.userName = "Navneet";
    req.session.joinTime = "10:45 AM"
    res.sendFile(__dirname + '/index.html');
});
io.on('connection', (socket) => {
  const session = socket.request.session;
  
  if (session && session.userName) {
    console.log(`${session.userName} connected`);
    socket.emit('visitorData', {
      sessionID: session.id_custom,
      name: session.userName,
      joinTime: session.joinTime
    });
  } 
});

server.listen(3000, () => console.log('Running on http://localhost:3000'));
