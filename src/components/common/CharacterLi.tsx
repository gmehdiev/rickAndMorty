import { Box, IconButton, Typography } from "@mui/material";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import { Post } from "../../core/interfaces/Interface";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface CharacterLi {
  props: Post;
}

export const CharacterLi: FC<CharacterLi> = ({ props }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        mt: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <img src={props.image} />
      <Typography variant="h2">{props.name}</Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="subtitle1">
          {t("Species")}: {props.species}
        </Typography>
        <Typography variant="subtitle1">
          {t("Status")}: {props.status}
        </Typography>
        <Typography variant="subtitle1">
          {t("Gender")}: {props.gender}
        </Typography>
      </Box>
      <IconButton
        onClick={() => navigate(`/posts/${props.id}`)}
        sx={{ width: "150px", height: "150px" }}
        color="primary"
        aria-label="upload picture"
        component="label"
      >
        <OpenInFullIcon
          sx={{ width: "100px", height: "100px", color: "text.primary" }}
        />
      </IconButton>
    </Box>
  );
};
