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
  type?: string
};

export const InputField: React.FC<InputFieldProps> = ({
  lable,
  textarea,
  size: _,
  type,
  ...props
}) => {
  const [field, { error }] = useField(props);
  return (
    <Box width='200px' margin='10px'>
      <FormControl>
        <InputLabel htmlFor={field.name}>{lable}</InputLabel>
        <TextField type={type} error={!!error} margin='normal' multiline={textarea} {...field} id={field.name} />
      </FormControl>
    </Box>
  );
};
