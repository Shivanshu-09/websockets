import React from 'react';
import { Box, TextField, Button } from '@mui/material';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const ChatBox = () => {
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
        sx={{
          flexGrow: 1,
          marginRight: '10px', // Add some space between the TextField and the Button
        }}
      />
      <Button
        variant="contained"
        color="primary"
        endIcon={<ArrowCircleRightIcon />}
      >
        Send
      </Button>
    </Box>
  );
}

export default ChatBox;