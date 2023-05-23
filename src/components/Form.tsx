import { Box, Button, TextField } from "@mui/material";
import { useRef, useState } from "react";
import { FetchFilterPosts, FetchPosts } from "../core/store/сharacters.Slice";
import { useThunkDispatch } from "../core/store/slice";

export const Form = () => {
  const value = useRef({
    name: "",
    species: "",
    type: "",
  });
  const dispatch = useThunkDispatch();
  const filter = () => {
    if (
      value.current.name === "" &&
      value.current.species === "" &&
      value.current.type === ""
    ) {
      dispatch(FetchPosts());
      return;
    }
    console.log(value);
    dispatch(FetchFilterPosts(value.current));
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      <TextField
        value={value.current.name}
        onChange={(e) => {
          value.current.name = e.target.value;
          filter();
        }}
        id="outlined-basic"
        label="Name"
        variant="outlined"
      />
      <TextField
        value={value.current.species}
        onChange={(e) => {
          value.current.species = e.target.value;
          filter();
        }}
        id="outlined-basic"
        label="Species"
        variant="outlined"
      />
      <TextField
        value={value.current.type}
        onChange={(e) => {
          value.current.type = e.target.value;
          filter();
        }}
        id="outlined-basic"
        label="Type"
        variant="outlined"
      />
    </Box>
  );
};
