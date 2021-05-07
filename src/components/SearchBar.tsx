import { SearchIcon } from "@chakra-ui/icons";
import { Box, Button, Input } from "@chakra-ui/react";
import React from "react";
import { BaseRecipe } from "../generated/graphql";

interface SearchBarProps {
  recipes:
    | ({
        __typename?: "BaseRecipe" | undefined;
      } & Pick<BaseRecipe, "id" | "description" | "name">)[]
    | undefined;
}

export const SearchBar: React.FC<SearchBarProps> = ({ recipes }) => {
  return (
    <Box>
      <Input></Input>
      <Button>
        <SearchIcon />
      </Button>
    </Box>
  );
};
