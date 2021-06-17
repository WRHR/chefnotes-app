import { Button } from "@chakra-ui/button";
import { Box, Flex } from "@chakra-ui/layout";
import React, { useState } from "react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

interface EditPanelProps {
  setEditMode: Function;
  id: number;
}

export const EditPanel: React.FC<EditPanelProps> = ({setEditMode, id}) => {
  const [promptConfirm, setPromptConfirm]= useState(false)
  return (
    <Flex>
      <Box as="button" onClick={()=>setEditMode(id)}>
        <EditIcon />
      </Box>
      <Box as="button">
        <DeleteIcon onClick={()=>setPromptConfirm(true)}/>
      </Box>
    </Flex>
  );
};
