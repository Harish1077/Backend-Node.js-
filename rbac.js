import express from "express";
const app = express();

const users = {
    harish: {role: "admin" },
    ragnar: {role: "teacher" },
    div: {role: "slave" }
};

const premissions = {
    admin: ["read", "write", "delete"],
    teacher: ["read", "write"],
    slave: ["read"]
};

const getUserRole = (req, res, next) => {
    const username = req.query.user;
    if(!username || !users[username]) {
        return res.status(404).send("User not found");
    }
    req.userRole = users[username].role;
    next();
};

app.use(getUserRole);

/* ------------ RBAC MIDDLEWARE ------------ */
const checkAcess = (page) => (req, res, next) => {
    const userRole = req.userRole;
    if(premissions[userRole].includes(page)) {
        next();
    } else {
        res.status(403).send("Access denied");
    }
};

/* ------------ ROUTES ------------ */
app.get("/dashboard", checkAcess("read"), (req, res) => {
    res.send("Welcome to the dashboard");
});
app.get("/users", checkAcess("write"), (req, res) => {
    res.send("User management page");
}); 
app.get("profile", checkAcess("delete"), (req, res) => {
    res.send("Profile management page");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});



const express = require('express');
const session = require('express-session');
const { Server } = require('socket.io');
const http = require('http');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// 1. Configure Session
const sessionMiddleware = session({
  secret: 'vistor-tracker-secret',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
});

app.use(sessionMiddleware);

// 2. Share session with Socket.IO
io.engine.use(sessionMiddleware);

app.get('/', (req, res) => {
  // Simulating a login/entry for "Navneet"
  req.session.userName = "Navneet";
  req.session.joinTime = "10:45 AM";
  req.session.id_custom = "A12X9"; 
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  const session = socket.request.session;
  
  if (session && session.userName) {
    console.log(`${session.userName} connected`);
    
    // Emit the data seen in your image back to the client
    socket.emit('visitorData', {
      sessionID: session.id_custom,
      name: session.userName,
      joinTime: session.joinTime
    });
  }
});

server.listen(3000, () => console.log('Running on http://localhost:3000'));