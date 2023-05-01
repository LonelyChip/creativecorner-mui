import {
  IconButton,
  Tooltip,
  Fab,
  Modal,
  Box,
  Typography,
  styled,
  Avatar,
  TextField,
  Stack,
  Button,
  Paper,
} from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import ImageIcon from "@mui/icons-material/Image";
import GifIcon from "@mui/icons-material/Gif";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import * as yup from "yup";
import { useAuthState } from "react-firebase-hooks/auth";
import { addDoc, collection } from "firebase/firestore";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { auth, db } from "../config/firebase";

import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";

import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";

import { AttachFile, Image, MoreVert, Send } from "@mui/icons-material";

function ChatWindow() {
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(!open);
  };
  const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });
  return (
    <>
      <StyledModal open={open} onClose={handleClose}>
        <Box
          margin={2}
          width={"90%"}
          height={"90%"}
          borderRadius={5}
          bgcolor={"background.default"}
          color={"text.primary"}
        >
          <Paper
            elevation={5}
            sx={{
              display: "flex",
              justifyContent: "center",
              bgcolor: "#144272",
              borderRadius: "10px",
              border: "1px solid gray",
              margin: "none",
              overflow: "clip",
              height: "100%",
              width: "100%",
            }}
          >
            <Box
              sx={{
                width: "30%",
                height: "80vh",
                overflow: "auto",
                flex: 1,
                color: "white",
              }}
            >
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <Avatar src="https://images.unsplash.com/photo-1679746584014-fb31d4eb0a5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8dG93SlpGc2twR2d8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
                    </ListItemIcon>
                    <ListItemText
                      primary="John"
                      secondary="Hello there.."
                      primaryTypographyProps={{
                        style: { color: "white", fontWeight: "bold" },
                      }}
                      secondaryTypographyProps={{ style: { color: "#C4C2BB" } }}
                    />
                  </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <Avatar src="https://images.unsplash.com/photo-1679746584014-fb31d4eb0a5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8dG93SlpGc2twR2d8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
                    </ListItemIcon>
                    <ListItemText
                      primary="John"
                      secondary="Hello there.."
                      primaryTypographyProps={{
                        style: { color: "white", fontWeight: "bold" },
                      }}
                      secondaryTypographyProps={{ style: { color: "#C4C2BB" } }}
                    />
                  </ListItemButton>
                </ListItem>{" "}
                <Divider />
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <Avatar src="https://images.unsplash.com/photo-1679746584014-fb31d4eb0a5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8dG93SlpGc2twR2d8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
                    </ListItemIcon>
                    <ListItemText
                      primary="John"
                      secondary="Hello there.."
                      primaryTypographyProps={{
                        style: { color: "white", fontWeight: "bold" },
                      }}
                      secondaryTypographyProps={{ style: { color: "#C4C2BB" } }}
                    />
                  </ListItemButton>
                </ListItem>{" "}
                <Divider />
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <Avatar src="https://images.unsplash.com/photo-1679746584014-fb31d4eb0a5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8dG93SlpGc2twR2d8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
                    </ListItemIcon>
                    <ListItemText
                      primary="John"
                      secondary="Hello there.."
                      primaryTypographyProps={{
                        style: { color: "white", fontWeight: "bold" },
                      }}
                      secondaryTypographyProps={{ style: { color: "#C4C2BB" } }}
                    />
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>
            <Box sx={{ flex: 2, bgcolor: "#A7AAB4" }} height={"80vh"}>
              <Box
                width={"100%"}
                padding={2}
                height={"5%"}
                bgcolor={"#0B2447"}
                display={"flex"}
                justifyContent={"space-between"}
                borderRadius={"0px 0px 5px 5px"}
                borderTop={"none"}
                overflow={"clip"}
              >
                <Typography color={"White"} fontWeight={600}>
                  John
                </Typography>
                <Button sx={{ color: "white" }}>
                  <MoreVert />
                </Button>
              </Box>
              <Box
                width={"100%"}
                overflow={"scroll"}
                height={"90%"}
                display={"flex"}
                flexDirection={"column"}
              >
                <Box display={"flex"} margin={2}>
                  <Box display={"flex"} flexDirection={"column"} padding={1}>
                    <Avatar src="https://images.unsplash.com/photo-1679746584014-fb31d4eb0a5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8dG93SlpGc2twR2d8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
                    <Typography color={"gray"} fontWeight={200}>
                      12:30 am
                    </Typography>
                  </Box>
                  <Box
                    borderRadius={"0px 15px 15px 15px"}
                    bgcolor={"white"}
                    height={"auto"}
                    width={"auto"}
                    marginTop={3}
                    padding={1}
                  >
                    Mesaage is here...Mesaage is here...Mesaage is
                    here...Mesaage is here...
                  </Box>
                </Box>
                <Box
                  display="flex"
                  margin={2}
                  flexDirection={"row-reverse"} // Here check conditionally whether its from author or not to display in reverse
                >
                  <Box display="flex" flexDirection="column" padding={1}>
                    <Avatar src="https://images.unsplash.com/photo-1679746584014-fb31d4eb0a5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8dG93SlpGc2twR2d8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
                    <Typography color="gray" fontWeight={300}>
                      12:30 am
                    </Typography>
                  </Box>
                  <Box
                    borderRadius="0px 15px 15px 15px"
                    bgcolor="white"
                    height="auto"
                    width="auto"
                    marginTop={3}
                    padding={1}
                  >
                    Mesaage is here...Mesaage is here...Mesaage is
                    here...Mesaage is here...
                  </Box>
                </Box>
                <Box display={"flex"} margin={2}>
                  <Box display={"flex"} flexDirection={"column"} padding={1}>
                    <Avatar src="https://images.unsplash.com/photo-1679746584014-fb31d4eb0a5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8dG93SlpGc2twR2d8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
                    <Typography color={"gray"} fontWeight={300}>
                      12:30 am
                    </Typography>
                  </Box>
                  <Box
                    borderRadius={"0px 15px 15px 15px"}
                    bgcolor={"white"}
                    height={"auto"}
                    width={"auto"}
                    marginTop={3}
                    padding={1}
                  >
                    Mesaage is here...Mesaage is here...Mesaage is
                    here...Mesaage is here...
                  </Box>
                </Box>
                <Box display={"flex"} margin={2}>
                  <Box display={"flex"} flexDirection={"column"} padding={1}>
                    <Avatar src="https://images.unsplash.com/photo-1679746584014-fb31d4eb0a5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8dG93SlpGc2twR2d8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
                    <Typography color={"gray"} fontWeight={300}>
                      12:30 am
                    </Typography>
                  </Box>
                  <Box
                    borderRadius={"0px 15px 15px 15px"}
                    bgcolor={"white"}
                    height={"auto"}
                    width={"auto"}
                    marginTop={3}
                    padding={1}
                  >
                    Mesaage is here...Mesaage is here...Mesaage is
                    here...Mesaage is here...
                  </Box>
                </Box>
                <Box display={"flex"} margin={2}>
                  <Box display={"flex"} flexDirection={"column"} padding={1}>
                    <Avatar src="https://images.unsplash.com/photo-1679746584014-fb31d4eb0a5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8dG93SlpGc2twR2d8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
                    <Typography color={"gray"} fontWeight={300}>
                      12:30 am
                    </Typography>
                  </Box>
                  <Box
                    borderRadius={"0px 15px 15px 15px"}
                    bgcolor={"white"}
                    height={"auto"}
                    width={"auto"}
                    marginTop={3}
                    padding={1}
                  >
                    Mesaage is here...Mesaage is here...Mesaage is
                    here...Mesaage is here...
                  </Box>
                </Box>
                <Box display={"flex"} margin={2}>
                  <Box display={"flex"} flexDirection={"column"} padding={1}>
                    <Avatar src="https://images.unsplash.com/photo-1679746584014-fb31d4eb0a5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8dG93SlpGc2twR2d8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
                    <Typography color={"gray"} fontWeight={300}>
                      12:30 am
                    </Typography>
                  </Box>
                  <Box
                    borderRadius={"0px 15px 15px 15px"}
                    bgcolor={"white"}
                    height={"auto"}
                    width={"auto"}
                    marginTop={3}
                    padding={1}
                  >
                    Mesaage is here...Mesaage is here...Mesaage is
                    here...Mesaage is here...
                  </Box>
                </Box>
                <Box display={"flex"} margin={2}>
                  <Box display={"flex"} flexDirection={"column"} padding={1}>
                    <Avatar src="https://images.unsplash.com/photo-1679746584014-fb31d4eb0a5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8dG93SlpGc2twR2d8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
                    <Typography color={"gray"} fontWeight={300}>
                      12:30 am
                    </Typography>
                  </Box>
                  <Box
                    borderRadius={"0px 15px 15px 15px"}
                    bgcolor={"white"}
                    height={"auto"}
                    width={"auto"}
                    marginTop={3}
                    padding={1}
                  >
                    Mesaage is here...Mesaage is here...Mesaage is
                    here...Mesaage is here...
                  </Box>
                </Box>
              </Box>
              <Box
                width={"100%"}
                height={"12%"}
                bgcolor={"white"}
                display={"flex"}
                alignContent={"center"}
                justifyContent={"center"}
                borderRadius={"10px"}
              >
                <TextField
                  variant="standard"
                  sx={{ margin: "10px", border: "none", width: "80%" }}
                />
                <Button>
                  <Image />
                </Button>
                <Button>
                  <Send />
                </Button>
              </Box>
            </Box>
          </Paper>
        </Box>
      </StyledModal>
    </>
  );
}
export default ChatWindow;
