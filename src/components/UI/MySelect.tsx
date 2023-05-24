import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { FC } from "react";

interface MySelect {
  value: {
    current: {
      [key: string]: string;
    };
  };
  field: string;
  filter: () => void;
  mapItem: string[];
  label: string;
}

export const MySelect: FC<MySelect> = ({
  value,
  field,
  filter,
  mapItem,
  label,
}) => {
  const getChildData = (e: any) => {
    console.log(e.target.value);
    value.current[field] = e.target.value;
    filter();
  };

  return (
    <FormControl variant="standard" sx={{ minWidth: 120 }}>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        value={value.current[field]}
        onChange={(e) => {
          getChildData(e);
        }}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
      >
        <MenuItem value="">None</MenuItem>
        {mapItem.map((item) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
