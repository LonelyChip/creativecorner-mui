import { Mail, Notifications, Psychology } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  InputBase,
  Menu,
  MenuItem,
  MenuList,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import ChatWindow from "./ChatWindow";

function Navbar() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const LogOut = async () => {
    await signOut(auth);
    navigate("/");
  };
  const navLogin = () => {
    navigate("/signin");
  };
  const handleChat = () => {
    setIsChatOpen(!isChatOpen);
  };
  const [open, setOpen] = useState(false);
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  const Search = styled("div")({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: "5px",
    width: "40%",
  });
  const IconContainer = styled(Box)({
    padding: "5px",
    display: "flex",
    gap: "20px",
    alignItems: "center",
  });
  const UserContainer = styled(Box)({
    padding: "5px",
    gap: "20px",
    alignItems: "center",
  });
  return (
    <>
      <AppBar position="sticky">
        <StyledToolbar>
          <Typography
            variant="h6"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Creative Corner
          </Typography>
          <Psychology
            sx={{ display: { xs: "flex", sm: "none" } }}
            fontSize="large"
          />
          <Search>
            <InputBase placeholder="Search..." />
          </Search>
          {user ? (
            <Box>
              <IconContainer sx={{ display: { xs: "none", sm: "flex" } }}>
                <Button onClick={handleChat} sx={{ color: "white" }}>
                  <Badge badgeContent={4} color="success">
                    <Mail />
                  </Badge>
                </Button>

                <Badge badgeContent={7} color="success">
                  <Notifications />
                </Badge>
                <Avatar
                  onClick={(e) => setOpen(true)}
                  sx={{ width: "30px", height: "30px" }}
                  src={user?.photoURL || ""}
                />
              </IconContainer>
              <UserContainer sx={{ display: { xs: "flex", sm: "none" } }}>
                <Avatar
                  onClick={(e) => setOpen(true)}
                  sx={{ width: "30px", height: "30px" }}
                  src={user?.photoURL || ""}
                />
                <Typography fontSize={"medium"} fontWeight="bold">
                  {user?.displayName}
                </Typography>
              </UserContainer>
            </Box>
          ) : (
            <Button variant="contained" color="success" onClick={navLogin}>
              Sign In
            </Button>
          )}
        </StyledToolbar>
        {user && (
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            open={open}
            onClose={(e) => setOpen(false)}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem onClick={LogOut}>Logout</MenuItem>
          </Menu>
        )}
      </AppBar>
      {isChatOpen && <ChatWindow />}
    </>
  );
}

export default Navbar;
