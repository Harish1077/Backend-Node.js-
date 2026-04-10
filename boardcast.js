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
    res.sendFile(path.join(__dirname, "boardcast.html"));
});
let clients = 0
io.on("connection", (socket) => {
    clients++
    io.emit("boardcast", `${clients} clients connected`);
    socket.on("disconnect", () => {
        clients--
        io.emit("boardcast", `${clients} clients connected`);
    });
});
httpServer.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});