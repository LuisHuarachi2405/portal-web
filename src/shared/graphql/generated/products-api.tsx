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
}

export type CreateGeneralParameterInput = {
  code: Scalars['String']
  generalParameterValue: Array<GeneralParameterValueInput>
  idGeneralParameterValue?: InputMaybe<Scalars['BUFFER']>
  name: Scalars['String']
  shortName: Scalars['String']
}

export type CreateProductCategoryInput = {
  idCategoryType: Scalars['BUFFER']
  idOu?: InputMaybe<Scalars['BUFFER']>
  idUserCreate: Scalars['BUFFER']
  name: Scalars['String']
  shortName: Scalars['String']
}

export type CreateProductFeatureInput = {
  idOu?: InputMaybe<Scalars['BUFFER']>
  idProductCategory: Scalars['BUFFER']
  idProductFeatureType: Scalars['BUFFER']
  idUserCreate: Scalars['BUFFER']
  name: Scalars['String']
  shortName: Scalars['String']
}

export type CreateProductInput = {
  barCode: Scalars['String']
  code: Scalars['String']
  createdAt: Scalars['DateTime']
  idEntitySupplier: Scalars['BUFFER']
  idOu?: InputMaybe<Scalars['BUFFER']>
  idProductCategory: Array<Scalars['BUFFER']>
  idProductType: Scalars['BUFFER']
  idUserCreate: Scalars['BUFFER']
  name: Scalars['String']
  shortName: Scalars['String']
}

export type CreateProductSubFeatureInput = {
  code: Scalars['String']
  idOu?: InputMaybe<Scalars['BUFFER']>
  idProductSubFeatureItem?: InputMaybe<Scalars['BUFFER']>
  idProductSubFeatureType: Scalars['BUFFER']
  idUserCreate: Scalars['BUFFER']
  name: Scalars['String']
  productSubFeatureItem: Array<CreateProductSubFeatureItemInput>
  shortName: Scalars['String']
}

export type CreateProductSubFeatureItemInput = {
  code: Scalars['String']
  idOu?: InputMaybe<Scalars['BUFFER']>
  idProductSubFeatureItemType: Scalars['BUFFER']
  idUserCreate: Scalars['BUFFER']
  name: Scalars['String']
  shortName: Scalars['String']
  value: Scalars['String']
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
  createProduct: Product
  createProductCategory: ProductCategory
  createProductFeature: ProductFeature
  createProductSubFeature: ProductSubFeature
  deleteGeneralParameter: GeneralParameter
  deleteProduct: Product
  deleteProductCategory: ProductCategory
  deleteProductFeature: ProductFeature
  deleteProductSubFeature: ProductSubFeature
  updateGeneralParameter: GeneralParameter
  updateProduct: Product
  updateProductCategory: ProductCategory
  updateProductFeature: ProductFeature
  updateProductSubFeature: ProductSubFeature
}

export type MutationCreateGeneralParameterArgs = {
  createGeneralParameterInput: CreateGeneralParameterInput
}

export type MutationCreateProductArgs = {
  createProductInput: CreateProductInput
}

export type MutationCreateProductCategoryArgs = {
  createProductCategoryInput: CreateProductCategoryInput
}

export type MutationCreateProductFeatureArgs = {
  createProductFeatureInput: CreateProductFeatureInput
}

export type MutationCreateProductSubFeatureArgs = {
  createProductSubFeatureInput: CreateProductSubFeatureInput
}

export type MutationDeleteGeneralParameterArgs = {
  id: Scalars['BUFFER']
}

export type MutationDeleteProductArgs = {
  id: Scalars['BUFFER']
}

export type MutationDeleteProductCategoryArgs = {
  id: Scalars['BUFFER']
}

export type MutationDeleteProductFeatureArgs = {
  id: Scalars['BUFFER']
}

export type MutationDeleteProductSubFeatureArgs = {
  id: Scalars['BUFFER']
}

export type MutationUpdateGeneralParameterArgs = {
  updateGeneralParameterInput: UpdateGeneralParameterInput
}

export type MutationUpdateProductArgs = {
  updateProductInput: UpdateProductInput
}

export type MutationUpdateProductCategoryArgs = {
  updateProductCategoryInput: UpdateProductCategoryInput
}

export type MutationUpdateProductFeatureArgs = {
  updateProductFeatureInput: UpdateProductFeatureInput
}

export type MutationUpdateProductSubFeatureArgs = {
  updateProductSubFeatureInput: UpdateProductSubFeatureInput
}

export type Product = {
  __typename?: 'Product'
  barCode: Scalars['String']
  code: Scalars['String']
  createdAt: Scalars['DateTime']
  idEntitySupplier: Scalars['BUFFER']
  idOu: Scalars['BUFFER']
  idProduct: Scalars['BUFFER']
  idProductType: Scalars['BUFFER']
  idStatus: Scalars['String']
  idUserCreate: Scalars['BUFFER']
  idUserUpdate: Scalars['BUFFER']
  name: Scalars['String']
  shortName: Scalars['String']
  updatedAt: Scalars['DateTime']
}

export type ProductCategory = {
  __typename?: 'ProductCategory'
  createdAt: Scalars['DateTime']
  idCategoryType: Scalars['BUFFER']
  idOu: Scalars['BUFFER']
  idProductCategory: Scalars['BUFFER']
  idStatus: Scalars['String']
  idUserCreate: Scalars['BUFFER']
  idUserUpdate: Scalars['BUFFER']
  name: Scalars['String']
  productFeature: Array<ProductFeature>
  shortName: Scalars['String']
  updatedAt: Scalars['DateTime']
}

export type ProductFeature = {
  __typename?: 'ProductFeature'
  createdAt: Scalars['DateTime']
  idOu: Scalars['BUFFER']
  idProductCategory: Scalars['BUFFER']
  idProductFeature: Scalars['BUFFER']
  idProductFeatureType: Scalars['BUFFER']
  idStatus: Scalars['String']
  idUserCreate: Scalars['BUFFER']
  idUserUpdate: Scalars['BUFFER']
  name: Scalars['String']
  shortName: Scalars['String']
  updatedAt: Scalars['DateTime']
}

export type ProductSubFeature = {
  __typename?: 'ProductSubFeature'
  code: Scalars['String']
  createdAt: Scalars['DateTime']
  idOu: Scalars['BUFFER']
  idProductSubFeature: Scalars['BUFFER']
  idProductSubFeatureType: Scalars['BUFFER']
  idStatus: Scalars['String']
  idUserCreate: Scalars['BUFFER']
  idUserUpdate: Scalars['BUFFER']
  name: Scalars['String']
  productSubFeatureItem: Array<ProductSubFeatureItem>
  shortName: Scalars['String']
  updatedAt: Scalars['DateTime']
}

export type ProductSubFeatureItem = {
  __typename?: 'ProductSubFeatureItem'
  IdProductSubFeature?: Maybe<Scalars['BUFFER']>
  code: Scalars['String']
  createdAt: Scalars['DateTime']
  idOu: Scalars['BUFFER']
  idProductSubFeatureItem: Scalars['BUFFER']
  idProductSubFeatureItemType: Scalars['BUFFER']
  idStatus: Scalars['String']
  idUserCreate: Scalars['BUFFER']
  idUserUpdate: Scalars['BUFFER']
  name: Scalars['String']
  shortName: Scalars['String']
  updatedAt: Scalars['DateTime']
  value: Scalars['String']
}

export type Query = {
  __typename?: 'Query'
  generalParameters: Array<GeneralParameter>
  getAllGeneralParameterValues: Array<GeneralParameterValue>
  getGeneralParameterById: GeneralParameter
  getGeneralParameterValueByArgs: Array<GeneralParameterValue>
  getGeneralParameterValueByGeneralParameterId: Array<GeneralParameterValue>
  getGeneralParameterValueById: GeneralParameterValue
  getGeneralParametersByCode: GeneralParameter
  nestedProductSubFeatures: Array<ProductSubFeature>
  product: Product
  productCategories: Array<ProductCategory>
  productCategory: ProductCategory
  productFeature: ProductFeature
  productFeatures: Array<ProductFeature>
  productSubFeature: ProductSubFeature
  topLevelProductSubFeatures: Array<ProductSubFeature>
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

export type QueryProductArgs = {
  id: Scalars['BUFFER']
}

export type QueryProductCategoryArgs = {
  id: Scalars['BUFFER']
}

export type QueryProductFeatureArgs = {
  id: Scalars['BUFFER']
}

export type QueryProductSubFeatureArgs = {
  id: Scalars['BUFFER']
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

export type UpdateProductCategoryInput = {
  idCategoryType?: InputMaybe<Scalars['BUFFER']>
  idOu?: InputMaybe<Scalars['BUFFER']>
  idProductCategory: Scalars['BUFFER']
  idUserCreate?: InputMaybe<Scalars['BUFFER']>
  idUserUpdate: Scalars['BUFFER']
  name?: InputMaybe<Scalars['String']>
  shortName?: InputMaybe<Scalars['String']>
}

export type UpdateProductFeatureInput = {
  idOu?: InputMaybe<Scalars['BUFFER']>
  idProductCategory?: InputMaybe<Scalars['BUFFER']>
  idProductFeature: Scalars['BUFFER']
  idProductFeatureType?: InputMaybe<Scalars['BUFFER']>
  idUserCreate?: InputMaybe<Scalars['BUFFER']>
  idUserUpdate: Scalars['BUFFER']
  name?: InputMaybe<Scalars['String']>
  shortName?: InputMaybe<Scalars['String']>
}

export type UpdateProductInput = {
  barCode?: InputMaybe<Scalars['String']>
  code?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  idEntitySupplier?: InputMaybe<Scalars['BUFFER']>
  idOu?: InputMaybe<Scalars['BUFFER']>
  idProduct: Scalars['BUFFER']
  idProductCategory?: InputMaybe<Array<Scalars['BUFFER']>>
  idProductType?: InputMaybe<Scalars['BUFFER']>
  idUserCreate?: InputMaybe<Scalars['BUFFER']>
  idUserUpdate: Scalars['BUFFER']
  name?: InputMaybe<Scalars['String']>
  shortName?: InputMaybe<Scalars['String']>
}

export type UpdateProductSubFeatureInput = {
  code?: InputMaybe<Scalars['String']>
  idOu?: InputMaybe<Scalars['BUFFER']>
  idProductSubFeature: Scalars['BUFFER']
  idProductSubFeatureItem?: InputMaybe<Scalars['BUFFER']>
  idProductSubFeatureType?: InputMaybe<Scalars['BUFFER']>
  idUserCreate?: InputMaybe<Scalars['BUFFER']>
  idUserUpdate: Scalars['BUFFER']
  name?: InputMaybe<Scalars['String']>
  productSubFeatureItem?: InputMaybe<Array<UpdateProductSubFeatureItemInput>>
  shortName?: InputMaybe<Scalars['String']>
}

export type UpdateProductSubFeatureItemInput = {
  code?: InputMaybe<Scalars['String']>
  idOu?: InputMaybe<Scalars['BUFFER']>
  idProductSubFeatureItem: Scalars['BUFFER']
  idProductSubFeatureItemType?: InputMaybe<Scalars['BUFFER']>
  idUserCreate?: InputMaybe<Scalars['BUFFER']>
  name?: InputMaybe<Scalars['String']>
  shortName?: InputMaybe<Scalars['String']>
  value?: InputMaybe<Scalars['String']>
}

export type CreateProductCategoryMutationVariables = Exact<{
  createProductCategoryInput: CreateProductCategoryInput
}>

export type CreateProductCategoryMutation = {
  __typename?: 'Mutation'
  createProductCategory: { __typename?: 'ProductCategory'; idProductCategory: any }
}

export type CreateProductFeatureMutationVariables = Exact<{
  createProductFeatureInput: CreateProductFeatureInput
}>

export type CreateProductFeatureMutation = {
  __typename?: 'Mutation'
  createProductFeature: { __typename?: 'ProductFeature'; idProductFeature: any }
}

export type CreateProductSubFeatureMutationVariables = Exact<{
  createProductSubFeatureInput: CreateProductSubFeatureInput
}>

export type CreateProductSubFeatureMutation = {
  __typename?: 'Mutation'
  createProductSubFeature: { __typename?: 'ProductSubFeature'; idProductSubFeature: any }
}

export type DeleteProductCategoryMutationVariables = Exact<{
  deleteProductCategoryId: Scalars['BUFFER']
}>

export type DeleteProductCategoryMutation = {
  __typename?: 'Mutation'
  deleteProductCategory: { __typename?: 'ProductCategory'; idProductCategory: any }
}

export type DeleteProductFeatureMutationVariables = Exact<{
  deleteProductFeatureId: Scalars['BUFFER']
}>

export type DeleteProductFeatureMutation = {
  __typename?: 'Mutation'
  deleteProductFeature: { __typename?: 'ProductFeature'; idProductFeature: any }
}

export type DeleteProductSubFeatureMutationVariables = Exact<{
  deleteProductSubFeatureId: Scalars['BUFFER']
}>

export type DeleteProductSubFeatureMutation = {
  __typename?: 'Mutation'
  deleteProductSubFeature: { __typename?: 'ProductSubFeature'; idProductSubFeature: any }
}

export type GetProductCategoriesQueryVariables = Exact<{ [key: string]: never }>

export type GetProductCategoriesQuery = {
  __typename?: 'Query'
  productCategories: Array<{
    __typename?: 'ProductCategory'
    idProductCategory: any
    name: string
    shortName: string
    idCategoryType: any
  }>
}

export type GetProductCategoryTypesQueryVariables = Exact<{ [key: string]: never }>

export type GetProductCategoryTypesQuery = {
  __typename?: 'Query'
  getGeneralParametersByCode: {
    __typename?: 'GeneralParameter'
    idGeneralParameter: any
    name: string
    generalParameterValue: Array<{
      __typename?: 'GeneralParameterValue'
      idGeneralParameterValue: any
      name: string
    }>
  }
}

export type GetProductCategoryQueryVariables = Exact<{
  productCategoryId: Scalars['BUFFER']
}>

export type GetProductCategoryQuery = {
  __typename?: 'Query'
  productCategory: {
    __typename?: 'ProductCategory'
    idProductCategory: any
    name: string
    shortName: string
    idCategoryType: any
  }
}

export type GetProductFeatureTypesQueryVariables = Exact<{ [key: string]: never }>

export type GetProductFeatureTypesQuery = {
  __typename?: 'Query'
  getGeneralParametersByCode: {
    __typename?: 'GeneralParameter'
    idGeneralParameter: any
    name: string
    generalParameterValue: Array<{
      __typename?: 'GeneralParameterValue'
      idGeneralParameterValue: any
      name: string
    }>
  }
}

export type GetProductFeatureQueryVariables = Exact<{
  productFeatureId: Scalars['BUFFER']
}>

export type GetProductFeatureQuery = {
  __typename?: 'Query'
  productFeature: {
    __typename?: 'ProductFeature'
    idProductFeature: any
    name: string
    shortName: string
    idProductCategory: any
    idProductFeatureType: any
  }
}

export type GetProductFeaturesQueryVariables = Exact<{ [key: string]: never }>

export type GetProductFeaturesQuery = {
  __typename?: 'Query'
  productFeatures: Array<{
    __typename?: 'ProductFeature'
    idProductFeature: any
    name: string
    shortName: string
    idProductCategory: any
    idProductFeatureType: any
  }>
}

export type GetProductSubfeatureItemTypesQueryVariables = Exact<{ [key: string]: never }>

export type GetProductSubfeatureItemTypesQuery = {
  __typename?: 'Query'
  getGeneralParametersByCode: {
    __typename?: 'GeneralParameter'
    idGeneralParameter: any
    name: string
    generalParameterValue: Array<{
      __typename?: 'GeneralParameterValue'
      idGeneralParameterValue: any
      name: string
    }>
  }
}

export type GetProductSubfeatureTypesQueryVariables = Exact<{ [key: string]: never }>

export type GetProductSubfeatureTypesQuery = {
  __typename?: 'Query'
  getGeneralParametersByCode: {
    __typename?: 'GeneralParameter'
    idGeneralParameter: any
    name: string
    generalParameterValue: Array<{
      __typename?: 'GeneralParameterValue'
      idGeneralParameterValue: any
      name: string
    }>
  }
}

export type GetProductSubFeatureQueryVariables = Exact<{
  productSubFeatureId: Scalars['BUFFER']
}>

export type GetProductSubFeatureQuery = {
  __typename?: 'Query'
  productSubFeature: {
    __typename?: 'ProductSubFeature'
    idProductSubFeature: any
    code: string
    name: string
    shortName: string
    idProductSubFeatureType: any
    productSubFeatureItem: Array<{
      __typename?: 'ProductSubFeatureItem'
      idProductSubFeatureItem: any
      code: string
      name: string
      shortName: string
      value: string
      idProductSubFeatureItemType: any
    }>
  }
}

export type GetProductSubFeaturesQueryVariables = Exact<{ [key: string]: never }>

export type GetProductSubFeaturesQuery = {
  __typename?: 'Query'
  topLevelProductSubFeatures: Array<{
    __typename?: 'ProductSubFeature'
    idProductSubFeature: any
    code: string
    name: string
    shortName: string
    idProductSubFeatureType: any
  }>
}

export type UpdateProductCategoryMutationVariables = Exact<{
  updateProductCategoryInput: UpdateProductCategoryInput
}>

export type UpdateProductCategoryMutation = {
  __typename?: 'Mutation'
  updateProductCategory: {
    __typename?: 'ProductCategory'
    idProductCategory: any
    name: string
    shortName: string
    idCategoryType: any
  }
}

export type UpdateProductFeatureMutationVariables = Exact<{
  updateProductFeatureInput: UpdateProductFeatureInput
}>

export type UpdateProductFeatureMutation = {
  __typename?: 'Mutation'
  updateProductFeature: {
    __typename?: 'ProductFeature'
    idProductFeature: any
    name: string
    shortName: string
    idProductCategory: any
    idProductFeatureType: any
  }
}

export type UpdateProductSubFeatureMutationVariables = Exact<{
  updateProductSubFeatureInput: UpdateProductSubFeatureInput
}>

export type UpdateProductSubFeatureMutation = {
  __typename?: 'Mutation'
  updateProductSubFeature: { __typename?: 'ProductSubFeature'; idProductSubFeature: any }
}

export const CreateProductCategoryDocument = gql`
  mutation CreateProductCategory($createProductCategoryInput: CreateProductCategoryInput!) {
    createProductCategory(createProductCategoryInput: $createProductCategoryInput) {
      idProductCategory
    }
  }
`
export type CreateProductCategoryMutationFn = Apollo.MutationFunction<
  CreateProductCategoryMutation,
  CreateProductCategoryMutationVariables
>

/**
 * __useCreateProductCategoryMutation__
 *
 * To run a mutation, you first call `useCreateProductCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductCategoryMutation, { data, loading, error }] = useCreateProductCategoryMutation({
 *   variables: {
 *      createProductCategoryInput: // value for 'createProductCategoryInput'
 *   },
 * });
 */
export function useCreateProductCategoryMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateProductCategoryMutation,
    CreateProductCategoryMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateProductCategoryMutation, CreateProductCategoryMutationVariables>(
    CreateProductCategoryDocument,
    options
  )
}
export type CreateProductCategoryMutationHookResult = ReturnType<
  typeof useCreateProductCategoryMutation
>
export type CreateProductCategoryMutationResult =
  Apollo.MutationResult<CreateProductCategoryMutation>
export type CreateProductCategoryMutationOptions = Apollo.BaseMutationOptions<
  CreateProductCategoryMutation,
  CreateProductCategoryMutationVariables
>
export const CreateProductFeatureDocument = gql`
  mutation CreateProductFeature($createProductFeatureInput: CreateProductFeatureInput!) {
    createProductFeature(createProductFeatureInput: $createProductFeatureInput) {
      idProductFeature
    }
  }
`
export type CreateProductFeatureMutationFn = Apollo.MutationFunction<
  CreateProductFeatureMutation,
  CreateProductFeatureMutationVariables
>

/**
 * __useCreateProductFeatureMutation__
 *
 * To run a mutation, you first call `useCreateProductFeatureMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductFeatureMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductFeatureMutation, { data, loading, error }] = useCreateProductFeatureMutation({
 *   variables: {
 *      createProductFeatureInput: // value for 'createProductFeatureInput'
 *   },
 * });
 */
export function useCreateProductFeatureMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateProductFeatureMutation,
    CreateProductFeatureMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateProductFeatureMutation, CreateProductFeatureMutationVariables>(
    CreateProductFeatureDocument,
    options
  )
}
export type CreateProductFeatureMutationHookResult = ReturnType<
  typeof useCreateProductFeatureMutation
>
export type CreateProductFeatureMutationResult = Apollo.MutationResult<CreateProductFeatureMutation>
export type CreateProductFeatureMutationOptions = Apollo.BaseMutationOptions<
  CreateProductFeatureMutation,
  CreateProductFeatureMutationVariables
>
export const CreateProductSubFeatureDocument = gql`
  mutation CreateProductSubFeature($createProductSubFeatureInput: CreateProductSubFeatureInput!) {
    createProductSubFeature(createProductSubFeatureInput: $createProductSubFeatureInput) {
      idProductSubFeature
    }
  }
`
export type CreateProductSubFeatureMutationFn = Apollo.MutationFunction<
  CreateProductSubFeatureMutation,
  CreateProductSubFeatureMutationVariables
>

/**
 * __useCreateProductSubFeatureMutation__
 *
 * To run a mutation, you first call `useCreateProductSubFeatureMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductSubFeatureMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductSubFeatureMutation, { data, loading, error }] = useCreateProductSubFeatureMutation({
 *   variables: {
 *      createProductSubFeatureInput: // value for 'createProductSubFeatureInput'
 *   },
 * });
 */
export function useCreateProductSubFeatureMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateProductSubFeatureMutation,
    CreateProductSubFeatureMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateProductSubFeatureMutation,
    CreateProductSubFeatureMutationVariables
  >(CreateProductSubFeatureDocument, options)
}
export type CreateProductSubFeatureMutationHookResult = ReturnType<
  typeof useCreateProductSubFeatureMutation
>
export type CreateProductSubFeatureMutationResult =
  Apollo.MutationResult<CreateProductSubFeatureMutation>
export type CreateProductSubFeatureMutationOptions = Apollo.BaseMutationOptions<
  CreateProductSubFeatureMutation,
  CreateProductSubFeatureMutationVariables
>
export const DeleteProductCategoryDocument = gql`
  mutation DeleteProductCategory($deleteProductCategoryId: BUFFER!) {
    deleteProductCategory(id: $deleteProductCategoryId) {
      idProductCategory
    }
  }
`
export type DeleteProductCategoryMutationFn = Apollo.MutationFunction<
  DeleteProductCategoryMutation,
  DeleteProductCategoryMutationVariables
>

/**
 * __useDeleteProductCategoryMutation__
 *
 * To run a mutation, you first call `useDeleteProductCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProductCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProductCategoryMutation, { data, loading, error }] = useDeleteProductCategoryMutation({
 *   variables: {
 *      deleteProductCategoryId: // value for 'deleteProductCategoryId'
 *   },
 * });
 */
export function useDeleteProductCategoryMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteProductCategoryMutation,
    DeleteProductCategoryMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<DeleteProductCategoryMutation, DeleteProductCategoryMutationVariables>(
    DeleteProductCategoryDocument,
    options
  )
}
export type DeleteProductCategoryMutationHookResult = ReturnType<
  typeof useDeleteProductCategoryMutation
>
export type DeleteProductCategoryMutationResult =
  Apollo.MutationResult<DeleteProductCategoryMutation>
export type DeleteProductCategoryMutationOptions = Apollo.BaseMutationOptions<
  DeleteProductCategoryMutation,
  DeleteProductCategoryMutationVariables
>
export const DeleteProductFeatureDocument = gql`
  mutation DeleteProductFeature($deleteProductFeatureId: BUFFER!) {
    deleteProductFeature(id: $deleteProductFeatureId) {
      idProductFeature
    }
  }
`
export type DeleteProductFeatureMutationFn = Apollo.MutationFunction<
  DeleteProductFeatureMutation,
  DeleteProductFeatureMutationVariables
>

/**
 * __useDeleteProductFeatureMutation__
 *
 * To run a mutation, you first call `useDeleteProductFeatureMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProductFeatureMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProductFeatureMutation, { data, loading, error }] = useDeleteProductFeatureMutation({
 *   variables: {
 *      deleteProductFeatureId: // value for 'deleteProductFeatureId'
 *   },
 * });
 */
export function useDeleteProductFeatureMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteProductFeatureMutation,
    DeleteProductFeatureMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<DeleteProductFeatureMutation, DeleteProductFeatureMutationVariables>(
    DeleteProductFeatureDocument,
    options
  )
}
export type DeleteProductFeatureMutationHookResult = ReturnType<
  typeof useDeleteProductFeatureMutation
>
export type DeleteProductFeatureMutationResult = Apollo.MutationResult<DeleteProductFeatureMutation>
export type DeleteProductFeatureMutationOptions = Apollo.BaseMutationOptions<
  DeleteProductFeatureMutation,
  DeleteProductFeatureMutationVariables
>
export const DeleteProductSubFeatureDocument = gql`
  mutation DeleteProductSubFeature($deleteProductSubFeatureId: BUFFER!) {
    deleteProductSubFeature(id: $deleteProductSubFeatureId) {
      idProductSubFeature
    }
  }
`
export type DeleteProductSubFeatureMutationFn = Apollo.MutationFunction<
  DeleteProductSubFeatureMutation,
  DeleteProductSubFeatureMutationVariables
>

/**
 * __useDeleteProductSubFeatureMutation__
 *
 * To run a mutation, you first call `useDeleteProductSubFeatureMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProductSubFeatureMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProductSubFeatureMutation, { data, loading, error }] = useDeleteProductSubFeatureMutation({
 *   variables: {
 *      deleteProductSubFeatureId: // value for 'deleteProductSubFeatureId'
 *   },
 * });
 */
export function useDeleteProductSubFeatureMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteProductSubFeatureMutation,
    DeleteProductSubFeatureMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    DeleteProductSubFeatureMutation,
    DeleteProductSubFeatureMutationVariables
  >(DeleteProductSubFeatureDocument, options)
}
export type DeleteProductSubFeatureMutationHookResult = ReturnType<
  typeof useDeleteProductSubFeatureMutation
>
export type DeleteProductSubFeatureMutationResult =
  Apollo.MutationResult<DeleteProductSubFeatureMutation>
export type DeleteProductSubFeatureMutationOptions = Apollo.BaseMutationOptions<
  DeleteProductSubFeatureMutation,
  DeleteProductSubFeatureMutationVariables
>
export const GetProductCategoriesDocument = gql`
  query GetProductCategories {
    productCategories {
      idProductCategory
      name
      shortName
      idCategoryType
    }
  }
`

/**
 * __useGetProductCategoriesQuery__
 *
 * To run a query within a React component, call `useGetProductCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProductCategoriesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetProductCategoriesQuery,
    GetProductCategoriesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetProductCategoriesQuery, GetProductCategoriesQueryVariables>(
    GetProductCategoriesDocument,
    options
  )
}
export function useGetProductCategoriesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetProductCategoriesQuery,
    GetProductCategoriesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetProductCategoriesQuery, GetProductCategoriesQueryVariables>(
    GetProductCategoriesDocument,
    options
  )
}
export type GetProductCategoriesQueryHookResult = ReturnType<typeof useGetProductCategoriesQuery>
export type GetProductCategoriesLazyQueryHookResult = ReturnType<
  typeof useGetProductCategoriesLazyQuery
>
export type GetProductCategoriesQueryResult = Apollo.QueryResult<
  GetProductCategoriesQuery,
  GetProductCategoriesQueryVariables
>
export const GetProductCategoryTypesDocument = gql`
  query GetProductCategoryTypes {
    getGeneralParametersByCode(code: "PROCAT") {
      idGeneralParameter
      name
      generalParameterValue {
        idGeneralParameterValue
        name
      }
    }
  }
`

/**
 * __useGetProductCategoryTypesQuery__
 *
 * To run a query within a React component, call `useGetProductCategoryTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductCategoryTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductCategoryTypesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProductCategoryTypesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetProductCategoryTypesQuery,
    GetProductCategoryTypesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetProductCategoryTypesQuery, GetProductCategoryTypesQueryVariables>(
    GetProductCategoryTypesDocument,
    options
  )
}
export function useGetProductCategoryTypesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetProductCategoryTypesQuery,
    GetProductCategoryTypesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetProductCategoryTypesQuery, GetProductCategoryTypesQueryVariables>(
    GetProductCategoryTypesDocument,
    options
  )
}
export type GetProductCategoryTypesQueryHookResult = ReturnType<
  typeof useGetProductCategoryTypesQuery
>
export type GetProductCategoryTypesLazyQueryHookResult = ReturnType<
  typeof useGetProductCategoryTypesLazyQuery
>
export type GetProductCategoryTypesQueryResult = Apollo.QueryResult<
  GetProductCategoryTypesQuery,
  GetProductCategoryTypesQueryVariables
>
export const GetProductCategoryDocument = gql`
  query GetProductCategory($productCategoryId: BUFFER!) {
    productCategory(id: $productCategoryId) {
      idProductCategory
      name
      shortName
      idCategoryType
    }
  }
`

/**
 * __useGetProductCategoryQuery__
 *
 * To run a query within a React component, call `useGetProductCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductCategoryQuery({
 *   variables: {
 *      productCategoryId: // value for 'productCategoryId'
 *   },
 * });
 */
export function useGetProductCategoryQuery(
  baseOptions: Apollo.QueryHookOptions<GetProductCategoryQuery, GetProductCategoryQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetProductCategoryQuery, GetProductCategoryQueryVariables>(
    GetProductCategoryDocument,
    options
  )
}
export function useGetProductCategoryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetProductCategoryQuery,
    GetProductCategoryQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetProductCategoryQuery, GetProductCategoryQueryVariables>(
    GetProductCategoryDocument,
    options
  )
}
export type GetProductCategoryQueryHookResult = ReturnType<typeof useGetProductCategoryQuery>
export type GetProductCategoryLazyQueryHookResult = ReturnType<
  typeof useGetProductCategoryLazyQuery
>
export type GetProductCategoryQueryResult = Apollo.QueryResult<
  GetProductCategoryQuery,
  GetProductCategoryQueryVariables
>
export const GetProductFeatureTypesDocument = gql`
  query GetProductFeatureTypes {
    getGeneralParametersByCode(code: "PROCAR") {
      idGeneralParameter
      name
      generalParameterValue {
        idGeneralParameterValue
        name
      }
    }
  }
`

/**
 * __useGetProductFeatureTypesQuery__
 *
 * To run a query within a React component, call `useGetProductFeatureTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductFeatureTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductFeatureTypesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProductFeatureTypesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetProductFeatureTypesQuery,
    GetProductFeatureTypesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetProductFeatureTypesQuery, GetProductFeatureTypesQueryVariables>(
    GetProductFeatureTypesDocument,
    options
  )
}
export function useGetProductFeatureTypesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetProductFeatureTypesQuery,
    GetProductFeatureTypesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetProductFeatureTypesQuery, GetProductFeatureTypesQueryVariables>(
    GetProductFeatureTypesDocument,
    options
  )
}
export type GetProductFeatureTypesQueryHookResult = ReturnType<
  typeof useGetProductFeatureTypesQuery
>
export type GetProductFeatureTypesLazyQueryHookResult = ReturnType<
  typeof useGetProductFeatureTypesLazyQuery
>
export type GetProductFeatureTypesQueryResult = Apollo.QueryResult<
  GetProductFeatureTypesQuery,
  GetProductFeatureTypesQueryVariables
>
export const GetProductFeatureDocument = gql`
  query GetProductFeature($productFeatureId: BUFFER!) {
    productFeature(id: $productFeatureId) {
      idProductFeature
      name
      shortName
      idProductCategory
      idProductFeatureType
    }
  }
`

/**
 * __useGetProductFeatureQuery__
 *
 * To run a query within a React component, call `useGetProductFeatureQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductFeatureQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductFeatureQuery({
 *   variables: {
 *      productFeatureId: // value for 'productFeatureId'
 *   },
 * });
 */
export function useGetProductFeatureQuery(
  baseOptions: Apollo.QueryHookOptions<GetProductFeatureQuery, GetProductFeatureQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetProductFeatureQuery, GetProductFeatureQueryVariables>(
    GetProductFeatureDocument,
    options
  )
}
export function useGetProductFeatureLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetProductFeatureQuery, GetProductFeatureQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetProductFeatureQuery, GetProductFeatureQueryVariables>(
    GetProductFeatureDocument,
    options
  )
}
export type GetProductFeatureQueryHookResult = ReturnType<typeof useGetProductFeatureQuery>
export type GetProductFeatureLazyQueryHookResult = ReturnType<typeof useGetProductFeatureLazyQuery>
export type GetProductFeatureQueryResult = Apollo.QueryResult<
  GetProductFeatureQuery,
  GetProductFeatureQueryVariables
>
export const GetProductFeaturesDocument = gql`
  query GetProductFeatures {
    productFeatures {
      idProductFeature
      name
      shortName
      idProductCategory
      idProductFeatureType
    }
  }
`

/**
 * __useGetProductFeaturesQuery__
 *
 * To run a query within a React component, call `useGetProductFeaturesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductFeaturesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductFeaturesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProductFeaturesQuery(
  baseOptions?: Apollo.QueryHookOptions<GetProductFeaturesQuery, GetProductFeaturesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetProductFeaturesQuery, GetProductFeaturesQueryVariables>(
    GetProductFeaturesDocument,
    options
  )
}
export function useGetProductFeaturesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetProductFeaturesQuery,
    GetProductFeaturesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetProductFeaturesQuery, GetProductFeaturesQueryVariables>(
    GetProductFeaturesDocument,
    options
  )
}
export type GetProductFeaturesQueryHookResult = ReturnType<typeof useGetProductFeaturesQuery>
export type GetProductFeaturesLazyQueryHookResult = ReturnType<
  typeof useGetProductFeaturesLazyQuery
>
export type GetProductFeaturesQueryResult = Apollo.QueryResult<
  GetProductFeaturesQuery,
  GetProductFeaturesQueryVariables
>
export const GetProductSubfeatureItemTypesDocument = gql`
  query GetProductSubfeatureItemTypes {
    getGeneralParametersByCode(code: "PROISC") {
      idGeneralParameter
      name
      generalParameterValue {
        idGeneralParameterValue
        name
      }
    }
  }
`

/**
 * __useGetProductSubfeatureItemTypesQuery__
 *
 * To run a query within a React component, call `useGetProductSubfeatureItemTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductSubfeatureItemTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductSubfeatureItemTypesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProductSubfeatureItemTypesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetProductSubfeatureItemTypesQuery,
    GetProductSubfeatureItemTypesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetProductSubfeatureItemTypesQuery,
    GetProductSubfeatureItemTypesQueryVariables
  >(GetProductSubfeatureItemTypesDocument, options)
}
export function useGetProductSubfeatureItemTypesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetProductSubfeatureItemTypesQuery,
    GetProductSubfeatureItemTypesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetProductSubfeatureItemTypesQuery,
    GetProductSubfeatureItemTypesQueryVariables
  >(GetProductSubfeatureItemTypesDocument, options)
}
export type GetProductSubfeatureItemTypesQueryHookResult = ReturnType<
  typeof useGetProductSubfeatureItemTypesQuery
>
export type GetProductSubfeatureItemTypesLazyQueryHookResult = ReturnType<
  typeof useGetProductSubfeatureItemTypesLazyQuery
>
export type GetProductSubfeatureItemTypesQueryResult = Apollo.QueryResult<
  GetProductSubfeatureItemTypesQuery,
  GetProductSubfeatureItemTypesQueryVariables
>
export const GetProductSubfeatureTypesDocument = gql`
  query GetProductSubfeatureTypes {
    getGeneralParametersByCode(code: "PROSCA") {
      idGeneralParameter
      name
      generalParameterValue {
        idGeneralParameterValue
        name
      }
    }
  }
`

/**
 * __useGetProductSubfeatureTypesQuery__
 *
 * To run a query within a React component, call `useGetProductSubfeatureTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductSubfeatureTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductSubfeatureTypesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProductSubfeatureTypesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetProductSubfeatureTypesQuery,
    GetProductSubfeatureTypesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetProductSubfeatureTypesQuery, GetProductSubfeatureTypesQueryVariables>(
    GetProductSubfeatureTypesDocument,
    options
  )
}
export function useGetProductSubfeatureTypesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetProductSubfeatureTypesQuery,
    GetProductSubfeatureTypesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetProductSubfeatureTypesQuery,
    GetProductSubfeatureTypesQueryVariables
  >(GetProductSubfeatureTypesDocument, options)
}
export type GetProductSubfeatureTypesQueryHookResult = ReturnType<
  typeof useGetProductSubfeatureTypesQuery
>
export type GetProductSubfeatureTypesLazyQueryHookResult = ReturnType<
  typeof useGetProductSubfeatureTypesLazyQuery
>
export type GetProductSubfeatureTypesQueryResult = Apollo.QueryResult<
  GetProductSubfeatureTypesQuery,
  GetProductSubfeatureTypesQueryVariables
>
export const GetProductSubFeatureDocument = gql`
  query GetProductSubFeature($productSubFeatureId: BUFFER!) {
    productSubFeature(id: $productSubFeatureId) {
      idProductSubFeature
      code
      name
      shortName
      idProductSubFeatureType
      productSubFeatureItem {
        idProductSubFeatureItem
        code
        name
        shortName
        value
        idProductSubFeatureItemType
      }
    }
  }
`

/**
 * __useGetProductSubFeatureQuery__
 *
 * To run a query within a React component, call `useGetProductSubFeatureQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductSubFeatureQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductSubFeatureQuery({
 *   variables: {
 *      productSubFeatureId: // value for 'productSubFeatureId'
 *   },
 * });
 */
export function useGetProductSubFeatureQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetProductSubFeatureQuery,
    GetProductSubFeatureQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetProductSubFeatureQuery, GetProductSubFeatureQueryVariables>(
    GetProductSubFeatureDocument,
    options
  )
}
export function useGetProductSubFeatureLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetProductSubFeatureQuery,
    GetProductSubFeatureQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetProductSubFeatureQuery, GetProductSubFeatureQueryVariables>(
    GetProductSubFeatureDocument,
    options
  )
}
export type GetProductSubFeatureQueryHookResult = ReturnType<typeof useGetProductSubFeatureQuery>
export type GetProductSubFeatureLazyQueryHookResult = ReturnType<
  typeof useGetProductSubFeatureLazyQuery
>
export type GetProductSubFeatureQueryResult = Apollo.QueryResult<
  GetProductSubFeatureQuery,
  GetProductSubFeatureQueryVariables
>
export const GetProductSubFeaturesDocument = gql`
  query GetProductSubFeatures {
    topLevelProductSubFeatures {
      idProductSubFeature
      code
      name
      shortName
      idProductSubFeatureType
    }
  }
`

/**
 * __useGetProductSubFeaturesQuery__
 *
 * To run a query within a React component, call `useGetProductSubFeaturesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductSubFeaturesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductSubFeaturesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProductSubFeaturesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetProductSubFeaturesQuery,
    GetProductSubFeaturesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetProductSubFeaturesQuery, GetProductSubFeaturesQueryVariables>(
    GetProductSubFeaturesDocument,
    options
  )
}
export function useGetProductSubFeaturesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetProductSubFeaturesQuery,
    GetProductSubFeaturesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetProductSubFeaturesQuery, GetProductSubFeaturesQueryVariables>(
    GetProductSubFeaturesDocument,
    options
  )
}
export type GetProductSubFeaturesQueryHookResult = ReturnType<typeof useGetProductSubFeaturesQuery>
export type GetProductSubFeaturesLazyQueryHookResult = ReturnType<
  typeof useGetProductSubFeaturesLazyQuery
>
export type GetProductSubFeaturesQueryResult = Apollo.QueryResult<
  GetProductSubFeaturesQuery,
  GetProductSubFeaturesQueryVariables
>
export const UpdateProductCategoryDocument = gql`
  mutation UpdateProductCategory($updateProductCategoryInput: UpdateProductCategoryInput!) {
    updateProductCategory(updateProductCategoryInput: $updateProductCategoryInput) {
      idProductCategory
      name
      shortName
      idCategoryType
    }
  }
`
export type UpdateProductCategoryMutationFn = Apollo.MutationFunction<
  UpdateProductCategoryMutation,
  UpdateProductCategoryMutationVariables
>

/**
 * __useUpdateProductCategoryMutation__
 *
 * To run a mutation, you first call `useUpdateProductCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProductCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProductCategoryMutation, { data, loading, error }] = useUpdateProductCategoryMutation({
 *   variables: {
 *      updateProductCategoryInput: // value for 'updateProductCategoryInput'
 *   },
 * });
 */
export function useUpdateProductCategoryMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateProductCategoryMutation,
    UpdateProductCategoryMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<UpdateProductCategoryMutation, UpdateProductCategoryMutationVariables>(
    UpdateProductCategoryDocument,
    options
  )
}
export type UpdateProductCategoryMutationHookResult = ReturnType<
  typeof useUpdateProductCategoryMutation
>
export type UpdateProductCategoryMutationResult =
  Apollo.MutationResult<UpdateProductCategoryMutation>
export type UpdateProductCategoryMutationOptions = Apollo.BaseMutationOptions<
  UpdateProductCategoryMutation,
  UpdateProductCategoryMutationVariables
>
export const UpdateProductFeatureDocument = gql`
  mutation UpdateProductFeature($updateProductFeatureInput: UpdateProductFeatureInput!) {
    updateProductFeature(updateProductFeatureInput: $updateProductFeatureInput) {
      idProductFeature
      name
      shortName
      idProductCategory
      idProductFeatureType
    }
  }
`
export type UpdateProductFeatureMutationFn = Apollo.MutationFunction<
  UpdateProductFeatureMutation,
  UpdateProductFeatureMutationVariables
>

/**
 * __useUpdateProductFeatureMutation__
 *
 * To run a mutation, you first call `useUpdateProductFeatureMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProductFeatureMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProductFeatureMutation, { data, loading, error }] = useUpdateProductFeatureMutation({
 *   variables: {
 *      updateProductFeatureInput: // value for 'updateProductFeatureInput'
 *   },
 * });
 */
export function useUpdateProductFeatureMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateProductFeatureMutation,
    UpdateProductFeatureMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<UpdateProductFeatureMutation, UpdateProductFeatureMutationVariables>(
    UpdateProductFeatureDocument,
    options
  )
}
export type UpdateProductFeatureMutationHookResult = ReturnType<
  typeof useUpdateProductFeatureMutation
>
export type UpdateProductFeatureMutationResult = Apollo.MutationResult<UpdateProductFeatureMutation>
export type UpdateProductFeatureMutationOptions = Apollo.BaseMutationOptions<
  UpdateProductFeatureMutation,
  UpdateProductFeatureMutationVariables
>
export const UpdateProductSubFeatureDocument = gql`
  mutation UpdateProductSubFeature($updateProductSubFeatureInput: UpdateProductSubFeatureInput!) {
    updateProductSubFeature(updateProductSubFeatureInput: $updateProductSubFeatureInput) {
      idProductSubFeature
    }
  }
`
export type UpdateProductSubFeatureMutationFn = Apollo.MutationFunction<
  UpdateProductSubFeatureMutation,
  UpdateProductSubFeatureMutationVariables
>

/**
 * __useUpdateProductSubFeatureMutation__
 *
 * To run a mutation, you first call `useUpdateProductSubFeatureMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProductSubFeatureMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProductSubFeatureMutation, { data, loading, error }] = useUpdateProductSubFeatureMutation({
 *   variables: {
 *      updateProductSubFeatureInput: // value for 'updateProductSubFeatureInput'
 *   },
 * });
 */
export function useUpdateProductSubFeatureMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateProductSubFeatureMutation,
    UpdateProductSubFeatureMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    UpdateProductSubFeatureMutation,
    UpdateProductSubFeatureMutationVariables
  >(UpdateProductSubFeatureDocument, options)
}
export type UpdateProductSubFeatureMutationHookResult = ReturnType<
  typeof useUpdateProductSubFeatureMutation
>
export type UpdateProductSubFeatureMutationResult =
  Apollo.MutationResult<UpdateProductSubFeatureMutation>
export type UpdateProductSubFeatureMutationOptions = Apollo.BaseMutationOptions<
  UpdateProductSubFeatureMutation,
  UpdateProductSubFeatureMutationVariables
>
