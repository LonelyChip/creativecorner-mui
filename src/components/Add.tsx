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

interface Post {
  title: string;
  description: string;
  tag: string;
  createdAt: string;
}
function Add() {
  const schema = yup.object().shape({
    title: yup.string().required("Please enter the title..."),
    description: yup.string().required("Please enter the description..."),
    tag: yup.string().required("Please enter the tag..."),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Post>({
    resolver: yupResolver(schema),
  });
  const [user] = useAuthState(auth);
  const postRef = collection(db, "posts");

  const onCreatePost = async (data: Post) => {
    await addDoc(postRef, {
      ...data,
      userId: user?.uid,
      userName: user?.displayName,
      createdAt: new Date().toISOString(),
    });
    handleClose();
  };

  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(!open);
  };
  const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });
  const UserContainer = styled(Box)({
    display: "flex",
    padding: "5px",
    gap: "20px",
    alignItems: "center",
    marginBottom: "10px",
  });
  return (
    <>
      <Tooltip
        onClick={() => setOpen(true)}
        title="Add"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <IconButton>
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </IconButton>
      </Tooltip>
      <StyledModal open={open} onClose={handleClose}>
        <Box
          margin={2}
          width={400}
          height={360}
          borderRadius={5}
          p={3}
          bgcolor={"background.default"}
          color={"text.primary"}
        >
          <Typography variant="h6" color={"gray"} textAlign={"center"}>
            Create Post
          </Typography>
          <UserContainer>
            <Avatar
              onClick={(e) => setOpen(true)}
              sx={{ width: "30px", height: "30px" }}
              src={user?.photoURL || ""}
            />
            <Typography fontWeight={500}>{user?.displayName}</Typography>
          </UserContainer>
          <TextField
            variant="standard"
            placeholder="Title"
            sx={{ width: "100%", mb: "20px" }}
            required
            label="Title"
            {...register("title")}
            error={!!errors.title}
            helperText={errors.title?.message}
          />
          <TextField
            label="#Tag"
            variant="standard"
            fullWidth
            {...register("tag")}
            error={!!errors.tag}
            helperText={errors.tag?.message}
          />
          <TextField
            multiline
            rows={3}
            sx={{ width: "100%" }}
            placeholder="Description. Write something on wholesome"
            variant="standard"
            required
            label="Description"
            {...register("description")}
            error={!!errors.description}
            helperText={errors.description?.message}
          />
          <Stack direction={"row"} gap={1} p={1}>
            <EmojiEmotionsIcon sx={{ color: "brown" }} />
            <ImageIcon color="success" />
            <GifIcon color="secondary" />
          </Stack>
          <Stack
            direction={"row"}
            justifyContent="center"
            alignItems={"center"}
          >
            <Button variant="contained" onClick={handleSubmit(onCreatePost)}>
              POST
            </Button>
          </Stack>
        </Box>
      </StyledModal>
    </>
  );
}

export default Add;
