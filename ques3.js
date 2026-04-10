// using socket.io, send a message from server to client after every 2 second and print the same on the broweser . after the 10 th second the server should stop sending messages.
import express from 'express';
import path from 'path';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { fileURLToPath } from 'url';
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "client.html"));
});
io.on("connection", (socket) => {
    console.log("Client connected:", socket.id);
    let count = 0;
    const interval = setInterval(() => {
        try {
            count++;
            const message = `Message ${count} at ${count * 2} seconds`;
            console.log("Sending:", message);
            socket.emit("servermsg", message);
            if (count >= 5) {
                clearInterval(interval);
                console.log("Stopped sending messages");
            }
        } catch (err) {
            console.error("Error inside interval:", err);
            clearInterval(interval);
        }
    }, 2000);
    socket.on("disconnect", () => {
        console.log("Client disconnected:", socket.id);
        clearInterval(interval);
    });
});
httpServer.listen(3001, () => {
    console.log("Server running on http://localhost:3001");
}).on("error", (err) => {
    console.error("Server error:", err.message);
});