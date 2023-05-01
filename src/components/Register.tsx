import { ThemeProvider } from "@emotion/react";
import {
  Avatar,
  Container,
  CssBaseline,
  FormControlLabel,
  TextField,
  Typography,
  Box,
  createTheme,
  Checkbox,
  Button,
} from "@mui/material";
import React from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth, db, storage } from "../config/firebase";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  UploadTaskSnapshot,
} from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

function Register() {
  const theme = createTheme();
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const user = event.target[0].value;
    const email = event.target[2].value;
    const password = event.target[4].value;
    const file = event.target[6].files[0];

    console.log("user", event.target[0].value);
    console.log("email", event.target[2].value);
    console.log("password", event.target[4].value);
    console.log(event.target[6].files[0]);

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, user);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot: UploadTaskSnapshot) => {
          // Handle progress or state changes
        },
        (error: Error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName: user,
              photoURL: downloadURL,
            });
            console.log(downloadURL);
            await setDoc(doc(db, "users-registered", res.user.uid), {
              userId: res.user.uid,
              displayName: user,
              email: email,
              photoURL: downloadURL,
            });
          });
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            noValidate
            sx={{ mt: 1 }}
            onSubmit={handleSubmit}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="userName"
              label="User name"
              name="userName"
              autoComplete="userName"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <input
              type="file"
              name="file"
              id="file"
              style={{ display: "none" }}
            />
            <label htmlFor="file">
              <Typography
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <AccountCircleIcon color={"secondary"} fontSize="large" />
                Add an avatar
              </Typography>
            </label>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Register;
