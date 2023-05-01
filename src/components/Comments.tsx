import { getDocs, collection, query, where, addDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth, db } from "../config/firebase";
import { Comment } from "./Comment";

import { useAuthState } from "react-firebase-hooks/auth";
import {
  alpha,
  Avatar,
  Box,
  Button,
  Collapse,
  InputBase,
  Paper,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { Height, MoreVert } from "@mui/icons-material";
import uuid from "react-uuid";

interface PostId {
  postId: string;
}
export interface Comment {
  id: string;
  body: string;
  userName: string;
  userId: string;
  parentId: string | null;
  createdAt: string;
}

export const Comments = (props: PostId) => {
  const [user] = useAuthState(auth);

  const [replyCommentId, setReplyCommentId] = useState<string>("");
  const [replyButtonStatus, setreplyButtonStatus] = useState<boolean>(false);
  const { postId } = props;
  const [replies, setReplies] = useState<Comment[] | null>(null);
  const [commentBody, setCommentBody] = useState("");
  const [commentsList, setCommentsList] = useState<Comment[] | null>(null);
  const commentsRef = collection(db, "comments");
  const commentsQuery = query(
    commentsRef,
    where("postId", "==", postId),
    where("parentId", "==", null)
  );
  const getComments = async () => {
    const data = await getDocs(commentsQuery);
    setCommentsList(
      data.docs.map((doc) => ({
        id: doc.data().id,
        body: doc.data().body,
        userName: doc.data().userName,
        userId: doc.data().userId,
        parentId: doc.data().parentId,
        createdAt: doc.data().createdAt,
      }))
    );
    console.log(commentsList);
  };

  const getReplies = async () => {
    const getRepliesQuery = query(
      commentsRef,
      where("postId", "==", postId),
      where("parentId", "!=", null)
    );
    const data = await getDocs(getRepliesQuery);
    setReplies(
      data.docs
        .map((doc) => ({
          id: doc.data().id,
          body: doc.data().body,
          userName: doc.data().userName,
          userId: doc.data().userId,
          parentId: doc.data().parentId,
          createdAt: doc.data().createdAt,
        }))
        .sort(
          (a, b) =>
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        )
    );
  };
  useEffect(() => {
    getComments();
    getReplies();
  }, []);
  const handleText = (event: any) => {
    setCommentBody(event.target.value);
  };
  const handleAddComment = async () => {
    const result = await addDoc(commentsRef, {
      id: uuid(),
      postId: postId,
      body: commentBody,
      userName: user?.displayName,
      userId: user?.uid,
      parentId: null,
      createdAt: new Date().toISOString(),
    });
    result && setCommentBody("");
    getComments();
  };
  const handleAddReply = async () => {
    const result = await addDoc(commentsRef, {
      id: uuid(),
      postId: postId,
      body: commentBody,
      userName: user?.displayName,
      userId: user?.uid,
      parentId: replyCommentId,
      createdAt: new Date().toISOString(),
    });
    result && setCommentBody("");
    getReplies();
    getComments();
  };
  const handleReplay = async (commentId: string) => {
    setReplyCommentId(commentId);
    setreplyButtonStatus(!replyButtonStatus);
  };

  return (
    <Paper elevation={2} sx={{ margin: "10px", padding: "5px" }}>
      {commentsList?.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
          replies={replies}
          handleReplay={() => handleReplay(comment.id)}
        />
      ))}
      <Box
        display={"flex"}
        padding={1}
        gap={1}
        alignItems="center"
        justifyContent={"center"}
      >
        <TextField
          placeholder={
            replyButtonStatus ? "Write your comment..." : "Write reply..."
          }
          sx={{ width: "80%", borderRadius: "25px" }}
          onChange={handleText}
          margin={"dense"}
          size={"small"}
          value={commentBody}
        />
        {replyButtonStatus ? (
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddComment}
          >
            Send
          </Button>
        ) : (
          <Button variant="contained" color="primary" onClick={handleAddReply}>
            Replay
          </Button>
        )}
      </Box>
    </Paper>
  );
};
