// Organizational units

export interface OrganizationalUnitEntity {
  label: string
  value: string
}

export interface FormDataOrganizationalUnits {
  name: string
  shortName: string
  code: string
  entity: OrganizationalUnitEntity
  idOu?: string
}

export interface OrganizationalUnits {
  idOu: string
  code: string
  name: string
  shortName: string
  idEntity: string
  idStatus: string
}

export interface GetOrganizationalUnitsQueryData {
  organizationalUnits: OrganizationalUnits[]
}

export interface GetOrganizationalUnitByIdQueryData {
  organizationalUnits: OrganizationalUnits
}

// Role Permissions

export interface FormDataRolePermissions {
  idRole: string
  idPermissions: Array<{ idPermission: string }>
  idOu: string
  idStatus: string
  idUserCreate?: string
  idUserUpdate?: string
}

// Modules
export interface FormDataModulePermissions {
  idModule: string
  idPermissions: Array<{ idPermission: string }>
  idOu: string
  idStatus: string
  idUserCreate?: string
  idUserUpdate?: string
}

// Users

export interface FormDataUsers {
  idUser?: string
  idEntity?: string
  idUserType?: string
  idUserOauth?: string
  // User basic info
  name: string
  email: string
  password?: string
  phone: string
  idOu?: string
  country?: {
    label: string
    value: string
  }
  // OU info
  businessName?: string
  businessCode?: string
  // language: string
  idRole?: string
  idModule?: string
}
