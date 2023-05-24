import { RootState, useThunkDispatch } from "../core/store/slice";
import { useSelector } from "react-redux";
import { FetchPosts } from "../core/store/сharacters.Slice";
import { useEffect } from "react";
import { CharacterLi } from "../components/common/CharacterLi";
import { Box, CircularProgress } from "@mui/material";
import { NextPrev } from "../components/common/NextPrev";
import { Form } from "../components/Form";
import { Wrapper } from "../components/Wrappers/Wrapper";

export const Posts = () => {
  const dispatch = useThunkDispatch();
  const { character } = useSelector((state: RootState) => state);

  useEffect(() => {
    dispatch(FetchPosts());
  }, []);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          color: "text.primary",
        }}
      >
        <Wrapper>
          <NextPrev />
          <Form />
          {character.FetchPosts.status === "loading" ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CircularProgress size="300px" />
            </Box>
          ) : typeof character.FetchPosts.data?.results === "undefined" ? (
            <>Нихуя нет</>
          ) : (
            <>
              {character.FetchPosts.data.results.map((elem) => (
                <CharacterLi key={elem.id} props={elem} />
              ))}
            </>
          )}
        </Wrapper>
      </Box>
    </>
  );
};

export default Posts;
