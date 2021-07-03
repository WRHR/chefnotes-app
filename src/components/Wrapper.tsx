import { Box } from "@chakra-ui/layout";
import React from "react";
import {colors} from '../theme/colors'

export type WrapperVariant = "small" | "regular";
interface WrapperProps {
  variant?: WrapperVariant;
  background:'primary'|'secondary'
}

export const Wrapper: React.FC<WrapperProps> = ({ children, variant, background }) => {
  return (
    <Box
      mt={8}
      padding='10px'
      mx="auto"
      maxW={variant === "regular" ? "800px" : "400px"}
      w="100%"
      backgroundColor={colors[background]||undefined}
    >
      {children}
    </Box>
  );
};
