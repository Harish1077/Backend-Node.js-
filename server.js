import express from 'express';
import path from 'path';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { fileURLToPath } from 'url';

// Setup
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "client.html"));
});

io.on("connection", (socket) => {
    console.log("Client Connected:", socket.id);
    socket.emit("servermsg", "Welcome to the server!");
    socket.on("sendmsg", (msg) => {
        console.log("Received from client:", msg);

        socket.emit("servermsg", `Server received: ${msg}`);
    });

    socket.on("disconnect", () => {
        console.log("Client Disconnected:", socket.id);
    });
});
httpServer.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});