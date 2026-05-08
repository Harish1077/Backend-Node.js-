import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

let users = {};

app.get("/", (req, res) => {
    res.sendFile("chat.html", { root: "." });
});

io.on("connection", (socket) => {

    socket.on("join", ({ username, room }) => {
        socket.username = username;
        socket.room = room;

        socket.join(room);
        users[socket.id] = username;

        io.to(room).emit("users", Object.values(users));

        socket.to(room).emit("chat", {
            user: "System",
            text: `${username} joined`
        });
    });

    socket.on("chat", (msg) => {
        io.to(socket.room).emit("chat", {
            user: socket.username,
            text: msg,
            time: new Date()
        });
    });

    socket.on("typing", () => {
        socket.to(socket.room).emit("typing", socket.username);
    });

    socket.on("disconnect", () => {
        delete users[socket.id];
        io.emit("users", Object.values(users));

        socket.broadcast.emit("chat", {
            user: "System",
            text: `${socket.username} left`
        });
    });
});

httpServer.listen(3000, () => {
    console.log("http://localhost:3000");
});