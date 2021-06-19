import { Button } from "@chakra-ui/button";
import { Box, Flex } from "@chakra-ui/layout";
import React, { useRef, useState } from "react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useDisclosure } from "@chakra-ui/hooks";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
} from "@chakra-ui/modal";
import { useDeleteBaseRecipeMutation } from "../generated/graphql";

interface EditPanelProps {
  setEditMode: Function;
  id: number;
}

export const EditPanel: React.FC<EditPanelProps> = ({ setEditMode, id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef(null);

  return (
    <>
      <Flex>
        <Box as="button" onClick={() => setEditMode(id)}>
          <EditIcon />
        </Box>
        <Box as="button">
          <DeleteIcon onClick={onOpen} />
        </Box>
      </Flex>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogHeader>Delete Recipe?</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            Are you sure you want to delete this recipe?
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button
              onClick={() => useDeleteBaseRecipeMutation({ variables: { id } })}
            >
              Yes
            </Button>
            <Button ref={cancelRef} onClick={onClose}>
              No
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
