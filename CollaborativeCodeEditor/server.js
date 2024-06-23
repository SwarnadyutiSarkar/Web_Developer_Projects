const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const projectRoutes = require('./routes/projectRoutes');
const collaborationSocket = require('./sockets/collaborationSocket');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(bodyParser.json());
app.use('/auth', authRoutes);
app.use('/projects', projectRoutes);

collaborationSocket(io);

mongoose.connect('mongodb://localhost:27017/collaborativecodeeditor', { useNewUrlParser: true, useUnifiedTopology: true });

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
