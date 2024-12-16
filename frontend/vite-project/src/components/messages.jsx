import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const Messages = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightgray", // You can change the background color as needed
      }}
    >
      <List
        sx={{
          width: "90%",

          bgcolor: "background.paper",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <ListItem>
          <ListItemText
            primary="Message 1"
            secondary="This is the first message"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Message 2"
            secondary="This is the second message"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Message 3"
            secondary="This is the third message"
          />
        </ListItem>
      </List>
    </Box>
  );
};

export default Messages;
