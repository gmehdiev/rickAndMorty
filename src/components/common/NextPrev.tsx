import { Box, Button, Typography } from "@mui/material";
import { FetchPosts } from "../../core/store/сharacters.Slice";
import { RootState, useThunkDispatch } from "../../core/store/slice";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

export const NextPrev = () => {
  const dispatch = useThunkDispatch();
  const { character } = useSelector((state: RootState) => state);
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Button
        variant="outlined"
        onClick={() =>
          dispatch(FetchPosts(character.FetchPosts.data.info.prev))
        }
      >
        {t("Prev")}
      </Button>
      <Typography variant="h4">
        Total item: {character.FetchPosts.data.info.count}
      </Typography>
      <Button
        variant="outlined"
        onClick={() =>
          dispatch(FetchPosts(character.FetchPosts.data.info.next))
        }
      >
        {t("Next")}
      </Button>
    </Box>
  );
};
