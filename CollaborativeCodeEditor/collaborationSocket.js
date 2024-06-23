module.exports = (io) => {
    io.on('connection', (socket) => {
      console.log('New client connected');
  
      socket.on('codeChange', (code) => {
        socket.broadcast.emit('codeChange', code);
      });
  
      socket.on('chatMessage', (msg) => {
        io.emit('chatMessage', msg);
      });
  
      socket.on('disconnect', () => {
        console.log('Client disconnected');
      });
    });
  };
  