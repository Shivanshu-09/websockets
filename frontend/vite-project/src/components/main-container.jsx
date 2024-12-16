import * as React from 'react';
import Box from '@mui/material/Box';
import ChatBox from './chat-box';
import Messages from './messages';

const MainContainer = () => {
  return (
    <Box 
    sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgray', // You can change the background color as needed
      }}>
      
        <Messages/>
        <ChatBox />
    </Box>
  );
}

export default MainContainer