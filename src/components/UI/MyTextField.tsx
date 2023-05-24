import { TextField } from "@mui/material";
import { FC } from "react";

interface MyTextField {
  value: {
    current: {
      [key: string]: string;
    };
  };
  field: string;
  filter: () => void;
}

export const MyTextField: FC<MyTextField> = ({ value, field, filter }) => {
  return (
    <TextField
      autoComplete="off"
      value={value.current[field]}
      onChange={(e) => {
        value.current[field] = e.target.value;
        filter();
      }}
      id="outlined-basic"
      label={field}
      variant="standard"
    />
  );
};
