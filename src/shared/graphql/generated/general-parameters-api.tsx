import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'

export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  BUFFER: any
  DateTime: any
  _Any: any
  _FieldSet: any
  link__Import: any
}

export type CreateGeneralParameterInput = {
  code: Scalars['String']
  generalParameterValue: Array<GeneralParameterValueInput>
  idGeneralParameterValue?: InputMaybe<Scalars['BUFFER']>
  name: Scalars['String']
  shortName: Scalars['String']
}

export type Entity = {
  __typename?: 'Entity'
  idEntity: Scalars['BUFFER']
}

export type GeneralParameter = {
  __typename?: 'GeneralParameter'
  code: Scalars['String']
  createdAt: Scalars['DateTime']
  generalParameterValue: Array<GeneralParameterValue>
  idGeneralParameter: Scalars['BUFFER']
  idGeneralParameterValue?: Maybe<Scalars['BUFFER']>
  idOu: Scalars['BUFFER']
  idStatus: Scalars['String']
  idUserCreate: Scalars['BUFFER']
  idUserUpdate: Scalars['BUFFER']
  name: Scalars['String']
  shortName: Scalars['String']
  updatedAt: Scalars['DateTime']
}

export type GeneralParameterValue = {
  __typename?: 'GeneralParameterValue'
  code: Scalars['String']
  createdAt: Scalars['DateTime']
  idGeneralParameter?: Maybe<Scalars['BUFFER']>
  idGeneralParameterType: Scalars['BUFFER']
  idGeneralParameterValue: Scalars['BUFFER']
  idOu?: Maybe<Scalars['BUFFER']>
  idStatus: Scalars['String']
  idUserCreate: Scalars['BUFFER']
  idUserUpdate: Scalars['BUFFER']
  name: Scalars['String']
  shortName: Scalars['String']
  type?: Maybe<Scalars['String']>
  updatedAt: Scalars['DateTime']
  value?: Maybe<Scalars['String']>
}

export type GeneralParameterValueInput = {
  code: Scalars['String']
  idGeneralParameter?: InputMaybe<Scalars['BUFFER']>
  idGeneralParameterType?: InputMaybe<Scalars['BUFFER']>
  idGeneralParameterValue?: InputMaybe<Scalars['BUFFER']>
  idOu?: InputMaybe<Scalars['BUFFER']>
  name: Scalars['String']
  shortName: Scalars['String']
  type?: InputMaybe<Scalars['String']>
  value?: InputMaybe<Scalars['String']>
}

export type Mutation = {
  __typename?: 'Mutation'
  createGeneralParameter: GeneralParameter
  deleteGeneralParameter: GeneralParameter
  updateGeneralParameter: GeneralParameter
}

export type MutationCreateGeneralParameterArgs = {
  createGeneralParameterInput: CreateGeneralParameterInput
}

export type MutationDeleteGeneralParameterArgs = {
  id: Scalars['BUFFER']
}

export type MutationUpdateGeneralParameterArgs = {
  updateGeneralParameterInput: UpdateGeneralParameterInput
}

export type Query = {
  __typename?: 'Query'
  _entities: Array<Maybe<_Entity>>
  _service: _Service
  generalParameters: Array<GeneralParameter>
  getAllGeneralParameterValues: Array<GeneralParameterValue>
  getGeneralParameterById: GeneralParameter
  getGeneralParameterValueByArgs: Array<GeneralParameterValue>
  getGeneralParameterValueByGeneralParameterId: Array<GeneralParameterValue>
  getGeneralParameterValueById: GeneralParameterValue
  getGeneralParametersByCode: Array<GeneralParameter>
}

export type Query_EntitiesArgs = {
  representations: Array<Scalars['_Any']>
}

export type QueryGetGeneralParameterByIdArgs = {
  id: Scalars['BUFFER']
}

export type QueryGetGeneralParameterValueByArgsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  userInput: Scalars['String']
}

export type QueryGetGeneralParameterValueByGeneralParameterIdArgs = {
  idGeneralParameter: Scalars['BUFFER']
}

export type QueryGetGeneralParameterValueByIdArgs = {
  idGeneralParameterValue: Scalars['BUFFER']
}

export type QueryGetGeneralParametersByCodeArgs = {
  code: Scalars['String']
}

export type UpdateGeneralParameterInput = {
  code: Scalars['String']
  generalParameterValue: Array<UpdateGeneralParameterValueInput>
  idGeneralParameter: Scalars['BUFFER']
  idGeneralParameterValue?: InputMaybe<Scalars['BUFFER']>
  idOu?: InputMaybe<Scalars['BUFFER']>
  name: Scalars['String']
  shortName: Scalars['String']
}

export type UpdateGeneralParameterValueInput = {
  code: Scalars['String']
  idGeneralParameter?: InputMaybe<Scalars['BUFFER']>
  idGeneralParameterValue?: InputMaybe<Scalars['BUFFER']>
  idStatus?: InputMaybe<Scalars['String']>
  name: Scalars['String']
  shortName: Scalars['String']
  type?: InputMaybe<Scalars['String']>
  value?: InputMaybe<Scalars['String']>
}

export type _Entity = Entity | GeneralParameter | GeneralParameterValue

export type _Service = {
  __typename?: '_Service'
  sdl?: Maybe<Scalars['String']>
}

export type CreateGeneralParameterMutationVariables = Exact<{
  createGeneralParameterInput: CreateGeneralParameterInput
}>

export type CreateGeneralParameterMutation = {
  __typename?: 'Mutation'
  createGeneralParameter: {
    __typename?: 'GeneralParameter'
    idGeneralParameter: any
    idOu: any
    name: string
    shortName: string
    code: string
    idStatus: string
    idGeneralParameterValue?: any | null
    idUserCreate: any
    idUserUpdate: any
    createdAt: any
    updatedAt: any
    generalParameterValue: Array<{
      __typename?: 'GeneralParameterValue'
      idGeneralParameterValue: any
      idGeneralParameter?: any | null
      idGeneralParameterType: any
      idOu?: any | null
      idStatus: string
      name: string
      shortName: string
      code: string
      value?: string | null
      type?: string | null
      idUserCreate: any
      idUserUpdate: any
      createdAt: any
      updatedAt: any
    }>
  }
}

export type DeleteGeneralParameterMutationVariables = Exact<{
  id: Scalars['BUFFER']
}>

export type DeleteGeneralParameterMutation = {
  __typename?: 'Mutation'
  deleteGeneralParameter: {
    __typename?: 'GeneralParameter'
    idGeneralParameter: any
    idOu: any
    name: string
    shortName: string
    code: string
    idStatus: string
    idGeneralParameterValue?: any | null
    idUserCreate: any
    idUserUpdate: any
    createdAt: any
    updatedAt: any
    generalParameterValue: Array<{
      __typename?: 'GeneralParameterValue'
      idGeneralParameterValue: any
      idGeneralParameter?: any | null
      idGeneralParameterType: any
      idOu?: any | null
      idStatus: string
      name: string
      shortName: string
      code: string
      value?: string | null
      type?: string | null
      idUserCreate: any
      idUserUpdate: any
      createdAt: any
      updatedAt: any
    }>
  }
}

export type GeneralParameterFieldsFragment = {
  __typename?: 'GeneralParameter'
  idGeneralParameter: any
  idOu: any
  name: string
  shortName: string
  code: string
  idStatus: string
  idGeneralParameterValue?: any | null
  idUserCreate: any
  idUserUpdate: any
  createdAt: any
  updatedAt: any
  generalParameterValue: Array<{
    __typename?: 'GeneralParameterValue'
    idGeneralParameterValue: any
    idGeneralParameter?: any | null
    idGeneralParameterType: any
    idOu?: any | null
    idStatus: string
    name: string
    shortName: string
    code: string
    value?: string | null
    type?: string | null
    idUserCreate: any
    idUserUpdate: any
    createdAt: any
    updatedAt: any
  }>
}

export type GeneralParameterValueFieldsFragment = {
  __typename?: 'GeneralParameterValue'
  idGeneralParameterValue: any
  idGeneralParameter?: any | null
  idGeneralParameterType: any
  idOu?: any | null
  idStatus: string
  name: string
  shortName: string
  code: string
  value?: string | null
  type?: string | null
  idUserCreate: any
  idUserUpdate: any
  createdAt: any
  updatedAt: any
}

export type GetGeneralParametersByCodeQueryVariables = Exact<{
  code: Scalars['String']
}>

export type GetGeneralParametersByCodeQuery = {
  __typename?: 'Query'
  getGeneralParametersByCode: Array<{
    __typename?: 'GeneralParameter'
    idGeneralParameter: any
    idOu: any
    name: string
    shortName: string
    code: string
    idStatus: string
    idGeneralParameterValue?: any | null
    idUserCreate: any
    idUserUpdate: any
    createdAt: any
    updatedAt: any
    generalParameterValue: Array<{
      __typename?: 'GeneralParameterValue'
      idGeneralParameterValue: any
      idGeneralParameter?: any | null
      idGeneralParameterType: any
      idOu?: any | null
      idStatus: string
      name: string
      shortName: string
      code: string
      value?: string | null
      type?: string | null
      idUserCreate: any
      idUserUpdate: any
      createdAt: any
      updatedAt: any
    }>
  }>
}

export type GetGeneralParameterByIdQueryVariables = Exact<{
  id: Scalars['BUFFER']
}>

export type GetGeneralParameterByIdQuery = {
  __typename?: 'Query'
  getGeneralParameterById: {
    __typename?: 'GeneralParameter'
    idGeneralParameter: any
    idOu: any
    name: string
    shortName: string
    code: string
    idStatus: string
    idGeneralParameterValue?: any | null
    idUserCreate: any
    idUserUpdate: any
    createdAt: any
    updatedAt: any
    generalParameterValue: Array<{
      __typename?: 'GeneralParameterValue'
      idGeneralParameterValue: any
      idGeneralParameter?: any | null
      idGeneralParameterType: any
      idOu?: any | null
      idStatus: string
      name: string
      shortName: string
      code: string
      value?: string | null
      type?: string | null
      idUserCreate: any
      idUserUpdate: any
      createdAt: any
      updatedAt: any
    }>
  }
}

export type GetGeneralParameterValueByArgsQueryVariables = Exact<{
  userInput: Scalars['String']
  limit?: InputMaybe<Scalars['Int']>
}>

export type GetGeneralParameterValueByArgsQuery = {
  __typename?: 'Query'
  getGeneralParameterValueByArgs: Array<{
    __typename?: 'GeneralParameterValue'
    idGeneralParameterValue: any
    idGeneralParameter?: any | null
    idGeneralParameterType: any
    idOu?: any | null
    idStatus: string
    name: string
    shortName: string
    code: string
    value?: string | null
    type?: string | null
    idUserCreate: any
    idUserUpdate: any
    createdAt: any
    updatedAt: any
  }>
}

export type GetGeneralParameterValueByGeneralParameterIdQueryVariables = Exact<{
  idGeneralParameter: Scalars['BUFFER']
}>

export type GetGeneralParameterValueByGeneralParameterIdQuery = {
  __typename?: 'Query'
  getGeneralParameterValueByGeneralParameterId: Array<{
    __typename?: 'GeneralParameterValue'
    idGeneralParameterValue: any
    idGeneralParameter?: any | null
    idGeneralParameterType: any
    idOu?: any | null
    idStatus: string
    name: string
    shortName: string
    code: string
    value?: string | null
    type?: string | null
    idUserCreate: any
    idUserUpdate: any
    createdAt: any
    updatedAt: any
  }>
}

export type GetGeneralParameterValueByIdQueryVariables = Exact<{
  idGeneralParameterValue: Scalars['BUFFER']
}>

export type GetGeneralParameterValueByIdQuery = {
  __typename?: 'Query'
  getGeneralParameterValueById: {
    __typename?: 'GeneralParameterValue'
    idGeneralParameterValue: any
    idGeneralParameter?: any | null
    idGeneralParameterType: any
    idOu?: any | null
    idStatus: string
    name: string
    shortName: string
    code: string
    value?: string | null
    type?: string | null
    idUserCreate: any
    idUserUpdate: any
    createdAt: any
    updatedAt: any
  }
}

export type GetAllGeneralParameterValuesQueryVariables = Exact<{ [key: string]: never }>

export type GetAllGeneralParameterValuesQuery = {
  __typename?: 'Query'
  getAllGeneralParameterValues: Array<{
    __typename?: 'GeneralParameterValue'
    idGeneralParameterValue: any
    idGeneralParameter?: any | null
    idGeneralParameterType: any
    idOu?: any | null
    idStatus: string
    name: string
    shortName: string
    code: string
    value?: string | null
    type?: string | null
    idUserCreate: any
    idUserUpdate: any
    createdAt: any
    updatedAt: any
  }>
}

export type GetGeneralParametersQueryVariables = Exact<{ [key: string]: never }>

export type GetGeneralParametersQuery = {
  __typename?: 'Query'
  generalParameters: Array<{
    __typename?: 'GeneralParameter'
    idGeneralParameter: any
    idOu: any
    name: string
    shortName: string
    code: string
    idStatus: string
    idGeneralParameterValue?: any | null
    idUserCreate: any
    idUserUpdate: any
    createdAt: any
    updatedAt: any
    generalParameterValue: Array<{
      __typename?: 'GeneralParameterValue'
      idGeneralParameterValue: any
      idGeneralParameter?: any | null
      idGeneralParameterType: any
      idOu?: any | null
      idStatus: string
      name: string
      shortName: string
      code: string
      value?: string | null
      type?: string | null
      idUserCreate: any
      idUserUpdate: any
      createdAt: any
      updatedAt: any
    }>
  }>
}

export type UpdateGeneralParameterMutationVariables = Exact<{
  updateGeneralParameterInput: UpdateGeneralParameterInput
}>

export type UpdateGeneralParameterMutation = {
  __typename?: 'Mutation'
  updateGeneralParameter: {
    __typename?: 'GeneralParameter'
    idGeneralParameter: any
    idOu: any
    name: string
    shortName: string
    code: string
    idStatus: string
    idGeneralParameterValue?: any | null
    idUserCreate: any
    idUserUpdate: any
    createdAt: any
    updatedAt: any
    generalParameterValue: Array<{
      __typename?: 'GeneralParameterValue'
      idGeneralParameterValue: any
      idGeneralParameter?: any | null
      idGeneralParameterType: any
      idOu?: any | null
      idStatus: string
      name: string
      shortName: string
      code: string
      value?: string | null
      type?: string | null
      idUserCreate: any
      idUserUpdate: any
      createdAt: any
      updatedAt: any
    }>
  }
}

export const GeneralParameterValueFieldsFragmentDoc = gql`
  fragment generalParameterValueFields on GeneralParameterValue {
    idGeneralParameterValue
    idGeneralParameter
    idGeneralParameterType
    idOu
    idStatus
    name
    shortName
    code
    value
    type
    idUserCreate
    idUserUpdate
    createdAt
    updatedAt
  }
`
export const GeneralParameterFieldsFragmentDoc = gql`
  fragment generalParameterFields on GeneralParameter {
    idGeneralParameter
    idOu
    name
    shortName
    code
    idStatus
    idGeneralParameterValue
    generalParameterValue {
      ...generalParameterValueFields
    }
    idUserCreate
    idUserUpdate
    createdAt
    updatedAt
  }
  ${GeneralParameterValueFieldsFragmentDoc}
`
export const CreateGeneralParameterDocument = gql`
  mutation createGeneralParameter($createGeneralParameterInput: CreateGeneralParameterInput!) {
    createGeneralParameter(createGeneralParameterInput: $createGeneralParameterInput) {
      ...generalParameterFields
    }
  }
  ${GeneralParameterFieldsFragmentDoc}
`
export type CreateGeneralParameterMutationFn = Apollo.MutationFunction<
  CreateGeneralParameterMutation,
  CreateGeneralParameterMutationVariables
>

/**
 * __useCreateGeneralParameterMutation__
 *
 * To run a mutation, you first call `useCreateGeneralParameterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateGeneralParameterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createGeneralParameterMutation, { data, loading, error }] = useCreateGeneralParameterMutation({
 *   variables: {
 *      createGeneralParameterInput: // value for 'createGeneralParameterInput'
 *   },
 * });
 */
export function useCreateGeneralParameterMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateGeneralParameterMutation,
    CreateGeneralParameterMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateGeneralParameterMutation,
    CreateGeneralParameterMutationVariables
  >(CreateGeneralParameterDocument, options)
}
export type CreateGeneralParameterMutationHookResult = ReturnType<
  typeof useCreateGeneralParameterMutation
>
export type CreateGeneralParameterMutationResult =
  Apollo.MutationResult<CreateGeneralParameterMutation>
export type CreateGeneralParameterMutationOptions = Apollo.BaseMutationOptions<
  CreateGeneralParameterMutation,
  CreateGeneralParameterMutationVariables
>
export const DeleteGeneralParameterDocument = gql`
  mutation deleteGeneralParameter($id: BUFFER!) {
    deleteGeneralParameter(id: $id) {
      ...generalParameterFields
    }
  }
  ${GeneralParameterFieldsFragmentDoc}
`
export type DeleteGeneralParameterMutationFn = Apollo.MutationFunction<
  DeleteGeneralParameterMutation,
  DeleteGeneralParameterMutationVariables
>

/**
 * __useDeleteGeneralParameterMutation__
 *
 * To run a mutation, you first call `useDeleteGeneralParameterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteGeneralParameterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteGeneralParameterMutation, { data, loading, error }] = useDeleteGeneralParameterMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteGeneralParameterMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteGeneralParameterMutation,
    DeleteGeneralParameterMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    DeleteGeneralParameterMutation,
    DeleteGeneralParameterMutationVariables
  >(DeleteGeneralParameterDocument, options)
}
export type DeleteGeneralParameterMutationHookResult = ReturnType<
  typeof useDeleteGeneralParameterMutation
>
export type DeleteGeneralParameterMutationResult =
  Apollo.MutationResult<DeleteGeneralParameterMutation>
export type DeleteGeneralParameterMutationOptions = Apollo.BaseMutationOptions<
  DeleteGeneralParameterMutation,
  DeleteGeneralParameterMutationVariables
>
export const GetGeneralParametersByCodeDocument = gql`
  query getGeneralParametersByCode($code: String!) {
    getGeneralParametersByCode(code: $code) {
      ...generalParameterFields
    }
  }
  ${GeneralParameterFieldsFragmentDoc}
`

/**
 * __useGetGeneralParametersByCodeQuery__
 *
 * To run a query within a React component, call `useGetGeneralParametersByCodeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGeneralParametersByCodeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGeneralParametersByCodeQuery({
 *   variables: {
 *      code: // value for 'code'
 *   },
 * });
 */
export function useGetGeneralParametersByCodeQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetGeneralParametersByCodeQuery,
    GetGeneralParametersByCodeQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetGeneralParametersByCodeQuery, GetGeneralParametersByCodeQueryVariables>(
    GetGeneralParametersByCodeDocument,
    options
  )
}
export function useGetGeneralParametersByCodeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetGeneralParametersByCodeQuery,
    GetGeneralParametersByCodeQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetGeneralParametersByCodeQuery,
    GetGeneralParametersByCodeQueryVariables
  >(GetGeneralParametersByCodeDocument, options)
}
export type GetGeneralParametersByCodeQueryHookResult = ReturnType<
  typeof useGetGeneralParametersByCodeQuery
>
export type GetGeneralParametersByCodeLazyQueryHookResult = ReturnType<
  typeof useGetGeneralParametersByCodeLazyQuery
>
export type GetGeneralParametersByCodeQueryResult = Apollo.QueryResult<
  GetGeneralParametersByCodeQuery,
  GetGeneralParametersByCodeQueryVariables
>
export const GetGeneralParameterByIdDocument = gql`
  query getGeneralParameterById($id: BUFFER!) {
    getGeneralParameterById(id: $id) {
      ...generalParameterFields
    }
  }
  ${GeneralParameterFieldsFragmentDoc}
`

/**
 * __useGetGeneralParameterByIdQuery__
 *
 * To run a query within a React component, call `useGetGeneralParameterByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGeneralParameterByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGeneralParameterByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetGeneralParameterByIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetGeneralParameterByIdQuery,
    GetGeneralParameterByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetGeneralParameterByIdQuery, GetGeneralParameterByIdQueryVariables>(
    GetGeneralParameterByIdDocument,
    options
  )
}
export function useGetGeneralParameterByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetGeneralParameterByIdQuery,
    GetGeneralParameterByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetGeneralParameterByIdQuery, GetGeneralParameterByIdQueryVariables>(
    GetGeneralParameterByIdDocument,
    options
  )
}
export type GetGeneralParameterByIdQueryHookResult = ReturnType<
  typeof useGetGeneralParameterByIdQuery
>
export type GetGeneralParameterByIdLazyQueryHookResult = ReturnType<
  typeof useGetGeneralParameterByIdLazyQuery
>
export type GetGeneralParameterByIdQueryResult = Apollo.QueryResult<
  GetGeneralParameterByIdQuery,
  GetGeneralParameterByIdQueryVariables
>
export const GetGeneralParameterValueByArgsDocument = gql`
  query getGeneralParameterValueByArgs($userInput: String!, $limit: Int) {
    getGeneralParameterValueByArgs(userInput: $userInput, limit: $limit) {
      ...generalParameterValueFields
    }
  }
  ${GeneralParameterValueFieldsFragmentDoc}
`

/**
 * __useGetGeneralParameterValueByArgsQuery__
 *
 * To run a query within a React component, call `useGetGeneralParameterValueByArgsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGeneralParameterValueByArgsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGeneralParameterValueByArgsQuery({
 *   variables: {
 *      userInput: // value for 'userInput'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useGetGeneralParameterValueByArgsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetGeneralParameterValueByArgsQuery,
    GetGeneralParameterValueByArgsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetGeneralParameterValueByArgsQuery,
    GetGeneralParameterValueByArgsQueryVariables
  >(GetGeneralParameterValueByArgsDocument, options)
}
export function useGetGeneralParameterValueByArgsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetGeneralParameterValueByArgsQuery,
    GetGeneralParameterValueByArgsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetGeneralParameterValueByArgsQuery,
    GetGeneralParameterValueByArgsQueryVariables
  >(GetGeneralParameterValueByArgsDocument, options)
}
export type GetGeneralParameterValueByArgsQueryHookResult = ReturnType<
  typeof useGetGeneralParameterValueByArgsQuery
>
export type GetGeneralParameterValueByArgsLazyQueryHookResult = ReturnType<
  typeof useGetGeneralParameterValueByArgsLazyQuery
>
export type GetGeneralParameterValueByArgsQueryResult = Apollo.QueryResult<
  GetGeneralParameterValueByArgsQuery,
  GetGeneralParameterValueByArgsQueryVariables
>
export const GetGeneralParameterValueByGeneralParameterIdDocument = gql`
  query getGeneralParameterValueByGeneralParameterId($idGeneralParameter: BUFFER!) {
    getGeneralParameterValueByGeneralParameterId(idGeneralParameter: $idGeneralParameter) {
      ...generalParameterValueFields
    }
  }
  ${GeneralParameterValueFieldsFragmentDoc}
`

/**
 * __useGetGeneralParameterValueByGeneralParameterIdQuery__
 *
 * To run a query within a React component, call `useGetGeneralParameterValueByGeneralParameterIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGeneralParameterValueByGeneralParameterIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGeneralParameterValueByGeneralParameterIdQuery({
 *   variables: {
 *      idGeneralParameter: // value for 'idGeneralParameter'
 *   },
 * });
 */
export function useGetGeneralParameterValueByGeneralParameterIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetGeneralParameterValueByGeneralParameterIdQuery,
    GetGeneralParameterValueByGeneralParameterIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetGeneralParameterValueByGeneralParameterIdQuery,
    GetGeneralParameterValueByGeneralParameterIdQueryVariables
  >(GetGeneralParameterValueByGeneralParameterIdDocument, options)
}
export function useGetGeneralParameterValueByGeneralParameterIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetGeneralParameterValueByGeneralParameterIdQuery,
    GetGeneralParameterValueByGeneralParameterIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetGeneralParameterValueByGeneralParameterIdQuery,
    GetGeneralParameterValueByGeneralParameterIdQueryVariables
  >(GetGeneralParameterValueByGeneralParameterIdDocument, options)
}
export type GetGeneralParameterValueByGeneralParameterIdQueryHookResult = ReturnType<
  typeof useGetGeneralParameterValueByGeneralParameterIdQuery
>
export type GetGeneralParameterValueByGeneralParameterIdLazyQueryHookResult = ReturnType<
  typeof useGetGeneralParameterValueByGeneralParameterIdLazyQuery
>
export type GetGeneralParameterValueByGeneralParameterIdQueryResult = Apollo.QueryResult<
  GetGeneralParameterValueByGeneralParameterIdQuery,
  GetGeneralParameterValueByGeneralParameterIdQueryVariables
>
export const GetGeneralParameterValueByIdDocument = gql`
  query getGeneralParameterValueById($idGeneralParameterValue: BUFFER!) {
    getGeneralParameterValueById(idGeneralParameterValue: $idGeneralParameterValue) {
      ...generalParameterValueFields
    }
  }
  ${GeneralParameterValueFieldsFragmentDoc}
`

/**
 * __useGetGeneralParameterValueByIdQuery__
 *
 * To run a query within a React component, call `useGetGeneralParameterValueByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGeneralParameterValueByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGeneralParameterValueByIdQuery({
 *   variables: {
 *      idGeneralParameterValue: // value for 'idGeneralParameterValue'
 *   },
 * });
 */
export function useGetGeneralParameterValueByIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetGeneralParameterValueByIdQuery,
    GetGeneralParameterValueByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetGeneralParameterValueByIdQuery,
    GetGeneralParameterValueByIdQueryVariables
  >(GetGeneralParameterValueByIdDocument, options)
}
export function useGetGeneralParameterValueByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetGeneralParameterValueByIdQuery,
    GetGeneralParameterValueByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetGeneralParameterValueByIdQuery,
    GetGeneralParameterValueByIdQueryVariables
  >(GetGeneralParameterValueByIdDocument, options)
}
export type GetGeneralParameterValueByIdQueryHookResult = ReturnType<
  typeof useGetGeneralParameterValueByIdQuery
>
export type GetGeneralParameterValueByIdLazyQueryHookResult = ReturnType<
  typeof useGetGeneralParameterValueByIdLazyQuery
>
export type GetGeneralParameterValueByIdQueryResult = Apollo.QueryResult<
  GetGeneralParameterValueByIdQuery,
  GetGeneralParameterValueByIdQueryVariables
>
export const GetAllGeneralParameterValuesDocument = gql`
  query getAllGeneralParameterValues {
    getAllGeneralParameterValues {
      ...generalParameterValueFields
    }
  }
  ${GeneralParameterValueFieldsFragmentDoc}
`

/**
 * __useGetAllGeneralParameterValuesQuery__
 *
 * To run a query within a React component, call `useGetAllGeneralParameterValuesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllGeneralParameterValuesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllGeneralParameterValuesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllGeneralParameterValuesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAllGeneralParameterValuesQuery,
    GetAllGeneralParameterValuesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetAllGeneralParameterValuesQuery,
    GetAllGeneralParameterValuesQueryVariables
  >(GetAllGeneralParameterValuesDocument, options)
}
export function useGetAllGeneralParameterValuesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAllGeneralParameterValuesQuery,
    GetAllGeneralParameterValuesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetAllGeneralParameterValuesQuery,
    GetAllGeneralParameterValuesQueryVariables
  >(GetAllGeneralParameterValuesDocument, options)
}
export type GetAllGeneralParameterValuesQueryHookResult = ReturnType<
  typeof useGetAllGeneralParameterValuesQuery
>
export type GetAllGeneralParameterValuesLazyQueryHookResult = ReturnType<
  typeof useGetAllGeneralParameterValuesLazyQuery
>
export type GetAllGeneralParameterValuesQueryResult = Apollo.QueryResult<
  GetAllGeneralParameterValuesQuery,
  GetAllGeneralParameterValuesQueryVariables
>
export const GetGeneralParametersDocument = gql`
  query getGeneralParameters {
    generalParameters {
      ...generalParameterFields
    }
  }
  ${GeneralParameterFieldsFragmentDoc}
`

/**
 * __useGetGeneralParametersQuery__
 *
 * To run a query within a React component, call `useGetGeneralParametersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGeneralParametersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGeneralParametersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetGeneralParametersQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetGeneralParametersQuery,
    GetGeneralParametersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetGeneralParametersQuery, GetGeneralParametersQueryVariables>(
    GetGeneralParametersDocument,
    options
  )
}
export function useGetGeneralParametersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetGeneralParametersQuery,
    GetGeneralParametersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetGeneralParametersQuery, GetGeneralParametersQueryVariables>(
    GetGeneralParametersDocument,
    options
  )
}
export type GetGeneralParametersQueryHookResult = ReturnType<typeof useGetGeneralParametersQuery>
export type GetGeneralParametersLazyQueryHookResult = ReturnType<
  typeof useGetGeneralParametersLazyQuery
>
export type GetGeneralParametersQueryResult = Apollo.QueryResult<
  GetGeneralParametersQuery,
  GetGeneralParametersQueryVariables
>
export const UpdateGeneralParameterDocument = gql`
  mutation updateGeneralParameter($updateGeneralParameterInput: UpdateGeneralParameterInput!) {
    updateGeneralParameter(updateGeneralParameterInput: $updateGeneralParameterInput) {
      ...generalParameterFields
    }
  }
  ${GeneralParameterFieldsFragmentDoc}
`
export type UpdateGeneralParameterMutationFn = Apollo.MutationFunction<
  UpdateGeneralParameterMutation,
  UpdateGeneralParameterMutationVariables
>

/**
 * __useUpdateGeneralParameterMutation__
 *
 * To run a mutation, you first call `useUpdateGeneralParameterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateGeneralParameterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateGeneralParameterMutation, { data, loading, error }] = useUpdateGeneralParameterMutation({
 *   variables: {
 *      updateGeneralParameterInput: // value for 'updateGeneralParameterInput'
 *   },
 * });
 */
export function useUpdateGeneralParameterMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateGeneralParameterMutation,
    UpdateGeneralParameterMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    UpdateGeneralParameterMutation,
    UpdateGeneralParameterMutationVariables
  >(UpdateGeneralParameterDocument, options)
}
export type UpdateGeneralParameterMutationHookResult = ReturnType<
  typeof useUpdateGeneralParameterMutation
>
export type UpdateGeneralParameterMutationResult =
  Apollo.MutationResult<UpdateGeneralParameterMutation>
export type UpdateGeneralParameterMutationOptions = Apollo.BaseMutationOptions<
  UpdateGeneralParameterMutation,
  UpdateGeneralParameterMutationVariables
>
