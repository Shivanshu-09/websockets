import React, { useState, useEffect } from 'react';
import { Box, TextField, Button } from '@mui/material';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { useStore } from '../store';

const ChatBox = () => {
  const [message, setMessage] = useState('');
  const [ws, setWs] = useState(null);
  const addMessage = useStore((state) => state.addMessage);
  
  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8000/ws');
    setWs(socket);

    socket.onopen = () => {
      console.log('Connected to the WebSocket server');
    };  

    socket.onmessage = (event) => {
      console.log('Got one message', event.data);
      addMessage(event.data);
    };
    return () => {
      socket.close();
    };

  }, [])

  const handleSend = () => {
    addMessage(message);
    if(ws && ws.readyState === WebSocket.OPEN) {
      console.log('Message sent:', message);
      ws.send(message);
    }
    // Add your logic to handle the message here
    setMessage(''); // Clear the input field after sending the message
  };
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: '20px', // Adjust the margin from the bottom as needed
        left: '50%',
        transform: 'translateX(-50%)',
        width: '80%', // Ensure it takes the full width of the screen
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <TextField
        id="outlined-basic"
        label="Type your message"
        variant="outlined"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        sx={{
          flexGrow: 1,
          marginRight: '10px', // Add some space between the TextField and the Button
        }}
      />
      <Button
        variant="contained"
        color="primary"
        endIcon={<ArrowCircleRightIcon />}
        onClick={handleSend}
      >
        Send
      </Button>
    </Box>
  );
}

export default ChatBox;