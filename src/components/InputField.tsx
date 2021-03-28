import React, { InputHTMLAttributes } from "react";
import { useField } from "formik";
import {
  FormControl,
  FormControlLabel,
  InputLabel,
  TextField,
} from "@material-ui/core";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  lable: string;
  name: string;
  textarea?: boolean;
};

export const InputField: React.FC<InputFieldProps> = ({
  lable,
  textarea,
  size: _,
  ...props
}) => {
  const [field, { error }] = useField(props);
  return (
    <FormControl>
      <InputLabel htmlFor={field.name}>{lable}</InputLabel>
      <TextField error multiline={textarea} {...field} id={field.name} />
    </FormControl>
  );
};
