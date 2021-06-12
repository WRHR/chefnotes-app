import { Box, Text } from "@chakra-ui/layout";
import React from "react";

interface HeadingProps {}

export const Heading: React.FC<HeadingProps> = ({}) => {
  return (
    <Box>
      <Text fontSize="large" align='center'>ChefNotes</Text>
    </Box>
  );
};
