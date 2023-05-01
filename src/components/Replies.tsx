import { Comment as IComment } from "./Comments";
import { useSelector } from "react-redux";
import moment from "moment";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Divider,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import { Favorite, FavoriteBorder, MoreVert } from "@mui/icons-material";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";
import { User } from "./Comment";

interface Reply {
  reply: IComment;
  commentId: string;
}
export const Replies = (props: Reply) => {
  const users = useSelector((state: any) => state.users.value) as User[];
  const UserContainer = styled(Box)({
    display: "flex",
    padding: "5px",
    gap: "20px",
  });
  const [user] = useAuthState(auth);
  const { reply, commentId } = props;
  return reply.parentId !== null && reply.parentId === commentId ? (
    <Box marginLeft={"10%"}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <UserContainer>
          <Avatar
            sx={{ width: "25px", height: "25px" }}
            src={
              users?.find((user) => user.userId === reply.userId)?.photoURL ||
              ""
            }
          />
          <Typography fontSize={"small"} fontWeight="400">
            {reply.userName}
          </Typography>
          <Typography fontSize={"small"} sx={{ color: "gray" }}>
            {moment(reply.createdAt).fromNow()}
          </Typography>
        </UserContainer>
        <Button sx={{ color: "gray" }}>
          <MoreVert />
        </Button>
      </Box>
      <Typography pl={3}>{reply.body}</Typography>
      <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
        <Stack direction={"row"} marginLeft={2}>
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </Stack>
      </Box>
      <Divider />
    </Box>
  ) : null;
};
