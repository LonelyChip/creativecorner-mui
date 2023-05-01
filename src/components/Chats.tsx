import React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
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
import { Avatar, Button, Paper, TextField } from "@mui/material";
import { AttachFile, Image, MoreVert, Send } from "@mui/icons-material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function Chats() {
  return (
    <Box>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              Creative Corner
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search user…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Toolbar>
        </AppBar>
      </Box>
      <Paper
        elevation={5}
        sx={{
          display: "flex",
          justifyContent: "center",
          bgcolor: "#144272",
          borderRadius: "10px",
          border: "1px solid gray",
          margin: "2%",
          overflow: "clip",
          height: "80vh",
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
            height={"80%"}
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
                Mesaage is here...Mesaage is here...Mesaage is here...Mesaage is
                here...
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
                Mesaage is here...Mesaage is here...Mesaage is here...Mesaage is
                here...
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
                Mesaage is here...Mesaage is here...Mesaage is here...Mesaage is
                here...
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
                Mesaage is here...Mesaage is here...Mesaage is here...Mesaage is
                here...
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
                Mesaage is here...Mesaage is here...Mesaage is here...Mesaage is
                here...
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
                Mesaage is here...Mesaage is here...Mesaage is here...Mesaage is
                here...
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
                Mesaage is here...Mesaage is here...Mesaage is here...Mesaage is
                here...
              </Box>
            </Box>
          </Box>
          <Box
            width={"100%"}
            height={"10vh"}
            bgcolor="white"
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
  );
}

export default Chats;
