const http = require('http');
const socketIo = require('socket.io');
const { connectToDatabase, pool } = require('./Config');

const server = http.createServer();
const io = socketIo(server, {
    cors: {
        origin: "*", 
        methods: ["GET", "POST"]
    }
});

connectToDatabase()


const rooms = {};

io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('create_room', (id_conversation) => {
        if (!rooms[id_conversation]) {
            rooms[id_conversation] = [];
        }
        rooms[id_conversation].push(socket);
        socket.join(id_conversation);
        socket.emit('room_created', { id_conversation });
    });

    socket.on('send_message', (data) => {
        const { message, id_user, id_conversation } = data;
        saveMessage(message, id_user, id_conversation, socket);
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

const saveMessage = (message, id_user, id_conversation, socket) => {
    const date = new Date();
    const query = 'INSERT INTO dashboardapi_message_line(time_envoie, date_envoie, message, convertation_id_id, id_user_id) VALUES (?, ?, ?, ?, ?)';
    const values = [date, date, message, id_conversation, id_user];

    // console.log('Data : ', values)

    pool.query(query, values, (err, result) => {
        if (err) {
            socket.emit('error', { error: 'Failed to save message' });
            return console.error('Error saving message:', err);
        }
        broadcastMessage(id_conversation, { message, id_user, date });
    });
};

const broadcastMessage = (id_conversation, message) => {
    io.to(id_conversation).emit('new_message', message);
};

server.listen(8080, () => {
    console.log('Server is listening on port 8080');
});
