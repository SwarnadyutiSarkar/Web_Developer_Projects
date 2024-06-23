import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:5000');

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    socket.on('chatMessage', msg => {
      setMessages(prevMessages => [...prevMessages, msg]);
    });

    return () => {
      socket.off('chatMessage');
    };
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    socket.emit('chatMessage', message);
    setMessage('');
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
      <form onSubmit={sendMessage}>
        <input 
          type="text" 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          placeholder="Type a message" 
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;
