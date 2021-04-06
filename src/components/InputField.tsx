import React, { InputHTMLAttributes } from "react";
import { useField } from "formik";
import {
  Box,
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
    <Box width='200px' margin='10px'>
      <FormControl>
        <InputLabel error={!!error} htmlFor={field.name}>{lable}</InputLabel>
        <TextField error={!!error} margin='normal' multiline={textarea} {...field} id={field.name} />
      </FormControl>
    </Box>
  );
};
