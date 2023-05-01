import React, { useEffect, useState } from "react";
import { Post as IPost } from "./Feed";
import moment from "moment";
import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  Collapse,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Paper,
  styled,
  Typography,
} from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../config/firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { Comments } from "./Comments";

interface Props {
  post: IPost;
}

interface Like {
  userId: string;
  postId: string;
}

function Post(props: Props) {
  const { post } = props;
  const [likes, setLikes] = useState<Like[] | null>(null);
  const [commentChecked, setCommentChecked] = useState(false);
  const likesRef = collection(db, "likes");
  const likesDocQuery = query(likesRef, where("postId", "==", post.postId));
  const [user] = useAuthState(auth);

  const addLike = async () => {
    if (user) {
      await addDoc(likesRef, { userId: user?.uid, postId: post.postId });
      setLikes((prev) =>
        prev
          ? [...prev, { userId: user?.uid, postId: post.postId }]
          : [{ userId: user?.uid, postId: post.postId }]
      );
    }
  };
  const getLikes = async () => {
    const data = await getDocs(likesDocQuery);
    setLikes(
      data.docs.map((doc) => ({
        userId: doc.data().userId,
        postId: doc.data().postId,
      }))
    );
  };
  const removeLike = async () => {
    const deleteQuery = query(
      likesRef,
      where("userId", "==", user?.uid),
      where("postId", "==", post.postId)
    );
    const deleteRecords = await getDocs(deleteQuery);
    const deleteRecord = doc(db, "likes", deleteRecords.docs[0].id);
    await deleteDoc(deleteRecord);
    if (user) {
      setLikes(
        (prev) => prev && prev?.filter((like) => like.userId !== user?.uid)
      );
    }
  };
  useEffect(() => {
    getLikes();
  }, []);

  const handleCommentClick = () => {
    setCommentChecked(!commentChecked);
  };

  const hasUserLiked = likes?.find((like) => like.userId === user?.uid);
  return (
    <>
      <Card sx={{ margin: "5px" }}>
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: "red" }}
              aria-label="recipe"
              src={user?.photoURL || ""}
            />
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title={post.title}
          subheader={moment(post.createdAt).fromNow()}
        />
        <CardMedia
          component="img"
          height="10%"
          image="https://images.unsplash.com/photo-1533228876829-65c94e7b5025?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="post card"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {post.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Badge badgeContent={likes?.length} color={"primary"}>
              <Checkbox
                checked={hasUserLiked ? true : false}
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite sx={{ color: "red" }} />}
                onChange={hasUserLiked ? removeLike : addLike}
              />
            </Badge>
          </IconButton>
          <IconButton onClick={handleCommentClick}>
            <CommentIcon />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>
      <Collapse in={commentChecked} unmountOnExit>
        <Comments postId={post.postId} />
      </Collapse>
    </>
  );
}

export default Post;
