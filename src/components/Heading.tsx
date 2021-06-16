import { Box, Center, Text } from "@chakra-ui/layout";
import React from "react";

interface HeadingProps {}

export const Heading: React.FC<HeadingProps> = ({}) => {
  return (
    <Center>
      <Text fontSize="large" align='center'>ChefNotes</Text>
    </Center>
  );
};
