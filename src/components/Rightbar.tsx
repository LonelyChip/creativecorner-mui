import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { User } from "./Comment";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { db } from "../config/firebase";
import { Post } from "./Feed";

function Rightbar() {
  const users = useSelector((state: any) => state.users.value) as User[];
  const postRef = collection(db, "posts");
  const [postList, setPostList] = useState<Post[] | null>(null);
  const getPosts = async () => {
    const data = await getDocs(postRef);
    setPostList(
      (data.docs.map((doc) => ({ ...doc.data(), postId: doc.id })) as Post[])
        .sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )
        .slice(0, 4)
    );
  };
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <Box flex={1} p={1} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position={"fixed"} mr={2}>
        <Typography mb={2} fontWeight={"100"}>
          Online Users
        </Typography>
        <AvatarGroup max={5}>
          {users.map((user) => (
            <Avatar alt="Remy Sharp" src={user.photoURL || ""} />
          ))}
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
        <Typography mt={2} fontWeight={"100"}>
          Latest Posts
        </Typography>
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
          }}
        >
          {postList?.map((post) => (
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Remy Sharp"
                  src={
                    users?.find((user) => user.userId === post.userId)
                      ?.photoURL || ""
                  }
                />
              </ListItemAvatar>
              <ListItemText
                primary={post.title}
                secondary={
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography
                      sx={{ display: "inline" }}
                      variant="body2"
                      color="text.primary"
                      noWrap
                    >
                      {post.userName}
                    </Typography>
                    <Typography
                      sx={{
                        display: "inline",
                        lineHeight: "1.4em",
                        maxHeight: "2.8em",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        wordBreak: "break-word",
                      }}
                      variant="body2"
                      color="text.secondary"
                    >
                      {post.description}
                    </Typography>
                  </Box>
                }
              />
            </ListItem>
          ))}
          <Divider variant="inset" component="li" />
        </List>
      </Box>
    </Box>
  );
}

export default Rightbar;
