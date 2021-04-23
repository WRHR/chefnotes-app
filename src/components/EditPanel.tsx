import { Button } from "@chakra-ui/button";
import { Box, Flex } from "@chakra-ui/layout";
import React from "react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

interface EditPanelProps {}

export const EditPanel: React.FC<EditPanelProps> = ({}) => {
  return (
    <Flex>
      <EditIcon />
      <DeleteIcon />
    </Flex>
  );
};
