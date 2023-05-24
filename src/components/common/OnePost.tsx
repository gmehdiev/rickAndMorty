import { FC } from "react";
import { Post } from "../../core/interfaces/Interface";
import { Box, Typography } from "@mui/material";

interface OnePost {
  post: Post;
}

export const OnePost: FC<OnePost> = ({ post }) => {
  console.log(post);
  return (
    <Box sx={{ display: "flex", color: "text.primary" }}>
      <img src={post.image} />

      <Box sx={{ ml: 3 }}>
        <Typography variant="h3">Name: {post.name}</Typography>
        <Typography variant="h4">Status: {post.status}</Typography>
        <Typography variant="h4">Spesies: {post.species}</Typography>
        <Typography variant="h4">Gender: {post.gender}</Typography>
        <Typography variant="h4">Birth: {post.origin.name}</Typography>
      </Box>
    </Box>
  );
};
