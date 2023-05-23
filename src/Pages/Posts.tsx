import { RootState, useThunkDispatch } from "../core/store/slice";
import { useSelector } from "react-redux";
import { FetchPosts } from "../core/store/сharacters.Slice";
import { useEffect, useState } from "react";
import { CharacterLi } from "../components/common/CharacterLi";
import { Box, CircularProgress } from "@mui/material";
import { NextPrev } from "../components/common/NextPrev";
import { Form } from "../components/Form";

export const Posts = () => {
  const dispatch = useThunkDispatch();
  const { character } = useSelector((state: RootState) => state);

  useEffect(() => {
    dispatch(FetchPosts());
  }, []);
  return (
    <>
      <NextPrev />
      <Form />
      {character.status === "loading" ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress size="300px" />
        </Box>
      ) : typeof character.data?.results === "undefined" ? (
        <>Нихуя нет</>
      ) : (
        <>
          {character.data.results.map((elem) => (
            <CharacterLi key={elem.id} props={elem} />
          ))}
        </>
      )}
    </>
  );
};

export default Posts;
