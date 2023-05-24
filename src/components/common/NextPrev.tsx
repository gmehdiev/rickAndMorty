import { Box, Button, Typography } from "@mui/material";
import { FetchPosts } from "../../core/store/сharacters.Slice";
import { RootState, useThunkDispatch } from "../../core/store/slice";
import { useSelector } from "react-redux";

export const NextPrev = () => {
  const dispatch = useThunkDispatch();
  const { character } = useSelector((state: RootState) => state);

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Button
        variant="outlined"
        onClick={() =>
          dispatch(FetchPosts(character.FetchPosts.data.info.prev))
        }
      >
        PREV
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
        NEXT
      </Button>
    </Box>
  );
};
