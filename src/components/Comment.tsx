import { Comment as IComment } from "./Comments";
import moment from "moment";
import { loadUsers } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Divider,
  styled,
  Typography,
} from "@mui/material";
import { Favorite, FavoriteBorder, MoreVert } from "@mui/icons-material";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../config/firebase";
import ReplyIcon from "@mui/icons-material/Reply";
import { Stack } from "@mui/system";
import { Replies } from "./Replies";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";

interface Props {
  comment: IComment;
  replies: IComment[] | null;
  handleReplay: (commentId: string) => void;
}
export interface User {
  userId: string;
  userName: string;
  photoURL: string;
}

export const Comment = (props: Props) => {
  const users = useSelector((state: any) => state.users.value) as User[];
  const { comment, replies, handleReplay } = props;
  console.log(users);

  const UserContainer = styled(Box)({
    display: "flex",
    padding: "5px",
    gap: "20px",
  });
  const handleReplyClick = () => {
    handleReplay(comment.id);
  };

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <UserContainer>
          <Avatar
            sx={{ width: "25px", height: "25px" }}
            src={
              users?.find((user) => user.userId === comment.userId)?.photoURL ||
              ""
            }
          />
          <Typography fontSize={"small"} fontWeight="400">
            {comment.userName}
          </Typography>
          <Typography fontSize={"small"} sx={{ color: "gray" }}>
            {moment(comment.createdAt).fromNow()}
          </Typography>
        </UserContainer>
        <Button sx={{ color: "gray" }}>
          <MoreVert />
        </Button>
      </Box>
      <Typography pl={3}>{comment.body}</Typography>
      <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
        <Stack direction={"row"} marginLeft={2}>
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
          <Button>
            <ReplyIcon onClick={handleReplyClick} />
          </Button>
        </Stack>
      </Box>
      {replies &&
        replies.map((reply) => (
          <Replies reply={reply} commentId={comment.id} />
        ))}
      <Divider />
    </Box>
  );
};
