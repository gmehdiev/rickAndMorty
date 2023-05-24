import { Box } from "@mui/material";
import { useRef } from "react";
import { FetchFilterPosts, FetchPosts } from "../core/store/сharacters.Slice";
import { useThunkDispatch } from "../core/store/slice";
import { MySelect } from "./UI/MySelect";
import { MyTextField } from "./UI/MyTextField";

export const Form = () => {
  const value = useRef({
    name: "",
    species: "",
    type: "",
    gender: "",
    status: "",
  });

  const dispatch = useThunkDispatch();
  const filter = () => {
    console.log(value);
    if (
      value.current.name === "" &&
      value.current.species === "" &&
      value.current.type === "" &&
      value.current.gender === "" &&
      value.current.status === ""
    ) {
      dispatch(FetchPosts());
      return;
    }
    console.log(value);
    dispatch(FetchFilterPosts(value.current));
  };

  const gender = ["female", "male", "genderless", "unknown"];
  const status = ["alive", "dead", "unknown"];
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      <MyTextField value={value} field={"name"} filter={filter} />
      <MyTextField value={value} field={"species"} filter={filter} />
      <MyTextField value={value} field={"type"} filter={filter} />
      <MySelect
        value={value}
        field={"gender"}
        filter={filter}
        mapItem={gender}
      />
      <MySelect
        value={value}
        field={"status"}
        filter={filter}
        mapItem={status}
      />
    </Box>
  );
};
