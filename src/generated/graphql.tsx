import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<User>;
  recipesAll: Array<BaseRecipe>;
  baseRecipes: PaginatedRecipes;
  userBaseRecipes: Array<BaseRecipe>;
  baseRecipe?: Maybe<BaseRecipe>;
  recipeIngredients: Array<Ingredient>;
  recipeInstructions: Array<Instruction>;
};


export type QueryBaseRecipesArgs = {
  cursor?: Maybe<Scalars['String']>;
  limit: Scalars['Int'];
};


export type QueryBaseRecipeArgs = {
  id: Scalars['Int'];
};


export type QueryRecipeIngredientsArgs = {
  original: Scalars['Boolean'];
  recipeId: Scalars['Int'];
};


export type QueryRecipeInstructionsArgs = {
  original: Scalars['Boolean'];
  recipeId: Scalars['Int'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['Float'];
  username: Scalars['String'];
  email: Scalars['String'];
};

export type BaseRecipe = {
  __typename?: 'BaseRecipe';
  id: Scalars['Float'];
  name: Scalars['String'];
  description: Scalars['String'];
  creatorId: Scalars['Float'];
};

export type PaginatedRecipes = {
  __typename?: 'PaginatedRecipes';
  recipes: Array<BaseRecipe>;
  hasMore: Scalars['Boolean'];
};

export type Ingredient = {
  __typename?: 'Ingredient';
  id: Scalars['Float'];
  name: Scalars['String'];
  quantity: Scalars['Float'];
  measurement: Scalars['String'];
};

export type Instruction = {
  __typename?: 'Instruction';
  id: Scalars['Float'];
  description: Scalars['String'];
  position: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  register: UserResponse;
  login: UserResponse;
  logout: Scalars['Boolean'];
  createBaseRecipe: BaseRecipe;
  updateBaseRecipe: BaseRecipe;
  deleteBaseRecipe: Scalars['Boolean'];
  createIngredient: Ingredient;
  updateIngredient?: Maybe<Ingredient>;
  deleteIngredient: Scalars['Boolean'];
  createInstruction: Instruction;
  updateInstruction?: Maybe<Instruction>;
  deleteInstruction: Scalars['Boolean'];
};


export type MutationRegisterArgs = {
  options: UsernamePasswordInput;
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  usernameOrEmail: Scalars['String'];
};


export type MutationCreateBaseRecipeArgs = {
  input: RecipeInput;
};


export type MutationUpdateBaseRecipeArgs = {
  description: Scalars['String'];
  name: Scalars['String'];
  id: Scalars['Int'];
};


export type MutationDeleteBaseRecipeArgs = {
  id: Scalars['Int'];
};


export type MutationCreateIngredientArgs = {
  recipeId: Scalars['Int'];
  original: Scalars['Boolean'];
  input: IngredientInput;
};


export type MutationUpdateIngredientArgs = {
  input: IngredientInput;
  id: Scalars['Int'];
};


export type MutationDeleteIngredientArgs = {
  id: Scalars['Int'];
};


export type MutationCreateInstructionArgs = {
  recipeId: Scalars['Int'];
  original: Scalars['Boolean'];
  input: InstructionInput;
};


export type MutationUpdateInstructionArgs = {
  input: InstructionInput;
  id: Scalars['Int'];
};


export type MutationDeleteInstructionArgs = {
  id: Scalars['Int'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type UsernamePasswordInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type RecipeInput = {
  name: Scalars['String'];
  description: Scalars['String'];
};

export type IngredientInput = {
  name: Scalars['String'];
  quantity: Scalars['Float'];
  measurement: Scalars['String'];
};

export type InstructionInput = {
  description: Scalars['String'];
  position: Scalars['Float'];
};

export type RegularErrorFragment = (
  { __typename?: 'FieldError' }
  & Pick<FieldError, 'field' | 'message'>
);

export type RegularUserFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'username'>
);

export type RegularUserResponseFragment = (
  { __typename?: 'UserResponse' }
  & { errors?: Maybe<Array<(
    { __typename?: 'FieldError' }
    & RegularErrorFragment
  )>>, user?: Maybe<(
    { __typename?: 'User' }
    & RegularUserFragment
  )> }
);

export type CreateBaseRecipeMutationVariables = Exact<{
  input: RecipeInput;
}>;


export type CreateBaseRecipeMutation = (
  { __typename?: 'Mutation' }
  & { createBaseRecipe: (
    { __typename?: 'BaseRecipe' }
    & Pick<BaseRecipe, 'id' | 'name' | 'description'>
  ) }
);

export type CreateIngredientMutationVariables = Exact<{
  input: IngredientInput;
  original: Scalars['Boolean'];
  recipeId: Scalars['Int'];
}>;


export type CreateIngredientMutation = (
  { __typename?: 'Mutation' }
  & { createIngredient: (
    { __typename?: 'Ingredient' }
    & Pick<Ingredient, 'id' | 'name' | 'quantity' | 'measurement'>
  ) }
);

export type CreateInstructionMutationVariables = Exact<{
  input: InstructionInput;
  original: Scalars['Boolean'];
  recipeId: Scalars['Int'];
}>;


export type CreateInstructionMutation = (
  { __typename?: 'Mutation' }
  & { createInstruction: (
    { __typename?: 'Instruction' }
    & Pick<Instruction, 'id' | 'description' | 'position'>
  ) }
);

export type DeleteBaseRecipeMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteBaseRecipeMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteBaseRecipe'>
);

export type LoginMutationVariables = Exact<{
  usernameOrEmail: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'UserResponse' }
    & RegularUserResponseFragment
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type RegisterMutationVariables = Exact<{
  options: UsernamePasswordInput;
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'UserResponse' }
    & RegularUserResponseFragment
  ) }
);

export type UpdateBaseRecipeMutationVariables = Exact<{
  id: Scalars['Int'];
  name: Scalars['String'];
  description: Scalars['String'];
}>;


export type UpdateBaseRecipeMutation = (
  { __typename?: 'Mutation' }
  & { updateBaseRecipe: (
    { __typename?: 'BaseRecipe' }
    & Pick<BaseRecipe, 'id' | 'name' | 'description'>
  ) }
);

export type UpdateIngredientMutationVariables = Exact<{
  id: Scalars['Int'];
  input: IngredientInput;
}>;


export type UpdateIngredientMutation = (
  { __typename?: 'Mutation' }
  & { updateIngredient?: Maybe<(
    { __typename?: 'Ingredient' }
    & Pick<Ingredient, 'id' | 'name' | 'quantity' | 'measurement'>
  )> }
);

export type UpdateInstructionMutationVariables = Exact<{
  id: Scalars['Int'];
  input: InstructionInput;
}>;


export type UpdateInstructionMutation = (
  { __typename?: 'Mutation' }
  & { updateInstruction?: Maybe<(
    { __typename?: 'Instruction' }
    & Pick<Instruction, 'id' | 'position' | 'description'>
  )> }
);

export type BaseRecipeQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type BaseRecipeQuery = (
  { __typename?: 'Query' }
  & { baseRecipe?: Maybe<(
    { __typename?: 'BaseRecipe' }
    & Pick<BaseRecipe, 'id' | 'name' | 'description'>
  )> }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & RegularUserFragment
  )> }
);

export type RecipeIngredientsQueryVariables = Exact<{
  id: Scalars['Int'];
  original: Scalars['Boolean'];
}>;


export type RecipeIngredientsQuery = (
  { __typename?: 'Query' }
  & { recipeIngredients: Array<(
    { __typename?: 'Ingredient' }
    & Pick<Ingredient, 'id' | 'name' | 'measurement' | 'quantity'>
  )> }
);

export type RecipeInstructionsQueryVariables = Exact<{
  id: Scalars['Int'];
  original: Scalars['Boolean'];
}>;


export type RecipeInstructionsQuery = (
  { __typename?: 'Query' }
  & { recipeInstructions: Array<(
    { __typename?: 'Instruction' }
    & Pick<Instruction, 'id' | 'position' | 'description'>
  )> }
);

export type UserBaseRecipesQueryVariables = Exact<{ [key: string]: never; }>;


export type UserBaseRecipesQuery = (
  { __typename?: 'Query' }
  & { userBaseRecipes: Array<(
    { __typename?: 'BaseRecipe' }
    & Pick<BaseRecipe, 'id' | 'name' | 'description'>
  )> }
);

export const RegularErrorFragmentDoc = gql`
    fragment RegularError on FieldError {
  field
  message
}
    `;
export const RegularUserFragmentDoc = gql`
    fragment RegularUser on User {
  id
  username
}
    `;
export const RegularUserResponseFragmentDoc = gql`
    fragment RegularUserResponse on UserResponse {
  errors {
    ...RegularError
  }
  user {
    ...RegularUser
  }
}
    ${RegularErrorFragmentDoc}
${RegularUserFragmentDoc}`;
export const CreateBaseRecipeDocument = gql`
    mutation CreateBaseRecipe($input: RecipeInput!) {
  createBaseRecipe(input: $input) {
    id
    name
    description
  }
}
    `;
export type CreateBaseRecipeMutationFn = Apollo.MutationFunction<CreateBaseRecipeMutation, CreateBaseRecipeMutationVariables>;

/**
 * __useCreateBaseRecipeMutation__
 *
 * To run a mutation, you first call `useCreateBaseRecipeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBaseRecipeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBaseRecipeMutation, { data, loading, error }] = useCreateBaseRecipeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateBaseRecipeMutation(baseOptions?: Apollo.MutationHookOptions<CreateBaseRecipeMutation, CreateBaseRecipeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateBaseRecipeMutation, CreateBaseRecipeMutationVariables>(CreateBaseRecipeDocument, options);
      }
export type CreateBaseRecipeMutationHookResult = ReturnType<typeof useCreateBaseRecipeMutation>;
export type CreateBaseRecipeMutationResult = Apollo.MutationResult<CreateBaseRecipeMutation>;
export type CreateBaseRecipeMutationOptions = Apollo.BaseMutationOptions<CreateBaseRecipeMutation, CreateBaseRecipeMutationVariables>;
export const CreateIngredientDocument = gql`
    mutation CreateIngredient($input: IngredientInput!, $original: Boolean!, $recipeId: Int!) {
  createIngredient(input: $input, original: $original, recipeId: $recipeId) {
    id
    name
    quantity
    measurement
  }
}
    `;
export type CreateIngredientMutationFn = Apollo.MutationFunction<CreateIngredientMutation, CreateIngredientMutationVariables>;

/**
 * __useCreateIngredientMutation__
 *
 * To run a mutation, you first call `useCreateIngredientMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateIngredientMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createIngredientMutation, { data, loading, error }] = useCreateIngredientMutation({
 *   variables: {
 *      input: // value for 'input'
 *      original: // value for 'original'
 *      recipeId: // value for 'recipeId'
 *   },
 * });
 */
export function useCreateIngredientMutation(baseOptions?: Apollo.MutationHookOptions<CreateIngredientMutation, CreateIngredientMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateIngredientMutation, CreateIngredientMutationVariables>(CreateIngredientDocument, options);
      }
export type CreateIngredientMutationHookResult = ReturnType<typeof useCreateIngredientMutation>;
export type CreateIngredientMutationResult = Apollo.MutationResult<CreateIngredientMutation>;
export type CreateIngredientMutationOptions = Apollo.BaseMutationOptions<CreateIngredientMutation, CreateIngredientMutationVariables>;
export const CreateInstructionDocument = gql`
    mutation CreateInstruction($input: InstructionInput!, $original: Boolean!, $recipeId: Int!) {
  createInstruction(input: $input, original: $original, recipeId: $recipeId) {
    id
    description
    position
  }
}
    `;
export type CreateInstructionMutationFn = Apollo.MutationFunction<CreateInstructionMutation, CreateInstructionMutationVariables>;

/**
 * __useCreateInstructionMutation__
 *
 * To run a mutation, you first call `useCreateInstructionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateInstructionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createInstructionMutation, { data, loading, error }] = useCreateInstructionMutation({
 *   variables: {
 *      input: // value for 'input'
 *      original: // value for 'original'
 *      recipeId: // value for 'recipeId'
 *   },
 * });
 */
export function useCreateInstructionMutation(baseOptions?: Apollo.MutationHookOptions<CreateInstructionMutation, CreateInstructionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateInstructionMutation, CreateInstructionMutationVariables>(CreateInstructionDocument, options);
      }
export type CreateInstructionMutationHookResult = ReturnType<typeof useCreateInstructionMutation>;
export type CreateInstructionMutationResult = Apollo.MutationResult<CreateInstructionMutation>;
export type CreateInstructionMutationOptions = Apollo.BaseMutationOptions<CreateInstructionMutation, CreateInstructionMutationVariables>;
export const DeleteBaseRecipeDocument = gql`
    mutation DeleteBaseRecipe($id: Int!) {
  deleteBaseRecipe(id: $id)
}
    `;
export type DeleteBaseRecipeMutationFn = Apollo.MutationFunction<DeleteBaseRecipeMutation, DeleteBaseRecipeMutationVariables>;

/**
 * __useDeleteBaseRecipeMutation__
 *
 * To run a mutation, you first call `useDeleteBaseRecipeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteBaseRecipeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteBaseRecipeMutation, { data, loading, error }] = useDeleteBaseRecipeMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteBaseRecipeMutation(baseOptions?: Apollo.MutationHookOptions<DeleteBaseRecipeMutation, DeleteBaseRecipeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteBaseRecipeMutation, DeleteBaseRecipeMutationVariables>(DeleteBaseRecipeDocument, options);
      }
export type DeleteBaseRecipeMutationHookResult = ReturnType<typeof useDeleteBaseRecipeMutation>;
export type DeleteBaseRecipeMutationResult = Apollo.MutationResult<DeleteBaseRecipeMutation>;
export type DeleteBaseRecipeMutationOptions = Apollo.BaseMutationOptions<DeleteBaseRecipeMutation, DeleteBaseRecipeMutationVariables>;
export const LoginDocument = gql`
    mutation Login($usernameOrEmail: String!, $password: String!) {
  login(usernameOrEmail: $usernameOrEmail, password: $password) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      usernameOrEmail: // value for 'usernameOrEmail'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($options: UsernamePasswordInput!) {
  register(options: $options) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const UpdateBaseRecipeDocument = gql`
    mutation UpdateBaseRecipe($id: Int!, $name: String!, $description: String!) {
  updateBaseRecipe(id: $id, name: $name, description: $description) {
    id
    name
    description
  }
}
    `;
export type UpdateBaseRecipeMutationFn = Apollo.MutationFunction<UpdateBaseRecipeMutation, UpdateBaseRecipeMutationVariables>;

/**
 * __useUpdateBaseRecipeMutation__
 *
 * To run a mutation, you first call `useUpdateBaseRecipeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBaseRecipeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBaseRecipeMutation, { data, loading, error }] = useUpdateBaseRecipeMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useUpdateBaseRecipeMutation(baseOptions?: Apollo.MutationHookOptions<UpdateBaseRecipeMutation, UpdateBaseRecipeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateBaseRecipeMutation, UpdateBaseRecipeMutationVariables>(UpdateBaseRecipeDocument, options);
      }
export type UpdateBaseRecipeMutationHookResult = ReturnType<typeof useUpdateBaseRecipeMutation>;
export type UpdateBaseRecipeMutationResult = Apollo.MutationResult<UpdateBaseRecipeMutation>;
export type UpdateBaseRecipeMutationOptions = Apollo.BaseMutationOptions<UpdateBaseRecipeMutation, UpdateBaseRecipeMutationVariables>;
export const UpdateIngredientDocument = gql`
    mutation UpdateIngredient($id: Int!, $input: IngredientInput!) {
  updateIngredient(id: $id, input: $input) {
    id
    name
    quantity
    measurement
  }
}
    `;
export type UpdateIngredientMutationFn = Apollo.MutationFunction<UpdateIngredientMutation, UpdateIngredientMutationVariables>;

/**
 * __useUpdateIngredientMutation__
 *
 * To run a mutation, you first call `useUpdateIngredientMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateIngredientMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateIngredientMutation, { data, loading, error }] = useUpdateIngredientMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateIngredientMutation(baseOptions?: Apollo.MutationHookOptions<UpdateIngredientMutation, UpdateIngredientMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateIngredientMutation, UpdateIngredientMutationVariables>(UpdateIngredientDocument, options);
      }
export type UpdateIngredientMutationHookResult = ReturnType<typeof useUpdateIngredientMutation>;
export type UpdateIngredientMutationResult = Apollo.MutationResult<UpdateIngredientMutation>;
export type UpdateIngredientMutationOptions = Apollo.BaseMutationOptions<UpdateIngredientMutation, UpdateIngredientMutationVariables>;
export const UpdateInstructionDocument = gql`
    mutation UpdateInstruction($id: Int!, $input: InstructionInput!) {
  updateInstruction(id: $id, input: $input) {
    id
    position
    description
  }
}
    `;
export type UpdateInstructionMutationFn = Apollo.MutationFunction<UpdateInstructionMutation, UpdateInstructionMutationVariables>;

/**
 * __useUpdateInstructionMutation__
 *
 * To run a mutation, you first call `useUpdateInstructionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateInstructionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateInstructionMutation, { data, loading, error }] = useUpdateInstructionMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateInstructionMutation(baseOptions?: Apollo.MutationHookOptions<UpdateInstructionMutation, UpdateInstructionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateInstructionMutation, UpdateInstructionMutationVariables>(UpdateInstructionDocument, options);
      }
export type UpdateInstructionMutationHookResult = ReturnType<typeof useUpdateInstructionMutation>;
export type UpdateInstructionMutationResult = Apollo.MutationResult<UpdateInstructionMutation>;
export type UpdateInstructionMutationOptions = Apollo.BaseMutationOptions<UpdateInstructionMutation, UpdateInstructionMutationVariables>;
export const BaseRecipeDocument = gql`
    query BaseRecipe($id: Int!) {
  baseRecipe(id: $id) {
    id
    name
    description
  }
}
    `;

/**
 * __useBaseRecipeQuery__
 *
 * To run a query within a React component, call `useBaseRecipeQuery` and pass it any options that fit your needs.
 * When your component renders, `useBaseRecipeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBaseRecipeQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useBaseRecipeQuery(baseOptions: Apollo.QueryHookOptions<BaseRecipeQuery, BaseRecipeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BaseRecipeQuery, BaseRecipeQueryVariables>(BaseRecipeDocument, options);
      }
export function useBaseRecipeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BaseRecipeQuery, BaseRecipeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BaseRecipeQuery, BaseRecipeQueryVariables>(BaseRecipeDocument, options);
        }
export type BaseRecipeQueryHookResult = ReturnType<typeof useBaseRecipeQuery>;
export type BaseRecipeLazyQueryHookResult = ReturnType<typeof useBaseRecipeLazyQuery>;
export type BaseRecipeQueryResult = Apollo.QueryResult<BaseRecipeQuery, BaseRecipeQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const RecipeIngredientsDocument = gql`
    query RecipeIngredients($id: Int!, $original: Boolean!) {
  recipeIngredients(recipeId: $id, original: $original) {
    id
    name
    measurement
    quantity
  }
}
    `;

/**
 * __useRecipeIngredientsQuery__
 *
 * To run a query within a React component, call `useRecipeIngredientsQuery` and pass it any options that fit your needs.
 * When your component renders, `useRecipeIngredientsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRecipeIngredientsQuery({
 *   variables: {
 *      id: // value for 'id'
 *      original: // value for 'original'
 *   },
 * });
 */
export function useRecipeIngredientsQuery(baseOptions: Apollo.QueryHookOptions<RecipeIngredientsQuery, RecipeIngredientsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RecipeIngredientsQuery, RecipeIngredientsQueryVariables>(RecipeIngredientsDocument, options);
      }
export function useRecipeIngredientsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RecipeIngredientsQuery, RecipeIngredientsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RecipeIngredientsQuery, RecipeIngredientsQueryVariables>(RecipeIngredientsDocument, options);
        }
export type RecipeIngredientsQueryHookResult = ReturnType<typeof useRecipeIngredientsQuery>;
export type RecipeIngredientsLazyQueryHookResult = ReturnType<typeof useRecipeIngredientsLazyQuery>;
export type RecipeIngredientsQueryResult = Apollo.QueryResult<RecipeIngredientsQuery, RecipeIngredientsQueryVariables>;
export const RecipeInstructionsDocument = gql`
    query RecipeInstructions($id: Int!, $original: Boolean!) {
  recipeInstructions(recipeId: $id, original: $original) {
    id
    position
    description
  }
}
    `;

/**
 * __useRecipeInstructionsQuery__
 *
 * To run a query within a React component, call `useRecipeInstructionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useRecipeInstructionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRecipeInstructionsQuery({
 *   variables: {
 *      id: // value for 'id'
 *      original: // value for 'original'
 *   },
 * });
 */
export function useRecipeInstructionsQuery(baseOptions: Apollo.QueryHookOptions<RecipeInstructionsQuery, RecipeInstructionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RecipeInstructionsQuery, RecipeInstructionsQueryVariables>(RecipeInstructionsDocument, options);
      }
export function useRecipeInstructionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RecipeInstructionsQuery, RecipeInstructionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RecipeInstructionsQuery, RecipeInstructionsQueryVariables>(RecipeInstructionsDocument, options);
        }
export type RecipeInstructionsQueryHookResult = ReturnType<typeof useRecipeInstructionsQuery>;
export type RecipeInstructionsLazyQueryHookResult = ReturnType<typeof useRecipeInstructionsLazyQuery>;
export type RecipeInstructionsQueryResult = Apollo.QueryResult<RecipeInstructionsQuery, RecipeInstructionsQueryVariables>;
export const UserBaseRecipesDocument = gql`
    query UserBaseRecipes {
  userBaseRecipes {
    id
    name
    description
  }
}
    `;

/**
 * __useUserBaseRecipesQuery__
 *
 * To run a query within a React component, call `useUserBaseRecipesQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserBaseRecipesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserBaseRecipesQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserBaseRecipesQuery(baseOptions?: Apollo.QueryHookOptions<UserBaseRecipesQuery, UserBaseRecipesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserBaseRecipesQuery, UserBaseRecipesQueryVariables>(UserBaseRecipesDocument, options);
      }
export function useUserBaseRecipesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserBaseRecipesQuery, UserBaseRecipesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserBaseRecipesQuery, UserBaseRecipesQueryVariables>(UserBaseRecipesDocument, options);
        }
export type UserBaseRecipesQueryHookResult = ReturnType<typeof useUserBaseRecipesQuery>;
export type UserBaseRecipesLazyQueryHookResult = ReturnType<typeof useUserBaseRecipesLazyQuery>;
export type UserBaseRecipesQueryResult = Apollo.QueryResult<UserBaseRecipesQuery, UserBaseRecipesQueryVariables>;