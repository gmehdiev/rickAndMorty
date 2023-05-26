import { TextField } from "@mui/material";
import { FC } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
interface MyTextField {
  value: {
    current: {
      [key: string]: string;
    };
  };
  field: string;
  filter: () => void;
  label: string;
}

export const MyTextField: FC<MyTextField> = ({
  value,
  field,
  filter,
  label,
}) => {
  const validationSchema = yup.object({
    value: yup
      .string()
      .matches(/^[a-zA-Z1-9.'-]+$/, "Only letters are allowed")
      .nullable()
      .optional(),
  });
  const formik = useFormik({
    initialValues: { value: value.current[field] },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <TextField
      autoComplete="off"
      value={formik.values.value}
      onChange={(e) => {
        formik.validateField("value");
        formik.values.value = e.target.value;

        if (e.target.value == "") {
          value.current[field] = e.target.value;
          filter();
        }
        if (!!formik.errors.value) return;
        value.current[field] = e.target.value;
        formik.handleChange(e);
        filter();
      }}
      id="outlined-basic"
      label={label}
      variant="standard"
      error={!!formik.errors.value}
      helperText={!!formik.errors.value ? "Разрешенные символы A-Z 1-9" : null}
    />
  );
};
