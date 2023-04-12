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

export type CreateModulePermissionInput = {
  idModule: Scalars['BUFFER']
  idOu: Scalars['BUFFER']
  idPermissions: Array<Scalars['BUFFER']>
  idUserCreate?: InputMaybe<Scalars['BUFFER']>
  idUserUpdate?: InputMaybe<Scalars['BUFFER']>
}

export type CreateOuInput = {
  code: Scalars['String']
  idEntity: Scalars['BUFFER']
  idUserCreate?: InputMaybe<Scalars['BUFFER']>
  idUserUpdate?: InputMaybe<Scalars['BUFFER']>
  name: Scalars['String']
  shortName: Scalars['String']
}

export type CreateRolePermissionInput = {
  idPermissions: Array<Scalars['BUFFER']>
  idRole: Scalars['BUFFER']
  idUserCreate?: InputMaybe<Scalars['BUFFER']>
  idUserUpdate?: InputMaybe<Scalars['BUFFER']>
}

export type CreateSessionDto = {
  app: Scalars['String']
  client: Scalars['String']
  date: Scalars['DateTime']
  idOu: Scalars['BUFFER']
  idSessionOauth: Scalars['String']
  idStatus: Scalars['String']
  idUser: Scalars['BUFFER']
  idUserCreate: Scalars['BUFFER']
  idUserUpdate: Scalars['BUFFER']
  ipv4: Scalars['String']
  ipv6: Scalars['String']
  macaddress: Scalars['String']
}

export type CreateUserInput = {
  email: Scalars['String']
  idEntity: Scalars['BUFFER']
  idLanguage: Scalars['BUFFER']
  idOu: Scalars['BUFFER']
  idUserOauth: Scalars['String']
  idUserType?: InputMaybe<Scalars['BUFFER']>
  name: Scalars['String']
  phone: Scalars['String']
  userName: Scalars['String']
}

export type CreateUserModuleDto = {
  idModule: Scalars['BUFFER']
  idOu: Scalars['BUFFER']
  idStatus: Scalars['String']
  idUser: Scalars['BUFFER']
  idUserCreate?: InputMaybe<Scalars['BUFFER']>
  idUserUpdate?: InputMaybe<Scalars['BUFFER']>
}

export type CreateUserRoleInput = {
  idOu: Scalars['BUFFER']
  idRole: Scalars['BUFFER']
  idStatus: Scalars['String']
  idUser: Scalars['BUFFER']
  idUserCreate?: InputMaybe<Scalars['BUFFER']>
  idUserUpdate?: InputMaybe<Scalars['BUFFER']>
}

export type CreateUserTransactionDto = {
  email: Scalars['String']
  idEntity: Scalars['BUFFER']
  idOu: Scalars['BUFFER']
  idUserOauth: Scalars['String']
  idUserType?: InputMaybe<Scalars['BUFFER']>
  name: Scalars['String']
  phone: Scalars['String']
  userName: Scalars['String']
}

export type DeleteOuInput = {
  idOu: Scalars['BUFFER']
}

export type DeleteSessionInput = {
  idSession: Scalars['BUFFER']
}

export type DeleteUserInput = {
  idUser: Scalars['BUFFER']
}

export type DeleteUserModuleInput = {
  idModule: Scalars['BUFFER']
  idOu: Scalars['BUFFER']
  idUser: Scalars['BUFFER']
}

export type DeleteUserRoleDto = {
  idOu: Scalars['BUFFER']
  idRole: Scalars['BUFFER']
  idUser: Scalars['BUFFER']
}

export type DeleteUserTransactionInput = {
  idUser: Scalars['BUFFER']
}

export type FindUserModuleByIdInput = {
  idModule: Scalars['BUFFER']
  idOu: Scalars['BUFFER']
  idUser: Scalars['BUFFER']
}

export type FindUserRoleById = {
  idOu: Scalars['BUFFER']
  idRole: Scalars['BUFFER']
  idUser: Scalars['BUFFER']
}

export type ModulePermission = {
  __typename?: 'ModulePermission'
  ModulePermission?: Maybe<Scalars['String']>
  count?: Maybe<ModulePermissionCount>
  createdAt?: Maybe<Scalars['DateTime']>
  idModule?: Maybe<Scalars['BUFFER']>
  idOu?: Maybe<Scalars['BUFFER']>
  idPermission?: Maybe<Scalars['BUFFER']>
  idStatus?: Maybe<Scalars['String']>
  idUserCreate?: Maybe<Scalars['BUFFER']>
  idUserUpdate?: Maybe<Scalars['BUFFER']>
  moduleName?: Maybe<Scalars['String']>
  permissionName?: Maybe<Scalars['String']>
  permissionsCount?: Maybe<PermissionsModuleCount>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type ModulePermissionCount = {
  __typename?: 'ModulePermissionCount'
  count: Scalars['Float']
}

export type Mutation = {
  __typename?: 'Mutation'
  createModulePermission: ModulePermission
  createOu: Ou
  createRolePermission: RolePermission
  createSession: Session
  createUser: Users
  createUserModule: UserModulesModule
  createUserRole: UserRole
  createUserTransaction: UserTransaction
  deleteModulePermission: ModulePermission
  deleteOu: Ou
  deleteRolePermission: RolePermission
  deleteSession: Session
  deleteUser: Users
  deleteUserModule: UserModulesModule
  deleteUserRole: UserRole
  deleteUserTransaction: UserTransaction
  updateModulePermission: ModulePermission
  updateOu: Ou
  updateRolePermission: RolePermission
  updateSession: Session
  updateUser: Users
  updateUserModule: UserModulesModule
  updateUserRole: UserRole
  updateUserTransaction: UserTransaction
}

export type MutationCreateModulePermissionArgs = {
  createModulePermissionInput: CreateModulePermissionInput
}

export type MutationCreateOuArgs = {
  data: CreateOuInput
}

export type MutationCreateRolePermissionArgs = {
  createRolePermissionInput: CreateRolePermissionInput
}

export type MutationCreateSessionArgs = {
  data: CreateSessionDto
}

export type MutationCreateUserArgs = {
  data: CreateUserInput
}

export type MutationCreateUserModuleArgs = {
  data: CreateUserModuleDto
}

export type MutationCreateUserRoleArgs = {
  data: CreateUserRoleInput
}

export type MutationCreateUserTransactionArgs = {
  data: CreateUserTransactionDto
}

export type MutationDeleteModulePermissionArgs = {
  idModule: Scalars['BUFFER']
  idPermission: Scalars['BUFFER']
}

export type MutationDeleteOuArgs = {
  data: DeleteOuInput
}

export type MutationDeleteRolePermissionArgs = {
  idPermission: Scalars['BUFFER']
  idRole: Scalars['BUFFER']
}

export type MutationDeleteSessionArgs = {
  data: DeleteSessionInput
}

export type MutationDeleteUserArgs = {
  data: DeleteUserInput
}

export type MutationDeleteUserModuleArgs = {
  data: DeleteUserModuleInput
}

export type MutationDeleteUserRoleArgs = {
  data: DeleteUserRoleDto
}

export type MutationDeleteUserTransactionArgs = {
  data: DeleteUserTransactionInput
}

export type MutationUpdateModulePermissionArgs = {
  updateModulePermissionInput: UpdateModulePermissionInput
}

export type MutationUpdateOuArgs = {
  data: UpdateOuInput
}

export type MutationUpdateRolePermissionArgs = {
  updateRolePermissionInput: UpdateRolePermissionInput
}

export type MutationUpdateSessionArgs = {
  data: UpdateSessionDto
}

export type MutationUpdateUserArgs = {
  data: UpdateUserInput
}

export type MutationUpdateUserModuleArgs = {
  data: UpdateUserModuleDto
}

export type MutationUpdateUserRoleArgs = {
  data: UpdateUserRoleDto
}

export type MutationUpdateUserTransactionArgs = {
  data: UpdateUserTransactionDto
}

export type Ou = {
  __typename?: 'Ou'
  code: Scalars['String']
  createdAt: Scalars['DateTime']
  idEntity: Scalars['BUFFER']
  idOu: Scalars['BUFFER']
  idStatus: Scalars['String']
  idUserCreate: Scalars['BUFFER']
  idUserUpdate: Scalars['BUFFER']
  name: Scalars['String']
  shortName: Scalars['String']
  updatedAt: Scalars['DateTime']
  users?: Maybe<Array<Users>>
}

export type PermissionsCount = {
  __typename?: 'PermissionsCount'
  idPermission: Scalars['Float']
}

export type PermissionsModuleCount = {
  __typename?: 'PermissionsModuleCount'
  idPermission: Scalars['Float']
}

export type Query = {
  __typename?: 'Query'
  _service: _Service
  getAllModulePermission: Array<ModulePermission>
  getAllOus: Array<Ou>
  getAllRolePermission: Array<RolePermission>
  getAllSessions: Array<Session>
  getAllUserModules: Array<UserModulesModule>
  getAllUserRoles: Array<UserRole>
  getAllUserTransactions: Array<UserTransaction>
  getAllUsers: Array<Users>
  getModulePermissionById: ModulePermission
  getOuByCode: Ou
  getOuById: Ou
  getRolePermissionById: RolePermission
  getSessionById: Session
  getUserByEmailAddress: Users
  getUserById: Users
  getUserModuleById: UserModulesModule
  getUserModulesByUserId: Array<UserModulesModule>
  getUserRoleById: UserRole
  getUserRolesByUserId: Array<UserRole>
  getUserTransactionById: UserTransaction
}

export type QueryGetModulePermissionByIdArgs = {
  idModule: Scalars['BUFFER']
  idPermission: Scalars['BUFFER']
}

export type QueryGetOuByCodeArgs = {
  code: Scalars['String']
}

export type QueryGetOuByIdArgs = {
  id: Scalars['BUFFER']
}

export type QueryGetRolePermissionByIdArgs = {
  idPermission: Scalars['BUFFER']
  idRole: Scalars['BUFFER']
}

export type QueryGetSessionByIdArgs = {
  id: Scalars['BUFFER']
}

export type QueryGetUserByEmailAddressArgs = {
  email: Scalars['String']
}

export type QueryGetUserByIdArgs = {
  id: Scalars['BUFFER']
}

export type QueryGetUserModuleByIdArgs = {
  data: FindUserModuleByIdInput
}

export type QueryGetUserModulesByUserIdArgs = {
  idUser: Scalars['BUFFER']
}

export type QueryGetUserRoleByIdArgs = {
  data: FindUserRoleById
}

export type QueryGetUserRolesByUserIdArgs = {
  idUser: Scalars['BUFFER']
}

export type QueryGetUserTransactionByIdArgs = {
  id: Scalars['BUFFER']
}

export type RolePermission = {
  __typename?: 'RolePermission'
  count?: Maybe<RolePermissionCount>
  createdAt?: Maybe<Scalars['DateTime']>
  idOu?: Maybe<Scalars['BUFFER']>
  idPermission?: Maybe<Scalars['BUFFER']>
  idRole?: Maybe<Scalars['BUFFER']>
  idStatus?: Maybe<Scalars['String']>
  idUserCreate?: Maybe<Scalars['BUFFER']>
  idUserUpdate?: Maybe<Scalars['BUFFER']>
  permissionName?: Maybe<Scalars['String']>
  permissionsCount?: Maybe<PermissionsCount>
  roleName?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type RolePermissionCount = {
  __typename?: 'RolePermissionCount'
  count: Scalars['Float']
}

export type Session = {
  __typename?: 'Session'
  app: Scalars['String']
  client: Scalars['String']
  date: Scalars['DateTime']
  idOu: Scalars['BUFFER']
  idSession: Scalars['BUFFER']
  idSessionOauth: Scalars['String']
  idStatus: Scalars['String']
  idUser: Scalars['BUFFER']
  idUserCreate: Scalars['BUFFER']
  idUserUpdate: Scalars['BUFFER']
  ipv4: Scalars['String']
  ipv6: Scalars['String']
  macaddress: Scalars['String']
  shortName: Scalars['String']
  users: Users
}

export type UpdateModulePermissionInput = {
  idModule: Scalars['BUFFER']
  idPermission: Scalars['BUFFER']
  idUserCreate?: InputMaybe<Scalars['BUFFER']>
  idUserUpdate?: InputMaybe<Scalars['BUFFER']>
  newIdModule: Scalars['BUFFER']
  newIdPermission: Scalars['BUFFER']
}

export type UpdateOuInput = {
  code: Scalars['String']
  idEntity: Scalars['BUFFER']
  idOu: Scalars['BUFFER']
  idStatus?: InputMaybe<Scalars['String']>
  idUserCreate?: InputMaybe<Scalars['BUFFER']>
  idUserUpdate?: InputMaybe<Scalars['BUFFER']>
  name: Scalars['String']
  shortName: Scalars['String']
}

export type UpdateRolePermissionInput = {
  idPermission: Scalars['BUFFER']
  idRole: Scalars['BUFFER']
  idUserCreate?: InputMaybe<Scalars['BUFFER']>
  idUserUpdate?: InputMaybe<Scalars['BUFFER']>
  newIdPermission: Scalars['BUFFER']
  newIdRole: Scalars['BUFFER']
}

export type UpdateSessionDto = {
  app: Scalars['String']
  client: Scalars['String']
  date: Scalars['DateTime']
  idOu: Scalars['BUFFER']
  idSession: Scalars['BUFFER']
  idSessionOauth: Scalars['String']
  idStatus: Scalars['String']
  idUser: Scalars['BUFFER']
  idUserCreate: Scalars['BUFFER']
  idUserUpdate: Scalars['BUFFER']
  ipv4: Scalars['String']
  ipv6: Scalars['String']
  macaddress: Scalars['String']
}

export type UpdateUserInput = {
  email: Scalars['String']
  idEntity: Scalars['BUFFER']
  idLanguage: Scalars['BUFFER']
  idOu: Scalars['BUFFER']
  idUser: Scalars['BUFFER']
  idUserOauth: Scalars['String']
  idUserType?: InputMaybe<Scalars['BUFFER']>
  name: Scalars['String']
  phone: Scalars['String']
  userName: Scalars['String']
}

export type UpdateUserModuleDto = {
  createdAt: Scalars['DateTime']
  idModule: Scalars['BUFFER']
  idOu: Scalars['BUFFER']
  idStatus: Scalars['String']
  idUser: Scalars['BUFFER']
  idUserCreate: Scalars['BUFFER']
  idUserUpdate: Scalars['BUFFER']
  updatedAt: Scalars['DateTime']
  user: UsersInput
}

export type UpdateUserRoleDto = {
  idOu: Scalars['BUFFER']
  idRole: Scalars['BUFFER']
  idStatus: Scalars['String']
  idUser: Scalars['BUFFER']
  idUserUpdate: Scalars['BUFFER']
}

export type UpdateUserTransactionDto = {
  email: Scalars['String']
  idEntity: Scalars['BUFFER']
  idUser: Scalars['BUFFER']
  idUserType: Scalars['BUFFER']
  name: Scalars['String']
  phone: Scalars['String']
  userName: Scalars['String']
}

export type UserModulesModule = {
  __typename?: 'UserModulesModule'
  createdAt: Scalars['DateTime']
  idModule?: Maybe<Scalars['BUFFER']>
  idOu: Scalars['BUFFER']
  idStatus: Scalars['String']
  idUser: Scalars['BUFFER']
  idUserCreate?: Maybe<Scalars['BUFFER']>
  idUserUpdate?: Maybe<Scalars['BUFFER']>
  updatedAt: Scalars['DateTime']
}

export type UserRole = {
  __typename?: 'UserRole'
  createdAt: Scalars['DateTime']
  idOu: Scalars['BUFFER']
  idRole: Scalars['BUFFER']
  idStatus: Scalars['String']
  idUser: Scalars['BUFFER']
  idUserCreate: Scalars['BUFFER']
  idUserUpdate: Scalars['BUFFER']
  updatedAt: Scalars['DateTime']
}

export type UserTransaction = {
  __typename?: 'UserTransaction'
  createdAt: Scalars['DateTime']
  email: Scalars['String']
  idEntity: Scalars['BUFFER']
  idOu: Scalars['BUFFER']
  idUser: Scalars['BUFFER']
  idUserOauth: Scalars['String']
  idUserType: Scalars['BUFFER']
  name: Scalars['String']
  phone: Scalars['String']
  updatedAt: Scalars['DateTime']
  userName: Scalars['String']
}

export type Users = {
  __typename?: 'Users'
  createdAt: Scalars['DateTime']
  email: Scalars['String']
  idEntity: Scalars['BUFFER']
  idLanguage?: Maybe<Scalars['String']>
  idOu: Scalars['BUFFER']
  idStatus: Scalars['String']
  idUser: Scalars['BUFFER']
  idUserCreate?: Maybe<Scalars['BUFFER']>
  idUserOauth: Scalars['String']
  idUserType?: Maybe<Scalars['BUFFER']>
  idUserUpdate?: Maybe<Scalars['BUFFER']>
  name: Scalars['String']
  phone: Scalars['String']
  updatedAt: Scalars['DateTime']
  userName: Scalars['String']
  utcTime?: Maybe<Scalars['Float']>
}

export type UsersInput = {
  createdAt: Scalars['DateTime']
  email: Scalars['String']
  idEntity: Scalars['BUFFER']
  idOu: Scalars['BUFFER']
  idUser: Scalars['BUFFER']
  idUserOauth: Scalars['String']
  name: Scalars['String']
  phone: Scalars['String']
  updatedAt: Scalars['DateTime']
  userName: Scalars['String']
}

export type _Service = {
  __typename?: '_Service'
  sdl?: Maybe<Scalars['String']>
}

export type CreateModulePermissionMutationVariables = Exact<{
  createModulePermission: CreateModulePermissionInput
}>

export type CreateModulePermissionMutation = {
  __typename?: 'Mutation'
  createModulePermission: {
    __typename?: 'ModulePermission'
    idModule?: any | null
    idPermission?: any | null
    idOu?: any | null
    idStatus?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    idUserCreate?: any | null
    idUserUpdate?: any | null
  }
}

export type DeleteModulePermissionMutationVariables = Exact<{
  idModule: Scalars['BUFFER']
  idPermission: Scalars['BUFFER']
}>

export type DeleteModulePermissionMutation = {
  __typename?: 'Mutation'
  deleteModulePermission: {
    __typename?: 'ModulePermission'
    idModule?: any | null
    idPermission?: any | null
    idOu?: any | null
    idStatus?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    idUserCreate?: any | null
    idUserUpdate?: any | null
  }
}

export type GetAllModulePermissionQueryVariables = Exact<{ [key: string]: never }>

export type GetAllModulePermissionQuery = {
  __typename?: 'Query'
  getAllModulePermission: Array<{
    __typename?: 'ModulePermission'
    idModule?: any | null
    idPermission?: any | null
    moduleName?: string | null
    permissionName?: string | null
    ModulePermission?: string | null
    idOu?: any | null
    idStatus?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    idUserCreate?: any | null
    idUserUpdate?: any | null
    count?: { __typename?: 'ModulePermissionCount'; count: number } | null
    permissionsCount?: { __typename?: 'PermissionsModuleCount'; idPermission: number } | null
  }>
}

export type GetModulePermissionByIdQueryVariables = Exact<{
  idModule: Scalars['BUFFER']
  idPermission: Scalars['BUFFER']
}>

export type GetModulePermissionByIdQuery = {
  __typename?: 'Query'
  getModulePermissionById: {
    __typename?: 'ModulePermission'
    idModule?: any | null
    idPermission?: any | null
    moduleName?: string | null
    permissionName?: string | null
    ModulePermission?: string | null
    idOu?: any | null
    idStatus?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    idUserCreate?: any | null
    idUserUpdate?: any | null
    count?: { __typename?: 'ModulePermissionCount'; count: number } | null
    permissionsCount?: { __typename?: 'PermissionsModuleCount'; idPermission: number } | null
  }
}

export type ModulePermissionFullFragmentFragment = {
  __typename?: 'ModulePermission'
  idModule?: any | null
  idPermission?: any | null
  moduleName?: string | null
  permissionName?: string | null
  ModulePermission?: string | null
  idOu?: any | null
  idStatus?: string | null
  createdAt?: any | null
  updatedAt?: any | null
  idUserCreate?: any | null
  idUserUpdate?: any | null
  count?: { __typename?: 'ModulePermissionCount'; count: number } | null
  permissionsCount?: { __typename?: 'PermissionsModuleCount'; idPermission: number } | null
}

export type ModulePermissionFragmentFragment = {
  __typename?: 'ModulePermission'
  idModule?: any | null
  idPermission?: any | null
  idOu?: any | null
  idStatus?: string | null
  createdAt?: any | null
  updatedAt?: any | null
  idUserCreate?: any | null
  idUserUpdate?: any | null
}

export type UpdateModulePermissionMutationVariables = Exact<{
  updateModulePermissionInput: UpdateModulePermissionInput
}>

export type UpdateModulePermissionMutation = {
  __typename?: 'Mutation'
  updateModulePermission: {
    __typename?: 'ModulePermission'
    idModule?: any | null
    idPermission?: any | null
    idOu?: any | null
    idStatus?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    idUserCreate?: any | null
    idUserUpdate?: any | null
  }
}

export type CreateOuMutationVariables = Exact<{
  data: CreateOuInput
}>

export type CreateOuMutation = {
  __typename?: 'Mutation'
  createOu: {
    __typename?: 'Ou'
    idOu: any
    code: string
    name: string
    shortName: string
    idEntity: any
    idStatus: string
    idUserCreate: any
    idUserUpdate: any
    createdAt: any
    updatedAt: any
    users?: Array<{
      __typename?: 'Users'
      idUser: any
      idEntity: any
      idOu: any
      idUserOauth: string
      idUserType?: any | null
      name: string
      userName: string
      email: string
      phone: string
      createdAt: any
      updatedAt: any
    }> | null
  }
}

export type DeleteOuMutationVariables = Exact<{
  data: DeleteOuInput
}>

export type DeleteOuMutation = {
  __typename?: 'Mutation'
  deleteOu: {
    __typename?: 'Ou'
    idOu: any
    code: string
    name: string
    shortName: string
    idEntity: any
    idStatus: string
    idUserCreate: any
    idUserUpdate: any
    createdAt: any
    updatedAt: any
    users?: Array<{
      __typename?: 'Users'
      idUser: any
      idEntity: any
      idOu: any
      idUserOauth: string
      idUserType?: any | null
      name: string
      userName: string
      email: string
      phone: string
      createdAt: any
      updatedAt: any
    }> | null
  }
}

export type GetAllOusQueryVariables = Exact<{ [key: string]: never }>

export type GetAllOusQuery = {
  __typename?: 'Query'
  getAllOus: Array<{
    __typename?: 'Ou'
    idOu: any
    code: string
    name: string
    shortName: string
    idEntity: any
    idStatus: string
    idUserCreate: any
    idUserUpdate: any
    createdAt: any
    updatedAt: any
    users?: Array<{
      __typename?: 'Users'
      idUser: any
      idEntity: any
      idOu: any
      idUserOauth: string
      idUserType?: any | null
      name: string
      userName: string
      email: string
      phone: string
      createdAt: any
      updatedAt: any
    }> | null
  }>
}

export type GetOuByCodeQueryVariables = Exact<{
  code: Scalars['String']
}>

export type GetOuByCodeQuery = {
  __typename?: 'Query'
  getOuByCode: {
    __typename?: 'Ou'
    idOu: any
    code: string
    name: string
    shortName: string
    idEntity: any
    idStatus: string
    createdAt: any
    updatedAt: any
    idUserCreate: any
    idUserUpdate: any
  }
}

export type GetOuByIdQueryVariables = Exact<{
  id: Scalars['BUFFER']
}>

export type GetOuByIdQuery = {
  __typename?: 'Query'
  getOuById: {
    __typename?: 'Ou'
    idOu: any
    code: string
    name: string
    shortName: string
    idEntity: any
    idStatus: string
    idUserCreate: any
    idUserUpdate: any
    createdAt: any
    updatedAt: any
    users?: Array<{
      __typename?: 'Users'
      idUser: any
      idEntity: any
      idOu: any
      idUserOauth: string
      idUserType?: any | null
      name: string
      userName: string
      email: string
      phone: string
      createdAt: any
      updatedAt: any
    }> | null
  }
}

export type OrganizationalUnitsFieldsFragment = {
  __typename?: 'Ou'
  idOu: any
  code: string
  name: string
  shortName: string
  idEntity: any
  idStatus: string
  idUserCreate: any
  idUserUpdate: any
  createdAt: any
  updatedAt: any
  users?: Array<{
    __typename?: 'Users'
    idUser: any
    idEntity: any
    idOu: any
    idUserOauth: string
    idUserType?: any | null
    name: string
    userName: string
    email: string
    phone: string
    createdAt: any
    updatedAt: any
  }> | null
}

export type UpdateOuMutationVariables = Exact<{
  data: UpdateOuInput
}>

export type UpdateOuMutation = {
  __typename?: 'Mutation'
  updateOu: {
    __typename?: 'Ou'
    idOu: any
    code: string
    name: string
    shortName: string
    idEntity: any
    idStatus: string
    idUserCreate: any
    idUserUpdate: any
    createdAt: any
    updatedAt: any
    users?: Array<{
      __typename?: 'Users'
      idUser: any
      idEntity: any
      idOu: any
      idUserOauth: string
      idUserType?: any | null
      name: string
      userName: string
      email: string
      phone: string
      createdAt: any
      updatedAt: any
    }> | null
  }
}

export type CreateRolePermissionMutationVariables = Exact<{
  createRolePermissionInput: CreateRolePermissionInput
}>

export type CreateRolePermissionMutation = {
  __typename?: 'Mutation'
  createRolePermission: {
    __typename?: 'RolePermission'
    idRole?: any | null
    idPermission?: any | null
    idOu?: any | null
    idStatus?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    idUserCreate?: any | null
    idUserUpdate?: any | null
  }
}

export type DeleteRolePermissionMutationVariables = Exact<{
  idRole: Scalars['BUFFER']
  idPermission: Scalars['BUFFER']
}>

export type DeleteRolePermissionMutation = {
  __typename?: 'Mutation'
  deleteRolePermission: {
    __typename?: 'RolePermission'
    idRole?: any | null
    idPermission?: any | null
    idOu?: any | null
    idStatus?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    idUserCreate?: any | null
    idUserUpdate?: any | null
  }
}

export type GetAllRolePermissionsQueryVariables = Exact<{ [key: string]: never }>

export type GetAllRolePermissionsQuery = {
  __typename?: 'Query'
  getAllRolePermission: Array<{
    __typename?: 'RolePermission'
    idRole?: any | null
    idPermission?: any | null
    roleName?: string | null
    permissionName?: string | null
    idOu?: any | null
    idStatus?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    idUserCreate?: any | null
    idUserUpdate?: any | null
    count?: { __typename?: 'RolePermissionCount'; count: number } | null
    permissionsCount?: { __typename?: 'PermissionsCount'; idPermission: number } | null
  }>
}

export type GetRolePermissionByIdQueryVariables = Exact<{
  idRole: Scalars['BUFFER']
  idPermission: Scalars['BUFFER']
}>

export type GetRolePermissionByIdQuery = {
  __typename?: 'Query'
  getRolePermissionById: {
    __typename?: 'RolePermission'
    idRole?: any | null
    idPermission?: any | null
    roleName?: string | null
    permissionName?: string | null
    idOu?: any | null
    idStatus?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    idUserCreate?: any | null
    idUserUpdate?: any | null
    count?: { __typename?: 'RolePermissionCount'; count: number } | null
    permissionsCount?: { __typename?: 'PermissionsCount'; idPermission: number } | null
  }
}

export type RolePermissionFullFragmentFragment = {
  __typename?: 'RolePermission'
  idRole?: any | null
  idPermission?: any | null
  roleName?: string | null
  permissionName?: string | null
  idOu?: any | null
  idStatus?: string | null
  createdAt?: any | null
  updatedAt?: any | null
  idUserCreate?: any | null
  idUserUpdate?: any | null
  count?: { __typename?: 'RolePermissionCount'; count: number } | null
  permissionsCount?: { __typename?: 'PermissionsCount'; idPermission: number } | null
}

export type RolePermissionFragmentFragment = {
  __typename?: 'RolePermission'
  idRole?: any | null
  idPermission?: any | null
  idOu?: any | null
  idStatus?: string | null
  createdAt?: any | null
  updatedAt?: any | null
  idUserCreate?: any | null
  idUserUpdate?: any | null
}

export type UpdateRolePermissionMutationVariables = Exact<{
  updateRolePermissionInput: UpdateRolePermissionInput
}>

export type UpdateRolePermissionMutation = {
  __typename?: 'Mutation'
  updateRolePermission: {
    __typename?: 'RolePermission'
    idRole?: any | null
    idPermission?: any | null
    idOu?: any | null
    idStatus?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    idUserCreate?: any | null
    idUserUpdate?: any | null
  }
}

export type CreateSessionMutationVariables = Exact<{
  data: CreateSessionDto
}>

export type CreateSessionMutation = {
  __typename?: 'Mutation'
  createSession: {
    __typename?: 'Session'
    idSession: any
    idOu: any
    idUser: any
    idSessionOauth: string
    date: any
    ipv4: string
    ipv6: string
    macaddress: string
    client: string
    app: string
    idStatus: string
    idUserCreate: any
    idUserUpdate: any
  }
}

export type UpdateSessionMutationVariables = Exact<{
  data: UpdateSessionDto
}>

export type UpdateSessionMutation = {
  __typename?: 'Mutation'
  updateSession: {
    __typename?: 'Session'
    idSession: any
    idOu: any
    idUser: any
    idSessionOauth: string
    date: any
    ipv4: string
    ipv6: string
    macaddress: string
    client: string
    app: string
    idStatus: string
    idUserCreate: any
    idUserUpdate: any
  }
}

export type CreateUserModuleMutationVariables = Exact<{
  data: CreateUserModuleDto
}>

export type CreateUserModuleMutation = {
  __typename?: 'Mutation'
  createUserModule: {
    __typename?: 'UserModulesModule'
    idUser: any
    idOu: any
    idModule?: any | null
    idStatus: string
    idUserCreate?: any | null
    idUserUpdate?: any | null
    createdAt: any
    updatedAt: any
  }
}

export type DeleteUserModuleMutationVariables = Exact<{
  data: DeleteUserModuleInput
}>

export type DeleteUserModuleMutation = {
  __typename?: 'Mutation'
  deleteUserModule: {
    __typename?: 'UserModulesModule'
    idUser: any
    idOu: any
    idModule?: any | null
    idStatus: string
    idUserCreate?: any | null
    idUserUpdate?: any | null
    createdAt: any
    updatedAt: any
  }
}

export type GetAllUserModulesQueryVariables = Exact<{ [key: string]: never }>

export type GetAllUserModulesQuery = {
  __typename?: 'Query'
  getAllUserModules: Array<{
    __typename?: 'UserModulesModule'
    idUser: any
    idOu: any
    idModule?: any | null
    idStatus: string
    idUserCreate?: any | null
    idUserUpdate?: any | null
    createdAt: any
    updatedAt: any
  }>
}

export type GetUserModulesByUserIdQueryVariables = Exact<{
  idUser: Scalars['BUFFER']
}>

export type GetUserModulesByUserIdQuery = {
  __typename?: 'Query'
  getUserModulesByUserId: Array<{
    __typename?: 'UserModulesModule'
    idUser: any
    idOu: any
    idModule?: any | null
    idStatus: string
    idUserCreate?: any | null
    idUserUpdate?: any | null
    createdAt: any
    updatedAt: any
  }>
}

export type CreateUserRoleMutationVariables = Exact<{
  data: CreateUserRoleInput
}>

export type CreateUserRoleMutation = {
  __typename?: 'Mutation'
  createUserRole: {
    __typename?: 'UserRole'
    idUser: any
    idOu: any
    idRole: any
    idStatus: string
    idUserCreate: any
    idUserUpdate: any
  }
}

export type DeleteUserRoleMutationVariables = Exact<{
  data: DeleteUserRoleDto
}>

export type DeleteUserRoleMutation = {
  __typename?: 'Mutation'
  deleteUserRole: {
    __typename?: 'UserRole'
    idUser: any
    idOu: any
    idRole: any
    idStatus: string
    idUserCreate: any
    idUserUpdate: any
  }
}

export type GetAllUserRolesQueryVariables = Exact<{ [key: string]: never }>

export type GetAllUserRolesQuery = {
  __typename?: 'Query'
  getAllUserRoles: Array<{
    __typename?: 'UserRole'
    idUser: any
    idOu: any
    idRole: any
    idStatus: string
    idUserCreate: any
    idUserUpdate: any
  }>
}

export type GetUserRolesByUserIdQueryVariables = Exact<{
  idUser: Scalars['BUFFER']
}>

export type GetUserRolesByUserIdQuery = {
  __typename?: 'Query'
  getUserRolesByUserId: Array<{
    __typename?: 'UserRole'
    idUser: any
    idOu: any
    idRole: any
    idStatus: string
    idUserCreate: any
    idUserUpdate: any
  }>
}

export type CreateUserMutationVariables = Exact<{
  data: CreateUserInput
}>

export type CreateUserMutation = {
  __typename?: 'Mutation'
  createUser: {
    __typename?: 'Users'
    idUser: any
    idEntity: any
    idOu: any
    idUserOauth: string
    idUserType?: any | null
    name: string
    userName: string
    email: string
    phone: string
    createdAt: any
    updatedAt: any
  }
}

export type DeleteUserMutationVariables = Exact<{
  data: DeleteUserInput
}>

export type DeleteUserMutation = {
  __typename?: 'Mutation'
  deleteUser: {
    __typename?: 'Users'
    idUser: any
    idEntity: any
    idOu: any
    idUserOauth: string
    idUserType?: any | null
    name: string
    userName: string
    email: string
    phone: string
    createdAt: any
    updatedAt: any
  }
}

export type GetAllUsersQueryVariables = Exact<{ [key: string]: never }>

export type GetAllUsersQuery = {
  __typename?: 'Query'
  getAllUsers: Array<{
    __typename?: 'Users'
    idUser: any
    idEntity: any
    idOu: any
    idUserOauth: string
    idUserType?: any | null
    name: string
    userName: string
    email: string
    phone: string
    createdAt: any
    updatedAt: any
  }>
}

export type GetUserByEmailAddressQueryVariables = Exact<{
  email: Scalars['String']
}>

export type GetUserByEmailAddressQuery = {
  __typename?: 'Query'
  getUserByEmailAddress: {
    __typename?: 'Users'
    idUser: any
    idOu: any
    idUserOauth: string
    idEntity: any
    idUserType?: any | null
    name: string
    userName: string
    email: string
    phone: string
    idLanguage?: string | null
    utcTime?: number | null
    idStatus: string
    idUserCreate?: any | null
    idUserUpdate?: any | null
    createdAt: any
    updatedAt: any
  }
}

export type GetUserByIdQueryVariables = Exact<{
  userId: Scalars['BUFFER']
}>

export type GetUserByIdQuery = {
  __typename?: 'Query'
  getUserById: {
    __typename?: 'Users'
    idUser: any
    idEntity: any
    idOu: any
    idUserOauth: string
    idUserType?: any | null
    name: string
    userName: string
    email: string
    phone: string
    createdAt: any
    updatedAt: any
  }
}

export type UpdateUserMutationVariables = Exact<{
  data: UpdateUserInput
}>

export type UpdateUserMutation = {
  __typename?: 'Mutation'
  updateUser: {
    __typename?: 'Users'
    idUser: any
    idEntity: any
    idOu: any
    idUserOauth: string
    idUserType?: any | null
    name: string
    userName: string
    email: string
    phone: string
    createdAt: any
    updatedAt: any
  }
}

export const ModulePermissionFullFragmentFragmentDoc = gql`
  fragment modulePermissionFullFragment on ModulePermission {
    idModule
    idPermission
    moduleName
    permissionName
    ModulePermission
    idOu
    idStatus
    createdAt
    updatedAt
    idUserCreate
    idUserUpdate
    count {
      count
    }
    permissionsCount {
      idPermission
    }
  }
`
export const ModulePermissionFragmentFragmentDoc = gql`
  fragment modulePermissionFragment on ModulePermission {
    idModule
    idPermission
    idOu
    idStatus
    createdAt
    updatedAt
    idUserCreate
    idUserUpdate
  }
`
export const OrganizationalUnitsFieldsFragmentDoc = gql`
  fragment organizationalUnitsFields on Ou {
    idOu
    code
    name
    shortName
    idEntity
    idStatus
    idUserCreate
    idUserUpdate
    createdAt
    updatedAt
    users {
      idUser
      idEntity
      idOu
      idUserOauth
      idUserType
      name
      userName
      email
      phone
      createdAt
      updatedAt
    }
  }
`
export const RolePermissionFullFragmentFragmentDoc = gql`
  fragment rolePermissionFullFragment on RolePermission {
    idRole
    idPermission
    roleName
    permissionName
    idOu
    idStatus
    createdAt
    updatedAt
    idUserCreate
    idUserUpdate
    count {
      count
    }
    permissionsCount {
      idPermission
    }
  }
`
export const RolePermissionFragmentFragmentDoc = gql`
  fragment rolePermissionFragment on RolePermission {
    idRole
    idPermission
    idOu
    idStatus
    createdAt
    updatedAt
    idUserCreate
    idUserUpdate
  }
`
export const CreateModulePermissionDocument = gql`
  mutation createModulePermission($createModulePermission: CreateModulePermissionInput!) {
    createModulePermission(createModulePermissionInput: $createModulePermission) {
      ...modulePermissionFragment
    }
  }
  ${ModulePermissionFragmentFragmentDoc}
`
export type CreateModulePermissionMutationFn = Apollo.MutationFunction<
  CreateModulePermissionMutation,
  CreateModulePermissionMutationVariables
>

/**
 * __useCreateModulePermissionMutation__
 *
 * To run a mutation, you first call `useCreateModulePermissionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateModulePermissionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createModulePermissionMutation, { data, loading, error }] = useCreateModulePermissionMutation({
 *   variables: {
 *      createModulePermission: // value for 'createModulePermission'
 *   },
 * });
 */
export function useCreateModulePermissionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateModulePermissionMutation,
    CreateModulePermissionMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateModulePermissionMutation,
    CreateModulePermissionMutationVariables
  >(CreateModulePermissionDocument, options)
}
export type CreateModulePermissionMutationHookResult = ReturnType<
  typeof useCreateModulePermissionMutation
>
export type CreateModulePermissionMutationResult =
  Apollo.MutationResult<CreateModulePermissionMutation>
export type CreateModulePermissionMutationOptions = Apollo.BaseMutationOptions<
  CreateModulePermissionMutation,
  CreateModulePermissionMutationVariables
>
export const DeleteModulePermissionDocument = gql`
  mutation DeleteModulePermission($idModule: BUFFER!, $idPermission: BUFFER!) {
    deleteModulePermission(idModule: $idModule, idPermission: $idPermission) {
      ...modulePermissionFragment
    }
  }
  ${ModulePermissionFragmentFragmentDoc}
`
export type DeleteModulePermissionMutationFn = Apollo.MutationFunction<
  DeleteModulePermissionMutation,
  DeleteModulePermissionMutationVariables
>

/**
 * __useDeleteModulePermissionMutation__
 *
 * To run a mutation, you first call `useDeleteModulePermissionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteModulePermissionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteModulePermissionMutation, { data, loading, error }] = useDeleteModulePermissionMutation({
 *   variables: {
 *      idModule: // value for 'idModule'
 *      idPermission: // value for 'idPermission'
 *   },
 * });
 */
export function useDeleteModulePermissionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteModulePermissionMutation,
    DeleteModulePermissionMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    DeleteModulePermissionMutation,
    DeleteModulePermissionMutationVariables
  >(DeleteModulePermissionDocument, options)
}
export type DeleteModulePermissionMutationHookResult = ReturnType<
  typeof useDeleteModulePermissionMutation
>
export type DeleteModulePermissionMutationResult =
  Apollo.MutationResult<DeleteModulePermissionMutation>
export type DeleteModulePermissionMutationOptions = Apollo.BaseMutationOptions<
  DeleteModulePermissionMutation,
  DeleteModulePermissionMutationVariables
>
export const GetAllModulePermissionDocument = gql`
  query getAllModulePermission {
    getAllModulePermission {
      ...modulePermissionFullFragment
    }
  }
  ${ModulePermissionFullFragmentFragmentDoc}
`

/**
 * __useGetAllModulePermissionQuery__
 *
 * To run a query within a React component, call `useGetAllModulePermissionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllModulePermissionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllModulePermissionQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllModulePermissionQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAllModulePermissionQuery,
    GetAllModulePermissionQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetAllModulePermissionQuery, GetAllModulePermissionQueryVariables>(
    GetAllModulePermissionDocument,
    options
  )
}
export function useGetAllModulePermissionLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAllModulePermissionQuery,
    GetAllModulePermissionQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetAllModulePermissionQuery, GetAllModulePermissionQueryVariables>(
    GetAllModulePermissionDocument,
    options
  )
}
export type GetAllModulePermissionQueryHookResult = ReturnType<
  typeof useGetAllModulePermissionQuery
>
export type GetAllModulePermissionLazyQueryHookResult = ReturnType<
  typeof useGetAllModulePermissionLazyQuery
>
export type GetAllModulePermissionQueryResult = Apollo.QueryResult<
  GetAllModulePermissionQuery,
  GetAllModulePermissionQueryVariables
>
export const GetModulePermissionByIdDocument = gql`
  query getModulePermissionById($idModule: BUFFER!, $idPermission: BUFFER!) {
    getModulePermissionById(idModule: $idModule, idPermission: $idPermission) {
      ...modulePermissionFullFragment
    }
  }
  ${ModulePermissionFullFragmentFragmentDoc}
`

/**
 * __useGetModulePermissionByIdQuery__
 *
 * To run a query within a React component, call `useGetModulePermissionByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetModulePermissionByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetModulePermissionByIdQuery({
 *   variables: {
 *      idModule: // value for 'idModule'
 *      idPermission: // value for 'idPermission'
 *   },
 * });
 */
export function useGetModulePermissionByIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetModulePermissionByIdQuery,
    GetModulePermissionByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetModulePermissionByIdQuery, GetModulePermissionByIdQueryVariables>(
    GetModulePermissionByIdDocument,
    options
  )
}
export function useGetModulePermissionByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetModulePermissionByIdQuery,
    GetModulePermissionByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetModulePermissionByIdQuery, GetModulePermissionByIdQueryVariables>(
    GetModulePermissionByIdDocument,
    options
  )
}
export type GetModulePermissionByIdQueryHookResult = ReturnType<
  typeof useGetModulePermissionByIdQuery
>
export type GetModulePermissionByIdLazyQueryHookResult = ReturnType<
  typeof useGetModulePermissionByIdLazyQuery
>
export type GetModulePermissionByIdQueryResult = Apollo.QueryResult<
  GetModulePermissionByIdQuery,
  GetModulePermissionByIdQueryVariables
>
export const UpdateModulePermissionDocument = gql`
  mutation UpdateModulePermission($updateModulePermissionInput: UpdateModulePermissionInput!) {
    updateModulePermission(updateModulePermissionInput: $updateModulePermissionInput) {
      ...modulePermissionFragment
    }
  }
  ${ModulePermissionFragmentFragmentDoc}
`
export type UpdateModulePermissionMutationFn = Apollo.MutationFunction<
  UpdateModulePermissionMutation,
  UpdateModulePermissionMutationVariables
>

/**
 * __useUpdateModulePermissionMutation__
 *
 * To run a mutation, you first call `useUpdateModulePermissionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateModulePermissionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateModulePermissionMutation, { data, loading, error }] = useUpdateModulePermissionMutation({
 *   variables: {
 *      updateModulePermissionInput: // value for 'updateModulePermissionInput'
 *   },
 * });
 */
export function useUpdateModulePermissionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateModulePermissionMutation,
    UpdateModulePermissionMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    UpdateModulePermissionMutation,
    UpdateModulePermissionMutationVariables
  >(UpdateModulePermissionDocument, options)
}
export type UpdateModulePermissionMutationHookResult = ReturnType<
  typeof useUpdateModulePermissionMutation
>
export type UpdateModulePermissionMutationResult =
  Apollo.MutationResult<UpdateModulePermissionMutation>
export type UpdateModulePermissionMutationOptions = Apollo.BaseMutationOptions<
  UpdateModulePermissionMutation,
  UpdateModulePermissionMutationVariables
>
export const CreateOuDocument = gql`
  mutation createOu($data: CreateOuInput!) {
    createOu(data: $data) {
      ...organizationalUnitsFields
    }
  }
  ${OrganizationalUnitsFieldsFragmentDoc}
`
export type CreateOuMutationFn = Apollo.MutationFunction<
  CreateOuMutation,
  CreateOuMutationVariables
>

/**
 * __useCreateOuMutation__
 *
 * To run a mutation, you first call `useCreateOuMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOuMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOuMutation, { data, loading, error }] = useCreateOuMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateOuMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateOuMutation, CreateOuMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateOuMutation, CreateOuMutationVariables>(CreateOuDocument, options)
}
export type CreateOuMutationHookResult = ReturnType<typeof useCreateOuMutation>
export type CreateOuMutationResult = Apollo.MutationResult<CreateOuMutation>
export type CreateOuMutationOptions = Apollo.BaseMutationOptions<
  CreateOuMutation,
  CreateOuMutationVariables
>
export const DeleteOuDocument = gql`
  mutation deleteOu($data: DeleteOuInput!) {
    deleteOu(data: $data) {
      ...organizationalUnitsFields
    }
  }
  ${OrganizationalUnitsFieldsFragmentDoc}
`
export type DeleteOuMutationFn = Apollo.MutationFunction<
  DeleteOuMutation,
  DeleteOuMutationVariables
>

/**
 * __useDeleteOuMutation__
 *
 * To run a mutation, you first call `useDeleteOuMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOuMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOuMutation, { data, loading, error }] = useDeleteOuMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useDeleteOuMutation(
  baseOptions?: Apollo.MutationHookOptions<DeleteOuMutation, DeleteOuMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<DeleteOuMutation, DeleteOuMutationVariables>(DeleteOuDocument, options)
}
export type DeleteOuMutationHookResult = ReturnType<typeof useDeleteOuMutation>
export type DeleteOuMutationResult = Apollo.MutationResult<DeleteOuMutation>
export type DeleteOuMutationOptions = Apollo.BaseMutationOptions<
  DeleteOuMutation,
  DeleteOuMutationVariables
>
export const GetAllOusDocument = gql`
  query getAllOus {
    getAllOus {
      ...organizationalUnitsFields
    }
  }
  ${OrganizationalUnitsFieldsFragmentDoc}
`

/**
 * __useGetAllOusQuery__
 *
 * To run a query within a React component, call `useGetAllOusQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllOusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllOusQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllOusQuery(
  baseOptions?: Apollo.QueryHookOptions<GetAllOusQuery, GetAllOusQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetAllOusQuery, GetAllOusQueryVariables>(GetAllOusDocument, options)
}
export function useGetAllOusLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetAllOusQuery, GetAllOusQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetAllOusQuery, GetAllOusQueryVariables>(GetAllOusDocument, options)
}
export type GetAllOusQueryHookResult = ReturnType<typeof useGetAllOusQuery>
export type GetAllOusLazyQueryHookResult = ReturnType<typeof useGetAllOusLazyQuery>
export type GetAllOusQueryResult = Apollo.QueryResult<GetAllOusQuery, GetAllOusQueryVariables>
export const GetOuByCodeDocument = gql`
  query getOuByCode($code: String!) {
    getOuByCode(code: $code) {
      idOu
      code
      name
      shortName
      idEntity
      idStatus
      createdAt
      updatedAt
      idUserCreate
      idUserUpdate
    }
  }
`

/**
 * __useGetOuByCodeQuery__
 *
 * To run a query within a React component, call `useGetOuByCodeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOuByCodeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOuByCodeQuery({
 *   variables: {
 *      code: // value for 'code'
 *   },
 * });
 */
export function useGetOuByCodeQuery(
  baseOptions: Apollo.QueryHookOptions<GetOuByCodeQuery, GetOuByCodeQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetOuByCodeQuery, GetOuByCodeQueryVariables>(GetOuByCodeDocument, options)
}
export function useGetOuByCodeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetOuByCodeQuery, GetOuByCodeQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetOuByCodeQuery, GetOuByCodeQueryVariables>(
    GetOuByCodeDocument,
    options
  )
}
export type GetOuByCodeQueryHookResult = ReturnType<typeof useGetOuByCodeQuery>
export type GetOuByCodeLazyQueryHookResult = ReturnType<typeof useGetOuByCodeLazyQuery>
export type GetOuByCodeQueryResult = Apollo.QueryResult<GetOuByCodeQuery, GetOuByCodeQueryVariables>
export const GetOuByIdDocument = gql`
  query getOuById($id: BUFFER!) {
    getOuById(id: $id) {
      ...organizationalUnitsFields
    }
  }
  ${OrganizationalUnitsFieldsFragmentDoc}
`

/**
 * __useGetOuByIdQuery__
 *
 * To run a query within a React component, call `useGetOuByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOuByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOuByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetOuByIdQuery(
  baseOptions: Apollo.QueryHookOptions<GetOuByIdQuery, GetOuByIdQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetOuByIdQuery, GetOuByIdQueryVariables>(GetOuByIdDocument, options)
}
export function useGetOuByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetOuByIdQuery, GetOuByIdQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetOuByIdQuery, GetOuByIdQueryVariables>(GetOuByIdDocument, options)
}
export type GetOuByIdQueryHookResult = ReturnType<typeof useGetOuByIdQuery>
export type GetOuByIdLazyQueryHookResult = ReturnType<typeof useGetOuByIdLazyQuery>
export type GetOuByIdQueryResult = Apollo.QueryResult<GetOuByIdQuery, GetOuByIdQueryVariables>
export const UpdateOuDocument = gql`
  mutation updateOu($data: UpdateOuInput!) {
    updateOu(data: $data) {
      ...organizationalUnitsFields
    }
  }
  ${OrganizationalUnitsFieldsFragmentDoc}
`
export type UpdateOuMutationFn = Apollo.MutationFunction<
  UpdateOuMutation,
  UpdateOuMutationVariables
>

/**
 * __useUpdateOuMutation__
 *
 * To run a mutation, you first call `useUpdateOuMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOuMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOuMutation, { data, loading, error }] = useUpdateOuMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateOuMutation(
  baseOptions?: Apollo.MutationHookOptions<UpdateOuMutation, UpdateOuMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<UpdateOuMutation, UpdateOuMutationVariables>(UpdateOuDocument, options)
}
export type UpdateOuMutationHookResult = ReturnType<typeof useUpdateOuMutation>
export type UpdateOuMutationResult = Apollo.MutationResult<UpdateOuMutation>
export type UpdateOuMutationOptions = Apollo.BaseMutationOptions<
  UpdateOuMutation,
  UpdateOuMutationVariables
>
export const CreateRolePermissionDocument = gql`
  mutation createRolePermission($createRolePermissionInput: CreateRolePermissionInput!) {
    createRolePermission(createRolePermissionInput: $createRolePermissionInput) {
      ...rolePermissionFragment
    }
  }
  ${RolePermissionFragmentFragmentDoc}
`
export type CreateRolePermissionMutationFn = Apollo.MutationFunction<
  CreateRolePermissionMutation,
  CreateRolePermissionMutationVariables
>

/**
 * __useCreateRolePermissionMutation__
 *
 * To run a mutation, you first call `useCreateRolePermissionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRolePermissionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRolePermissionMutation, { data, loading, error }] = useCreateRolePermissionMutation({
 *   variables: {
 *      createRolePermissionInput: // value for 'createRolePermissionInput'
 *   },
 * });
 */
export function useCreateRolePermissionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateRolePermissionMutation,
    CreateRolePermissionMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateRolePermissionMutation, CreateRolePermissionMutationVariables>(
    CreateRolePermissionDocument,
    options
  )
}
export type CreateRolePermissionMutationHookResult = ReturnType<
  typeof useCreateRolePermissionMutation
>
export type CreateRolePermissionMutationResult = Apollo.MutationResult<CreateRolePermissionMutation>
export type CreateRolePermissionMutationOptions = Apollo.BaseMutationOptions<
  CreateRolePermissionMutation,
  CreateRolePermissionMutationVariables
>
export const DeleteRolePermissionDocument = gql`
  mutation DeleteRolePermission($idRole: BUFFER!, $idPermission: BUFFER!) {
    deleteRolePermission(idRole: $idRole, idPermission: $idPermission) {
      ...rolePermissionFragment
    }
  }
  ${RolePermissionFragmentFragmentDoc}
`
export type DeleteRolePermissionMutationFn = Apollo.MutationFunction<
  DeleteRolePermissionMutation,
  DeleteRolePermissionMutationVariables
>

/**
 * __useDeleteRolePermissionMutation__
 *
 * To run a mutation, you first call `useDeleteRolePermissionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteRolePermissionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteRolePermissionMutation, { data, loading, error }] = useDeleteRolePermissionMutation({
 *   variables: {
 *      idRole: // value for 'idRole'
 *      idPermission: // value for 'idPermission'
 *   },
 * });
 */
export function useDeleteRolePermissionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteRolePermissionMutation,
    DeleteRolePermissionMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<DeleteRolePermissionMutation, DeleteRolePermissionMutationVariables>(
    DeleteRolePermissionDocument,
    options
  )
}
export type DeleteRolePermissionMutationHookResult = ReturnType<
  typeof useDeleteRolePermissionMutation
>
export type DeleteRolePermissionMutationResult = Apollo.MutationResult<DeleteRolePermissionMutation>
export type DeleteRolePermissionMutationOptions = Apollo.BaseMutationOptions<
  DeleteRolePermissionMutation,
  DeleteRolePermissionMutationVariables
>
export const GetAllRolePermissionsDocument = gql`
  query getAllRolePermissions {
    getAllRolePermission {
      ...rolePermissionFullFragment
    }
  }
  ${RolePermissionFullFragmentFragmentDoc}
`

/**
 * __useGetAllRolePermissionsQuery__
 *
 * To run a query within a React component, call `useGetAllRolePermissionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllRolePermissionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllRolePermissionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllRolePermissionsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAllRolePermissionsQuery,
    GetAllRolePermissionsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetAllRolePermissionsQuery, GetAllRolePermissionsQueryVariables>(
    GetAllRolePermissionsDocument,
    options
  )
}
export function useGetAllRolePermissionsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAllRolePermissionsQuery,
    GetAllRolePermissionsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetAllRolePermissionsQuery, GetAllRolePermissionsQueryVariables>(
    GetAllRolePermissionsDocument,
    options
  )
}
export type GetAllRolePermissionsQueryHookResult = ReturnType<typeof useGetAllRolePermissionsQuery>
export type GetAllRolePermissionsLazyQueryHookResult = ReturnType<
  typeof useGetAllRolePermissionsLazyQuery
>
export type GetAllRolePermissionsQueryResult = Apollo.QueryResult<
  GetAllRolePermissionsQuery,
  GetAllRolePermissionsQueryVariables
>
export const GetRolePermissionByIdDocument = gql`
  query getRolePermissionById($idRole: BUFFER!, $idPermission: BUFFER!) {
    getRolePermissionById(idRole: $idRole, idPermission: $idPermission) {
      ...rolePermissionFullFragment
    }
  }
  ${RolePermissionFullFragmentFragmentDoc}
`

/**
 * __useGetRolePermissionByIdQuery__
 *
 * To run a query within a React component, call `useGetRolePermissionByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRolePermissionByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRolePermissionByIdQuery({
 *   variables: {
 *      idRole: // value for 'idRole'
 *      idPermission: // value for 'idPermission'
 *   },
 * });
 */
export function useGetRolePermissionByIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetRolePermissionByIdQuery,
    GetRolePermissionByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetRolePermissionByIdQuery, GetRolePermissionByIdQueryVariables>(
    GetRolePermissionByIdDocument,
    options
  )
}
export function useGetRolePermissionByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetRolePermissionByIdQuery,
    GetRolePermissionByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetRolePermissionByIdQuery, GetRolePermissionByIdQueryVariables>(
    GetRolePermissionByIdDocument,
    options
  )
}
export type GetRolePermissionByIdQueryHookResult = ReturnType<typeof useGetRolePermissionByIdQuery>
export type GetRolePermissionByIdLazyQueryHookResult = ReturnType<
  typeof useGetRolePermissionByIdLazyQuery
>
export type GetRolePermissionByIdQueryResult = Apollo.QueryResult<
  GetRolePermissionByIdQuery,
  GetRolePermissionByIdQueryVariables
>
export const UpdateRolePermissionDocument = gql`
  mutation UpdateRolePermission($updateRolePermissionInput: UpdateRolePermissionInput!) {
    updateRolePermission(updateRolePermissionInput: $updateRolePermissionInput) {
      ...rolePermissionFragment
    }
  }
  ${RolePermissionFragmentFragmentDoc}
`
export type UpdateRolePermissionMutationFn = Apollo.MutationFunction<
  UpdateRolePermissionMutation,
  UpdateRolePermissionMutationVariables
>

/**
 * __useUpdateRolePermissionMutation__
 *
 * To run a mutation, you first call `useUpdateRolePermissionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateRolePermissionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateRolePermissionMutation, { data, loading, error }] = useUpdateRolePermissionMutation({
 *   variables: {
 *      updateRolePermissionInput: // value for 'updateRolePermissionInput'
 *   },
 * });
 */
export function useUpdateRolePermissionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateRolePermissionMutation,
    UpdateRolePermissionMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<UpdateRolePermissionMutation, UpdateRolePermissionMutationVariables>(
    UpdateRolePermissionDocument,
    options
  )
}
export type UpdateRolePermissionMutationHookResult = ReturnType<
  typeof useUpdateRolePermissionMutation
>
export type UpdateRolePermissionMutationResult = Apollo.MutationResult<UpdateRolePermissionMutation>
export type UpdateRolePermissionMutationOptions = Apollo.BaseMutationOptions<
  UpdateRolePermissionMutation,
  UpdateRolePermissionMutationVariables
>
export const CreateSessionDocument = gql`
  mutation CreateSession($data: CreateSessionDto!) {
    createSession(data: $data) {
      idSession
      idOu
      idUser
      idSessionOauth
      date
      ipv4
      ipv6
      macaddress
      client
      app
      idStatus
      idUserCreate
      idUserUpdate
    }
  }
`
export type CreateSessionMutationFn = Apollo.MutationFunction<
  CreateSessionMutation,
  CreateSessionMutationVariables
>

/**
 * __useCreateSessionMutation__
 *
 * To run a mutation, you first call `useCreateSessionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSessionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSessionMutation, { data, loading, error }] = useCreateSessionMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateSessionMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateSessionMutation, CreateSessionMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateSessionMutation, CreateSessionMutationVariables>(
    CreateSessionDocument,
    options
  )
}
export type CreateSessionMutationHookResult = ReturnType<typeof useCreateSessionMutation>
export type CreateSessionMutationResult = Apollo.MutationResult<CreateSessionMutation>
export type CreateSessionMutationOptions = Apollo.BaseMutationOptions<
  CreateSessionMutation,
  CreateSessionMutationVariables
>
export const UpdateSessionDocument = gql`
  mutation updateSession($data: UpdateSessionDto!) {
    updateSession(data: $data) {
      idSession
      idOu
      idUser
      idSessionOauth
      date
      ipv4
      ipv6
      macaddress
      client
      app
      idStatus
      idUserCreate
      idUserUpdate
    }
  }
`
export type UpdateSessionMutationFn = Apollo.MutationFunction<
  UpdateSessionMutation,
  UpdateSessionMutationVariables
>

/**
 * __useUpdateSessionMutation__
 *
 * To run a mutation, you first call `useUpdateSessionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSessionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSessionMutation, { data, loading, error }] = useUpdateSessionMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateSessionMutation(
  baseOptions?: Apollo.MutationHookOptions<UpdateSessionMutation, UpdateSessionMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<UpdateSessionMutation, UpdateSessionMutationVariables>(
    UpdateSessionDocument,
    options
  )
}
export type UpdateSessionMutationHookResult = ReturnType<typeof useUpdateSessionMutation>
export type UpdateSessionMutationResult = Apollo.MutationResult<UpdateSessionMutation>
export type UpdateSessionMutationOptions = Apollo.BaseMutationOptions<
  UpdateSessionMutation,
  UpdateSessionMutationVariables
>
export const CreateUserModuleDocument = gql`
  mutation createUserModule($data: CreateUserModuleDto!) {
    createUserModule(data: $data) {
      idUser
      idOu
      idModule
      idStatus
      idUserCreate
      idUserUpdate
      createdAt
      updatedAt
    }
  }
`
export type CreateUserModuleMutationFn = Apollo.MutationFunction<
  CreateUserModuleMutation,
  CreateUserModuleMutationVariables
>

/**
 * __useCreateUserModuleMutation__
 *
 * To run a mutation, you first call `useCreateUserModuleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserModuleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserModuleMutation, { data, loading, error }] = useCreateUserModuleMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateUserModuleMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateUserModuleMutation,
    CreateUserModuleMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateUserModuleMutation, CreateUserModuleMutationVariables>(
    CreateUserModuleDocument,
    options
  )
}
export type CreateUserModuleMutationHookResult = ReturnType<typeof useCreateUserModuleMutation>
export type CreateUserModuleMutationResult = Apollo.MutationResult<CreateUserModuleMutation>
export type CreateUserModuleMutationOptions = Apollo.BaseMutationOptions<
  CreateUserModuleMutation,
  CreateUserModuleMutationVariables
>
export const DeleteUserModuleDocument = gql`
  mutation deleteUserModule($data: DeleteUserModuleInput!) {
    deleteUserModule(data: $data) {
      idUser
      idOu
      idModule
      idStatus
      idUserCreate
      idUserUpdate
      createdAt
      updatedAt
    }
  }
`
export type DeleteUserModuleMutationFn = Apollo.MutationFunction<
  DeleteUserModuleMutation,
  DeleteUserModuleMutationVariables
>

/**
 * __useDeleteUserModuleMutation__
 *
 * To run a mutation, you first call `useDeleteUserModuleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserModuleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserModuleMutation, { data, loading, error }] = useDeleteUserModuleMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useDeleteUserModuleMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteUserModuleMutation,
    DeleteUserModuleMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<DeleteUserModuleMutation, DeleteUserModuleMutationVariables>(
    DeleteUserModuleDocument,
    options
  )
}
export type DeleteUserModuleMutationHookResult = ReturnType<typeof useDeleteUserModuleMutation>
export type DeleteUserModuleMutationResult = Apollo.MutationResult<DeleteUserModuleMutation>
export type DeleteUserModuleMutationOptions = Apollo.BaseMutationOptions<
  DeleteUserModuleMutation,
  DeleteUserModuleMutationVariables
>
export const GetAllUserModulesDocument = gql`
  query getAllUserModules {
    getAllUserModules {
      idUser
      idOu
      idModule
      idStatus
      idUserCreate
      idUserUpdate
      createdAt
      updatedAt
    }
  }
`

/**
 * __useGetAllUserModulesQuery__
 *
 * To run a query within a React component, call `useGetAllUserModulesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUserModulesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUserModulesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllUserModulesQuery(
  baseOptions?: Apollo.QueryHookOptions<GetAllUserModulesQuery, GetAllUserModulesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetAllUserModulesQuery, GetAllUserModulesQueryVariables>(
    GetAllUserModulesDocument,
    options
  )
}
export function useGetAllUserModulesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetAllUserModulesQuery, GetAllUserModulesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetAllUserModulesQuery, GetAllUserModulesQueryVariables>(
    GetAllUserModulesDocument,
    options
  )
}
export type GetAllUserModulesQueryHookResult = ReturnType<typeof useGetAllUserModulesQuery>
export type GetAllUserModulesLazyQueryHookResult = ReturnType<typeof useGetAllUserModulesLazyQuery>
export type GetAllUserModulesQueryResult = Apollo.QueryResult<
  GetAllUserModulesQuery,
  GetAllUserModulesQueryVariables
>
export const GetUserModulesByUserIdDocument = gql`
  query getUserModulesByUserId($idUser: BUFFER!) {
    getUserModulesByUserId(idUser: $idUser) {
      idUser
      idOu
      idModule
      idStatus
      idUserCreate
      idUserUpdate
      createdAt
      updatedAt
    }
  }
`

/**
 * __useGetUserModulesByUserIdQuery__
 *
 * To run a query within a React component, call `useGetUserModulesByUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserModulesByUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserModulesByUserIdQuery({
 *   variables: {
 *      idUser: // value for 'idUser'
 *   },
 * });
 */
export function useGetUserModulesByUserIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetUserModulesByUserIdQuery,
    GetUserModulesByUserIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetUserModulesByUserIdQuery, GetUserModulesByUserIdQueryVariables>(
    GetUserModulesByUserIdDocument,
    options
  )
}
export function useGetUserModulesByUserIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUserModulesByUserIdQuery,
    GetUserModulesByUserIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetUserModulesByUserIdQuery, GetUserModulesByUserIdQueryVariables>(
    GetUserModulesByUserIdDocument,
    options
  )
}
export type GetUserModulesByUserIdQueryHookResult = ReturnType<
  typeof useGetUserModulesByUserIdQuery
>
export type GetUserModulesByUserIdLazyQueryHookResult = ReturnType<
  typeof useGetUserModulesByUserIdLazyQuery
>
export type GetUserModulesByUserIdQueryResult = Apollo.QueryResult<
  GetUserModulesByUserIdQuery,
  GetUserModulesByUserIdQueryVariables
>
export const CreateUserRoleDocument = gql`
  mutation createUserRole($data: CreateUserRoleInput!) {
    createUserRole(data: $data) {
      idUser
      idOu
      idRole
      idStatus
      idUserCreate
      idUserUpdate
    }
  }
`
export type CreateUserRoleMutationFn = Apollo.MutationFunction<
  CreateUserRoleMutation,
  CreateUserRoleMutationVariables
>

/**
 * __useCreateUserRoleMutation__
 *
 * To run a mutation, you first call `useCreateUserRoleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserRoleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserRoleMutation, { data, loading, error }] = useCreateUserRoleMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateUserRoleMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateUserRoleMutation, CreateUserRoleMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateUserRoleMutation, CreateUserRoleMutationVariables>(
    CreateUserRoleDocument,
    options
  )
}
export type CreateUserRoleMutationHookResult = ReturnType<typeof useCreateUserRoleMutation>
export type CreateUserRoleMutationResult = Apollo.MutationResult<CreateUserRoleMutation>
export type CreateUserRoleMutationOptions = Apollo.BaseMutationOptions<
  CreateUserRoleMutation,
  CreateUserRoleMutationVariables
>
export const DeleteUserRoleDocument = gql`
  mutation deleteUserRole($data: DeleteUserRoleDto!) {
    deleteUserRole(data: $data) {
      idUser
      idOu
      idRole
      idStatus
      idUserCreate
      idUserUpdate
    }
  }
`
export type DeleteUserRoleMutationFn = Apollo.MutationFunction<
  DeleteUserRoleMutation,
  DeleteUserRoleMutationVariables
>

/**
 * __useDeleteUserRoleMutation__
 *
 * To run a mutation, you first call `useDeleteUserRoleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserRoleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserRoleMutation, { data, loading, error }] = useDeleteUserRoleMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useDeleteUserRoleMutation(
  baseOptions?: Apollo.MutationHookOptions<DeleteUserRoleMutation, DeleteUserRoleMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<DeleteUserRoleMutation, DeleteUserRoleMutationVariables>(
    DeleteUserRoleDocument,
    options
  )
}
export type DeleteUserRoleMutationHookResult = ReturnType<typeof useDeleteUserRoleMutation>
export type DeleteUserRoleMutationResult = Apollo.MutationResult<DeleteUserRoleMutation>
export type DeleteUserRoleMutationOptions = Apollo.BaseMutationOptions<
  DeleteUserRoleMutation,
  DeleteUserRoleMutationVariables
>
export const GetAllUserRolesDocument = gql`
  query getAllUserRoles {
    getAllUserRoles {
      idUser
      idOu
      idRole
      idStatus
      idUserCreate
      idUserUpdate
    }
  }
`

/**
 * __useGetAllUserRolesQuery__
 *
 * To run a query within a React component, call `useGetAllUserRolesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUserRolesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUserRolesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllUserRolesQuery(
  baseOptions?: Apollo.QueryHookOptions<GetAllUserRolesQuery, GetAllUserRolesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetAllUserRolesQuery, GetAllUserRolesQueryVariables>(
    GetAllUserRolesDocument,
    options
  )
}
export function useGetAllUserRolesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetAllUserRolesQuery, GetAllUserRolesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetAllUserRolesQuery, GetAllUserRolesQueryVariables>(
    GetAllUserRolesDocument,
    options
  )
}
export type GetAllUserRolesQueryHookResult = ReturnType<typeof useGetAllUserRolesQuery>
export type GetAllUserRolesLazyQueryHookResult = ReturnType<typeof useGetAllUserRolesLazyQuery>
export type GetAllUserRolesQueryResult = Apollo.QueryResult<
  GetAllUserRolesQuery,
  GetAllUserRolesQueryVariables
>
export const GetUserRolesByUserIdDocument = gql`
  query getUserRolesByUserId($idUser: BUFFER!) {
    getUserRolesByUserId(idUser: $idUser) {
      idUser
      idOu
      idRole
      idStatus
      idUserCreate
      idUserUpdate
    }
  }
`

/**
 * __useGetUserRolesByUserIdQuery__
 *
 * To run a query within a React component, call `useGetUserRolesByUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserRolesByUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserRolesByUserIdQuery({
 *   variables: {
 *      idUser: // value for 'idUser'
 *   },
 * });
 */
export function useGetUserRolesByUserIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetUserRolesByUserIdQuery,
    GetUserRolesByUserIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetUserRolesByUserIdQuery, GetUserRolesByUserIdQueryVariables>(
    GetUserRolesByUserIdDocument,
    options
  )
}
export function useGetUserRolesByUserIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUserRolesByUserIdQuery,
    GetUserRolesByUserIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetUserRolesByUserIdQuery, GetUserRolesByUserIdQueryVariables>(
    GetUserRolesByUserIdDocument,
    options
  )
}
export type GetUserRolesByUserIdQueryHookResult = ReturnType<typeof useGetUserRolesByUserIdQuery>
export type GetUserRolesByUserIdLazyQueryHookResult = ReturnType<
  typeof useGetUserRolesByUserIdLazyQuery
>
export type GetUserRolesByUserIdQueryResult = Apollo.QueryResult<
  GetUserRolesByUserIdQuery,
  GetUserRolesByUserIdQueryVariables
>
export const CreateUserDocument = gql`
  mutation createUser($data: CreateUserInput!) {
    createUser(data: $data) {
      idUser
      idEntity
      idOu
      idUserOauth
      idUserType
      name
      userName
      email
      phone
      createdAt
      updatedAt
    }
  }
`
export type CreateUserMutationFn = Apollo.MutationFunction<
  CreateUserMutation,
  CreateUserMutationVariables
>

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(
    CreateUserDocument,
    options
  )
}
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<
  CreateUserMutation,
  CreateUserMutationVariables
>
export const DeleteUserDocument = gql`
  mutation deleteUser($data: DeleteUserInput!) {
    deleteUser(data: $data) {
      idUser
      idEntity
      idOu
      idUserOauth
      idUserType
      name
      userName
      email
      phone
      createdAt
      updatedAt
    }
  }
`
export type DeleteUserMutationFn = Apollo.MutationFunction<
  DeleteUserMutation,
  DeleteUserMutationVariables
>

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useDeleteUserMutation(
  baseOptions?: Apollo.MutationHookOptions<DeleteUserMutation, DeleteUserMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(
    DeleteUserDocument,
    options
  )
}
export type DeleteUserMutationHookResult = ReturnType<typeof useDeleteUserMutation>
export type DeleteUserMutationResult = Apollo.MutationResult<DeleteUserMutation>
export type DeleteUserMutationOptions = Apollo.BaseMutationOptions<
  DeleteUserMutation,
  DeleteUserMutationVariables
>
export const GetAllUsersDocument = gql`
  query getAllUsers {
    getAllUsers {
      idUser
      idEntity
      idOu
      idUserOauth
      idUserType
      name
      userName
      email
      phone
      createdAt
      updatedAt
    }
  }
`

/**
 * __useGetAllUsersQuery__
 *
 * To run a query within a React component, call `useGetAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllUsersQuery(
  baseOptions?: Apollo.QueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options)
}
export function useGetAllUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(
    GetAllUsersDocument,
    options
  )
}
export type GetAllUsersQueryHookResult = ReturnType<typeof useGetAllUsersQuery>
export type GetAllUsersLazyQueryHookResult = ReturnType<typeof useGetAllUsersLazyQuery>
export type GetAllUsersQueryResult = Apollo.QueryResult<GetAllUsersQuery, GetAllUsersQueryVariables>
export const GetUserByEmailAddressDocument = gql`
  query getUserByEmailAddress($email: String!) {
    getUserByEmailAddress(email: $email) {
      idUser
      idOu
      idUserOauth
      idEntity
      idUserType
      name
      userName
      email
      phone
      idLanguage
      utcTime
      idStatus
      idUserCreate
      idUserUpdate
      createdAt
      updatedAt
    }
  }
`

/**
 * __useGetUserByEmailAddressQuery__
 *
 * To run a query within a React component, call `useGetUserByEmailAddressQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserByEmailAddressQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserByEmailAddressQuery({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useGetUserByEmailAddressQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetUserByEmailAddressQuery,
    GetUserByEmailAddressQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetUserByEmailAddressQuery, GetUserByEmailAddressQueryVariables>(
    GetUserByEmailAddressDocument,
    options
  )
}
export function useGetUserByEmailAddressLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUserByEmailAddressQuery,
    GetUserByEmailAddressQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetUserByEmailAddressQuery, GetUserByEmailAddressQueryVariables>(
    GetUserByEmailAddressDocument,
    options
  )
}
export type GetUserByEmailAddressQueryHookResult = ReturnType<typeof useGetUserByEmailAddressQuery>
export type GetUserByEmailAddressLazyQueryHookResult = ReturnType<
  typeof useGetUserByEmailAddressLazyQuery
>
export type GetUserByEmailAddressQueryResult = Apollo.QueryResult<
  GetUserByEmailAddressQuery,
  GetUserByEmailAddressQueryVariables
>
export const GetUserByIdDocument = gql`
  query getUserById($userId: BUFFER!) {
    getUserById(id: $userId) {
      idUser
      idEntity
      idOu
      idUserOauth
      idUserType
      name
      userName
      email
      phone
      createdAt
      updatedAt
    }
  }
`

/**
 * __useGetUserByIdQuery__
 *
 * To run a query within a React component, call `useGetUserByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserByIdQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetUserByIdQuery(
  baseOptions: Apollo.QueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, options)
}
export function useGetUserByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(
    GetUserByIdDocument,
    options
  )
}
export type GetUserByIdQueryHookResult = ReturnType<typeof useGetUserByIdQuery>
export type GetUserByIdLazyQueryHookResult = ReturnType<typeof useGetUserByIdLazyQuery>
export type GetUserByIdQueryResult = Apollo.QueryResult<GetUserByIdQuery, GetUserByIdQueryVariables>
export const UpdateUserDocument = gql`
  mutation updateUser($data: UpdateUserInput!) {
    updateUser(data: $data) {
      idUser
      idEntity
      idOu
      idUserOauth
      idUserType
      name
      userName
      email
      phone
      createdAt
      updatedAt
    }
  }
`
export type UpdateUserMutationFn = Apollo.MutationFunction<
  UpdateUserMutation,
  UpdateUserMutationVariables
>

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(
    UpdateUserDocument,
    options
  )
}
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<
  UpdateUserMutation,
  UpdateUserMutationVariables
>
