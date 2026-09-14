import express from 'express';
import { createServer } from 'node:http';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { Server } from 'socket.io';

const app = express();
const server = createServer(app);
const io = new Server(server, {
    connectionStateRecovery: {}
});

const __dirname = dirname(fileURLToPath(import.meta.url));

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'));
});

io.on('connection', (socket) => {

    const { id:userId } = socket.handshake.headers;
    console.log(`user-${userId} is connected`);

    socket.join(`room-${userId}`);

    socket.on('chat message', (msg) => {
        console.log(`TargetUser: ${msg.toUserId}\nmessage: ${msg.text}`);

        const payload = {};
        payload.senderId = userId;
        payload.message = msg.text;

        socket.to(`room-${msg.toUserId}`).emit('chat message', payload);

    });
 
    socket.on('disconnect', (reason) => {
        console.log(`user-${userId} is disconnected`);
    });
});


server.listen(3000, () => {
    console.log('server running at http://localhost:3000');
});
