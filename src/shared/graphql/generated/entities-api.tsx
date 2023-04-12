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

export type Address = {
  __typename?: 'Address'
  createdAt: Scalars['DateTime']
  defaultFlag?: Maybe<Scalars['String']>
  entity_address?: Maybe<Array<EntityAddress>>
  idAddress: Scalars['BUFFER']
  idAddressType: Scalars['BUFFER']
  idCountry: Scalars['BUFFER']
  idOu: Scalars['BUFFER']
  idProvince: Scalars['BUFFER']
  idState: Scalars['BUFFER']
  idStatus: IdStatus
  idUserCreate: Scalars['BUFFER']
  idUserUpdate: Scalars['BUFFER']
  line1: Scalars['String']
  line2?: Maybe<Scalars['String']>
  line3?: Maybe<Scalars['String']>
  others?: Maybe<Scalars['String']>
  postalCode?: Maybe<Scalars['String']>
  updatedAt: Scalars['DateTime']
}

export type AddressInput = {
  defaultFlag?: InputMaybe<Scalars['String']>
  idAddressType: Scalars['BUFFER']
  idCountry: Scalars['BUFFER']
  idOu?: InputMaybe<Scalars['BUFFER']>
  idProvince: Scalars['BUFFER']
  idState: Scalars['BUFFER']
  idUserCreate?: InputMaybe<Scalars['BUFFER']>
  line1: Scalars['String']
  line2?: InputMaybe<Scalars['String']>
  line3?: InputMaybe<Scalars['String']>
  others?: InputMaybe<Scalars['String']>
  postalCode?: InputMaybe<Scalars['String']>
}

export type AddressInputUpdate = {
  defaultFlag?: InputMaybe<Scalars['String']>
  idAddress?: InputMaybe<Scalars['BUFFER']>
  idAddressType?: InputMaybe<Scalars['BUFFER']>
  idCountry?: InputMaybe<Scalars['BUFFER']>
  idProvince?: InputMaybe<Scalars['BUFFER']>
  idState?: InputMaybe<Scalars['BUFFER']>
  idUserUpdate?: InputMaybe<Scalars['BUFFER']>
  line1?: InputMaybe<Scalars['String']>
  line2?: InputMaybe<Scalars['String']>
  line3?: InputMaybe<Scalars['String']>
  others?: InputMaybe<Scalars['String']>
  postalCode?: InputMaybe<Scalars['String']>
}

export type Contact = {
  __typename?: 'Contact'
  createdAt: Scalars['DateTime']
  entity_contact: Array<EntityContact>
  idContact: Scalars['BUFFER']
  idContactType: Scalars['BUFFER']
  idEntity?: Maybe<Scalars['BUFFER']>
  idOu: Scalars['BUFFER']
  idStatus: IdStatus
  idUserCreate: Scalars['BUFFER']
  idUserUpdate: Scalars['BUFFER']
  updatedAt: Scalars['DateTime']
  value: Scalars['String']
}

export type ContactInput = {
  idContactType: Scalars['BUFFER']
  idEntity?: InputMaybe<Scalars['BUFFER']>
  idOu?: InputMaybe<Scalars['BUFFER']>
  idUserCreate?: InputMaybe<Scalars['BUFFER']>
  idUserUpdate?: InputMaybe<Scalars['BUFFER']>
  value: Scalars['String']
}

export type CreateAddressInput = {
  address: AddressInput
}

export type CreateContactInput = {
  idContactType: Scalars['BUFFER']
  idOu: Scalars['BUFFER']
  idUserCreate: Scalars['BUFFER']
  value: Scalars['String']
}

export type CreateEntityInput = {
  addresses: Array<AddressInput>
  commercialName: Scalars['String']
  contacts: Array<ContactInput>
  idBusinessType?: InputMaybe<Scalars['BUFFER']>
  idChannel?: InputMaybe<Scalars['BUFFER']>
  idCountry: Scalars['BUFFER']
  idIndustry?: InputMaybe<Scalars['BUFFER']>
  idMarket?: InputMaybe<Scalars['BUFFER']>
  idOu?: InputMaybe<Scalars['BUFFER']>
  idRole: Scalars['BUFFER']
  idTypeEntity: Scalars['BUFFER']
  idUserCreate?: InputMaybe<Scalars['BUFFER']>
  idsIdentificationTypes: Array<EntityIdentificationTypeCreateEntityInput>
  name: Scalars['String']
}

export type CreateGeneralParameterInput = {
  code: Scalars['String']
  generalParameterValue: Array<GeneralParameterValueInput>
  idGeneralParameterValue?: InputMaybe<Scalars['BUFFER']>
  name: Scalars['String']
  shortName: Scalars['String']
}

export type DeleteAddressInput = {
  idAddress: Scalars['BUFFER']
}

export type DeleteContactInput = {
  idContact: Scalars['BUFFER']
}

export type Entity = {
  __typename?: 'Entity'
  bussinessType: GeneralParameterValue
  channel: GeneralParameterValue
  commercialName: Scalars['String']
  country: GeneralParameterValue
  createdAt: Scalars['DateTime']
  entityIdType: Array<GeneralParameterValue>
  entityType: GeneralParameterValue
  entity_Address?: Maybe<Array<EntityAddress>>
  entity_Contact?: Maybe<Array<EntityContact>>
  entity_EntityType?: Maybe<EntityType>
  entity_IdType?: Maybe<Array<EntityIdType>>
  entity_Role?: Maybe<EntityRol>
  idBusinessType?: Maybe<Scalars['BUFFER']>
  idChannel?: Maybe<Scalars['BUFFER']>
  idCountry: Scalars['BUFFER']
  idEntity: Scalars['BUFFER']
  idIndustry?: Maybe<Scalars['BUFFER']>
  idMarket?: Maybe<Scalars['BUFFER']>
  idOu: Scalars['BUFFER']
  idStatus: IdStatus
  idUserCreate: Scalars['BUFFER']
  idUserUpdate: Scalars['BUFFER']
  industry: GeneralParameterValue
  market: GeneralParameterValue
  name: Scalars['String']
  role: GeneralParameterValue
  updatedAt: Scalars['DateTime']
}

export type EntityAddress = {
  __typename?: 'EntityAddress'
  address?: Maybe<Address>
  createdAt: Scalars['DateTime']
  entity: Entity
  idAddress: Scalars['BUFFER']
  idEntity: Scalars['BUFFER']
  idOu: Scalars['BUFFER']
  idStatus: IdStatus
  idUserCreate: Scalars['BUFFER']
  idUserUpdate: Scalars['BUFFER']
  updatedAt: Scalars['DateTime']
}

export type EntityContact = {
  __typename?: 'EntityContact'
  contact?: Maybe<Contact>
  createdAt: Scalars['DateTime']
  entity?: Maybe<Entity>
  idContact: Scalars['BUFFER']
  idEntity: Scalars['BUFFER']
  idOu: Scalars['BUFFER']
  idStatus: IdStatus
  idUserCreate: Scalars['BUFFER']
  idUserUpdate: Scalars['BUFFER']
  updatedAt: Scalars['DateTime']
}

export type EntityIdType = {
  __typename?: 'EntityIdType'
  createdAt: Scalars['DateTime']
  entity?: Maybe<Entity>
  idEntity: Scalars['BUFFER']
  idEntityIdType: Scalars['BUFFER']
  idOu: Scalars['BUFFER']
  idStatus: IdStatus
  idUserCreate: Scalars['BUFFER']
  idUserUpdate: Scalars['BUFFER']
  updatedAt: Scalars['DateTime']
  value: Scalars['String']
}

export type EntityIdentificationTypeCreateEntityInput = {
  idEntityIdentificationType: Scalars['BUFFER']
  value: Scalars['String']
}

export type EntityIdentificationTypeUpdateEntityInput = {
  idEntityIdentificationType: Scalars['BUFFER']
  value?: InputMaybe<Scalars['String']>
}

export type EntityRol = {
  __typename?: 'EntityRol'
  createdAt: Scalars['DateTime']
  entity?: Maybe<Entity>
  idEntity: Scalars['BUFFER']
  idOu: Scalars['BUFFER']
  idRole: Scalars['BUFFER']
  idStatus: IdStatus
  idUserCreate: Scalars['BUFFER']
  idUserUpdate: Scalars['BUFFER']
  updatedAt: Scalars['DateTime']
}

export type EntityType = {
  __typename?: 'EntityType'
  createdAt: Scalars['DateTime']
  entity?: Maybe<Entity>
  idEntity: Scalars['BUFFER']
  idEntityType: Scalars['BUFFER']
  idOu: Scalars['BUFFER']
  idStatus: IdStatus
  idUserCreate: Scalars['BUFFER']
  idUserUpdate: Scalars['BUFFER']
  updatedAt: Scalars['DateTime']
}

export type FilterEntitiesInput = {
  commercialName?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
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
  entities: Array<Entity>
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

export type GetAddressInput = {
  idAddress: Scalars['BUFFER']
}

export type GetContactInput = {
  idContact: Scalars['BUFFER']
}

export type GetEntitiesInput = {
  filterEntities?: InputMaybe<FilterEntitiesInput>
  page: Scalars['Int']
}

/** Status of the entity : Active - Inactive */
export enum IdStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
}

export type Info = {
  __typename?: 'Info'
  count: Scalars['Int']
}

export type Mutation = {
  __typename?: 'Mutation'
  createAddress: Address
  createContact: Contact
  createEntity: ReponseCreateEntity
  createGeneralParameter: GeneralParameter
  deleteAddress: Address
  deleteContact: Contact
  deleteEntity: ResponseDeleteEntity
  deleteGeneralParameter: GeneralParameter
  updateAddress: Address
  updateContact: Contact
  updateEntity: ReponseUpdateEntity
  updateGeneralParameter: GeneralParameter
}

export type MutationCreateAddressArgs = {
  address: CreateAddressInput
}

export type MutationCreateContactArgs = {
  contact: CreateContactInput
}

export type MutationCreateEntityArgs = {
  entity: CreateEntityInput
}

export type MutationCreateGeneralParameterArgs = {
  createGeneralParameterInput: CreateGeneralParameterInput
}

export type MutationDeleteAddressArgs = {
  idAddress: DeleteAddressInput
}

export type MutationDeleteContactArgs = {
  deleteContactInput: DeleteContactInput
}

export type MutationDeleteEntityArgs = {
  idEntity: Scalars['BUFFER']
}

export type MutationDeleteGeneralParameterArgs = {
  id: Scalars['BUFFER']
}

export type MutationUpdateAddressArgs = {
  address: UpdateAddressInput
}

export type MutationUpdateContactArgs = {
  updateContactInput: UpdateContactInput
}

export type MutationUpdateEntityArgs = {
  updateEntityInput: UpdateEntityInput
}

export type MutationUpdateGeneralParameterArgs = {
  updateGeneralParameterInput: UpdateGeneralParameterInput
}

export type Query = {
  __typename?: 'Query'
  generalParameters: Array<GeneralParameter>
  getAddress: Address
  getAddresses: Array<Address>
  getAllGeneralParameterValues: Array<GeneralParameterValue>
  getContact: Contact
  getContacts: Array<Contact>
  getEntities: ReponseGetEntities
  getEntitiesContact: Array<EntityContact>
  getEntity: ReponseGetEntity
  getEntityAddress: Array<EntityAddress>
  getGeneralParameterById: GeneralParameter
  getGeneralParameterValueByArgs: Array<GeneralParameterValue>
  getGeneralParameterValueByGeneralParameterId: Array<GeneralParameterValue>
  getGeneralParameterValueById: GeneralParameterValue
  getGeneralParametersByCode: Array<GeneralParameter>
}

export type QueryGetAddressArgs = {
  idAddress: GetAddressInput
}

export type QueryGetContactArgs = {
  getContactInput: GetContactInput
}

export type QueryGetEntitiesArgs = {
  filter: GetEntitiesInput
}

export type QueryGetEntityArgs = {
  idEntity: Scalars['BUFFER']
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

export type ReponseCreateEntity = {
  __typename?: 'ReponseCreateEntity'
  entity: Entity
}

export type ReponseGetEntities = {
  __typename?: 'ReponseGetEntities'
  info: Info
  results: Array<Entity>
}

export type ReponseGetEntity = {
  __typename?: 'ReponseGetEntity'
  entity: Entity
}

export type ReponseUpdateEntity = {
  __typename?: 'ReponseUpdateEntity'
  result: Entity
}

export type ResponseDeleteEntity = {
  __typename?: 'ResponseDeleteEntity'
  result: Entity
}

export type UpdateAddressInput = {
  address: AddressInputUpdate
  idEntity: Scalars['BUFFER']
}

export type UpdateContactInput = {
  idContact?: InputMaybe<Scalars['BUFFER']>
  idContactType?: InputMaybe<Scalars['BUFFER']>
  idEntity?: InputMaybe<Scalars['BUFFER']>
  idOu?: InputMaybe<Scalars['BUFFER']>
  idUserUpdate?: InputMaybe<Scalars['BUFFER']>
  value?: InputMaybe<Scalars['String']>
}

export type UpdateEntityInput = {
  addresses?: InputMaybe<Array<AddressInputUpdate>>
  commercialName?: InputMaybe<Scalars['String']>
  contacts?: InputMaybe<Array<UpdateContactInput>>
  idBusinessType?: InputMaybe<Scalars['BUFFER']>
  idChannel?: InputMaybe<Scalars['BUFFER']>
  idCountry?: InputMaybe<Scalars['BUFFER']>
  idEntity: Scalars['BUFFER']
  idIndustry?: InputMaybe<Scalars['BUFFER']>
  idMarket?: InputMaybe<Scalars['BUFFER']>
  idOu?: InputMaybe<Scalars['BUFFER']>
  idRole?: InputMaybe<Scalars['BUFFER']>
  idTypeEntity?: InputMaybe<Scalars['BUFFER']>
  idUserUpdate?: InputMaybe<Scalars['BUFFER']>
  idsIdentificationTypes?: InputMaybe<Array<EntityIdentificationTypeUpdateEntityInput>>
  name?: InputMaybe<Scalars['String']>
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

export type CreateEntityMutationVariables = Exact<{
  entity: CreateEntityInput
}>

export type CreateEntityMutation = {
  __typename?: 'Mutation'
  createEntity: {
    __typename?: 'ReponseCreateEntity'
    entity: {
      __typename?: 'Entity'
      idEntity: any
      idOu: any
      commercialName: string
      name: string
      idCountry: any
      idBusinessType?: any | null
      idMarket?: any | null
      idChannel?: any | null
      idIndustry?: any | null
      idStatus: IdStatus
      idUserCreate: any
      createdAt: any
      idUserUpdate: any
      updatedAt: any
    }
  }
}

export type DeleteEntityMutationVariables = Exact<{
  idEntity: Scalars['BUFFER']
}>

export type DeleteEntityMutation = {
  __typename?: 'Mutation'
  deleteEntity: {
    __typename?: 'ResponseDeleteEntity'
    result: {
      __typename?: 'Entity'
      idEntity: any
      idOu: any
      commercialName: string
      name: string
      idCountry: any
      idBusinessType?: any | null
      idMarket?: any | null
      idChannel?: any | null
      idIndustry?: any | null
      idStatus: IdStatus
      idUserCreate: any
      createdAt: any
      idUserUpdate: any
      updatedAt: any
    }
  }
}

export type GetEntitiesQueryVariables = Exact<{
  filter: GetEntitiesInput
}>

export type GetEntitiesQuery = {
  __typename?: 'Query'
  getEntities: {
    __typename?: 'ReponseGetEntities'
    results: Array<{
      __typename?: 'Entity'
      idEntity: any
      idOu: any
      commercialName: string
      name: string
      idCountry: any
      idBusinessType?: any | null
      idMarket?: any | null
      idChannel?: any | null
      idIndustry?: any | null
      idStatus: IdStatus
      idUserCreate: any
      idUserUpdate: any
      createdAt: any
      updatedAt: any
      entity_Contact?: Array<{
        __typename?: 'EntityContact'
        idEntity: any
        idOu: any
        idContact: any
        idStatus: IdStatus
        idUserCreate: any
        createdAt: any
        idUserUpdate: any
        updatedAt: any
        contact?: {
          __typename?: 'Contact'
          idContact: any
          idOu: any
          idEntity?: any | null
          value: string
          idContactType: any
          idStatus: IdStatus
          idUserCreate: any
          createdAt: any
          idUserUpdate: any
          updatedAt: any
        } | null
      }> | null
      entity_Address?: Array<{
        __typename?: 'EntityAddress'
        idEntity: any
        idOu: any
        idAddress: any
        idStatus: IdStatus
        idUserCreate: any
        createdAt: any
        idUserUpdate: any
        updatedAt: any
        address?: {
          __typename?: 'Address'
          idAddress: any
          idOu: any
          line1: string
          line2?: string | null
          line3?: string | null
          idProvince: any
          idState: any
          postalCode?: string | null
          idCountry: any
          others?: string | null
          idAddressType: any
          defaultFlag?: string | null
          createdAt: any
          idStatus: IdStatus
          idUserCreate: any
          updatedAt: any
          idUserUpdate: any
        } | null
      }> | null
      entity_EntityType?: {
        __typename?: 'EntityType'
        idEntity: any
        idOu: any
        idEntityType: any
        idStatus: IdStatus
        idUserCreate: any
        idUserUpdate: any
        createdAt: any
        updatedAt: any
      } | null
      entity_IdType?: Array<{
        __typename?: 'EntityIdType'
        idEntityIdType: any
        idOu: any
        idEntity: any
        value: string
        idStatus: IdStatus
        idUserCreate: any
        createdAt: any
        idUserUpdate: any
        updatedAt: any
      }> | null
      entity_Role?: {
        __typename?: 'EntityRol'
        idEntity: any
        idOu: any
        idRole: any
        idStatus: IdStatus
        idUserCreate: any
        createdAt: any
        idUserUpdate: any
        updatedAt: any
      } | null
      entityIdType: Array<{
        __typename?: 'GeneralParameterValue'
        idGeneralParameterValue: any
        idOu?: any | null
        name: string
        shortName: string
        code: string
        value?: string | null
        type?: string | null
        idStatus: string
        idGeneralParameterType: any
        idGeneralParameter?: any | null
        createdAt: any
        updatedAt: any
      }>
    }>
  }
}

export type GetEntityQueryVariables = Exact<{
  idEntity: Scalars['BUFFER']
}>

export type GetEntityQuery = {
  __typename?: 'Query'
  getEntity: {
    __typename?: 'ReponseGetEntity'
    entity: {
      __typename?: 'Entity'
      idEntity: any
      idOu: any
      commercialName: string
      name: string
      idCountry: any
      idBusinessType?: any | null
      idMarket?: any | null
      idChannel?: any | null
      idIndustry?: any | null
      idStatus: IdStatus
      idUserCreate: any
      idUserUpdate: any
      createdAt: any
      updatedAt: any
      entity_Contact?: Array<{
        __typename?: 'EntityContact'
        idEntity: any
        idOu: any
        idContact: any
        idStatus: IdStatus
        idUserCreate: any
        createdAt: any
        idUserUpdate: any
        updatedAt: any
        contact?: {
          __typename?: 'Contact'
          idContact: any
          idOu: any
          idEntity?: any | null
          value: string
          idContactType: any
          idStatus: IdStatus
          idUserCreate: any
          createdAt: any
          idUserUpdate: any
          updatedAt: any
        } | null
      }> | null
      entity_Address?: Array<{
        __typename?: 'EntityAddress'
        idEntity: any
        idOu: any
        idAddress: any
        idStatus: IdStatus
        idUserCreate: any
        createdAt: any
        idUserUpdate: any
        updatedAt: any
        address?: {
          __typename?: 'Address'
          idAddress: any
          idOu: any
          line1: string
          line2?: string | null
          line3?: string | null
          idProvince: any
          idState: any
          postalCode?: string | null
          idCountry: any
          others?: string | null
          idAddressType: any
          defaultFlag?: string | null
          createdAt: any
          idStatus: IdStatus
          idUserCreate: any
          updatedAt: any
          idUserUpdate: any
        } | null
      }> | null
      entity_EntityType?: {
        __typename?: 'EntityType'
        idEntity: any
        idOu: any
        idEntityType: any
        idStatus: IdStatus
        idUserCreate: any
        idUserUpdate: any
        createdAt: any
        updatedAt: any
      } | null
      entity_IdType?: Array<{
        __typename?: 'EntityIdType'
        idEntityIdType: any
        idOu: any
        idEntity: any
        value: string
        idStatus: IdStatus
        idUserCreate: any
        createdAt: any
        idUserUpdate: any
        updatedAt: any
      }> | null
      entity_Role?: {
        __typename?: 'EntityRol'
        idEntity: any
        idOu: any
        idRole: any
        idStatus: IdStatus
        idUserCreate: any
        createdAt: any
        idUserUpdate: any
        updatedAt: any
      } | null
      entityIdType: Array<{
        __typename?: 'GeneralParameterValue'
        idGeneralParameterValue: any
        idOu?: any | null
        name: string
        shortName: string
        code: string
        value?: string | null
        type?: string | null
        idStatus: string
        idGeneralParameterType: any
        idGeneralParameter?: any | null
        createdAt: any
        updatedAt: any
      }>
    }
  }
}

export type UpdateEntityMutationVariables = Exact<{
  updateEntityInput: UpdateEntityInput
}>

export type UpdateEntityMutation = {
  __typename?: 'Mutation'
  updateEntity: {
    __typename?: 'ReponseUpdateEntity'
    result: {
      __typename?: 'Entity'
      idEntity: any
      idOu: any
      commercialName: string
      name: string
      idCountry: any
      idBusinessType?: any | null
      idMarket?: any | null
      idChannel?: any | null
      idIndustry?: any | null
      idStatus: IdStatus
      idUserCreate: any
      idUserUpdate: any
      createdAt: any
      updatedAt: any
    }
  }
}

export const CreateEntityDocument = gql`
  mutation CreateEntity($entity: CreateEntityInput!) {
    createEntity(entity: $entity) {
      entity {
        idEntity
        idOu
        commercialName
        name
        idCountry
        idBusinessType
        idMarket
        idChannel
        idIndustry
        idStatus
        idUserCreate
        createdAt
        idUserUpdate
        updatedAt
      }
    }
  }
`
export type CreateEntityMutationFn = Apollo.MutationFunction<
  CreateEntityMutation,
  CreateEntityMutationVariables
>

/**
 * __useCreateEntityMutation__
 *
 * To run a mutation, you first call `useCreateEntityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateEntityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createEntityMutation, { data, loading, error }] = useCreateEntityMutation({
 *   variables: {
 *      entity: // value for 'entity'
 *   },
 * });
 */
export function useCreateEntityMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateEntityMutation, CreateEntityMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateEntityMutation, CreateEntityMutationVariables>(
    CreateEntityDocument,
    options
  )
}
export type CreateEntityMutationHookResult = ReturnType<typeof useCreateEntityMutation>
export type CreateEntityMutationResult = Apollo.MutationResult<CreateEntityMutation>
export type CreateEntityMutationOptions = Apollo.BaseMutationOptions<
  CreateEntityMutation,
  CreateEntityMutationVariables
>
export const DeleteEntityDocument = gql`
  mutation DeleteEntity($idEntity: BUFFER!) {
    deleteEntity(idEntity: $idEntity) {
      result {
        idEntity
        idOu
        commercialName
        name
        idCountry
        idBusinessType
        idMarket
        idChannel
        idIndustry
        idStatus
        idUserCreate
        createdAt
        idUserUpdate
        updatedAt
      }
    }
  }
`
export type DeleteEntityMutationFn = Apollo.MutationFunction<
  DeleteEntityMutation,
  DeleteEntityMutationVariables
>

/**
 * __useDeleteEntityMutation__
 *
 * To run a mutation, you first call `useDeleteEntityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteEntityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteEntityMutation, { data, loading, error }] = useDeleteEntityMutation({
 *   variables: {
 *      idEntity: // value for 'idEntity'
 *   },
 * });
 */
export function useDeleteEntityMutation(
  baseOptions?: Apollo.MutationHookOptions<DeleteEntityMutation, DeleteEntityMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<DeleteEntityMutation, DeleteEntityMutationVariables>(
    DeleteEntityDocument,
    options
  )
}
export type DeleteEntityMutationHookResult = ReturnType<typeof useDeleteEntityMutation>
export type DeleteEntityMutationResult = Apollo.MutationResult<DeleteEntityMutation>
export type DeleteEntityMutationOptions = Apollo.BaseMutationOptions<
  DeleteEntityMutation,
  DeleteEntityMutationVariables
>
export const GetEntitiesDocument = gql`
  query GetEntities($filter: GetEntitiesInput!) {
    getEntities(filter: $filter) {
      results {
        idEntity
        idOu
        commercialName
        name
        idCountry
        idBusinessType
        idMarket
        idChannel
        idIndustry
        idStatus
        idUserCreate
        idUserUpdate
        createdAt
        updatedAt
        entity_Contact {
          idEntity
          idOu
          idContact
          idStatus
          idUserCreate
          createdAt
          idUserUpdate
          updatedAt
          contact {
            idContact
            idOu
            idEntity
            value
            idContactType
            idStatus
            idUserCreate
            createdAt
            idUserUpdate
            updatedAt
          }
        }
        entity_Address {
          idEntity
          idOu
          idAddress
          idStatus
          idUserCreate
          createdAt
          idUserUpdate
          updatedAt
          address {
            idAddress
            idOu
            line1
            line2
            line3
            idProvince
            idState
            postalCode
            idCountry
            others
            idAddressType
            defaultFlag
            createdAt
            idStatus
            idUserCreate
            updatedAt
            idUserUpdate
          }
        }
        entity_EntityType {
          idEntity
          idOu
          idEntityType
          idStatus
          idUserCreate
          idUserUpdate
          createdAt
          updatedAt
        }
        entity_IdType {
          idEntityIdType
          idOu
          idEntity
          value
          idStatus
          idUserCreate
          createdAt
          idUserUpdate
          updatedAt
        }
        entity_Role {
          idEntity
          idOu
          idRole
          idStatus
          idUserCreate
          createdAt
          idUserUpdate
          updatedAt
        }
        entityIdType {
          idGeneralParameterValue
          idOu
          name
          shortName
          code
          value
          type
          idStatus
          idGeneralParameterType
          idGeneralParameter
          createdAt
          updatedAt
        }
      }
    }
  }
`

/**
 * __useGetEntitiesQuery__
 *
 * To run a query within a React component, call `useGetEntitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEntitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEntitiesQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useGetEntitiesQuery(
  baseOptions: Apollo.QueryHookOptions<GetEntitiesQuery, GetEntitiesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetEntitiesQuery, GetEntitiesQueryVariables>(GetEntitiesDocument, options)
}
export function useGetEntitiesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetEntitiesQuery, GetEntitiesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetEntitiesQuery, GetEntitiesQueryVariables>(
    GetEntitiesDocument,
    options
  )
}
export type GetEntitiesQueryHookResult = ReturnType<typeof useGetEntitiesQuery>
export type GetEntitiesLazyQueryHookResult = ReturnType<typeof useGetEntitiesLazyQuery>
export type GetEntitiesQueryResult = Apollo.QueryResult<GetEntitiesQuery, GetEntitiesQueryVariables>
export const GetEntityDocument = gql`
  query GetEntity($idEntity: BUFFER!) {
    getEntity(idEntity: $idEntity) {
      entity {
        idEntity
        idOu
        commercialName
        name
        idCountry
        idBusinessType
        idMarket
        idChannel
        idIndustry
        idStatus
        idUserCreate
        idUserUpdate
        createdAt
        updatedAt
        entity_Contact {
          idEntity
          idOu
          idContact
          idStatus
          idUserCreate
          createdAt
          idUserUpdate
          updatedAt
          contact {
            idContact
            idOu
            idEntity
            value
            idContactType
            idStatus
            idUserCreate
            createdAt
            idUserUpdate
            updatedAt
          }
        }
        entity_Address {
          idEntity
          idOu
          idAddress
          idStatus
          idUserCreate
          createdAt
          idUserUpdate
          updatedAt
          address {
            idAddress
            idOu
            line1
            line2
            line3
            idProvince
            idState
            postalCode
            idCountry
            others
            idAddressType
            defaultFlag
            createdAt
            idStatus
            idUserCreate
            updatedAt
            idUserUpdate
          }
        }
        entity_EntityType {
          idEntity
          idOu
          idEntityType
          idStatus
          idUserCreate
          idUserUpdate
          createdAt
          updatedAt
        }
        entity_IdType {
          idEntityIdType
          idOu
          idEntity
          value
          idStatus
          idUserCreate
          createdAt
          idUserUpdate
          updatedAt
        }
        entity_Role {
          idEntity
          idOu
          idRole
          idStatus
          idUserCreate
          createdAt
          idUserUpdate
          updatedAt
        }
        entityIdType {
          idGeneralParameterValue
          idOu
          name
          shortName
          code
          value
          type
          idStatus
          idGeneralParameterType
          idGeneralParameter
          createdAt
          updatedAt
        }
      }
    }
  }
`

/**
 * __useGetEntityQuery__
 *
 * To run a query within a React component, call `useGetEntityQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEntityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEntityQuery({
 *   variables: {
 *      idEntity: // value for 'idEntity'
 *   },
 * });
 */
export function useGetEntityQuery(
  baseOptions: Apollo.QueryHookOptions<GetEntityQuery, GetEntityQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetEntityQuery, GetEntityQueryVariables>(GetEntityDocument, options)
}
export function useGetEntityLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetEntityQuery, GetEntityQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetEntityQuery, GetEntityQueryVariables>(GetEntityDocument, options)
}
export type GetEntityQueryHookResult = ReturnType<typeof useGetEntityQuery>
export type GetEntityLazyQueryHookResult = ReturnType<typeof useGetEntityLazyQuery>
export type GetEntityQueryResult = Apollo.QueryResult<GetEntityQuery, GetEntityQueryVariables>
export const UpdateEntityDocument = gql`
  mutation UpdateEntity($updateEntityInput: UpdateEntityInput!) {
    updateEntity(updateEntityInput: $updateEntityInput) {
      result {
        idEntity
        idOu
        commercialName
        name
        idCountry
        idBusinessType
        idMarket
        idChannel
        idIndustry
        idStatus
        idUserCreate
        idUserUpdate
        createdAt
        updatedAt
      }
    }
  }
`
export type UpdateEntityMutationFn = Apollo.MutationFunction<
  UpdateEntityMutation,
  UpdateEntityMutationVariables
>

/**
 * __useUpdateEntityMutation__
 *
 * To run a mutation, you first call `useUpdateEntityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateEntityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateEntityMutation, { data, loading, error }] = useUpdateEntityMutation({
 *   variables: {
 *      updateEntityInput: // value for 'updateEntityInput'
 *   },
 * });
 */
export function useUpdateEntityMutation(
  baseOptions?: Apollo.MutationHookOptions<UpdateEntityMutation, UpdateEntityMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<UpdateEntityMutation, UpdateEntityMutationVariables>(
    UpdateEntityDocument,
    options
  )
}
export type UpdateEntityMutationHookResult = ReturnType<typeof useUpdateEntityMutation>
export type UpdateEntityMutationResult = Apollo.MutationResult<UpdateEntityMutation>
export type UpdateEntityMutationOptions = Apollo.BaseMutationOptions<
  UpdateEntityMutation,
  UpdateEntityMutationVariables
>
