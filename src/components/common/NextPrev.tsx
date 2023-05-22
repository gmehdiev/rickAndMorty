import { Box, Button } from "@mui/material";
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
        onClick={() => dispatch(FetchPosts(character.data.info.prev))}
      >
        PREV
      </Button>
      <Button
        variant="outlined"
        onClick={() => dispatch(FetchPosts(character.data.info.next))}
      >
        NEXT
      </Button>
    </Box>
  );
};
