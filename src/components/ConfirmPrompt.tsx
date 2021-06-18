import { Button } from '@chakra-ui/button';
import { Box, Flex, Text } from '@chakra-ui/layout';
import React from 'react'
import { useDeleteBaseRecipeMutation } from '../generated/graphql';

interface ConfirmPromptProps {

}

export const ConfirmPrompt: React.FC<ConfirmPromptProps> = ({}) => {
    return (
      <Box>
        <Text>Are you sure?</Text>
        <Flex>
          <Button onClick={()=>useDeleteBaseRecipeMutation()}>Yes</Button>
          <Button>No</Button>
        </Flex>
      </Box>
    );
}