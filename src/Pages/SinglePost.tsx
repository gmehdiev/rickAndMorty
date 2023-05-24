import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { RootState, useThunkDispatch } from "../core/store/slice";
import { SingleFetchPost } from "../core/store/сharacters.Slice";
import { useSelector } from "react-redux";
import { Wrapper } from "../components/Wrappers/Wrapper";
import { Box, CircularProgress } from "@mui/material";
import { OnePost } from "../components/common/OnePost";

export const SinglePost = () => {
  const { id } = useParams();
  const { character } = useSelector((state: RootState) => state);

  const dispatch = useThunkDispatch();
  useEffect(() => {
    dispatch(SingleFetchPost(id));
  }, []);
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Wrapper>
          {character.FetchOnePost.status === "loading" ? (
            <CircularProgress size="300px" />
          ) : character.FetchOnePost.data === null ? (
            <>нихуя нет</>
          ) : (
            <OnePost post={character.FetchOnePost.data} />
          )}
        </Wrapper>
      </Box>
    </>
  );
};
