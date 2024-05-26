// src/components/VideoChat.js
import React, { useEffect, useRef } from 'react';
import socket from '../socket';

const VideoChat = () => {
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);

  useEffect(() => {
    const constraints = { video: true, audio: true };

    navigator.mediaDevices.getUserMedia(constraints)
      .then((stream) => {
        localVideoRef.current.srcObject = stream;
      })
      .catch((error) => {
        console.error('Error accessing media devices:', error);
      });

    socket.on('offer', async (offer) => {
      // Handle incoming offer and create answer
    });

    socket.on('answer', async (answer) => {
      // Handle incoming answer
    });

    socket.on('ice-candidate', async (candidate) => {
      // Handle incoming ICE candidate
    });

    return () => {
      // Clean up
    };
  }, []);

  return (
    <div>
      <h2>Video Chat</h2>
      <video ref={localVideoRef} autoPlay muted></video>
      <video ref={remoteVideoRef} autoPlay></video>
    </div>
  );
};

export default VideoChat;
