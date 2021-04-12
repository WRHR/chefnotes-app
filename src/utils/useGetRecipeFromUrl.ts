import { useBaseRecipeQuery } from "../generated/graphql";
import { useGetIntId } from "./useGetIntId";

export const useGetRecipeFromUrl = () => {
  const intId = useGetIntId();
  return useBaseRecipeQuery({
    skip: intId === -1,
    variables: {
      id: intId,
    },
  });
};
