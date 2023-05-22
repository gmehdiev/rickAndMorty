import { Box, TextField } from "@mui/material";
import { useState } from "react";

export const Form = () => {
  const [value, setValue] = useState({
    name: "",
    species: "",
    type: "",
  });
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      <TextField
        value={value.name}
        onChange={(e) => {
          setValue((prev) => ({ ...prev, name: e.target.value }));
        }}
        id="outlined-basic"
        label="Name"
        variant="outlined"
      />
      <TextField
        value={value.species}
        onChange={(e) => {
          setValue((prev) => ({ ...prev, species: e.target.value }));
        }}
        id="outlined-basic"
        label="Species"
        variant="outlined"
      />
      <TextField
        value={value.type}
        onChange={(e) => {
          setValue((prev) => ({ ...prev, type: e.target.value }));
        }}
        id="outlined-basic"
        label="Type"
        variant="outlined"
      />
    </Box>
  );
};
