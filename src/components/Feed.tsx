import { Box } from "@mui/material";
import Post from "./Post";
import { useState, useEffect } from "react";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../config/firebase";
import { useDispatch } from "react-redux";
import { loadUsers } from "../store/store";

export interface Post {
  postId: string;
  title: string;
  description: string;
  tag: string;
  userId: string;
  userName: string;
  createdAt: string;
}

function Feed() {
  const dispatch = useDispatch();
  const usersRef = collection(db, "users-registered");
  const usersQuery = query(usersRef, where("userId", "!=", null));
  const postRef = collection(db, "posts");
  const [postList, setPostList] = useState<Post[] | null>(null);
  const getPosts = async () => {
    const data = await getDocs(postRef);
    setPostList(
      data.docs.map((doc) => ({ ...doc.data(), postId: doc.id })) as Post[]
    );
  };

  const getUsers = async () => {
    const data = await getDocs(usersQuery);
    dispatch(
      loadUsers(
        data.docs.map((doc) => ({
          userId: doc.data().userId,
          userName: doc.data().userName,
          photoURL: doc.data().photoURL,
        }))
      )
    );
  };
  useEffect(() => {
    getPosts();
    getUsers();
  }, []);
  return (
    <Box flex={4} p={2}>
      {postList?.map((post) => (
        <Post post={post} />
      ))}
    </Box>
  );
}

export default Feed;
