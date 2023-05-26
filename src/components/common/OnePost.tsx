import { FC } from "react";
import { Post } from "../../core/interfaces/Interface";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

interface OnePost {
  post: Post;
}

export const OnePost: FC<OnePost> = ({ post }) => {
  const { t } = useTranslation();
  return (
    <Box sx={{ display: "flex", color: "text.primary" }}>
      <img src={post.image} />

      <Box sx={{ ml: 3 }}>
        <Typography variant="h3">
          {t("Name")}: {post.name}
        </Typography>
        <Typography variant="h4">
          {t("Status")}: {post.status}
        </Typography>
        <Typography variant="h4">
          {t("Species")}: {post.species}
        </Typography>
        <Typography variant="h4">
          {t("Gender")}: {post.gender}
        </Typography>
        <Typography variant="h4">
          {t("Birth")}: {post.origin.name}
        </Typography>
        <Typography variant="h4">
          {t("Type")}: {post.type}
        </Typography>
      </Box>
    </Box>
  );
};
//   "Next": "Next",
//   "Prev": "Prev"
