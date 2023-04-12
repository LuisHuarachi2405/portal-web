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

export type AccountingPeriod = {
  __typename?: 'AccountingPeriod'
  code?: Maybe<Scalars['String']>
  createdAt: Scalars['DateTime']
  dateFrom: Scalars['DateTime']
  dateTo: Scalars['DateTime']
  idAccountingPeriod: Scalars['BUFFER']
  idAccountingPeriodType?: Maybe<Scalars['BUFFER']>
  idOu?: Maybe<Scalars['BUFFER']>
  idStatus?: Maybe<Scalars['String']>
  idUserCreate?: Maybe<Scalars['BUFFER']>
  idUserUpdate?: Maybe<Scalars['BUFFER']>
  updatedAt: Scalars['DateTime']
}

export type AccountingPeriodCountResult = {
  __typename?: 'AccountingPeriodCountResult'
  _count: Scalars['Float']
}

export type AccountingPeriodResult = {
  __typename?: 'AccountingPeriodResult'
  Message?: Maybe<Scalars['String']>
  count?: Maybe<Scalars['Float']>
}

export type AccountingPeriodValueInput = {
  codeAnio?: InputMaybe<Scalars['String']>
  idAccountingPeriodType: Scalars['BUFFER']
  idOu?: InputMaybe<Scalars['BUFFER']>
  idUserCreate: Scalars['BUFFER']
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

export type BankAccount = {
  __typename?: 'BankAccount'
  createdAt: Scalars['DateTime']
  idBankAccount: Scalars['BUFFER']
  idBankAccountType: Scalars['BUFFER']
  idCurrency: Scalars['BUFFER']
  idEntity: Scalars['BUFFER']
  idOu: Scalars['BUFFER']
  idStatus: Scalars['String']
  idUserCreate: Scalars['BUFFER']
  idUserUpdate: Scalars['BUFFER']
  interbankNumber: Scalars['String']
  number: Scalars['String']
  updatedAt: Scalars['DateTime']
}

export type CashierTransaction = {
  __typename?: 'CashierTransaction'
  amount1?: Maybe<Scalars['Float']>
  amount2?: Maybe<Scalars['Float']>
  amount3?: Maybe<Scalars['Float']>
  credit1?: Maybe<Scalars['Float']>
  credit2?: Maybe<Scalars['Float']>
  credit3?: Maybe<Scalars['Float']>
  date: Scalars['DateTime']
  dateEntry: Scalars['DateTime']
  debit1?: Maybe<Scalars['Float']>
  debit2?: Maybe<Scalars['Float']>
  debit3?: Maybe<Scalars['Float']>
  exchangeRate1?: Maybe<Scalars['Float']>
  exchangeRate2?: Maybe<Scalars['Float']>
  exchangeRate3?: Maybe<Scalars['Float']>
  idCashierTransaction: Scalars['BUFFER']
  idCashierTransactionType: Scalars['BUFFER']
  idCurrency1?: Maybe<Scalars['BUFFER']>
  idCurrency2?: Maybe<Scalars['BUFFER']>
  idCurrency3?: Maybe<Scalars['BUFFER']>
  idDailyCashier: Scalars['BUFFER']
  idEntity: Scalars['BUFFER']
  idOu: Scalars['BUFFER']
  idStatus: Scalars['String']
  idUserCreate: Scalars['BUFFER']
  idUserUpdate: Scalars['BUFFER']
  note?: Maybe<Scalars['String']>
  updatedAt: Scalars['DateTime']
}

export type CashierTransactionDocumentItem = {
  __typename?: 'CashierTransactionDocumentItem'
  DocumentTypeTrx?: Maybe<Scalars['BUFFER']>
  balance1?: Maybe<Scalars['Float']>
  date: Scalars['DateTime']
  description: Scalars['String']
  exchangeRate1?: Maybe<Scalars['BUFFER']>
  idCurrency1?: Maybe<Scalars['BUFFER']>
  idDocument?: Maybe<Scalars['BUFFER']>
  idDocumentItem?: Maybe<Scalars['BUFFER']>
  idDocumentType?: Maybe<Scalars['BUFFER']>
  idDocumentTypeName: Scalars['String']
  idRelatedDocumentTypePayment?: Maybe<Scalars['BUFFER']>
  idStatus: Scalars['String']
  number: Scalars['String']
}

export type CashierTransactionReservationItem = {
  __typename?: 'CashierTransactionReservationItem'
  amount1?: Maybe<Scalars['Float']>
  amount2?: Maybe<Scalars['Float']>
  amount3?: Maybe<Scalars['Float']>
  createdAt: Scalars['DateTime']
  credit1?: Maybe<Scalars['Float']>
  credit2?: Maybe<Scalars['Float']>
  credit3?: Maybe<Scalars['Float']>
  debit1?: Maybe<Scalars['Float']>
  debit2?: Maybe<Scalars['Float']>
  debit3?: Maybe<Scalars['Float']>
  exchangeRate1?: Maybe<Scalars['Float']>
  exchangeRate3?: Maybe<Scalars['Float']>
  exchangerate2?: Maybe<Scalars['Float']>
  idCashierTransaction?: Maybe<Scalars['BUFFER']>
  idCurrency1?: Maybe<Scalars['BUFFER']>
  idCurrency3?: Maybe<Scalars['BUFFER']>
  idDailyCashier?: Maybe<Scalars['BUFFER']>
  idDocument?: Maybe<Scalars['BUFFER']>
  idDocumentItem?: Maybe<Scalars['BUFFER']>
  idOu?: Maybe<Scalars['BUFFER']>
  idReservation?: Maybe<Scalars['BUFFER']>
  idReservationItem?: Maybe<Scalars['BUFFER']>
  idStatus: Scalars['String']
  idUserCreate?: Maybe<Scalars['BUFFER']>
  idUserUpdate?: Maybe<Scalars['BUFFER']>
  idcurrency2?: Maybe<Scalars['BUFFER']>
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

export type CreateBankAccountValueInput = {
  idBank: Scalars['BUFFER']
  idBankAccountType: Scalars['BUFFER']
  idCurrency: Scalars['BUFFER']
  idEntity: Scalars['BUFFER']
  idOu: Scalars['BUFFER']
  idUser: Scalars['BUFFER']
  interbankNumber: Scalars['String']
  number: Scalars['String']
}

export type CreateCartReservationItemValueInput = {
  amountTotal: Scalars['Float']
  idPaymentPercent?: InputMaybe<Scalars['BUFFER']>
  idReservation: Scalars['BUFFER']
  idReservationItem: Scalars['BUFFER']
  item: Scalars['Float']
  paymentAmount: Scalars['Float']
  pendingPayment: Scalars['Float']
  valuePaymentPercent: Scalars['Float']
}

export type CreateCashierTransactionValueInput = {
  date: Scalars['DateTime']
  idCashierTransactionType: Scalars['BUFFER']
  idCashierTransactionTypeName: Scalars['String']
  idDailyCashier?: InputMaybe<Scalars['BUFFER']>
  idDailyCashierType: Scalars['BUFFER']
  idEntity: Scalars['BUFFER']
  idOu: Scalars['BUFFER']
  idUser: Scalars['BUFFER']
  note?: InputMaybe<Scalars['String']>
}

export type CreateContactInput = {
  idContactType: Scalars['BUFFER']
  idOu: Scalars['BUFFER']
  idUserCreate: Scalars['BUFFER']
  value: Scalars['String']
}

export type CreateDailyCashierValueInput = {
  date: Scalars['DateTime']
  idDailyCashierType: Scalars['BUFFER']
  idOu: Scalars['BUFFER']
  idStatus: Scalars['String']
  idUser: Scalars['BUFFER']
  idUserCreate: Scalars['BUFFER']
  idUserUpdate: Scalars['BUFFER']
  note: Scalars['String']
}

export type CreateDocumentItemInput = {
  amount1?: InputMaybe<Scalars['Float']>
  exchangeRate1?: InputMaybe<Scalars['Float']>
  exchangeRate3?: InputMaybe<Scalars['Float']>
  idCashierTransaction?: InputMaybe<Scalars['BUFFER']>
  idCurrency1?: InputMaybe<Scalars['BUFFER']>
  idCurrency2?: InputMaybe<Scalars['BUFFER']>
  idCurrency3?: InputMaybe<Scalars['BUFFER']>
  idCurrencyMN: Scalars['BUFFER']
  idDocument?: InputMaybe<Scalars['BUFFER']>
  idDocumentItem?: InputMaybe<Scalars['BUFFER']>
  idDocumentStatementTypeDoc: Scalars['BUFFER']
  idEntity?: InputMaybe<Scalars['BUFFER']>
  idOu?: InputMaybe<Scalars['BUFFER']>
  idUser?: InputMaybe<Scalars['BUFFER']>
}

export type CreateDocumentItemValueInput = {
  datePayment: Scalars['DateTime']
  exchangeRate1: Scalars['Float']
  exchangeRate2: Scalars['Float']
  exchangeRate3: Scalars['Float']
  idCashierTransactionItemType: Scalars['BUFFER']
  idCashierTransactionItemTypeName: Scalars['String']
  idCurrency1: Scalars['BUFFER']
  idCurrency2: Scalars['BUFFER']
  idCurrency3: Scalars['BUFFER']
  idCurrencyMN: Scalars['BUFFER']
  idDocument: Scalars['BUFFER']
  idDocumentItem: Scalars['BUFFER']
  idPaymentDocumentType: Scalars['BUFFER']
  idPaymentDocumentTypeName: Scalars['String']
  idPaymentType: Scalars['BUFFER']
  idPaymentTypeName: Scalars['String']
  item: Scalars['Float']
  numberDocumentTransaction: Scalars['String']
  paymentAmount: Scalars['Float']
  paymentGlosaAndNumber: Scalars['String']
}

export type CreateDocumentSerialValueInput = {
  Serial: Scalars['String']
  idDocumentType: Scalars['BUFFER']
  idOu: Scalars['BUFFER']
  idUser: Scalars['BUFFER']
}

export type CreateDocumentValueInput = {
  amount3?: InputMaybe<Scalars['Float']>
  date: Scalars['DateTime']
  description: Scalars['String']
  exchangeRate1?: InputMaybe<Scalars['Float']>
  exchangeRate3?: InputMaybe<Scalars['Float']>
  idBankAccount?: InputMaybe<Scalars['BUFFER']>
  idCurrency1?: InputMaybe<Scalars['BUFFER']>
  idCurrency2?: InputMaybe<Scalars['BUFFER']>
  idCurrency3?: InputMaybe<Scalars['BUFFER']>
  idCurrencyMN: Scalars['BUFFER']
  idDocumentStatementTypeBalIniDay: Scalars['BUFFER']
  idDocumentStatementTypeBalIniDoc: Scalars['BUFFER']
  idDocumentStatementTypeBalIniMon: Scalars['BUFFER']
  idDocumentStatementTypeBalIniYear: Scalars['BUFFER']
  idDocumentType: Scalars['BUFFER']
  idDocumentTypeCPECOD?: InputMaybe<Scalars['BUFFER']>
  idDocumentTypeCPEName: Scalars['String']
  idDocumentTypeName: Scalars['String']
  idDocumentTypeRel?: InputMaybe<Scalars['BUFFER']>
  idDocumentTypeRelCod?: InputMaybe<Scalars['String']>
  idEntity: Scalars['BUFFER']
  idOu?: InputMaybe<Scalars['BUFFER']>
  idPaymentGateway?: InputMaybe<Scalars['BUFFER']>
  idUser?: InputMaybe<Scalars['BUFFER']>
  number: Scalars['String']
}

export type CreateEntityInput = {
  addresses?: InputMaybe<Array<AddressInput>>
  commercialName: Scalars['String']
  contacts?: InputMaybe<Array<ContactInput>>
  idBusinessType?: InputMaybe<Scalars['BUFFER']>
  idChannel?: InputMaybe<Scalars['BUFFER']>
  idCountry: Scalars['BUFFER']
  idIndustry?: InputMaybe<Scalars['BUFFER']>
  idMarket?: InputMaybe<Scalars['BUFFER']>
  idOu?: InputMaybe<Scalars['BUFFER']>
  idTypeEntity?: InputMaybe<Scalars['BUFFER']>
  idUserCreate?: InputMaybe<Scalars['BUFFER']>
  idsIdentificationTypes?: InputMaybe<Array<EntityIdentificationTypeCreateEntityInput>>
  name: Scalars['String']
  roles?: InputMaybe<Array<RolesEntityInput>>
}

export type CreateGeneralParameterInput = {
  code: Scalars['String']
  generalParameterValue: Array<GeneralParameterValueInput>
  idGeneralParameterValue?: InputMaybe<Scalars['BUFFER']>
  idOu?: InputMaybe<Scalars['BUFFER']>
  idUser?: InputMaybe<Scalars['BUFFER']>
  name: Scalars['String']
  shortName: Scalars['String']
}

export type CreateInventoryTransactionInput = {
  credit: Scalars['Float']
  date: Scalars['DateTime']
  debit: Scalars['Float']
  idInventoryTransactionType: Scalars['BUFFER']
  idOu?: InputMaybe<Scalars['BUFFER']>
  idProductInstance: Scalars['BUFFER']
  idReservation?: InputMaybe<Scalars['BUFFER']>
  idReservationItem?: InputMaybe<Scalars['BUFFER']>
  idUserCreate: Scalars['BUFFER']
  note: Scalars['String']
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

export type CreatePassengerInput = {
  birthDate: Scalars['DateTime']
  documentNumber: Scalars['String']
  email?: InputMaybe<Scalars['String']>
  flagInvoice: Scalars['String']
  idCountry: Scalars['BUFFER']
  idDocumentType: Scalars['BUFFER']
  idGender: Scalars['BUFFER']
  idOu: Scalars['BUFFER']
  idPassengerType: Scalars['BUFFER']
  idUserCreate: Scalars['BUFFER']
  idUserUpdate: Scalars['BUFFER']
  lastName: Scalars['String']
  name: Scalars['String']
}

export type CreatePaymentValueInput = {
  datePayment: Scalars['DateTime']
  idCashierTransaction: Scalars['BUFFER']
  idCurrency1: Scalars['BUFFER']
  idCurrency2: Scalars['BUFFER']
  idCurrency3: Scalars['BUFFER']
  idCurrencyMN: Scalars['BUFFER']
  idDailyCashier: Scalars['BUFFER']
  idEntity: Scalars['BUFFER']
  idOu: Scalars['BUFFER']
  note: Scalars['String']
  paymentItem: Array<CreateDocumentItemValueInput>
  reservationItem: Array<CreateCartReservationItemValueInput>
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

export type CreateProductIdentificationInput = {
  idOu?: InputMaybe<Scalars['BUFFER']>
  idProduct: Scalars['BUFFER']
  idProductIdentificationType: Scalars['BUFFER']
  idUserCreate: Scalars['BUFFER']
  value: Scalars['String']
}

export type CreateProductInput = {
  barCode?: InputMaybe<Scalars['String']>
  code: Scalars['String']
  idEntitySupplier: Scalars['BUFFER']
  idOu?: InputMaybe<Scalars['BUFFER']>
  idProductFeature0?: InputMaybe<Scalars['BUFFER']>
  idProductFeature1?: InputMaybe<Scalars['BUFFER']>
  idProductFeature2?: InputMaybe<Scalars['BUFFER']>
  idProductFeature3?: InputMaybe<Scalars['BUFFER']>
  idProductFeature4?: InputMaybe<Scalars['BUFFER']>
  idProductFeature5?: InputMaybe<Scalars['BUFFER']>
  idProductFeature6?: InputMaybe<Scalars['BUFFER']>
  idProductFeature7?: InputMaybe<Scalars['BUFFER']>
  idProductFeature8?: InputMaybe<Scalars['BUFFER']>
  idProductFeature9?: InputMaybe<Scalars['BUFFER']>
  idProductParent?: InputMaybe<Scalars['BUFFER']>
  idProductType: Scalars['BUFFER']
  idUserCreate: Scalars['BUFFER']
  internationalCodeSunat: Scalars['String']
  inventoryFlag: Scalars['String']
  name: Scalars['String']
  operationalCodeSunat: Scalars['String']
  productTypeSunat: Scalars['String']
  shortName: Scalars['String']
  unitSunat: Scalars['String']
}

export type CreateProductInstanceInput = {
  idOu?: InputMaybe<Scalars['BUFFER']>
  idProduct: Scalars['BUFFER']
  idUserCreate: Scalars['BUFFER']
}

export type CreateProductProductCategoryInput = {
  idOu?: InputMaybe<Scalars['BUFFER']>
  idProduct: Scalars['BUFFER']
  idProductCategory: Scalars['BUFFER']
  idUserCreate: Scalars['BUFFER']
}

export type CreateProductProductFeatureInput = {
  idOu?: InputMaybe<Scalars['BUFFER']>
  idProduct: Scalars['BUFFER']
  idProductFeature: Scalars['BUFFER']
  idUserCreate: Scalars['BUFFER']
  value: Scalars['String']
}

export type CreateProductProductSubFeatureInput = {
  idOu?: InputMaybe<Scalars['BUFFER']>
  idProduct: Scalars['BUFFER']
  idProductSubFeature: Scalars['BUFFER']
  idUserCreate: Scalars['BUFFER']
}

export type CreateProductSubFeatureInput = {
  code: Scalars['String']
  idOu?: InputMaybe<Scalars['BUFFER']>
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

export type CreateRateRateSubFeatureInput = {
  idOu: Scalars['BUFFER']
  idRate: Scalars['BUFFER']
  idRateSubFeature: Scalars['BUFFER']
  idUserCreate: Scalars['BUFFER']
}

export type CreateRateRateSubFeatureItemInput = {
  idOu: Scalars['BUFFER']
  idRate: Scalars['BUFFER']
  idRateSubFeature: Scalars['BUFFER']
  idRateSubFeatureItem: Scalars['BUFFER']
  idUserCreate: Scalars['BUFFER']
  value: Scalars['String']
}

export type CreateRateSubFeatureInput = {
  code: Scalars['String']
  idOu: Scalars['BUFFER']
  idProductCategory: Scalars['BUFFER']
  idRateSubFeatureType: Scalars['BUFFER']
  idUserCreate: Scalars['BUFFER']
  idUserUpdate: Scalars['BUFFER']
  name: Scalars['String']
  rateSubFeatureItem: Array<RateSubFeatureItemInput>
  shortName: Scalars['String']
}

export type CreateRateSubFeatureItemInput = {
  code: Scalars['String']
  idOu: Scalars['BUFFER']
  idRateSubFeature: Scalars['BUFFER']
  idRateSubFeatureItem?: InputMaybe<Scalars['BUFFER']>
  idRateSubFeatureItemType: Scalars['BUFFER']
  idStatus: Scalars['String']
  idUserCreate: Scalars['BUFFER']
  idUserUpdate: Scalars['BUFFER']
  name: Scalars['String']
  shortName: Scalars['String']
}

export type CreateReservationDocumentInput = {
  idDocument: Scalars['BUFFER']
  idOu: Scalars['BUFFER']
  idReservation: Scalars['BUFFER']
  idReservationItem: Scalars['BUFFER']
  idUserCreate: Scalars['BUFFER']
}

export type CreateReservationInput = {
  code: Scalars['String']
  entryDate: Scalars['DateTime']
  file: Scalars['String']
  idContact: Scalars['BUFFER']
  idEntity: Scalars['BUFFER']
  idOu: Scalars['BUFFER']
  idReservationType: Scalars['BUFFER']
  idUserCreate: Scalars['BUFFER']
  idUserUpdate: Scalars['BUFFER']
  note: Scalars['String']
  passengersQuantity: Scalars['Float']
}

export type CreateReservationItemInput = {
  dateEnd: Scalars['DateTime']
  dateStart: Scalars['DateTime']
  idOu: Scalars['BUFFER']
  idProduct: Scalars['BUFFER']
  idProductInstance: Scalars['BUFFER']
  idRate: Scalars['BUFFER']
  idRateInstance: Scalars['BUFFER']
  idReservation: Scalars['BUFFER']
  idUserCreate: Scalars['BUFFER']
  idUserUpdate: Scalars['BUFFER']
  item: Scalars['Float']
  quantity: Scalars['Float']
  totalPayedPEN: Scalars['Float']
  totalPayedUSD: Scalars['Float']
  totalPricePEN: Scalars['Float']
  totalPriceUSD: Scalars['Float']
  unitPricePEN: Scalars['Float']
  unitPriceUSD: Scalars['Float']
}

export type CreateReservationItemnput = {
  amount3?: InputMaybe<Scalars['Float']>
  amountTotal?: InputMaybe<Scalars['Float']>
  exchangeRate1?: InputMaybe<Scalars['Float']>
  exchangeRate3?: InputMaybe<Scalars['Float']>
  idCashierTransaction: Scalars['BUFFER']
  idCurrency1?: InputMaybe<Scalars['BUFFER']>
  idCurrency2?: InputMaybe<Scalars['BUFFER']>
  idCurrency3?: InputMaybe<Scalars['BUFFER']>
  idCurrencyMN: Scalars['BUFFER']
  idDocument?: InputMaybe<Scalars['BUFFER']>
  idDocumentItem?: InputMaybe<Scalars['BUFFER']>
  idOu: Scalars['BUFFER']
  idReservation: Scalars['BUFFER']
  idReservationItem: Scalars['BUFFER']
  idUser?: InputMaybe<Scalars['BUFFER']>
}

export type CreateReservationPassengerInput = {
  idOu: Scalars['BUFFER']
  idPassenger: Scalars['BUFFER']
  idReservation: Scalars['BUFFER']
  idUserCreate: Scalars['BUFFER']
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
  idOu: Scalars['BUFFER']
  idUserOauth: Scalars['String']
  idUserType: Scalars['BUFFER']
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
  idUserType: Scalars['BUFFER']
  name: Scalars['String']
  phone: Scalars['String']
  userName: Scalars['String']
}

export type DailyCashier = {
  __typename?: 'DailyCashier'
  createdAt: Scalars['DateTime']
  date: Scalars['DateTime']
  idDailyCashier: Scalars['BUFFER']
  idDailyCashierType: Scalars['BUFFER']
  idOu: Scalars['BUFFER']
  idStatus: Scalars['String']
  idUser: Scalars['BUFFER']
  idUserCreate: Scalars['BUFFER']
  idUserUpdate: Scalars['BUFFER']
  note: Scalars['String']
  updatedAt: Scalars['DateTime']
}

export type DailyCashierCount = {
  __typename?: 'DailyCashierCount'
  _count: Scalars['Float']
}

export type DeleteAddressInput = {
  idAddress: Scalars['BUFFER']
}

export type DeleteBankAccountValueInput = {
  idBankAccount: Scalars['BUFFER']
  idUser: Scalars['BUFFER']
}

export type DeleteContactInput = {
  idContact: Scalars['BUFFER']
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

export type DocumentEntity = {
  __typename?: 'DocumentEntity'
  amount1?: Maybe<Scalars['Float']>
  amount2?: Maybe<Scalars['Float']>
  amount3?: Maybe<Scalars['Float']>
  createdAt: Scalars['DateTime']
  credit1?: Maybe<Scalars['Float']>
  credit2?: Maybe<Scalars['Float']>
  credit3?: Maybe<Scalars['Float']>
  date: Scalars['DateTime']
  dateEntry: Scalars['DateTime']
  debit1?: Maybe<Scalars['Float']>
  debit2?: Maybe<Scalars['Float']>
  debit3?: Maybe<Scalars['Float']>
  description: Scalars['String']
  exchangeRate1?: Maybe<Scalars['Float']>
  exchangeRate3?: Maybe<Scalars['Float']>
  exchangerate2?: Maybe<Scalars['Float']>
  idCurrency1?: Maybe<Scalars['BUFFER']>
  idCurrency3?: Maybe<Scalars['BUFFER']>
  idDocumentType: Scalars['BUFFER']
  idEntity: Scalars['BUFFER']
  idOu?: Maybe<Scalars['BUFFER']>
  idRelatedDocument?: Maybe<Scalars['BUFFER']>
  idRelatedDocumentType?: Maybe<Scalars['BUFFER']>
  idStatus: Scalars['String']
  idUserCreate?: Maybe<Scalars['BUFFER']>
  idUserUpdate?: Maybe<Scalars['BUFFER']>
  idcurrency2?: Maybe<Scalars['BUFFER']>
  iddocument: Scalars['BUFFER']
  number: Scalars['String']
  updatedAt: Scalars['DateTime']
}

export type DocumentItem = {
  __typename?: 'DocumentItem'
  amount1?: Maybe<Scalars['Float']>
  amount2?: Maybe<Scalars['Float']>
  amount3?: Maybe<Scalars['Float']>
  createdAt: Scalars['DateTime']
  credit1?: Maybe<Scalars['Float']>
  credit2?: Maybe<Scalars['Float']>
  credit3?: Maybe<Scalars['Float']>
  debit1?: Maybe<Scalars['Float']>
  debit2?: Maybe<Scalars['Float']>
  debit3?: Maybe<Scalars['Float']>
  exchangeRate1?: Maybe<Scalars['Float']>
  exchangeRate3?: Maybe<Scalars['Float']>
  exchangerate2?: Maybe<Scalars['Float']>
  idCashierTransaction?: Maybe<Scalars['BUFFER']>
  idCurrency1?: Maybe<Scalars['BUFFER']>
  idCurrency3?: Maybe<Scalars['BUFFER']>
  idDailyCashier?: Maybe<Scalars['BUFFER']>
  idDocument?: Maybe<Scalars['BUFFER']>
  idDocumentItem?: Maybe<Scalars['BUFFER']>
  idOu?: Maybe<Scalars['BUFFER']>
  idStatus: Scalars['String']
  idUserCreate?: Maybe<Scalars['BUFFER']>
  idUserUpdate?: Maybe<Scalars['BUFFER']>
  idcurrency2?: Maybe<Scalars['BUFFER']>
}

export type DocumentItemPayment = {
  __typename?: 'DocumentItemPayment'
  DocumentTypeTrx?: Maybe<Scalars['BUFFER']>
  balance1?: Maybe<Scalars['Float']>
  date: Scalars['DateTime']
  description: Scalars['String']
  exchangeRate1?: Maybe<Scalars['Float']>
  exchangeRate3?: Maybe<Scalars['Float']>
  idCurrency1?: Maybe<Scalars['BUFFER']>
  idCurrency3?: Maybe<Scalars['BUFFER']>
  idDocument?: Maybe<Scalars['BUFFER']>
  idDocumentItem?: Maybe<Scalars['BUFFER']>
  idDocumentStatementTypeDoc?: Maybe<Scalars['BUFFER']>
  idDocumentType?: Maybe<Scalars['BUFFER']>
  idDocumentTypeName?: Maybe<Scalars['String']>
  idOu?: Maybe<Scalars['BUFFER']>
  idRelatedDocumentTypePayment?: Maybe<Scalars['BUFFER']>
  idStatus: Scalars['String']
  idcurrency2?: Maybe<Scalars['BUFFER']>
  number: Scalars['String']
}

export type DocumentSerial = {
  __typename?: 'DocumentSerial'
  Number: Scalars['Float']
  Serial: Scalars['BUFFER']
  createdAt: Scalars['DateTime']
  idDocumentSerial: Scalars['BUFFER']
  idDocumentType: Scalars['BUFFER']
  idOu: Scalars['BUFFER']
  idStatus: Scalars['String']
  idUserCreate: Scalars['BUFFER']
  idUserUpdate: Scalars['BUFFER']
  updatedAt: Scalars['DateTime']
}

export type DocumentStatement = {
  __typename?: 'DocumentStatement'
  balance1?: Maybe<Scalars['Float']>
  balance2?: Maybe<Scalars['Float']>
  balance3?: Maybe<Scalars['Float']>
  createdAt: Scalars['DateTime']
  credit1?: Maybe<Scalars['Float']>
  credit2?: Maybe<Scalars['Float']>
  credit3?: Maybe<Scalars['Float']>
  date: Scalars['DateTime']
  debit1?: Maybe<Scalars['Float']>
  debit2?: Maybe<Scalars['Float']>
  debit3?: Maybe<Scalars['Float']>
  idAccountingPeriod?: Maybe<Scalars['BUFFER']>
  idCurrency1?: Maybe<Scalars['BUFFER']>
  idCurrency2?: Maybe<Scalars['BUFFER']>
  idCurrency3?: Maybe<Scalars['BUFFER']>
  idDocument?: Maybe<Scalars['BUFFER']>
  idDocumentStatement?: Maybe<Scalars['BUFFER']>
  idDocumentStatementType?: Maybe<Scalars['BUFFER']>
  idEntity?: Maybe<Scalars['BUFFER']>
  idOu?: Maybe<Scalars['BUFFER']>
  idStatus: Scalars['String']
  idUserCreate?: Maybe<Scalars['BUFFER']>
  idUserUpdate?: Maybe<Scalars['BUFFER']>
  updatedAt: Scalars['DateTime']
}

export type Entity = {
  __typename?: 'Entity'
  commercialName: Scalars['String']
  createdAt: Scalars['DateTime']
  entity_Address?: Maybe<Array<EntityAddress>>
  entity_Contact?: Maybe<Array<EntityContact>>
  entity_EntityType?: Maybe<EntityType>
  entity_IdType?: Maybe<Array<EntityIdType>>
  entity_Role?: Maybe<Array<EntityRol>>
  idBusinessType?: Maybe<Scalars['BUFFER']>
  idChannel?: Maybe<Scalars['BUFFER']>
  idCountry: Scalars['BUFFER']
  idEntity: Scalars['BUFFER']
  idIndustry?: Maybe<Scalars['BUFFER']>
  idMarket?: Maybe<Scalars['BUFFER']>
  idOu: Scalars['BUFFER']
  idStatus: IdStatus
  idUserCreate?: Maybe<Scalars['BUFFER']>
  idUserUpdate?: Maybe<Scalars['BUFFER']>
  name: Scalars['String']
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

export type GeneralParameterQueryInput = {
  skip: Scalars['Float']
  take: Scalars['Float']
}

export type GeneralParameterQueryResult = {
  __typename?: 'GeneralParameterQueryResult'
  count: Scalars['Float']
  data: Array<GeneralParameter>
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

export type GetAddressInput = {
  idAddress: Scalars['BUFFER']
}

export type GetContactInput = {
  idContact: Scalars['BUFFER']
}

export type GetEntitiesInput = {
  limit?: InputMaybe<Scalars['Int']>
  page: Scalars['Int']
  userInput?: InputMaybe<Scalars['String']>
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

export type Inventory = {
  __typename?: 'Inventory'
  balance: Scalars['Float']
  createdAt: Scalars['DateTime']
  credit: Scalars['Float']
  date: Scalars['DateTime']
  debit: Scalars['Float']
  idInventory: Scalars['BUFFER']
  idOu: Scalars['BUFFER']
  idProductInstance: Scalars['BUFFER']
  idStatus: Scalars['String']
  idUserCreate: Scalars['BUFFER']
  idUserUpdate: Scalars['BUFFER']
  productInstance: ProductInstance
  updatedAt: Scalars['DateTime']
}

export type InventoryTransaction = {
  __typename?: 'InventoryTransaction'
  balance: Scalars['Float']
  createdAt: Scalars['DateTime']
  credit: Scalars['Float']
  date: Scalars['DateTime']
  debit: Scalars['Float']
  idInventoryTransaction: Scalars['BUFFER']
  idInventoryTransactionType: Scalars['BUFFER']
  idOu: Scalars['BUFFER']
  idProductInstance: Scalars['BUFFER']
  idReservation: Scalars['BUFFER']
  idReservationItem: Scalars['BUFFER']
  idStatus: Scalars['String']
  idUserCreate: Scalars['BUFFER']
  idUserUpdate: Scalars['BUFFER']
  note: Scalars['String']
  updatedAt: Scalars['DateTime']
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
  DeleteBankAccount: BankAccount
  addChild: Product
  createAccountingPeriodAnio: AccountingPeriod
  createAccountingPeriodAnioMonth: AccountingPeriodResult
  createAccountingPeriodAnioMonthDay: AccountingPeriodResult
  createAddress: Address
  createBankAccount: BankAccount
  createCashierTransaction: CashierTransaction
  createCashierTransactionDocumentItem: DocumentItem
  createCashierTransactionReservationItem: CashierTransactionReservationItem
  createContact: Contact
  createDailyCashier: DailyCashier
  createDocument: DocumentEntity
  createDocumentSerial: DocumentSerial
  createEntity: ReponseCreateEntity
  createGeneralParameter: GeneralParameter
  createInventoryTransaction: InventoryTransaction
  createModulePermission: ModulePermission
  createOu: Ou
  createPassenger: Passenger
  createPayment: PaymentEntity
  createProduct: Product
  createProductCategory: ProductCategory
  createProductFeature: ProductFeature
  createProductIdentification: ProductIdentification
  createProductInstance: Array<ProductInstance>
  createProductProductCategory: ProductProductCategory
  createProductProductFeature: ProductProductFeature
  createProductProductSubFeature: ProductProductSubFeature
  createProductSubFeature: ProductSubFeature
  createRate: Rate
  createRateFeature: RateFeature
  createRateInstance: Array<RateInstance>
  createRateRateFeature: Rate_RateSubFeatureItem
  createRateRateSubFeature: Rate_RateSubFeature
  createRateSubFeature: RateSubFeature
  createRateSubFeatureItem: RateSubFeatureItem
  createReservation: Reservation
  createReservationDocument: ReservationDocument
  createReservationItem: ReservationItem
  createReservationPassenger: ReservationPassenger
  createRolePermission: RolePermission
  createSession: Session
  createUser: Users
  createUserModule: UserModulesModule
  createUserRole: UserRole
  createUserTransaction: UserTransaction
  deleteAddress: Address
  deleteContact: Contact
  deleteEntity: ResponseDeleteEntity
  deleteGeneralParameter: GeneralParameter
  deleteModulePermission: ModulePermission
  deleteOu: Ou
  deleteProduct: Product
  deleteProductCategory: ProductCategory
  deleteProductFeature: ProductFeature
  deleteProductIdentification: ProductIdentification
  deleteProductInstance: ProductInstance
  deleteProductProductCategory: ProductProductCategory
  deleteProductProductFeature: ProductProductFeature
  deleteProductProductSubFeature: ProductProductSubFeature
  deleteProductSubFeature: ProductSubFeature
  deleteRate: Rate
  deleteRateFeature: RateFeature
  deleteRateInstance: RateInstance
  deleteRateRateFeature: Rate_RateSubFeatureItem
  deleteRateSubFeature: RateSubFeature
  deleteRolePermission: RolePermission
  deleteSession: Session
  deleteUser: Users
  deleteUserModule: UserModulesModule
  deleteUserRole: UserRole
  deleteUserTransaction: UserTransaction
  removePassenger: Passenger
  removeReservation: Reservation
  removeReservationDocument: ReservationDocument
  removeReservationDocuments: ReservationDocument
  removeReservationItem: ReservationItem
  removeReservationItems: ReservationItem
  removeReservationPassenger: ReservationPassenger
  removeReservationPassengers: ReservationPassenger
  updateAddress: Address
  updateBankAccount: BankAccount
  updateContact: Contact
  updateDailyCashierClose: DailyCashier
  updateDailyCashierReOpening: DailyCashier
  updateDocumentSerial: DocumentSerial
  updateEntity: ReponseUpdateEntity
  updateGeneralParameter: GeneralParameter
  updateModulePermission: ModulePermission
  updateOu: Ou
  updatePassenger: Passenger
  updateProduct: Product
  updateProductCategory: ProductCategory
  updateProductFeature: ProductFeature
  updateProductIdentification: ProductIdentification
  updateProductProductFeature: ProductProductFeature
  updateProductSubFeature: ProductSubFeature
  updateRate: Rate
  updateRateFeature: RateFeature
  updateRateInstance: RateInstance
  updateRateInstances: Array<RateInstance>
  updateRateRateFeature: Rate_RateSubFeatureItem
  updateRateSubFeature: RateSubFeature
  updateRateSubFeatureItem: RateSubFeatureItem
  updateReservation: Reservation
  updateReservationItem: ReservationItem
  updateRolePermission: RolePermission
  updateSession: Session
  updateUser: Users
  updateUserModule: UserModulesModule
  updateUserRole: UserRole
  updateUserTransaction: UserTransaction
}

export type MutationDeleteBankAccountArgs = {
  DeleteBankAccountValueInput: DeleteBankAccountValueInput
}

export type MutationAddChildArgs = {
  idChild: Scalars['BUFFER']
  idOu: Scalars['BUFFER']
  idParent: Scalars['BUFFER']
  idUserCreate: Scalars['BUFFER']
}

export type MutationCreateAccountingPeriodAnioArgs = {
  AccountingPeriodValueInput: AccountingPeriodValueInput
}

export type MutationCreateAccountingPeriodAnioMonthArgs = {
  AccountingPeriodValueInput: AccountingPeriodValueInput
}

export type MutationCreateAccountingPeriodAnioMonthDayArgs = {
  createAccountingPeriodAnioMonthDay: AccountingPeriodValueInput
}

export type MutationCreateAddressArgs = {
  address: CreateAddressInput
}

export type MutationCreateBankAccountArgs = {
  CreateBankAccountValueInput: CreateBankAccountValueInput
}

export type MutationCreateCashierTransactionArgs = {
  CreateCashierTransactionValueInput: CreateCashierTransactionValueInput
}

export type MutationCreateCashierTransactionDocumentItemArgs = {
  createCashierTransactionDocumentItem: CreateDocumentItemInput
}

export type MutationCreateCashierTransactionReservationItemArgs = {
  createCashierTransactionReservationItem: CreateReservationItemnput
}

export type MutationCreateContactArgs = {
  contact: CreateContactInput
}

export type MutationCreateDailyCashierArgs = {
  CreateDailyCashierValueInput: CreateDailyCashierValueInput
}

export type MutationCreateDocumentArgs = {
  CreateDocumentValueInput: CreateDocumentValueInput
}

export type MutationCreateDocumentSerialArgs = {
  createDocumentSerial: CreateDocumentSerialValueInput
}

export type MutationCreateEntityArgs = {
  entity: CreateEntityInput
}

export type MutationCreateGeneralParameterArgs = {
  createGeneralParameterInput: CreateGeneralParameterInput
}

export type MutationCreateInventoryTransactionArgs = {
  createInventoryTransactionInput: CreateInventoryTransactionInput
}

export type MutationCreateModulePermissionArgs = {
  createModulePermissionInput: CreateModulePermissionInput
}

export type MutationCreateOuArgs = {
  data: CreateOuInput
}

export type MutationCreatePassengerArgs = {
  createPassengerInput: CreatePassengerInput
}

export type MutationCreatePaymentArgs = {
  createPayment: CreatePaymentValueInput
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

export type MutationCreateProductIdentificationArgs = {
  createProductIdentificationInput: CreateProductIdentificationInput
}

export type MutationCreateProductInstanceArgs = {
  createProductInstanceInput: CreateProductInstanceInput
}

export type MutationCreateProductProductCategoryArgs = {
  createProductProductCategoryInput: CreateProductProductCategoryInput
}

export type MutationCreateProductProductFeatureArgs = {
  createProductProductFeatureInput: CreateProductProductFeatureInput
}

export type MutationCreateProductProductSubFeatureArgs = {
  createProductProductSubFeatureItemInput: CreateProductProductSubFeatureInput
}

export type MutationCreateProductSubFeatureArgs = {
  createProductSubFeatureInput: CreateProductSubFeatureInput
}

export type MutationCreateRateArgs = {
  rate: RateInput
}

export type MutationCreateRateFeatureArgs = {
  rateFeature: RateFeatureInput
}

export type MutationCreateRateInstanceArgs = {
  createRateInstanceInput: RateInstanceInput
}

export type MutationCreateRateRateFeatureArgs = {
  createRateRateFeatureInput: CreateRateRateSubFeatureItemInput
}

export type MutationCreateRateRateSubFeatureArgs = {
  createRateRateSubFeature: CreateRateRateSubFeatureInput
}

export type MutationCreateRateSubFeatureArgs = {
  createRateSubFeatureInput: CreateRateSubFeatureInput
}

export type MutationCreateRateSubFeatureItemArgs = {
  createRateSubFeatureItemInput: CreateRateSubFeatureItemInput
}

export type MutationCreateReservationArgs = {
  createReservationInput: CreateReservationInput
}

export type MutationCreateReservationDocumentArgs = {
  createReservationDocumentInput: CreateReservationDocumentInput
}

export type MutationCreateReservationItemArgs = {
  createReservationItemInput: CreateReservationItemInput
}

export type MutationCreateReservationPassengerArgs = {
  createReservationPassengerInput: CreateReservationPassengerInput
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

export type MutationDeleteModulePermissionArgs = {
  idModule: Scalars['BUFFER']
  idPermission: Scalars['BUFFER']
}

export type MutationDeleteOuArgs = {
  data: DeleteOuInput
}

export type MutationDeleteProductArgs = {
  id: Scalars['BUFFER']
  inactiveFlag: Scalars['Boolean']
}

export type MutationDeleteProductCategoryArgs = {
  id: Scalars['BUFFER']
}

export type MutationDeleteProductFeatureArgs = {
  id: Scalars['BUFFER']
}

export type MutationDeleteProductIdentificationArgs = {
  id: Scalars['BUFFER']
}

export type MutationDeleteProductInstanceArgs = {
  id: Scalars['BUFFER']
}

export type MutationDeleteProductProductCategoryArgs = {
  idProduct: Scalars['BUFFER']
  idProductCategory: Scalars['BUFFER']
}

export type MutationDeleteProductProductFeatureArgs = {
  id: Scalars['BUFFER']
}

export type MutationDeleteProductProductSubFeatureArgs = {
  id: Scalars['BUFFER']
}

export type MutationDeleteProductSubFeatureArgs = {
  id: Scalars['BUFFER']
}

export type MutationDeleteRateArgs = {
  idRate: Scalars['BUFFER']
}

export type MutationDeleteRateFeatureArgs = {
  idRateFeature: Scalars['BUFFER']
}

export type MutationDeleteRateInstanceArgs = {
  idRateInstance: Scalars['BUFFER']
}

export type MutationDeleteRateRateFeatureArgs = {
  idRateRateSubFeatureItem: Scalars['BUFFER']
}

export type MutationDeleteRateSubFeatureArgs = {
  idRateSubFeature: Scalars['BUFFER']
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

export type MutationRemovePassengerArgs = {
  id: Scalars['BUFFER']
}

export type MutationRemoveReservationArgs = {
  idReservation: Scalars['BUFFER']
}

export type MutationRemoveReservationDocumentArgs = {
  idDocument: Scalars['BUFFER']
  idReservation: Scalars['BUFFER']
}

export type MutationRemoveReservationDocumentsArgs = {
  idReservation: Scalars['BUFFER']
}

export type MutationRemoveReservationItemArgs = {
  idReservationItem: Scalars['BUFFER']
}

export type MutationRemoveReservationItemsArgs = {
  idReservation: Scalars['BUFFER']
}

export type MutationRemoveReservationPassengerArgs = {
  idPassenger: Scalars['BUFFER']
  idReservation: Scalars['BUFFER']
}

export type MutationRemoveReservationPassengersArgs = {
  idReservation: Scalars['BUFFER']
}

export type MutationUpdateAddressArgs = {
  address: UpdateAddressInput
}

export type MutationUpdateBankAccountArgs = {
  UpdateBankAccountValueInput: UpdateBankAccountValueInput
}

export type MutationUpdateContactArgs = {
  updateContactInput: UpdateContactInput
}

export type MutationUpdateDailyCashierCloseArgs = {
  UpdateDailyCashierValueInput: UpdateDailyCashierValueInput
}

export type MutationUpdateDailyCashierReOpeningArgs = {
  UpdateDailyCashierValueInput: UpdateDailyCashierValueInput
}

export type MutationUpdateDocumentSerialArgs = {
  updateDocumentSerial: UpdateDocumentSerialValueInput
}

export type MutationUpdateEntityArgs = {
  updateEntityInput: UpdateEntityInput
}

export type MutationUpdateGeneralParameterArgs = {
  updateGeneralParameterInput: UpdateGeneralParameterInput
}

export type MutationUpdateModulePermissionArgs = {
  updateModulePermissionInput: UpdateModulePermissionInput
}

export type MutationUpdateOuArgs = {
  data: UpdateOuInput
}

export type MutationUpdatePassengerArgs = {
  updatePassengerInput: UpdatePassengerInput
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

export type MutationUpdateProductIdentificationArgs = {
  updateProductIdentificationInput: UpdateProductIdentificationInput
}

export type MutationUpdateProductProductFeatureArgs = {
  updateProductProductFeatureInput: UpdateProductProductFeatureInput
}

export type MutationUpdateProductSubFeatureArgs = {
  updateProductSubFeatureInput: UpdateProductSubFeatureInput
}

export type MutationUpdateRateArgs = {
  rate: RateInput
}

export type MutationUpdateRateFeatureArgs = {
  rateFeature: RateFeatureInput
}

export type MutationUpdateRateInstanceArgs = {
  createInstanceCreateInput: RateInstanceInput
}

export type MutationUpdateRateInstancesArgs = {
  updateRateInstances: Array<RateInstanceInput>
}

export type MutationUpdateRateRateFeatureArgs = {
  updateRateRateSubFeatureItemInput: UpdateRateRateSubFeatureItemInput
}

export type MutationUpdateRateSubFeatureArgs = {
  updateRateSubFeatureInput: UpdateRateSubFeatureInput
}

export type MutationUpdateRateSubFeatureItemArgs = {
  updateRateSubFeatureItemInput: RateSubFeatureItemInput
}

export type MutationUpdateReservationArgs = {
  updateReservationInput: UpdateReservationInput
}

export type MutationUpdateReservationItemArgs = {
  updateReservationItemInput: UpdateReservationItemInput
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

export type Passenger = {
  __typename?: 'Passenger'
  birthDate: Scalars['DateTime']
  createdAt: Scalars['DateTime']
  documentNumber: Scalars['String']
  email: Scalars['String']
  flagInvoice: Scalars['String']
  idCountry: Scalars['BUFFER']
  idDocumentType: Scalars['BUFFER']
  idGender: Scalars['BUFFER']
  idOu: Scalars['BUFFER']
  idPassenger: Scalars['BUFFER']
  idPassengerType: Scalars['BUFFER']
  idStatus: Scalars['String']
  idUserCreate: Scalars['BUFFER']
  idUserUpdate: Scalars['BUFFER']
  lastName: Scalars['String']
  name: Scalars['String']
  updatedAt: Scalars['DateTime']
}

export type PaymentEntity = {
  __typename?: 'PaymentEntity'
  idDailyCashier: Scalars['Float']
}

export type PermissionsCount = {
  __typename?: 'PermissionsCount'
  idPermission: Scalars['Float']
}

export type PermissionsModuleCount = {
  __typename?: 'PermissionsModuleCount'
  idPermission: Scalars['Float']
}

export type Product = {
  __typename?: 'Product'
  barCode: Scalars['String']
  code: Scalars['String']
  createdAt: Scalars['DateTime']
  idEntitySupplier: Scalars['BUFFER']
  idOu: Scalars['BUFFER']
  idProduct: Scalars['BUFFER']
  idProductFeature0?: Maybe<Scalars['BUFFER']>
  idProductFeature1?: Maybe<Scalars['BUFFER']>
  idProductFeature2?: Maybe<Scalars['BUFFER']>
  idProductFeature3?: Maybe<Scalars['BUFFER']>
  idProductFeature4?: Maybe<Scalars['BUFFER']>
  idProductFeature5?: Maybe<Scalars['BUFFER']>
  idProductFeature6?: Maybe<Scalars['BUFFER']>
  idProductFeature7?: Maybe<Scalars['BUFFER']>
  idProductFeature8?: Maybe<Scalars['BUFFER']>
  idProductFeature9?: Maybe<Scalars['BUFFER']>
  idProductType: Scalars['BUFFER']
  idStatus: Scalars['String']
  idUserCreate: Scalars['BUFFER']
  idUserUpdate: Scalars['BUFFER']
  internationalCodeSunat: Scalars['String']
  inventoryFlag: Scalars['String']
  name: Scalars['String']
  operationalCodeSunat: Scalars['String']
  productFeature_product_idProductFeature0ToproductFeature?: Maybe<ProductFeature>
  productFeature_product_idProductFeature1ToproductFeature?: Maybe<ProductFeature>
  productFeature_product_idProductFeature2ToproductFeature?: Maybe<ProductFeature>
  productFeature_product_idProductFeature3ToproductFeature?: Maybe<ProductFeature>
  productFeature_product_idProductFeature4ToproductFeature?: Maybe<ProductFeature>
  productFeature_product_idProductFeature5ToproductFeature?: Maybe<ProductFeature>
  productFeature_product_idProductFeature6ToproductFeature?: Maybe<ProductFeature>
  productFeature_product_idProductFeature7ToproductFeature?: Maybe<ProductFeature>
  productFeature_product_idProductFeature8ToproductFeature?: Maybe<ProductFeature>
  productFeature_product_idProductFeature9ToproductFeature?: Maybe<ProductFeature>
  productType: Scalars['String']
  productTypeSunat: Scalars['String']
  shortName: Scalars['String']
  supplierName: Scalars['String']
  unitSunat: Scalars['String']
  updatedAt: Scalars['DateTime']
}

export type ProductCategory = {
  __typename?: 'ProductCategory'
  categoryType: Scalars['String']
  createdAt: Scalars['DateTime']
  idCategoryType: Scalars['BUFFER']
  idOu: Scalars['BUFFER']
  idProductCategory: Scalars['BUFFER']
  idStatus: Scalars['String']
  idUserCreate: Scalars['BUFFER']
  idUserUpdate: Scalars['BUFFER']
  name: Scalars['String']
  shortName: Scalars['String']
  updatedAt: Scalars['DateTime']
}

export type ProductCategoryOutput = {
  __typename?: 'ProductCategoryOutput'
  count: Scalars['Float']
  data: Array<ProductCategory>
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

export type ProductFeaturesOutput = {
  __typename?: 'ProductFeaturesOutput'
  categoryName: Scalars['String']
  featureTypeName: Scalars['String']
  idProductCategory: Scalars['BUFFER']
  idProductFeature: Scalars['BUFFER']
  idProductFeatureType: Scalars['BUFFER']
  name: Scalars['String']
  shortName: Scalars['String']
}

export type ProductIdentification = {
  __typename?: 'ProductIdentification'
  createdAt: Scalars['DateTime']
  idOu: Scalars['BUFFER']
  idProduct: Scalars['BUFFER']
  idProductIdentification: Scalars['BUFFER']
  idProductIdentificationType: Scalars['BUFFER']
  idStatus: Scalars['String']
  idUserCreate: Scalars['BUFFER']
  idUserUpdate: Scalars['BUFFER']
  productIdentificationType: Scalars['String']
  productName: Scalars['String']
  updatedAt: Scalars['DateTime']
  value: Scalars['String']
}

export type ProductInstance = {
  __typename?: 'ProductInstance'
  createdAt: Scalars['DateTime']
  idOu: Scalars['BUFFER']
  idProduct: Scalars['BUFFER']
  idProductInstance: Scalars['BUFFER']
  idProductSubFeatureItem1?: Maybe<Scalars['BUFFER']>
  idProductSubFeatureItem2?: Maybe<Scalars['BUFFER']>
  idProductSubFeatureItem3?: Maybe<Scalars['BUFFER']>
  idProductSubFeatureItem4?: Maybe<Scalars['BUFFER']>
  idProductSubFeatureItem5?: Maybe<Scalars['BUFFER']>
  idProductSubFeatureItem6?: Maybe<Scalars['BUFFER']>
  idProductSubFeatureItem7?: Maybe<Scalars['BUFFER']>
  idProductSubFeatureItem8?: Maybe<Scalars['BUFFER']>
  idProductSubFeatureItem9?: Maybe<Scalars['BUFFER']>
  idProductSubFeatureItem10?: Maybe<Scalars['BUFFER']>
  idStatus: Scalars['String']
  idUserCreate: Scalars['BUFFER']
  idUserUpdate: Scalars['BUFFER']
  product: Product
  productSubFeatureItem_productInstance_idProductSubFeatureItem1ToproductSubFeatureItem?: Maybe<ProductSubFeatureItem>
  productSubFeatureItem_productInstance_idProductSubFeatureItem2ToproductSubFeatureItem?: Maybe<ProductSubFeatureItem>
  productSubFeatureItem_productInstance_idProductSubFeatureItem3ToproductSubFeatureItem?: Maybe<ProductSubFeatureItem>
  productSubFeatureItem_productInstance_idProductSubFeatureItem4ToproductSubFeatureItem?: Maybe<ProductSubFeatureItem>
  productSubFeatureItem_productInstance_idProductSubFeatureItem5ToproductSubFeatureItem?: Maybe<ProductSubFeatureItem>
  productSubFeatureItem_productInstance_idProductSubFeatureItem6ToproductSubFeatureItem?: Maybe<ProductSubFeatureItem>
  productSubFeatureItem_productInstance_idProductSubFeatureItem7ToproductSubFeatureItem?: Maybe<ProductSubFeatureItem>
  productSubFeatureItem_productInstance_idProductSubFeatureItem8ToproductSubFeatureItem?: Maybe<ProductSubFeatureItem>
  productSubFeatureItem_productInstance_idProductSubFeatureItem9ToproductSubFeatureItem?: Maybe<ProductSubFeatureItem>
  productSubFeatureItem_productInstance_idProductSubFeatureItem10ToproductSubFeatureItem?: Maybe<ProductSubFeatureItem>
  updatedAt: Scalars['DateTime']
}

export type ProductProductCategoriesOutput = {
  __typename?: 'ProductProductCategoriesOutput'
  categoryName: Scalars['String']
  idProduct: Scalars['BUFFER']
  idProductCategory: Scalars['BUFFER']
  productName: Scalars['String']
}

export type ProductProductCategory = {
  __typename?: 'ProductProductCategory'
  createdAt: Scalars['DateTime']
  idOu: Scalars['BUFFER']
  idProduct: Scalars['BUFFER']
  idProductCategory: Scalars['BUFFER']
  idStatus: Scalars['String']
  idUserCreate: Scalars['BUFFER']
  idUserUpdate: Scalars['BUFFER']
  updatedAt: Scalars['DateTime']
}

export type ProductProductFeature = {
  __typename?: 'ProductProductFeature'
  createdAt: Scalars['DateTime']
  idOu: Scalars['BUFFER']
  idProduct: Scalars['BUFFER']
  idProductFeature: Scalars['BUFFER']
  idProductProductFeature: Scalars['BUFFER']
  idStatus: Scalars['String']
  idUserCreate: Scalars['BUFFER']
  idUserUpdate: Scalars['BUFFER']
  updatedAt: Scalars['DateTime']
  value: Scalars['String']
}

export type ProductProductFeaturesOutput = {
  __typename?: 'ProductProductFeaturesOutput'
  featureName: Scalars['String']
  idProduct: Scalars['BUFFER']
  idProductFeature: Scalars['BUFFER']
  idProductProductFeature: Scalars['BUFFER']
  productName: Scalars['String']
  value: Scalars['String']
}

export type ProductProductSubFeature = {
  __typename?: 'ProductProductSubFeature'
  createdAt: Scalars['DateTime']
  idOu: Scalars['BUFFER']
  idProduct: Scalars['BUFFER']
  idProductProductSubFeature: Scalars['BUFFER']
  idProductSubFeature: Scalars['BUFFER']
  idStatus: Scalars['String']
  idUserCreate: Scalars['BUFFER']
  idUserUpdate: Scalars['BUFFER']
  updatedAt: Scalars['DateTime']
}

export type ProductProductSubFeaturesOutput = {
  __typename?: 'ProductProductSubFeaturesOutput'
  idProduct: Scalars['BUFFER']
  idProductProductSubFeature: Scalars['BUFFER']
  idProductSubFeature: Scalars['BUFFER']
  productName: Scalars['String']
  productSubFeature: Scalars['String']
}

export type ProductQueryInput = {
  code?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  shortName?: InputMaybe<Scalars['String']>
  skip: Scalars['Float']
  take: Scalars['Float']
}

export type ProductQueryOutput = {
  __typename?: 'ProductQueryOutput'
  count: Scalars['Float']
  data: Array<Product>
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
  productSubFeatureType: Scalars['String']
  shortName: Scalars['String']
  updatedAt: Scalars['DateTime']
}

export type ProductSubFeatureItem = {
  __typename?: 'ProductSubFeatureItem'
  code: Scalars['String']
  createdAt: Scalars['DateTime']
  idOu: Scalars['BUFFER']
  idProductSubFeature?: Maybe<Scalars['BUFFER']>
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
  ReservationItem: ReservationItem
  dailyCashiers: Array<DailyCashier>
  findForReservations: ReservationSearchOutput
  generalParameters: GeneralParameterQueryResult
  getAccountingPeriodById: AccountingPeriod
  getAccountingPeriods: Array<AccountingPeriod>
  getAccountingPeriodsByIdOu: AccountingPeriodCountResult
  getAccountingPeriodsByTypeAndCode: Array<AccountingPeriod>
  getAccountingPeriodsByTypeAndIdOu: Array<AccountingPeriod>
  getAddress: Address
  getAddresses: Array<Address>
  getAllGeneralParameterValues: Array<GeneralParameterValue>
  getAllModulePermission: Array<ModulePermission>
  getAllOus: Array<Ou>
  getAllRolePermission: Array<RolePermission>
  getAllSessions: Array<Session>
  getAllUserModules: Array<UserModulesModule>
  getAllUserRoles: Array<UserRole>
  getAllUserTransactions: Array<UserTransaction>
  getAllUsers: Array<Users>
  getBankAccountById: BankAccount
  getBankAccounts: Array<BankAccount>
  getBankAccountsByIdOu: Array<BankAccount>
  getCashierTransactionById: CashierTransaction
  getCashierTransactionDocumentsPyments: Array<CashierTransactionDocumentItem>
  getCashierTransactions: Array<CashierTransaction>
  getCashierTransactionsByParams: Array<CashierTransaction>
  getContact: Contact
  getContacts: Array<Contact>
  getDailyCashierById: DailyCashier
  getDailyCashierOpenByIdOu: Array<DailyCashier>
  getDailyCashierOpenByIdOuAndDate: Array<DailyCashier>
  getDocumentById: DocumentEntity
  getDocuments: Array<DocumentEntity>
  getDocumentsPyments: Array<DocumentItemPayment>
  getDocumentsSerial: Array<DocumentSerial>
  getDocumentsSerialByIdOuAndSerial: DocumentSerial
  getEntities: ReponseGetEntities
  getEntitiesContact: Array<EntityContact>
  getEntity: ReponseGetEntity
  getEntityAddress: Array<EntityAddress>
  getGeneralParameterById: GeneralParameter
  getGeneralParameterValueByArgs: Array<GeneralParameterValue>
  getGeneralParameterValueByCodeArray: Array<GeneralParameterValue>
  getGeneralParameterValueById: GeneralParameterValue
  getGeneralParametersByCode: GeneralParameter
  getGeneralParametersByCodeArray: Array<GeneralParameter>
  getGeneralParametersByGeneralParameterValueId: Array<GeneralParameter>
  getModulePermissionById: ModulePermission
  getNumbersDailyCashierByDateAndIdOu: DailyCashierCount
  getOuByCode: Ou
  getOuById: Ou
  getPayments: Array<PaymentEntity>
  getRate: Rate
  getRateFeature: RateFeature
  getRateFeatures: Array<RateFeature>
  getRateInstance: RateInstance
  getRateInstancesByDateProduct: Array<RateInstance>
  getRateInstancesByDateProducts: Array<RateInstance>
  getRateInstancesByProduct: Array<RateInstance>
  getRateInstancesByProductRelatedProducts: Array<RateInstance>
  getRateInstancesByRate: Array<RateInstance>
  getRateSubFeature: RateSubFeature
  getRateSubFeatureItem: RateSubFeatureItem
  getRateSubFeatureItems: Array<RateSubFeatureItem>
  getRateSubFeatures: Array<RateSubFeature>
  getRates: Array<Rate>
  getRatesByProduct: Array<Rate>
  getRolePermissionById: RolePermission
  getSessionById: Session
  getUserByEmailAddress: Users
  getUserById: Users
  getUserModuleById: UserModulesModule
  getUserModulesByUserId: Array<UserModulesModule>
  getUserRoleById: UserRole
  getUserRolesByUserId: Array<UserRole>
  getUserTransactionById: UserTransaction
  getcashierTransactionDocumentItems: Array<DocumentItem>
  getcashierTransactionDocumentItemsByIdDocument: Array<DocumentItem>
  getcashierTransactionReservationItems: Array<CashierTransactionReservationItem>
  getcashierTransactionReservationItemsByIdReservation: Array<CashierTransactionReservationItem>
  getcashierTransactionReservationItemsByParams: Array<CashierTransactionReservationItem>
  getdocumentStatementById: Array<DocumentStatement>
  getdocumentStatements: Array<DocumentStatement>
  inventory: Inventory
  inventoryTransaction: InventoryTransaction
  inventoryTransactions: Array<InventoryTransaction>
  passenger: Passenger
  product: Product
  productCategories: ProductCategoryOutput
  productCategory: ProductCategory
  productFeature: ProductFeature
  productFeatures: Array<ProductFeaturesOutput>
  productIdentification: ProductIdentification
  productIdentifications: Array<ProductIdentification>
  productInstance: ProductInstance
  productInstances: Array<ProductInstance>
  productProductCategories: Array<ProductProductCategoriesOutput>
  productProductCategory: ProductProductCategory
  productProductFeature: ProductProductFeature
  productProductFeatures: Array<ProductProductFeaturesOutput>
  productProductSubFeatures: Array<ProductProductSubFeaturesOutput>
  productSubFeature: ProductSubFeature
  productSubFeatures: Array<ProductSubFeature>
  products: Array<Product>
  productsByFilter: ProductQueryOutput
  rateRateFeature: Rate_RateSubFeature
  rateRateFeatures: Array<Rate_RateFeature>
  rateRateSubFeatureItem: Rate_RateSubFeatureItem
  rateRateSubFeatureItems: Array<Rate_RateSubFeatureItem>
  rateRateSubFeatures: Array<Rate_RateSubFeature>
  reservation: Reservation
  reservationDocument: ReservationDocument
  reservationItemsByFilter: Array<Reservation>
  reservationPassenger: ReservationPassenger
  reservations: Array<Reservation>
  reservationsByFilter: Array<Reservation>
}

export type QueryReservationItemArgs = {
  idReservationItem: Scalars['BUFFER']
}

export type QueryFindForReservationsArgs = {
  searchInput: ReservationSearchInput
}

export type QueryGeneralParametersArgs = {
  generalParameterQueryInput: GeneralParameterQueryInput
}

export type QueryGetAccountingPeriodByIdArgs = {
  id: Scalars['BUFFER']
}

export type QueryGetAccountingPeriodsByIdOuArgs = {
  idOu: Scalars['BUFFER']
}

export type QueryGetAccountingPeriodsByTypeAndCodeArgs = {
  code: Scalars['String']
  idAccountingPeriodType: Scalars['BUFFER']
}

export type QueryGetAccountingPeriodsByTypeAndIdOuArgs = {
  idAccountingPeriodType: Scalars['BUFFER']
  idOu: Scalars['BUFFER']
}

export type QueryGetAddressArgs = {
  idAddress: GetAddressInput
}

export type QueryGetBankAccountByIdArgs = {
  id: Scalars['BUFFER']
}

export type QueryGetBankAccountsByIdOuArgs = {
  idOu: Scalars['BUFFER']
}

export type QueryGetCashierTransactionByIdArgs = {
  id: Scalars['BUFFER']
}

export type QueryGetCashierTransactionDocumentsPymentsArgs = {
  idCashierTransaction: Scalars['BUFFER']
  idEntity: Scalars['BUFFER']
  idOu: Scalars['BUFFER']
  status: Scalars['String']
}

export type QueryGetCashierTransactionsByParamsArgs = {
  amount: Scalars['Float']
  date: Scalars['String']
  note: Scalars['String']
}

export type QueryGetContactArgs = {
  getContactInput: GetContactInput
}

export type QueryGetDailyCashierByIdArgs = {
  id: Scalars['BUFFER']
}

export type QueryGetDailyCashierOpenByIdOuArgs = {
  idOu: Scalars['BUFFER']
}

export type QueryGetDailyCashierOpenByIdOuAndDateArgs = {
  date: Scalars['DateTime']
  idOu: Scalars['BUFFER']
}

export type QueryGetDocumentByIdArgs = {
  id: Scalars['BUFFER']
}

export type QueryGetDocumentsPymentsArgs = {
  date: Scalars['String']
  idDocumentTypeName: Scalars['String']
  idEntity: Scalars['BUFFER']
  idOu: Scalars['BUFFER']
  numDocumento: Scalars['String']
  status: Scalars['String']
}

export type QueryGetDocumentsSerialByIdOuAndSerialArgs = {
  idDocumentType: Scalars['BUFFER']
  idOu: Scalars['BUFFER']
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
  userInput?: InputMaybe<Scalars['String']>
}

export type QueryGetGeneralParameterValueByCodeArrayArgs = {
  codes: Array<Scalars['String']>
}

export type QueryGetGeneralParameterValueByIdArgs = {
  idGeneralParameterValue: Scalars['BUFFER']
}

export type QueryGetGeneralParametersByCodeArgs = {
  code: Scalars['String']
}

export type QueryGetGeneralParametersByCodeArrayArgs = {
  codes: Array<Scalars['String']>
}

export type QueryGetGeneralParametersByGeneralParameterValueIdArgs = {
  idGeneralParameterValue: Scalars['BUFFER']
}

export type QueryGetModulePermissionByIdArgs = {
  idModule: Scalars['BUFFER']
  idPermission: Scalars['BUFFER']
}

export type QueryGetNumbersDailyCashierByDateAndIdOuArgs = {
  date: Scalars['DateTime']
  idOu: Scalars['BUFFER']
}

export type QueryGetOuByCodeArgs = {
  code: Scalars['String']
}

export type QueryGetOuByIdArgs = {
  id: Scalars['BUFFER']
}

export type QueryGetRateArgs = {
  idRate: Scalars['BUFFER']
}

export type QueryGetRateFeatureArgs = {
  idRateFeature: Scalars['BUFFER']
}

export type QueryGetRateInstanceArgs = {
  idRateInstance: Scalars['BUFFER']
}

export type QueryGetRateInstancesByDateProductArgs = {
  endDate: Scalars['DateTime']
  idProduct: Scalars['BUFFER']
  idProductInstance: Scalars['BUFFER']
  startDate: Scalars['DateTime']
}

export type QueryGetRateInstancesByDateProductsArgs = {
  idProducts: Array<IdProductsInput>
}

export type QueryGetRateInstancesByProductArgs = {
  idProduct: Scalars['BUFFER']
  idProductInstance: Scalars['BUFFER']
  idRate: Scalars['BUFFER']
  skip: Scalars['Float']
  take: Scalars['Float']
}

export type QueryGetRateInstancesByProductRelatedProductsArgs = {
  idProduct: Scalars['BUFFER']
  idProductInstance: Scalars['BUFFER']
  idRate: Scalars['BUFFER']
  skip: Scalars['Float']
  take: Scalars['Float']
}

export type QueryGetRateInstancesByRateArgs = {
  idRate: Scalars['BUFFER']
}

export type QueryGetRateSubFeatureArgs = {
  idRateSubFeature: Scalars['BUFFER']
}

export type QueryGetRateSubFeatureItemArgs = {
  idRateSubFeature: Scalars['BUFFER']
  idRateSubFeatureItem: Scalars['BUFFER']
}

export type QueryGetRatesByProductArgs = {
  idProduct: Scalars['BUFFER']
  idProductInstance: Scalars['BUFFER']
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

export type QueryGetcashierTransactionDocumentItemsByIdDocumentArgs = {
  id: Scalars['BUFFER']
}

export type QueryGetcashierTransactionReservationItemsByIdReservationArgs = {
  id: Scalars['BUFFER']
}

export type QueryGetcashierTransactionReservationItemsByParamsArgs = {
  idCashierTransaction: Scalars['BUFFER']
}

export type QueryGetdocumentStatementByIdArgs = {
  idDocument: Scalars['BUFFER']
  idDocumentStatement: Scalars['BUFFER']
}

export type QueryInventoryArgs = {
  date: Scalars['DateTime']
  idProductInstance: Scalars['BUFFER']
}

export type QueryInventoryTransactionArgs = {
  id: Scalars['BUFFER']
}

export type QueryInventoryTransactionsArgs = {
  idProductInstance: Scalars['BUFFER']
}

export type QueryPassengerArgs = {
  id: Scalars['BUFFER']
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

export type QueryProductFeaturesArgs = {
  productCategory?: InputMaybe<Scalars['BUFFER']>
}

export type QueryProductIdentificationArgs = {
  id: Scalars['BUFFER']
}

export type QueryProductIdentificationsArgs = {
  idProduct: Scalars['BUFFER']
}

export type QueryProductInstanceArgs = {
  id: Scalars['BUFFER']
}

export type QueryProductInstancesArgs = {
  createProductInstanceInput: CreateProductInstanceInput
}

export type QueryProductProductCategoriesArgs = {
  idProduct: Scalars['BUFFER']
}

export type QueryProductProductCategoryArgs = {
  idProduct: Scalars['BUFFER']
  idProductCategory: Scalars['BUFFER']
}

export type QueryProductProductFeatureArgs = {
  idProduct: Scalars['BUFFER']
}

export type QueryProductProductFeaturesArgs = {
  id: Scalars['BUFFER']
}

export type QueryProductProductSubFeaturesArgs = {
  idProduct: Scalars['BUFFER']
}

export type QueryProductSubFeatureArgs = {
  id: Scalars['BUFFER']
}

export type QueryProductsArgs = {
  id: Scalars['BUFFER']
}

export type QueryProductsByFilterArgs = {
  productQueryInput: ProductQueryInput
}

export type QueryRateRateFeatureArgs = {
  idRateRateSubFeature: Scalars['BUFFER']
}

export type QueryRateRateFeaturesArgs = {
  id: Scalars['BUFFER']
}

export type QueryRateRateSubFeatureItemArgs = {
  idRateRateSubFeatureItem: Scalars['BUFFER']
}

export type QueryRateRateSubFeatureItemsArgs = {
  idRate: Scalars['BUFFER']
}

export type QueryRateRateSubFeaturesArgs = {
  idRate: Scalars['BUFFER']
}

export type QueryReservationArgs = {
  idReservation: Scalars['BUFFER']
}

export type QueryReservationDocumentArgs = {
  idDocument: Scalars['BUFFER']
  idReservation: Scalars['BUFFER']
}

export type QueryReservationItemsByFilterArgs = {
  reservationQueryInput: ReservationQueryInput
}

export type QueryReservationPassengerArgs = {
  idPassenger: Scalars['BUFFER']
  idReservation: Scalars['BUFFER']
}

export type QueryReservationsArgs = {
  idEntity: Scalars['BUFFER']
}

export type QueryReservationsByFilterArgs = {
  reservationQueryInput: ReservationQueryInput
}

export type Rate = {
  __typename?: 'Rate'
  code: Scalars['String']
  createdAt: Scalars['DateTime']
  description: Scalars['String']
  idOu: Scalars['BUFFER']
  idRate?: Maybe<Scalars['BUFFER']>
  idRateType: Scalars['BUFFER']
  idStatus: Scalars['String']
  idUserCreate: Scalars['BUFFER']
  idUserUpdate: Scalars['BUFFER']
  rateInstance?: Maybe<Array<RateInstance>>
  updatedAt: Scalars['DateTime']
}

export type RateFeature = {
  __typename?: 'RateFeature'
  code: Scalars['String']
  createdAt?: Maybe<Scalars['DateTime']>
  idOu: Scalars['BUFFER']
  idProductCategory: Scalars['BUFFER']
  idRateFeature?: Maybe<Scalars['BUFFER']>
  idRateFeatureType: Scalars['BUFFER']
  idUserCreate: Scalars['BUFFER']
  idUserUpdate: Scalars['BUFFER']
  name: Scalars['String']
  rateInstance_rateFeatureTorateInstance_idRateFeature1?: Maybe<Array<RateInstance>>
  rateInstance_rateFeatureTorateInstance_idRateFeature2?: Maybe<Array<RateInstance>>
  rateInstance_rateFeatureTorateInstance_idRateFeature3?: Maybe<Array<RateInstance>>
  rateInstance_rateFeatureTorateInstance_idRateFeature4?: Maybe<Array<RateInstance>>
  rateInstance_rateFeatureTorateInstance_idRateFeature5?: Maybe<Array<RateInstance>>
  rateInstance_rateFeatureTorateInstance_idRateFeature6?: Maybe<Array<RateInstance>>
  rateInstance_rateFeatureTorateInstance_idRateFeature7?: Maybe<Array<RateInstance>>
  rateInstance_rateFeatureTorateInstance_idRateFeature8?: Maybe<Array<RateInstance>>
  rateInstance_rateFeatureTorateInstance_idRateFeature9?: Maybe<Array<RateInstance>>
  rateInstance_rateFeatureTorateInstance_idRateFeature10?: Maybe<Array<RateInstance>>
  shortName: Scalars['String']
  updatedAt?: Maybe<Scalars['BUFFER']>
}

export type RateFeatureInput = {
  code: Scalars['String']
  idOu: Scalars['BUFFER']
  idProductCategory: Scalars['BUFFER']
  idRateFeature: Scalars['BUFFER']
  idRateFeatureType: Scalars['BUFFER']
  idUserCreate: Scalars['BUFFER']
  idUserUpdate: Scalars['BUFFER']
  name: Scalars['String']
  shortName: Scalars['String']
}

export type RateInput = {
  code: Scalars['String']
  description: Scalars['String']
  idOu: Scalars['BUFFER']
  idRate?: InputMaybe<Scalars['BUFFER']>
  idRateType: Scalars['BUFFER']
  idUserCreate: Scalars['BUFFER']
  idUserUpdate: Scalars['BUFFER']
}

export type RateInstance = {
  __typename?: 'RateInstance'
  createdAt: Scalars['DateTime']
  endDate: Scalars['DateTime']
  idBusiness?: Maybe<Scalars['BUFFER']>
  idChannel?: Maybe<Scalars['BUFFER']>
  idEntity?: Maybe<Scalars['BUFFER']>
  idMarket?: Maybe<Scalars['BUFFER']>
  idOu: Scalars['BUFFER']
  idProduct: Scalars['BUFFER']
  idProductInstance?: Maybe<Scalars['BUFFER']>
  idRate: Scalars['BUFFER']
  idRateFeature1?: Maybe<Scalars['BUFFER']>
  idRateFeature2?: Maybe<Scalars['BUFFER']>
  idRateFeature3?: Maybe<Scalars['BUFFER']>
  idRateFeature4?: Maybe<Scalars['BUFFER']>
  idRateFeature5?: Maybe<Scalars['BUFFER']>
  idRateFeature6?: Maybe<Scalars['BUFFER']>
  idRateFeature7?: Maybe<Scalars['BUFFER']>
  idRateFeature8?: Maybe<Scalars['BUFFER']>
  idRateFeature9?: Maybe<Scalars['BUFFER']>
  idRateFeature10?: Maybe<Scalars['BUFFER']>
  idRateInstance?: Maybe<Scalars['BUFFER']>
  idRateSubFeature1?: Maybe<Scalars['BUFFER']>
  idRateSubFeature2?: Maybe<Scalars['BUFFER']>
  idRateSubFeature3?: Maybe<Scalars['BUFFER']>
  idRateSubFeature4?: Maybe<Scalars['BUFFER']>
  idRateSubFeature5?: Maybe<Scalars['BUFFER']>
  idRateSubFeature6?: Maybe<Scalars['BUFFER']>
  idRateSubFeature7?: Maybe<Scalars['BUFFER']>
  idRateSubFeature8?: Maybe<Scalars['BUFFER']>
  idRateSubFeature9?: Maybe<Scalars['BUFFER']>
  idRateSubFeature10?: Maybe<Scalars['BUFFER']>
  idRateSubFeatureItem1?: Maybe<Scalars['BUFFER']>
  idRateSubFeatureItem2?: Maybe<Scalars['BUFFER']>
  idRateSubFeatureItem3?: Maybe<Scalars['BUFFER']>
  idRateSubFeatureItem4?: Maybe<Scalars['BUFFER']>
  idRateSubFeatureItem5?: Maybe<Scalars['BUFFER']>
  idRateSubFeatureItem6?: Maybe<Scalars['BUFFER']>
  idRateSubFeatureItem7?: Maybe<Scalars['BUFFER']>
  idRateSubFeatureItem8?: Maybe<Scalars['BUFFER']>
  idRateSubFeatureItem9?: Maybe<Scalars['BUFFER']>
  idRateSubFeatureItem10?: Maybe<Scalars['BUFFER']>
  idRelatedRateInstance?: Maybe<Scalars['BUFFER']>
  idStatus: Scalars['String']
  idUserCreate: Scalars['BUFFER']
  idUserUpdate: Scalars['BUFFER']
  profitAmount1?: Maybe<Scalars['Float']>
  profitAmount2?: Maybe<Scalars['Float']>
  profitPercentage1?: Maybe<Scalars['Float']>
  profitPercentage2?: Maybe<Scalars['Float']>
  purchasePrice1?: Maybe<Scalars['Float']>
  purchasePrice2?: Maybe<Scalars['Float']>
  rate?: Maybe<Rate>
  rateFeature_rateFeatureTorateInstance_idRateFeature1?: Maybe<RateFeature>
  rateFeature_rateFeatureTorateInstance_idRateFeature2?: Maybe<RateFeature>
  rateFeature_rateFeatureTorateInstance_idRateFeature3?: Maybe<RateFeature>
  rateFeature_rateFeatureTorateInstance_idRateFeature4?: Maybe<RateFeature>
  rateFeature_rateFeatureTorateInstance_idRateFeature5?: Maybe<RateFeature>
  rateFeature_rateFeatureTorateInstance_idRateFeature6?: Maybe<RateFeature>
  rateFeature_rateFeatureTorateInstance_idRateFeature7?: Maybe<RateFeature>
  rateFeature_rateFeatureTorateInstance_idRateFeature8?: Maybe<RateFeature>
  rateFeature_rateFeatureTorateInstance_idRateFeature9?: Maybe<RateFeature>
  rateFeature_rateFeatureTorateInstance_idRateFeature10?: Maybe<RateFeature>
  rateSubFeatureItem?: Maybe<RateSubFeatureItem>
  rateSubFeatureItem_rateInstance_idRateSubFeatureItem1_idRateSubFeature1TorateSubFeatureItem?: Maybe<RateSubFeatureItem>
  rateSubFeatureItem_rateInstance_idRateSubFeatureItem2_idRateSubFeature1TorateSubFeatureItem?: Maybe<RateSubFeatureItem>
  rateSubFeatureItem_rateInstance_idRateSubFeatureItem3_idRateSubFeature1TorateSubFeatureItem?: Maybe<RateSubFeatureItem>
  rateSubFeatureItem_rateInstance_idRateSubFeatureItem4_idRateSubFeature1TorateSubFeatureItem?: Maybe<RateSubFeatureItem>
  rateSubFeatureItem_rateInstance_idRateSubFeatureItem5_idRateSubFeature1TorateSubFeatureItem?: Maybe<RateSubFeatureItem>
  rateSubFeatureItem_rateInstance_idRateSubFeatureItem6_idRateSubFeature1TorateSubFeatureItem?: Maybe<RateSubFeatureItem>
  rateSubFeatureItem_rateInstance_idRateSubFeatureItem7_idRateSubFeature1TorateSubFeatureItem?: Maybe<RateSubFeatureItem>
  rateSubFeatureItem_rateInstance_idRateSubFeatureItem8_idRateSubFeature1TorateSubFeatureItem?: Maybe<RateSubFeatureItem>
  rateSubFeatureItem_rateInstance_idRateSubFeatureItem9_idRateSubFeature1TorateSubFeatureItem?: Maybe<RateSubFeatureItem>
  rateSubFeatureItem_rateInstance_idRateSubFeatureItem10_idRateSubFeature1TorateSubFeatureItem?: Maybe<RateSubFeatureItem>
  sellingPrice1?: Maybe<Scalars['Float']>
  sellingPrice2?: Maybe<Scalars['Float']>
  sellingValue1?: Maybe<Scalars['Float']>
  sellingValue2?: Maybe<Scalars['Float']>
  startDate: Scalars['DateTime']
  taxesAmount1?: Maybe<Scalars['Float']>
  taxesAmount2?: Maybe<Scalars['Float']>
  taxesPercentage?: Maybe<Scalars['Float']>
  updatedAt: Scalars['DateTime']
  valueRateFeature1?: Maybe<Scalars['String']>
  valueRateFeature2?: Maybe<Scalars['String']>
  valueRateFeature3?: Maybe<Scalars['String']>
  valueRateFeature4?: Maybe<Scalars['String']>
  valueRateFeature5?: Maybe<Scalars['String']>
  valueRateFeature6?: Maybe<Scalars['String']>
  valueRateFeature7?: Maybe<Scalars['String']>
  valueRateFeature8?: Maybe<Scalars['String']>
  valueRateFeature9?: Maybe<Scalars['String']>
  valueRateFeature10?: Maybe<Scalars['String']>
  valueRateSubFeatureItem1?: Maybe<Scalars['String']>
  valueRateSubFeatureItem2?: Maybe<Scalars['String']>
  valueRateSubFeatureItem3?: Maybe<Scalars['String']>
  valueRateSubFeatureItem4?: Maybe<Scalars['String']>
  valueRateSubFeatureItem5?: Maybe<Scalars['String']>
  valueRateSubFeatureItem6?: Maybe<Scalars['String']>
  valueRateSubFeatureItem7?: Maybe<Scalars['String']>
  valueRateSubFeatureItem8?: Maybe<Scalars['String']>
  valueRateSubFeatureItem9?: Maybe<Scalars['String']>
  valueRateSubFeatureItem10?: Maybe<Scalars['String']>
}

export type RateInstanceInput = {
  endDate: Scalars['DateTime']
  idBusiness?: InputMaybe<Scalars['BUFFER']>
  idChannel?: InputMaybe<Scalars['BUFFER']>
  idEntity?: InputMaybe<Scalars['BUFFER']>
  idMarket?: InputMaybe<Scalars['BUFFER']>
  idOu: Scalars['BUFFER']
  idProduct: Scalars['BUFFER']
  idProductInstance?: InputMaybe<Scalars['BUFFER']>
  idRate: Scalars['BUFFER']
  idRateFeature1?: InputMaybe<Scalars['BUFFER']>
  idRateFeature2?: InputMaybe<Scalars['BUFFER']>
  idRateFeature3?: InputMaybe<Scalars['BUFFER']>
  idRateFeature4?: InputMaybe<Scalars['BUFFER']>
  idRateFeature5?: InputMaybe<Scalars['BUFFER']>
  idRateFeature6?: InputMaybe<Scalars['BUFFER']>
  idRateFeature7?: InputMaybe<Scalars['BUFFER']>
  idRateFeature8?: InputMaybe<Scalars['BUFFER']>
  idRateFeature9?: InputMaybe<Scalars['BUFFER']>
  idRateFeature10?: InputMaybe<Scalars['BUFFER']>
  idRateInstance?: InputMaybe<Scalars['BUFFER']>
  idRateSubFeature1?: InputMaybe<Scalars['BUFFER']>
  idRateSubFeature2?: InputMaybe<Scalars['BUFFER']>
  idRateSubFeature3?: InputMaybe<Scalars['BUFFER']>
  idRateSubFeature4?: InputMaybe<Scalars['BUFFER']>
  idRateSubFeature5?: InputMaybe<Scalars['BUFFER']>
  idRateSubFeature6?: InputMaybe<Scalars['BUFFER']>
  idRateSubFeature7?: InputMaybe<Scalars['BUFFER']>
  idRateSubFeature8?: InputMaybe<Scalars['BUFFER']>
  idRateSubFeature9?: InputMaybe<Scalars['BUFFER']>
  idRateSubFeature10?: InputMaybe<Scalars['BUFFER']>
  idRateSubFeatureItem1?: InputMaybe<Scalars['BUFFER']>
  idRateSubFeatureItem2?: InputMaybe<Scalars['BUFFER']>
  idRateSubFeatureItem3?: InputMaybe<Scalars['BUFFER']>
  idRateSubFeatureItem4?: InputMaybe<Scalars['BUFFER']>
  idRateSubFeatureItem5?: InputMaybe<Scalars['BUFFER']>
  idRateSubFeatureItem6?: InputMaybe<Scalars['BUFFER']>
  idRateSubFeatureItem7?: InputMaybe<Scalars['BUFFER']>
  idRateSubFeatureItem8?: InputMaybe<Scalars['BUFFER']>
  idRateSubFeatureItem9?: InputMaybe<Scalars['BUFFER']>
  idRateSubFeatureItem10?: InputMaybe<Scalars['BUFFER']>
  idRelatedRateInstance?: InputMaybe<Scalars['BUFFER']>
  idStatus?: InputMaybe<Scalars['String']>
  idUserCreate: Scalars['BUFFER']
  idUserUpdate: Scalars['BUFFER']
  profitAmount1?: InputMaybe<Scalars['Float']>
  profitAmount2?: InputMaybe<Scalars['Float']>
  profitPercentage1?: InputMaybe<Scalars['Float']>
  profitPercentage2?: InputMaybe<Scalars['Float']>
  purchasePrice1?: InputMaybe<Scalars['Float']>
  purchasePrice2?: InputMaybe<Scalars['Float']>
  sellingPrice1?: InputMaybe<Scalars['Float']>
  sellingPrice2?: InputMaybe<Scalars['Float']>
  sellingValue1?: InputMaybe<Scalars['Float']>
  sellingValue2?: InputMaybe<Scalars['Float']>
  startDate: Scalars['DateTime']
  taxesAmount1?: InputMaybe<Scalars['Float']>
  taxesAmount2?: InputMaybe<Scalars['Float']>
  taxesPercentage?: InputMaybe<Scalars['Float']>
  valueRateFeature1?: InputMaybe<Scalars['String']>
  valueRateFeature2?: InputMaybe<Scalars['String']>
  valueRateFeature3?: InputMaybe<Scalars['String']>
  valueRateFeature4?: InputMaybe<Scalars['String']>
  valueRateFeature5?: InputMaybe<Scalars['String']>
  valueRateFeature6?: InputMaybe<Scalars['String']>
  valueRateFeature7?: InputMaybe<Scalars['String']>
  valueRateFeature8?: InputMaybe<Scalars['String']>
  valueRateFeature9?: InputMaybe<Scalars['String']>
  valueRateFeature10?: InputMaybe<Scalars['String']>
  valueRateSubFeatureItem1?: InputMaybe<Scalars['String']>
  valueRateSubFeatureItem2?: InputMaybe<Scalars['String']>
  valueRateSubFeatureItem3?: InputMaybe<Scalars['String']>
  valueRateSubFeatureItem4?: InputMaybe<Scalars['String']>
  valueRateSubFeatureItem5?: InputMaybe<Scalars['String']>
  valueRateSubFeatureItem6?: InputMaybe<Scalars['String']>
  valueRateSubFeatureItem7?: InputMaybe<Scalars['String']>
  valueRateSubFeatureItem8?: InputMaybe<Scalars['String']>
  valueRateSubFeatureItem9?: InputMaybe<Scalars['String']>
  valueRateSubFeatureItem10?: InputMaybe<Scalars['String']>
}

export type RateSubFeature = {
  __typename?: 'RateSubFeature'
  code: Scalars['String']
  createdAt?: Maybe<Scalars['DateTime']>
  idOu: Scalars['BUFFER']
  idProductCategory: Scalars['BUFFER']
  idRateSubFeature?: Maybe<Scalars['BUFFER']>
  idRateSubFeatureType: Scalars['BUFFER']
  idStatus?: Maybe<Scalars['String']>
  idUserCreate: Scalars['BUFFER']
  idUserUpdate: Scalars['BUFFER']
  name: Scalars['String']
  rateSubFeatureItem?: Maybe<Array<RateSubFeatureItem>>
  shortName: Scalars['String']
  updatedAt?: Maybe<Scalars['BUFFER']>
}

export type RateSubFeatureItem = {
  __typename?: 'RateSubFeatureItem'
  code: Scalars['String']
  idOu: Scalars['BUFFER']
  idRateSubFeature: Scalars['BUFFER']
  idRateSubFeatureItem?: Maybe<Scalars['BUFFER']>
  idRateSubFeatureItemType: Scalars['BUFFER']
  idStatus?: Maybe<Scalars['String']>
  idUserCreate?: Maybe<Scalars['BUFFER']>
  idUserUpdate?: Maybe<Scalars['BUFFER']>
  name: Scalars['String']
  rateInstance?: Maybe<Array<RateInstance>>
  rateSubFeature?: Maybe<RateSubFeature>
  shortName: Scalars['String']
}

export type RateSubFeatureItemInput = {
  code: Scalars['String']
  idOu: Scalars['BUFFER']
  idRateSubFeature: Scalars['BUFFER']
  idRateSubFeatureItem?: InputMaybe<Scalars['BUFFER']>
  idRateSubFeatureItemType: Scalars['BUFFER']
  idStatus: Scalars['String']
  idUserCreate: Scalars['BUFFER']
  idUserUpdate: Scalars['BUFFER']
  name: Scalars['String']
  shortName: Scalars['String']
}

export type Rate_RateFeature = {
  __typename?: 'Rate_RateFeature'
  createdAt: Scalars['DateTime']
  idOu: Scalars['BUFFER']
  idRate: Scalars['BUFFER']
  idRateFeacture: Scalars['BUFFER']
  idRateRateFeature: Scalars['BUFFER']
  idStatus: Scalars['String']
  idUserCreate: Scalars['BUFFER']
  idUserUpdate: Scalars['BUFFER']
  updatedAt: Scalars['DateTime']
  value: Scalars['String']
}

export type Rate_RateSubFeature = {
  __typename?: 'Rate_RateSubFeature'
  createdAt: Scalars['DateTime']
  idOu: Scalars['BUFFER']
  idRate: Scalars['BUFFER']
  idRateSubFeature: Scalars['BUFFER']
  idStatus: Scalars['String']
  idUserCreate: Scalars['BUFFER']
  idUserUpdate: Scalars['BUFFER']
  updatedAt: Scalars['DateTime']
}

export type Rate_RateSubFeatureItem = {
  __typename?: 'Rate_RateSubFeatureItem'
  createdAt: Scalars['DateTime']
  idOu: Scalars['BUFFER']
  idRate: Scalars['BUFFER']
  idRateSubFeature: Scalars['BUFFER']
  idRateSubFeatureItem: Scalars['BUFFER']
  idStatus: Scalars['String']
  idUserCreate: Scalars['BUFFER']
  idUserUpdate: Scalars['BUFFER']
  updatedAt: Scalars['DateTime']
  value: Scalars['String']
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

export type Reservation = {
  __typename?: 'Reservation'
  code: Scalars['String']
  createdAt: Scalars['DateTime']
  entryDate: Scalars['DateTime']
  file: Scalars['String']
  idContact: Scalars['BUFFER']
  idEntity: Scalars['BUFFER']
  idOu: Scalars['BUFFER']
  idReservation: Scalars['BUFFER']
  idReservationType: Scalars['BUFFER']
  idStatus: Scalars['String']
  idUserCreate: Scalars['BUFFER']
  idUserUpdate: Scalars['BUFFER']
  note: Scalars['String']
  passengersQuantity: Scalars['Float']
  reservationItem: Array<ReservationItem>
  totalPayedPEN?: Maybe<Scalars['Float']>
  totalPayedUSD?: Maybe<Scalars['Float']>
  totalPricePEN?: Maybe<Scalars['Float']>
  totalPriceUSD?: Maybe<Scalars['Float']>
  updatedAt: Scalars['DateTime']
}

export type ReservationDocument = {
  __typename?: 'ReservationDocument'
  createdAt: Scalars['DateTime']
  idDocument: Scalars['BUFFER']
  idOu: Scalars['BUFFER']
  idReservation: Scalars['BUFFER']
  idReservationItem: Scalars['BUFFER']
  idStatus: Scalars['String']
  idUserCreate: Scalars['BUFFER']
  idUserUpdate: Scalars['BUFFER']
  updatedAt: Scalars['DateTime']
}

export type ReservationItem = {
  __typename?: 'ReservationItem'
  createdAt: Scalars['DateTime']
  dateEnd: Scalars['DateTime']
  dateStart: Scalars['DateTime']
  idOu: Scalars['BUFFER']
  idProduct: Scalars['BUFFER']
  idProductInstance: Scalars['BUFFER']
  idRate: Scalars['BUFFER']
  idRateInstance: Scalars['BUFFER']
  idReservation: Scalars['BUFFER']
  idReservationItem: Scalars['BUFFER']
  idStatus: Scalars['String']
  idUserCreate: Scalars['BUFFER']
  idUserUpdate: Scalars['BUFFER']
  item: Scalars['Float']
  product: Product
  productInstance: ProductInstance
  quantity: Scalars['Float']
  rate: Rate
  totalPayedPEN: Scalars['Float']
  totalPayedUSD: Scalars['Float']
  totalPricePEN: Scalars['Float']
  totalPriceUSD: Scalars['Float']
  unitPricePEN: Scalars['Float']
  unitPriceUSD: Scalars['Float']
  updatedAt: Scalars['DateTime']
}

export type ReservationPassenger = {
  __typename?: 'ReservationPassenger'
  createdAt: Scalars['DateTime']
  idOu: Scalars['BUFFER']
  idPassenger: Scalars['BUFFER']
  idReservation: Scalars['BUFFER']
  idStatus: Scalars['String']
  idUserCreate: Scalars['BUFFER']
  idUserUpdate: Scalars['BUFFER']
  updatedAt: Scalars['DateTime']
}

export type ReservationQueryInput = {
  date?: InputMaybe<Scalars['DateTime']>
  entity?: InputMaybe<Scalars['BUFFER']>
  fileNumber?: InputMaybe<Scalars['String']>
  idReservationItem?: InputMaybe<Scalars['BUFFER']>
  reservationCode?: InputMaybe<Scalars['String']>
  reservationID?: InputMaybe<Scalars['BUFFER']>
  skip: Scalars['Float']
  take: Scalars['Float']
}

export type ReservationSearchInput = {
  end: Scalars['DateTime']
  quantity: Scalars['Float']
  query: Scalars['String']
  skip: Scalars['Float']
  start: Scalars['DateTime']
  take: Scalars['Float']
}

export type ReservationSearchOutput = {
  __typename?: 'ReservationSearchOutput'
  count: Scalars['Float']
  data: Array<Inventory>
}

export type ResponseDeleteEntity = {
  __typename?: 'ResponseDeleteEntity'
  result: Entity
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

export type RolesEntityInput = {
  idRole: Scalars['BUFFER']
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

export type UpdateAddressInput = {
  address: AddressInputUpdate
  idEntity: Scalars['BUFFER']
}

export type UpdateBankAccountValueInput = {
  idBankAccount: Scalars['BUFFER']
  idBankAccountType: Scalars['BUFFER']
  idCurrency: Scalars['BUFFER']
  idEntity: Scalars['BUFFER']
  idOu: Scalars['BUFFER']
  idUser: Scalars['BUFFER']
  interbankNumber: Scalars['String']
  number: Scalars['String']
}

export type UpdateContactInput = {
  idContact?: InputMaybe<Scalars['BUFFER']>
  idContactType?: InputMaybe<Scalars['BUFFER']>
  idEntity?: InputMaybe<Scalars['BUFFER']>
  idOu?: InputMaybe<Scalars['BUFFER']>
  idUserUpdate?: InputMaybe<Scalars['BUFFER']>
  value?: InputMaybe<Scalars['String']>
}

export type UpdateDailyCashierValueInput = {
  idDailyCashier: Scalars['BUFFER']
  idUserUpdate: Scalars['BUFFER']
  note: Scalars['String']
}

export type UpdateDocumentSerialValueInput = {
  Serial: Scalars['String']
  idDocumentSerial: Scalars['BUFFER']
  idDocumentType: Scalars['BUFFER']
  idUser: Scalars['BUFFER']
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
  idTypeEntity?: InputMaybe<Scalars['BUFFER']>
  idUserUpdate?: InputMaybe<Scalars['BUFFER']>
  idsIdentificationTypes?: InputMaybe<Array<EntityIdentificationTypeUpdateEntityInput>>
  name?: InputMaybe<Scalars['String']>
  roles?: InputMaybe<Array<RolesEntityInput>>
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

export type UpdatePassengerInput = {
  birthDate?: InputMaybe<Scalars['DateTime']>
  documentNumber?: InputMaybe<Scalars['String']>
  email?: InputMaybe<Scalars['String']>
  flagInvoice?: InputMaybe<Scalars['String']>
  idCountry?: InputMaybe<Scalars['BUFFER']>
  idDocumentType?: InputMaybe<Scalars['BUFFER']>
  idGender?: InputMaybe<Scalars['BUFFER']>
  idOu?: InputMaybe<Scalars['BUFFER']>
  idPassenger: Scalars['BUFFER']
  idPassengerType?: InputMaybe<Scalars['BUFFER']>
  idUserCreate?: InputMaybe<Scalars['BUFFER']>
  idUserUpdate: Scalars['BUFFER']
  lastName?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
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

export type UpdateProductIdentificationInput = {
  idOu?: InputMaybe<Scalars['BUFFER']>
  idProduct?: InputMaybe<Scalars['BUFFER']>
  idProductIdentification: Scalars['BUFFER']
  idProductIdentificationType?: InputMaybe<Scalars['BUFFER']>
  idUserCreate?: InputMaybe<Scalars['BUFFER']>
  idUserUpdate: Scalars['BUFFER']
  value?: InputMaybe<Scalars['String']>
}

export type UpdateProductInput = {
  barCode?: InputMaybe<Scalars['String']>
  code?: InputMaybe<Scalars['String']>
  idEntitySupplier?: InputMaybe<Scalars['BUFFER']>
  idOu?: InputMaybe<Scalars['BUFFER']>
  idProduct: Scalars['BUFFER']
  idProductFeature0?: InputMaybe<Scalars['BUFFER']>
  idProductFeature1?: InputMaybe<Scalars['BUFFER']>
  idProductFeature2?: InputMaybe<Scalars['BUFFER']>
  idProductFeature3?: InputMaybe<Scalars['BUFFER']>
  idProductFeature4?: InputMaybe<Scalars['BUFFER']>
  idProductFeature5?: InputMaybe<Scalars['BUFFER']>
  idProductFeature6?: InputMaybe<Scalars['BUFFER']>
  idProductFeature7?: InputMaybe<Scalars['BUFFER']>
  idProductFeature8?: InputMaybe<Scalars['BUFFER']>
  idProductFeature9?: InputMaybe<Scalars['BUFFER']>
  idProductParent?: InputMaybe<Scalars['BUFFER']>
  idProductType?: InputMaybe<Scalars['BUFFER']>
  idUserCreate?: InputMaybe<Scalars['BUFFER']>
  idUserUpdate: Scalars['BUFFER']
  internationalCodeSunat?: InputMaybe<Scalars['String']>
  inventoryFlag?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  operationalCodeSunat?: InputMaybe<Scalars['String']>
  productTypeSunat?: InputMaybe<Scalars['String']>
  shortName?: InputMaybe<Scalars['String']>
  unitSunat?: InputMaybe<Scalars['String']>
}

export type UpdateProductProductFeatureInput = {
  idOu?: InputMaybe<Scalars['BUFFER']>
  idProduct?: InputMaybe<Scalars['BUFFER']>
  idProductFeature?: InputMaybe<Scalars['BUFFER']>
  idProductProductFeature: Scalars['BUFFER']
  idUserCreate?: InputMaybe<Scalars['BUFFER']>
  idUserUpdate: Scalars['BUFFER']
  value?: InputMaybe<Scalars['String']>
}

export type UpdateProductSubFeatureInput = {
  code?: InputMaybe<Scalars['String']>
  idOu?: InputMaybe<Scalars['BUFFER']>
  idProductSubFeature: Scalars['BUFFER']
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
  idProductSubFeatureItem?: InputMaybe<Scalars['BUFFER']>
  idProductSubFeatureItemType?: InputMaybe<Scalars['BUFFER']>
  idUserCreate?: InputMaybe<Scalars['BUFFER']>
  name?: InputMaybe<Scalars['String']>
  shortName?: InputMaybe<Scalars['String']>
  value?: InputMaybe<Scalars['String']>
}

export type UpdateRateRateSubFeatureItemInput = {
  idOu?: InputMaybe<Scalars['BUFFER']>
  idRate?: InputMaybe<Scalars['BUFFER']>
  idRateRateSubFeatureItem: Scalars['BUFFER']
  idRateSubFeature?: InputMaybe<Scalars['BUFFER']>
  idRateSubFeatureItem?: InputMaybe<Scalars['BUFFER']>
  idUserCreate?: InputMaybe<Scalars['BUFFER']>
  idUserUpdate: Scalars['BUFFER']
  value?: InputMaybe<Scalars['String']>
}

export type UpdateRateSubFeatureInput = {
  code?: InputMaybe<Scalars['String']>
  idOu?: InputMaybe<Scalars['BUFFER']>
  idProductCategory?: InputMaybe<Scalars['BUFFER']>
  idRateSubFeature?: InputMaybe<Scalars['BUFFER']>
  idRateSubFeatureType?: InputMaybe<Scalars['BUFFER']>
  idUserCreate?: InputMaybe<Scalars['BUFFER']>
  idUserUpdate: Scalars['BUFFER']
  name?: InputMaybe<Scalars['String']>
  rateSubFeatureItem: Array<RateSubFeatureItemInput>
  shortName?: InputMaybe<Scalars['String']>
}

export type UpdateReservationInput = {
  code?: InputMaybe<Scalars['String']>
  entryDate?: InputMaybe<Scalars['DateTime']>
  file?: InputMaybe<Scalars['String']>
  idContact?: InputMaybe<Scalars['BUFFER']>
  idEntity?: InputMaybe<Scalars['BUFFER']>
  idOu?: InputMaybe<Scalars['BUFFER']>
  idReservation: Scalars['BUFFER']
  idReservationType?: InputMaybe<Scalars['BUFFER']>
  idStatus: Scalars['String']
  idUserCreate?: InputMaybe<Scalars['BUFFER']>
  idUserUpdate?: InputMaybe<Scalars['BUFFER']>
  note?: InputMaybe<Scalars['String']>
  passengersQuantity?: InputMaybe<Scalars['Float']>
  totalPayedPEN: Scalars['Float']
  totalPayedUSD: Scalars['Float']
  totalPricePEN: Scalars['Float']
  totalPriceUSD: Scalars['Float']
}

export type UpdateReservationItemInput = {
  dateEnd?: InputMaybe<Scalars['DateTime']>
  dateStart?: InputMaybe<Scalars['DateTime']>
  idOu?: InputMaybe<Scalars['BUFFER']>
  idProduct?: InputMaybe<Scalars['BUFFER']>
  idProductInstance?: InputMaybe<Scalars['BUFFER']>
  idRate?: InputMaybe<Scalars['BUFFER']>
  idRateInstance?: InputMaybe<Scalars['BUFFER']>
  idReservation?: InputMaybe<Scalars['BUFFER']>
  idReservationItem: Scalars['BUFFER']
  idStatus: Scalars['String']
  idUserCreate?: InputMaybe<Scalars['BUFFER']>
  idUserUpdate: Scalars['BUFFER']
  item?: InputMaybe<Scalars['Float']>
  quantity?: InputMaybe<Scalars['Float']>
  totalPayedPEN?: InputMaybe<Scalars['Float']>
  totalPayedUSD?: InputMaybe<Scalars['Float']>
  totalPricePEN?: InputMaybe<Scalars['Float']>
  totalPriceUSD?: InputMaybe<Scalars['Float']>
  unitPricePEN?: InputMaybe<Scalars['Float']>
  unitPriceUSD?: InputMaybe<Scalars['Float']>
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
  idUser: Scalars['BUFFER']
  idUserType: Scalars['BUFFER']
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
  idUserType: Scalars['BUFFER']
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
  idUserType: Scalars['BUFFER']
  name: Scalars['String']
  phone: Scalars['String']
  updatedAt: Scalars['DateTime']
  userName: Scalars['String']
}

export type IdProductsInput = {
  date: Scalars['DateTime']
  idProduct: Scalars['BUFFER']
  idProductInstance: Scalars['BUFFER']
}

export type ProductsByFilterQueryVariables = Exact<{
  productQueryInput: ProductQueryInput
}>

export type ProductsByFilterQuery = {
  __typename?: 'Query'
  productsByFilter: {
    __typename?: 'ProductQueryOutput'
    count: number
    data: Array<{
      __typename?: 'Product'
      idProduct: any
      idOu: any
      code: string
      barCode: string
      name: string
      shortName: string
      idProductType: any
      idEntitySupplier: any
      inventoryFlag: string
    }>
  }
}

export type GetRatesQueryVariables = Exact<{ [key: string]: never }>

export type GetRatesQuery = {
  __typename?: 'Query'
  getRates: Array<{
    __typename?: 'Rate'
    idRate?: any | null
    idOu: any
    idRateType: any
    code: string
    description: string
    idStatus: string
    idUserCreate: any
    createdAt: any
    idUserUpdate: any
    updatedAt: any
  }>
}

export type ProductInstancesQueryVariables = Exact<{
  createProductInstanceInput: CreateProductInstanceInput
}>

export type ProductInstancesQuery = {
  __typename?: 'Query'
  productInstances: Array<{
    __typename?: 'ProductInstance'
    idProductInstance: any
    idOu: any
    idProduct: any
    idStatus: string
    idUserCreate: any
    idUserUpdate: any
    productSubFeatureItem_productInstance_idProductSubFeatureItem1ToproductSubFeatureItem?: {
      __typename?: 'ProductSubFeatureItem'
      name: string
    } | null
    productSubFeatureItem_productInstance_idProductSubFeatureItem2ToproductSubFeatureItem?: {
      __typename?: 'ProductSubFeatureItem'
      name: string
    } | null
    productSubFeatureItem_productInstance_idProductSubFeatureItem3ToproductSubFeatureItem?: {
      __typename?: 'ProductSubFeatureItem'
      name: string
    } | null
    productSubFeatureItem_productInstance_idProductSubFeatureItem4ToproductSubFeatureItem?: {
      __typename?: 'ProductSubFeatureItem'
      name: string
    } | null
    productSubFeatureItem_productInstance_idProductSubFeatureItem5ToproductSubFeatureItem?: {
      __typename?: 'ProductSubFeatureItem'
      name: string
    } | null
    productSubFeatureItem_productInstance_idProductSubFeatureItem6ToproductSubFeatureItem?: {
      __typename?: 'ProductSubFeatureItem'
      name: string
    } | null
    productSubFeatureItem_productInstance_idProductSubFeatureItem7ToproductSubFeatureItem?: {
      __typename?: 'ProductSubFeatureItem'
      name: string
    } | null
    productSubFeatureItem_productInstance_idProductSubFeatureItem8ToproductSubFeatureItem?: {
      __typename?: 'ProductSubFeatureItem'
      name: string
    } | null
    productSubFeatureItem_productInstance_idProductSubFeatureItem9ToproductSubFeatureItem?: {
      __typename?: 'ProductSubFeatureItem'
      name: string
    } | null
    productSubFeatureItem_productInstance_idProductSubFeatureItem10ToproductSubFeatureItem?: {
      __typename?: 'ProductSubFeatureItem'
      name: string
    } | null
  }>
}

export type CreateRateFeatureMutationVariables = Exact<{
  rateFeature: RateFeatureInput
}>

export type CreateRateFeatureMutation = {
  __typename?: 'Mutation'
  createRateFeature: {
    __typename?: 'RateFeature'
    idRateFeature?: any | null
    idOu: any
    code: string
    name: string
    shortName: string
    idRateFeatureType: any
    idProductCategory: any
    idUserCreate: any
    idUserUpdate: any
  }
}

export type DeleteRateFeatureMutationVariables = Exact<{
  idRateFeature: Scalars['BUFFER']
}>

export type DeleteRateFeatureMutation = {
  __typename?: 'Mutation'
  deleteRateFeature: {
    __typename?: 'RateFeature'
    idRateFeature?: any | null
    idOu: any
    code: string
    name: string
    shortName: string
    idRateFeatureType: any
    idProductCategory: any
    idUserCreate: any
    idUserUpdate: any
  }
}

export type GetRateFeatureQueryVariables = Exact<{
  idRateFeature: Scalars['BUFFER']
}>

export type GetRateFeatureQuery = {
  __typename?: 'Query'
  getRateFeature: {
    __typename?: 'RateFeature'
    idRateFeature?: any | null
    idOu: any
    code: string
    name: string
    shortName: string
    idRateFeatureType: any
    idProductCategory: any
    idUserCreate: any
    idUserUpdate: any
  }
}

export type GetRateFeaturesQueryVariables = Exact<{ [key: string]: never }>

export type GetRateFeaturesQuery = {
  __typename?: 'Query'
  getRateFeatures: Array<{
    __typename?: 'RateFeature'
    idRateFeature?: any | null
    idOu: any
    code: string
    name: string
    shortName: string
    idRateFeatureType: any
    idProductCategory: any
    idUserCreate: any
    createdAt?: any | null
    idUserUpdate: any
    updatedAt?: any | null
  }>
}

export type UpdateRateFeatureMutationVariables = Exact<{
  rateFeature: RateFeatureInput
}>

export type UpdateRateFeatureMutation = {
  __typename?: 'Mutation'
  updateRateFeature: {
    __typename?: 'RateFeature'
    idRateFeature?: any | null
    idOu: any
    code: string
    name: string
    shortName: string
    idRateFeatureType: any
    idProductCategory: any
    idUserCreate: any
    idUserUpdate: any
  }
}

export type CreateRateInstanceMutationVariables = Exact<{
  createRateInstanceInput: RateInstanceInput
}>

export type CreateRateInstanceMutation = {
  __typename?: 'Mutation'
  createRateInstance: Array<{
    __typename?: 'RateInstance'
    idRateInstance?: any | null
    idOu: any
    idRate: any
    startDate: any
    endDate: any
    idProduct: any
    idProductInstance?: any | null
    idEntity?: any | null
    idChannel?: any | null
    idMarket?: any | null
    idBusiness?: any | null
    idRateFeature1?: any | null
    valueRateFeature1?: string | null
    idRateFeature2?: any | null
    valueRateFeature2?: string | null
    idRateFeature3?: any | null
    valueRateFeature3?: string | null
    idRateFeature4?: any | null
    valueRateFeature4?: string | null
    idRateFeature5?: any | null
    valueRateFeature5?: string | null
    idRateFeature6?: any | null
    valueRateFeature6?: string | null
    idRateFeature7?: any | null
    valueRateFeature7?: string | null
    idRateFeature8?: any | null
    valueRateFeature8?: string | null
    idRateFeature9?: any | null
    valueRateFeature9?: string | null
    idRateFeature10?: any | null
    valueRateFeature10?: string | null
    idStatus: string
    createdAt: any
    idUserUpdate: any
    idUserCreate: any
    updatedAt: any
  }>
}

export type DeleteRateInstanceMutationVariables = Exact<{
  idRateInstance: Scalars['BUFFER']
}>

export type DeleteRateInstanceMutation = {
  __typename?: 'Mutation'
  deleteRateInstance: {
    __typename?: 'RateInstance'
    idRateInstance?: any | null
    idOu: any
    idRate: any
    startDate: any
    endDate: any
    idProduct: any
    idProductInstance?: any | null
    idEntity?: any | null
    idChannel?: any | null
    idMarket?: any | null
    idBusiness?: any | null
  }
}

export type GetRateInstancesByRateQueryVariables = Exact<{
  idRate: Scalars['BUFFER']
}>

export type GetRateInstancesByRateQuery = {
  __typename?: 'Query'
  getRateInstancesByRate: Array<{
    __typename?: 'RateInstance'
    idRateInstance?: any | null
    idOu: any
    idRate: any
    startDate: any
    endDate: any
    idProduct: any
    idProductInstance?: any | null
    idEntity?: any | null
    idChannel?: any | null
    idMarket?: any | null
    idBusiness?: any | null
    idRateFeature1?: any | null
    valueRateFeature1?: string | null
    idRateFeature2?: any | null
    valueRateFeature2?: string | null
    idRateFeature3?: any | null
    valueRateFeature3?: string | null
    idRateFeature4?: any | null
    valueRateFeature4?: string | null
    idRateFeature5?: any | null
    valueRateFeature5?: string | null
    idRateFeature6?: any | null
    valueRateFeature6?: string | null
    idRateFeature7?: any | null
    valueRateFeature7?: string | null
    idRateFeature8?: any | null
    valueRateFeature8?: string | null
    idRateFeature9?: any | null
    valueRateFeature9?: string | null
    idRateFeature10?: any | null
    valueRateFeature10?: string | null
    idRateSubFeature1?: any | null
    idRateSubFeatureItem1?: any | null
    valueRateSubFeatureItem1?: string | null
    idRateSubFeature2?: any | null
    idRateSubFeatureItem2?: any | null
    valueRateSubFeatureItem2?: string | null
    idRateSubFeature3?: any | null
    idRateSubFeatureItem3?: any | null
    valueRateSubFeatureItem3?: string | null
    idRateSubFeature4?: any | null
    idRateSubFeatureItem4?: any | null
    valueRateSubFeatureItem4?: string | null
    idRateSubFeature5?: any | null
    idRateSubFeatureItem5?: any | null
    valueRateSubFeatureItem5?: string | null
    idRateSubFeature6?: any | null
    idRateSubFeatureItem6?: any | null
    valueRateSubFeatureItem6?: string | null
    idRateSubFeature7?: any | null
    idRateSubFeatureItem7?: any | null
    valueRateSubFeatureItem7?: string | null
    idRateSubFeature8?: any | null
    idRateSubFeatureItem8?: any | null
    valueRateSubFeatureItem8?: string | null
    idRateSubFeature9?: any | null
    idRateSubFeatureItem9?: any | null
    valueRateSubFeatureItem9?: string | null
    idRateSubFeature10?: any | null
    idRateSubFeatureItem10?: any | null
    valueRateSubFeatureItem10?: string | null
    taxesPercentage?: number | null
    purchasePrice1?: number | null
    profitPercentage1?: number | null
    profitAmount1?: number | null
    sellingValue1?: number | null
    taxesAmount1?: number | null
    sellingPrice1?: number | null
    purchasePrice2?: number | null
    profitPercentage2?: number | null
    profitAmount2?: number | null
    sellingValue2?: number | null
    taxesAmount2?: number | null
    sellingPrice2?: number | null
    idRelatedRateInstance?: any | null
    idStatus: string
    idUserCreate: any
    createdAt: any
    idUserUpdate: any
    updatedAt: any
  }>
}

export type UpdateRateInstanceMutationVariables = Exact<{
  createInstanceCreateInput: RateInstanceInput
}>

export type UpdateRateInstanceMutation = {
  __typename?: 'Mutation'
  updateRateInstance: {
    __typename?: 'RateInstance'
    idRateInstance?: any | null
    idOu: any
    idRate: any
    startDate: any
    endDate: any
    idProduct: any
    idProductInstance?: any | null
    idEntity?: any | null
    idChannel?: any | null
    idMarket?: any | null
    idBusiness?: any | null
    idRateFeature1?: any | null
    valueRateFeature1?: string | null
    idRateFeature2?: any | null
    valueRateFeature2?: string | null
    idRateFeature3?: any | null
    valueRateFeature3?: string | null
    idRateFeature4?: any | null
    valueRateFeature4?: string | null
    idRateFeature5?: any | null
    valueRateFeature5?: string | null
    idRateFeature6?: any | null
    valueRateFeature6?: string | null
    idRateFeature7?: any | null
    valueRateFeature7?: string | null
    idRateFeature8?: any | null
    valueRateFeature8?: string | null
    idRateFeature9?: any | null
    valueRateFeature9?: string | null
    idRateFeature10?: any | null
    valueRateFeature10?: string | null
    idRateSubFeature1?: any | null
    idRateSubFeatureItem1?: any | null
    valueRateSubFeatureItem1?: string | null
    idRateSubFeature2?: any | null
    idRateSubFeatureItem2?: any | null
    valueRateSubFeatureItem2?: string | null
    idRateSubFeature3?: any | null
    idRateSubFeatureItem3?: any | null
    valueRateSubFeatureItem3?: string | null
    idRateSubFeature4?: any | null
    idRateSubFeatureItem4?: any | null
    valueRateSubFeatureItem4?: string | null
    idRateSubFeature5?: any | null
    idRateSubFeatureItem5?: any | null
    valueRateSubFeatureItem5?: string | null
    idRateSubFeature6?: any | null
    idRateSubFeatureItem6?: any | null
    valueRateSubFeatureItem6?: string | null
    idRateSubFeature7?: any | null
    idRateSubFeatureItem7?: any | null
    valueRateSubFeatureItem7?: string | null
    idRateSubFeature8?: any | null
    idRateSubFeatureItem8?: any | null
    valueRateSubFeatureItem8?: string | null
    idRateSubFeature9?: any | null
    idRateSubFeatureItem9?: any | null
    valueRateSubFeatureItem9?: string | null
    idRateSubFeature10?: any | null
    idRateSubFeatureItem10?: any | null
    valueRateSubFeatureItem10?: string | null
    purchasePrice1?: number | null
    profitPercentage1?: number | null
    profitAmount1?: number | null
    sellingValue1?: number | null
    taxesAmount1?: number | null
    sellingPrice1?: number | null
    purchasePrice2?: number | null
    profitPercentage2?: number | null
    profitAmount2?: number | null
    sellingValue2?: number | null
    taxesAmount2?: number | null
    sellingPrice2?: number | null
    idStatus: string
    idUserCreate: any
    createdAt: any
    idUserUpdate: any
    updatedAt: any
  }
}

export type GetRateSubFeatureItemsQueryVariables = Exact<{ [key: string]: never }>

export type GetRateSubFeatureItemsQuery = {
  __typename?: 'Query'
  getRateSubFeatureItems: Array<{
    __typename?: 'RateSubFeatureItem'
    idRateSubFeatureItem?: any | null
    idOu: any
    idRateSubFeature: any
    code: string
    name: string
    shortName: string
    idRateSubFeatureItemType: any
    idStatus?: string | null
    idUserCreate?: any | null
    idUserUpdate?: any | null
  }>
}

export type CreateRateSubFeatureMutationVariables = Exact<{
  createRateSubFeatureInput: CreateRateSubFeatureInput
}>

export type CreateRateSubFeatureMutation = {
  __typename?: 'Mutation'
  createRateSubFeature: {
    __typename?: 'RateSubFeature'
    idRateSubFeature?: any | null
    idOu: any
    code: string
    name: string
    shortName: string
    idRateSubFeatureType: any
    idProductCategory: any
    idStatus?: string | null
    idUserCreate: any
    createdAt?: any | null
    idUserUpdate: any
    updatedAt?: any | null
  }
}

export type DeleteRateSubFeatureMutationVariables = Exact<{
  idRateSubFeature: Scalars['BUFFER']
}>

export type DeleteRateSubFeatureMutation = {
  __typename?: 'Mutation'
  deleteRateSubFeature: {
    __typename?: 'RateSubFeature'
    idRateSubFeature?: any | null
    idOu: any
    code: string
    name: string
    shortName: string
    idRateSubFeatureType: any
    idProductCategory: any
    idStatus?: string | null
    idUserCreate: any
    createdAt?: any | null
    idUserUpdate: any
    updatedAt?: any | null
  }
}

export type GetRateSubFeatureQueryVariables = Exact<{
  idRateSubFeature: Scalars['BUFFER']
}>

export type GetRateSubFeatureQuery = {
  __typename?: 'Query'
  getRateSubFeature: {
    __typename?: 'RateSubFeature'
    idRateSubFeature?: any | null
    idOu: any
    code: string
    name: string
    shortName: string
    idRateSubFeatureType: any
    idProductCategory: any
    idStatus?: string | null
    idUserCreate: any
    createdAt?: any | null
    idUserUpdate: any
    updatedAt?: any | null
    rateSubFeatureItem?: Array<{
      __typename?: 'RateSubFeatureItem'
      idRateSubFeatureItem?: any | null
      idOu: any
      idRateSubFeature: any
      code: string
      name: string
      shortName: string
      idRateSubFeatureItemType: any
      idStatus?: string | null
      idUserCreate?: any | null
      idUserUpdate?: any | null
    }> | null
  }
}

export type GetRateSubFeaturesQueryVariables = Exact<{ [key: string]: never }>

export type GetRateSubFeaturesQuery = {
  __typename?: 'Query'
  getRateSubFeatures: Array<{
    __typename?: 'RateSubFeature'
    idRateSubFeature?: any | null
    idOu: any
    code: string
    name: string
    shortName: string
    idRateSubFeatureType: any
    idProductCategory: any
    idStatus?: string | null
    idUserCreate: any
    createdAt?: any | null
    idUserUpdate: any
    updatedAt?: any | null
  }>
}

export type UpdateRateSubFeatureMutationVariables = Exact<{
  updateRateSubFeatureInput: UpdateRateSubFeatureInput
}>

export type UpdateRateSubFeatureMutation = {
  __typename?: 'Mutation'
  updateRateSubFeature: {
    __typename?: 'RateSubFeature'
    idRateSubFeature?: any | null
    idOu: any
    code: string
    name: string
    shortName: string
    idRateSubFeatureType: any
    idProductCategory: any
    idStatus?: string | null
    idUserCreate: any
    createdAt?: any | null
    idUserUpdate: any
    updatedAt?: any | null
    rateSubFeatureItem?: Array<{
      __typename?: 'RateSubFeatureItem'
      idRateSubFeatureItem?: any | null
      idOu: any
      idRateSubFeature: any
      code: string
      name: string
      shortName: string
      idRateSubFeatureItemType: any
      idStatus?: string | null
      idUserCreate?: any | null
      idUserUpdate?: any | null
    }> | null
  }
}

export type CreateRateMutationVariables = Exact<{
  rate: RateInput
}>

export type CreateRateMutation = {
  __typename?: 'Mutation'
  createRate: {
    __typename?: 'Rate'
    idRate?: any | null
    idOu: any
    idRateType: any
    code: string
    description: string
    idStatus: string
    idUserCreate: any
    createdAt: any
    idUserUpdate: any
    updatedAt: any
  }
}

export type DeleteRateMutationVariables = Exact<{
  idRate: Scalars['BUFFER']
}>

export type DeleteRateMutation = {
  __typename?: 'Mutation'
  deleteRate: {
    __typename?: 'Rate'
    idRate?: any | null
    idOu: any
    idRateType: any
    code: string
    description: string
    idStatus: string
    idUserCreate: any
    createdAt: any
    idUserUpdate: any
    updatedAt: any
  }
}

export type GetRatesByProductQueryVariables = Exact<{
  idProduct: Scalars['BUFFER']
  idProductInstance: Scalars['BUFFER']
}>

export type GetRatesByProductQuery = {
  __typename?: 'Query'
  getRatesByProduct: Array<{
    __typename?: 'Rate'
    idRate?: any | null
    idOu: any
    idRateType: any
    code: string
    description: string
    idStatus: string
    idUserCreate: any
    createdAt: any
    idUserUpdate: any
    updatedAt: any
  }>
}

export type GetRateInstancesByProductQueryVariables = Exact<{
  take: Scalars['Float']
  skip: Scalars['Float']
  idProductInstance: Scalars['BUFFER']
  idProduct: Scalars['BUFFER']
  idRate: Scalars['BUFFER']
}>

export type GetRateInstancesByProductQuery = {
  __typename?: 'Query'
  getRateInstancesByProduct: Array<{
    __typename?: 'RateInstance'
    idRateInstance?: any | null
    idOu: any
    idRate: any
    startDate: any
    endDate: any
    idProduct: any
    idProductInstance?: any | null
    idEntity?: any | null
    idChannel?: any | null
    idMarket?: any | null
    idBusiness?: any | null
    idRateFeature1?: any | null
    valueRateFeature1?: string | null
    idRateFeature2?: any | null
    valueRateFeature2?: string | null
    idRateFeature3?: any | null
    valueRateFeature3?: string | null
    idRateFeature4?: any | null
    valueRateFeature4?: string | null
    idRateFeature5?: any | null
    valueRateFeature5?: string | null
    idRateFeature6?: any | null
    valueRateFeature6?: string | null
    idRateFeature7?: any | null
    valueRateFeature7?: string | null
    idRateFeature8?: any | null
    valueRateFeature8?: string | null
    idRateFeature9?: any | null
    valueRateFeature9?: string | null
    idRateFeature10?: any | null
    valueRateFeature10?: string | null
    idRateSubFeature1?: any | null
    idRateSubFeatureItem1?: any | null
    valueRateSubFeatureItem1?: string | null
    idRateSubFeature2?: any | null
    idRateSubFeatureItem2?: any | null
    valueRateSubFeatureItem2?: string | null
    idRateSubFeature3?: any | null
    idRateSubFeatureItem3?: any | null
    valueRateSubFeatureItem3?: string | null
    idRateSubFeature4?: any | null
    idRateSubFeatureItem4?: any | null
    valueRateSubFeatureItem4?: string | null
    idRateSubFeature5?: any | null
    idRateSubFeatureItem5?: any | null
    valueRateSubFeatureItem5?: string | null
    idRateSubFeature6?: any | null
    idRateSubFeatureItem6?: any | null
    valueRateSubFeatureItem6?: string | null
    idRateSubFeature7?: any | null
    idRateSubFeatureItem7?: any | null
    valueRateSubFeatureItem7?: string | null
    idRateSubFeature8?: any | null
    idRateSubFeatureItem8?: any | null
    valueRateSubFeatureItem8?: string | null
    idRateSubFeature9?: any | null
    idRateSubFeatureItem9?: any | null
    valueRateSubFeatureItem9?: string | null
    idRateSubFeature10?: any | null
    idRateSubFeatureItem10?: any | null
    valueRateSubFeatureItem10?: string | null
    taxesPercentage?: number | null
    purchasePrice1?: number | null
    profitPercentage1?: number | null
    profitAmount1?: number | null
    sellingValue1?: number | null
    taxesAmount1?: number | null
    sellingPrice1?: number | null
    purchasePrice2?: number | null
    profitPercentage2?: number | null
    profitAmount2?: number | null
    sellingValue2?: number | null
    taxesAmount2?: number | null
    sellingPrice2?: number | null
    idRelatedRateInstance?: any | null
    idStatus: string
    idUserCreate: any
    createdAt: any
    idUserUpdate: any
    updatedAt: any
    rate?: {
      __typename?: 'Rate'
      idRate?: any | null
      idRateType: any
      code: string
      description: string
    } | null
  }>
}

export type UpdateRateMutationVariables = Exact<{
  rate: RateInput
}>

export type UpdateRateMutation = {
  __typename?: 'Mutation'
  updateRate: {
    __typename?: 'Rate'
    idRate?: any | null
    idOu: any
    idRateType: any
    code: string
    description: string
    idStatus: string
    idUserCreate: any
    createdAt: any
    idUserUpdate: any
    updatedAt: any
  }
}

export const ProductsByFilterDocument = gql`
  query productsByFilter($productQueryInput: ProductQueryInput!) {
    productsByFilter(productQueryInput: $productQueryInput) {
      data {
        idProduct
        idOu
        code
        barCode
        name
        shortName
        idProductType
        idEntitySupplier
        inventoryFlag
      }
      count
    }
  }
`

/**
 * __useProductsByFilterQuery__
 *
 * To run a query within a React component, call `useProductsByFilterQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsByFilterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsByFilterQuery({
 *   variables: {
 *      productQueryInput: // value for 'productQueryInput'
 *   },
 * });
 */
export function useProductsByFilterQuery(
  baseOptions: Apollo.QueryHookOptions<ProductsByFilterQuery, ProductsByFilterQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ProductsByFilterQuery, ProductsByFilterQueryVariables>(
    ProductsByFilterDocument,
    options
  )
}
export function useProductsByFilterLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ProductsByFilterQuery, ProductsByFilterQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<ProductsByFilterQuery, ProductsByFilterQueryVariables>(
    ProductsByFilterDocument,
    options
  )
}
export type ProductsByFilterQueryHookResult = ReturnType<typeof useProductsByFilterQuery>
export type ProductsByFilterLazyQueryHookResult = ReturnType<typeof useProductsByFilterLazyQuery>
export type ProductsByFilterQueryResult = Apollo.QueryResult<
  ProductsByFilterQuery,
  ProductsByFilterQueryVariables
>
export const GetRatesDocument = gql`
  query getRates {
    getRates {
      idRate
      idOu
      idRateType
      code
      description
      idStatus
      idUserCreate
      createdAt
      idUserUpdate
      updatedAt
    }
  }
`

/**
 * __useGetRatesQuery__
 *
 * To run a query within a React component, call `useGetRatesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRatesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRatesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetRatesQuery(
  baseOptions?: Apollo.QueryHookOptions<GetRatesQuery, GetRatesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetRatesQuery, GetRatesQueryVariables>(GetRatesDocument, options)
}
export function useGetRatesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetRatesQuery, GetRatesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetRatesQuery, GetRatesQueryVariables>(GetRatesDocument, options)
}
export type GetRatesQueryHookResult = ReturnType<typeof useGetRatesQuery>
export type GetRatesLazyQueryHookResult = ReturnType<typeof useGetRatesLazyQuery>
export type GetRatesQueryResult = Apollo.QueryResult<GetRatesQuery, GetRatesQueryVariables>
export const ProductInstancesDocument = gql`
  query productInstances($createProductInstanceInput: CreateProductInstanceInput!) {
    productInstances(createProductInstanceInput: $createProductInstanceInput) {
      idProductInstance
      idOu
      idProduct
      idStatus
      idUserCreate
      idUserUpdate
      productSubFeatureItem_productInstance_idProductSubFeatureItem1ToproductSubFeatureItem {
        name
      }
      productSubFeatureItem_productInstance_idProductSubFeatureItem2ToproductSubFeatureItem {
        name
      }
      productSubFeatureItem_productInstance_idProductSubFeatureItem3ToproductSubFeatureItem {
        name
      }
      productSubFeatureItem_productInstance_idProductSubFeatureItem4ToproductSubFeatureItem {
        name
      }
      productSubFeatureItem_productInstance_idProductSubFeatureItem5ToproductSubFeatureItem {
        name
      }
      productSubFeatureItem_productInstance_idProductSubFeatureItem6ToproductSubFeatureItem {
        name
      }
      productSubFeatureItem_productInstance_idProductSubFeatureItem7ToproductSubFeatureItem {
        name
      }
      productSubFeatureItem_productInstance_idProductSubFeatureItem8ToproductSubFeatureItem {
        name
      }
      productSubFeatureItem_productInstance_idProductSubFeatureItem9ToproductSubFeatureItem {
        name
      }
      productSubFeatureItem_productInstance_idProductSubFeatureItem10ToproductSubFeatureItem {
        name
      }
    }
  }
`

/**
 * __useProductInstancesQuery__
 *
 * To run a query within a React component, call `useProductInstancesQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductInstancesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductInstancesQuery({
 *   variables: {
 *      createProductInstanceInput: // value for 'createProductInstanceInput'
 *   },
 * });
 */
export function useProductInstancesQuery(
  baseOptions: Apollo.QueryHookOptions<ProductInstancesQuery, ProductInstancesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ProductInstancesQuery, ProductInstancesQueryVariables>(
    ProductInstancesDocument,
    options
  )
}
export function useProductInstancesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ProductInstancesQuery, ProductInstancesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<ProductInstancesQuery, ProductInstancesQueryVariables>(
    ProductInstancesDocument,
    options
  )
}
export type ProductInstancesQueryHookResult = ReturnType<typeof useProductInstancesQuery>
export type ProductInstancesLazyQueryHookResult = ReturnType<typeof useProductInstancesLazyQuery>
export type ProductInstancesQueryResult = Apollo.QueryResult<
  ProductInstancesQuery,
  ProductInstancesQueryVariables
>
export const CreateRateFeatureDocument = gql`
  mutation createRateFeature($rateFeature: RateFeatureInput!) {
    createRateFeature(rateFeature: $rateFeature) {
      idRateFeature
      idOu
      code
      name
      shortName
      idRateFeatureType
      idProductCategory
      idUserCreate
      idUserUpdate
    }
  }
`
export type CreateRateFeatureMutationFn = Apollo.MutationFunction<
  CreateRateFeatureMutation,
  CreateRateFeatureMutationVariables
>

/**
 * __useCreateRateFeatureMutation__
 *
 * To run a mutation, you first call `useCreateRateFeatureMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRateFeatureMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRateFeatureMutation, { data, loading, error }] = useCreateRateFeatureMutation({
 *   variables: {
 *      rateFeature: // value for 'rateFeature'
 *   },
 * });
 */
export function useCreateRateFeatureMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateRateFeatureMutation,
    CreateRateFeatureMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateRateFeatureMutation, CreateRateFeatureMutationVariables>(
    CreateRateFeatureDocument,
    options
  )
}
export type CreateRateFeatureMutationHookResult = ReturnType<typeof useCreateRateFeatureMutation>
export type CreateRateFeatureMutationResult = Apollo.MutationResult<CreateRateFeatureMutation>
export type CreateRateFeatureMutationOptions = Apollo.BaseMutationOptions<
  CreateRateFeatureMutation,
  CreateRateFeatureMutationVariables
>
export const DeleteRateFeatureDocument = gql`
  mutation deleteRateFeature($idRateFeature: BUFFER!) {
    deleteRateFeature(idRateFeature: $idRateFeature) {
      idRateFeature
      idOu
      code
      name
      shortName
      idRateFeatureType
      idProductCategory
      idUserCreate
      idUserUpdate
    }
  }
`
export type DeleteRateFeatureMutationFn = Apollo.MutationFunction<
  DeleteRateFeatureMutation,
  DeleteRateFeatureMutationVariables
>

/**
 * __useDeleteRateFeatureMutation__
 *
 * To run a mutation, you first call `useDeleteRateFeatureMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteRateFeatureMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteRateFeatureMutation, { data, loading, error }] = useDeleteRateFeatureMutation({
 *   variables: {
 *      idRateFeature: // value for 'idRateFeature'
 *   },
 * });
 */
export function useDeleteRateFeatureMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteRateFeatureMutation,
    DeleteRateFeatureMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<DeleteRateFeatureMutation, DeleteRateFeatureMutationVariables>(
    DeleteRateFeatureDocument,
    options
  )
}
export type DeleteRateFeatureMutationHookResult = ReturnType<typeof useDeleteRateFeatureMutation>
export type DeleteRateFeatureMutationResult = Apollo.MutationResult<DeleteRateFeatureMutation>
export type DeleteRateFeatureMutationOptions = Apollo.BaseMutationOptions<
  DeleteRateFeatureMutation,
  DeleteRateFeatureMutationVariables
>
export const GetRateFeatureDocument = gql`
  query getRateFeature($idRateFeature: BUFFER!) {
    getRateFeature(idRateFeature: $idRateFeature) {
      idRateFeature
      idOu
      code
      name
      shortName
      idRateFeatureType
      idProductCategory
      idUserCreate
      idUserUpdate
    }
  }
`

/**
 * __useGetRateFeatureQuery__
 *
 * To run a query within a React component, call `useGetRateFeatureQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRateFeatureQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRateFeatureQuery({
 *   variables: {
 *      idRateFeature: // value for 'idRateFeature'
 *   },
 * });
 */
export function useGetRateFeatureQuery(
  baseOptions: Apollo.QueryHookOptions<GetRateFeatureQuery, GetRateFeatureQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetRateFeatureQuery, GetRateFeatureQueryVariables>(
    GetRateFeatureDocument,
    options
  )
}
export function useGetRateFeatureLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetRateFeatureQuery, GetRateFeatureQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetRateFeatureQuery, GetRateFeatureQueryVariables>(
    GetRateFeatureDocument,
    options
  )
}
export type GetRateFeatureQueryHookResult = ReturnType<typeof useGetRateFeatureQuery>
export type GetRateFeatureLazyQueryHookResult = ReturnType<typeof useGetRateFeatureLazyQuery>
export type GetRateFeatureQueryResult = Apollo.QueryResult<
  GetRateFeatureQuery,
  GetRateFeatureQueryVariables
>
export const GetRateFeaturesDocument = gql`
  query GetRateFeatures {
    getRateFeatures {
      idRateFeature
      idOu
      code
      name
      shortName
      idRateFeatureType
      idProductCategory
      idUserCreate
      createdAt
      idUserUpdate
      updatedAt
    }
  }
`

/**
 * __useGetRateFeaturesQuery__
 *
 * To run a query within a React component, call `useGetRateFeaturesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRateFeaturesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRateFeaturesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetRateFeaturesQuery(
  baseOptions?: Apollo.QueryHookOptions<GetRateFeaturesQuery, GetRateFeaturesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetRateFeaturesQuery, GetRateFeaturesQueryVariables>(
    GetRateFeaturesDocument,
    options
  )
}
export function useGetRateFeaturesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetRateFeaturesQuery, GetRateFeaturesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetRateFeaturesQuery, GetRateFeaturesQueryVariables>(
    GetRateFeaturesDocument,
    options
  )
}
export type GetRateFeaturesQueryHookResult = ReturnType<typeof useGetRateFeaturesQuery>
export type GetRateFeaturesLazyQueryHookResult = ReturnType<typeof useGetRateFeaturesLazyQuery>
export type GetRateFeaturesQueryResult = Apollo.QueryResult<
  GetRateFeaturesQuery,
  GetRateFeaturesQueryVariables
>
export const UpdateRateFeatureDocument = gql`
  mutation updateRateFeature($rateFeature: RateFeatureInput!) {
    updateRateFeature(rateFeature: $rateFeature) {
      idRateFeature
      idOu
      code
      name
      shortName
      idRateFeatureType
      idProductCategory
      idUserCreate
      idUserUpdate
    }
  }
`
export type UpdateRateFeatureMutationFn = Apollo.MutationFunction<
  UpdateRateFeatureMutation,
  UpdateRateFeatureMutationVariables
>

/**
 * __useUpdateRateFeatureMutation__
 *
 * To run a mutation, you first call `useUpdateRateFeatureMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateRateFeatureMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateRateFeatureMutation, { data, loading, error }] = useUpdateRateFeatureMutation({
 *   variables: {
 *      rateFeature: // value for 'rateFeature'
 *   },
 * });
 */
export function useUpdateRateFeatureMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateRateFeatureMutation,
    UpdateRateFeatureMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<UpdateRateFeatureMutation, UpdateRateFeatureMutationVariables>(
    UpdateRateFeatureDocument,
    options
  )
}
export type UpdateRateFeatureMutationHookResult = ReturnType<typeof useUpdateRateFeatureMutation>
export type UpdateRateFeatureMutationResult = Apollo.MutationResult<UpdateRateFeatureMutation>
export type UpdateRateFeatureMutationOptions = Apollo.BaseMutationOptions<
  UpdateRateFeatureMutation,
  UpdateRateFeatureMutationVariables
>
export const CreateRateInstanceDocument = gql`
  mutation createRateInstance($createRateInstanceInput: RateInstanceInput!) {
    createRateInstance(createRateInstanceInput: $createRateInstanceInput) {
      idRateInstance
      idOu
      idRate
      startDate
      endDate
      idProduct
      idProductInstance
      idEntity
      idChannel
      idMarket
      idBusiness
      idRateFeature1
      valueRateFeature1
      idRateFeature2
      valueRateFeature2
      idRateFeature3
      valueRateFeature3
      idRateFeature4
      valueRateFeature4
      idRateFeature5
      valueRateFeature5
      idRateFeature6
      valueRateFeature6
      idRateFeature7
      valueRateFeature7
      idRateFeature8
      valueRateFeature8
      idRateFeature9
      valueRateFeature9
      idRateFeature10
      valueRateFeature10
      idStatus
      createdAt
      idUserUpdate
      idUserCreate
      updatedAt
    }
  }
`
export type CreateRateInstanceMutationFn = Apollo.MutationFunction<
  CreateRateInstanceMutation,
  CreateRateInstanceMutationVariables
>

/**
 * __useCreateRateInstanceMutation__
 *
 * To run a mutation, you first call `useCreateRateInstanceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRateInstanceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRateInstanceMutation, { data, loading, error }] = useCreateRateInstanceMutation({
 *   variables: {
 *      createRateInstanceInput: // value for 'createRateInstanceInput'
 *   },
 * });
 */
export function useCreateRateInstanceMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateRateInstanceMutation,
    CreateRateInstanceMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateRateInstanceMutation, CreateRateInstanceMutationVariables>(
    CreateRateInstanceDocument,
    options
  )
}
export type CreateRateInstanceMutationHookResult = ReturnType<typeof useCreateRateInstanceMutation>
export type CreateRateInstanceMutationResult = Apollo.MutationResult<CreateRateInstanceMutation>
export type CreateRateInstanceMutationOptions = Apollo.BaseMutationOptions<
  CreateRateInstanceMutation,
  CreateRateInstanceMutationVariables
>
export const DeleteRateInstanceDocument = gql`
  mutation deleteRateInstance($idRateInstance: BUFFER!) {
    deleteRateInstance(idRateInstance: $idRateInstance) {
      idRateInstance
      idOu
      idRate
      startDate
      endDate
      idProduct
      idProductInstance
      idEntity
      idChannel
      idMarket
      idBusiness
    }
  }
`
export type DeleteRateInstanceMutationFn = Apollo.MutationFunction<
  DeleteRateInstanceMutation,
  DeleteRateInstanceMutationVariables
>

/**
 * __useDeleteRateInstanceMutation__
 *
 * To run a mutation, you first call `useDeleteRateInstanceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteRateInstanceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteRateInstanceMutation, { data, loading, error }] = useDeleteRateInstanceMutation({
 *   variables: {
 *      idRateInstance: // value for 'idRateInstance'
 *   },
 * });
 */
export function useDeleteRateInstanceMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteRateInstanceMutation,
    DeleteRateInstanceMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<DeleteRateInstanceMutation, DeleteRateInstanceMutationVariables>(
    DeleteRateInstanceDocument,
    options
  )
}
export type DeleteRateInstanceMutationHookResult = ReturnType<typeof useDeleteRateInstanceMutation>
export type DeleteRateInstanceMutationResult = Apollo.MutationResult<DeleteRateInstanceMutation>
export type DeleteRateInstanceMutationOptions = Apollo.BaseMutationOptions<
  DeleteRateInstanceMutation,
  DeleteRateInstanceMutationVariables
>
export const GetRateInstancesByRateDocument = gql`
  query getRateInstancesByRate($idRate: BUFFER!) {
    getRateInstancesByRate(idRate: $idRate) {
      idRateInstance
      idOu
      idRate
      startDate
      endDate
      idProduct
      idProductInstance
      idEntity
      idChannel
      idMarket
      idBusiness
      idRateFeature1
      valueRateFeature1
      idRateFeature2
      valueRateFeature2
      idRateFeature3
      valueRateFeature3
      idRateFeature4
      valueRateFeature4
      idRateFeature5
      valueRateFeature5
      idRateFeature6
      valueRateFeature6
      idRateFeature7
      valueRateFeature7
      idRateFeature8
      valueRateFeature8
      idRateFeature9
      valueRateFeature9
      idRateFeature10
      valueRateFeature10
      idRateSubFeature1
      idRateSubFeatureItem1
      valueRateSubFeatureItem1
      idRateSubFeature2
      idRateSubFeatureItem2
      valueRateSubFeatureItem2
      idRateSubFeature3
      idRateSubFeatureItem3
      valueRateSubFeatureItem3
      idRateSubFeature4
      idRateSubFeatureItem4
      valueRateSubFeatureItem4
      idRateSubFeature5
      idRateSubFeatureItem5
      valueRateSubFeatureItem5
      idRateSubFeature6
      idRateSubFeatureItem6
      valueRateSubFeatureItem6
      idRateSubFeature7
      idRateSubFeatureItem7
      valueRateSubFeatureItem7
      idRateSubFeature8
      idRateSubFeatureItem8
      valueRateSubFeatureItem8
      idRateSubFeature9
      idRateSubFeatureItem9
      valueRateSubFeatureItem9
      idRateSubFeature10
      idRateSubFeatureItem10
      valueRateSubFeatureItem10
      taxesPercentage
      purchasePrice1
      profitPercentage1
      profitAmount1
      sellingValue1
      taxesAmount1
      sellingPrice1
      purchasePrice2
      profitPercentage2
      profitAmount2
      sellingValue2
      taxesAmount2
      sellingPrice2
      idRelatedRateInstance
      idStatus
      idUserCreate
      createdAt
      idUserUpdate
      updatedAt
    }
  }
`

/**
 * __useGetRateInstancesByRateQuery__
 *
 * To run a query within a React component, call `useGetRateInstancesByRateQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRateInstancesByRateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRateInstancesByRateQuery({
 *   variables: {
 *      idRate: // value for 'idRate'
 *   },
 * });
 */
export function useGetRateInstancesByRateQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetRateInstancesByRateQuery,
    GetRateInstancesByRateQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetRateInstancesByRateQuery, GetRateInstancesByRateQueryVariables>(
    GetRateInstancesByRateDocument,
    options
  )
}
export function useGetRateInstancesByRateLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetRateInstancesByRateQuery,
    GetRateInstancesByRateQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetRateInstancesByRateQuery, GetRateInstancesByRateQueryVariables>(
    GetRateInstancesByRateDocument,
    options
  )
}
export type GetRateInstancesByRateQueryHookResult = ReturnType<
  typeof useGetRateInstancesByRateQuery
>
export type GetRateInstancesByRateLazyQueryHookResult = ReturnType<
  typeof useGetRateInstancesByRateLazyQuery
>
export type GetRateInstancesByRateQueryResult = Apollo.QueryResult<
  GetRateInstancesByRateQuery,
  GetRateInstancesByRateQueryVariables
>
export const UpdateRateInstanceDocument = gql`
  mutation updateRateInstance($createInstanceCreateInput: RateInstanceInput!) {
    updateRateInstance(createInstanceCreateInput: $createInstanceCreateInput) {
      idRateInstance
      idOu
      idRate
      startDate
      endDate
      idProduct
      idProductInstance
      idEntity
      idChannel
      idMarket
      idBusiness
      idRateFeature1
      valueRateFeature1
      idRateFeature2
      valueRateFeature2
      idRateFeature3
      valueRateFeature3
      idRateFeature4
      valueRateFeature4
      idRateFeature5
      valueRateFeature5
      idRateFeature6
      valueRateFeature6
      idRateFeature7
      valueRateFeature7
      idRateFeature8
      valueRateFeature8
      idRateFeature9
      valueRateFeature9
      idRateFeature10
      valueRateFeature10
      idRateSubFeature1
      idRateSubFeatureItem1
      valueRateSubFeatureItem1
      idRateSubFeature2
      idRateSubFeatureItem2
      valueRateSubFeatureItem2
      idRateSubFeature3
      idRateSubFeatureItem3
      valueRateSubFeatureItem3
      idRateSubFeature4
      idRateSubFeatureItem4
      valueRateSubFeatureItem4
      idRateSubFeature5
      idRateSubFeatureItem5
      valueRateSubFeatureItem5
      idRateSubFeature6
      idRateSubFeatureItem6
      valueRateSubFeatureItem6
      idRateSubFeature7
      idRateSubFeatureItem7
      valueRateSubFeatureItem7
      idRateSubFeature8
      idRateSubFeatureItem8
      valueRateSubFeatureItem8
      idRateSubFeature9
      idRateSubFeatureItem9
      valueRateSubFeatureItem9
      idRateSubFeature10
      idRateSubFeatureItem10
      valueRateSubFeatureItem10
      purchasePrice1
      profitPercentage1
      profitAmount1
      sellingValue1
      taxesAmount1
      sellingPrice1
      purchasePrice2
      profitPercentage2
      profitAmount2
      sellingValue2
      taxesAmount2
      sellingPrice2
      idStatus
      idUserCreate
      createdAt
      idUserUpdate
      updatedAt
    }
  }
`
export type UpdateRateInstanceMutationFn = Apollo.MutationFunction<
  UpdateRateInstanceMutation,
  UpdateRateInstanceMutationVariables
>

/**
 * __useUpdateRateInstanceMutation__
 *
 * To run a mutation, you first call `useUpdateRateInstanceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateRateInstanceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateRateInstanceMutation, { data, loading, error }] = useUpdateRateInstanceMutation({
 *   variables: {
 *      createInstanceCreateInput: // value for 'createInstanceCreateInput'
 *   },
 * });
 */
export function useUpdateRateInstanceMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateRateInstanceMutation,
    UpdateRateInstanceMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<UpdateRateInstanceMutation, UpdateRateInstanceMutationVariables>(
    UpdateRateInstanceDocument,
    options
  )
}
export type UpdateRateInstanceMutationHookResult = ReturnType<typeof useUpdateRateInstanceMutation>
export type UpdateRateInstanceMutationResult = Apollo.MutationResult<UpdateRateInstanceMutation>
export type UpdateRateInstanceMutationOptions = Apollo.BaseMutationOptions<
  UpdateRateInstanceMutation,
  UpdateRateInstanceMutationVariables
>
export const GetRateSubFeatureItemsDocument = gql`
  query getRateSubFeatureItems {
    getRateSubFeatureItems {
      idRateSubFeatureItem
      idOu
      idRateSubFeature
      code
      name
      shortName
      idRateSubFeatureItemType
      idStatus
      idUserCreate
      idUserUpdate
    }
  }
`

/**
 * __useGetRateSubFeatureItemsQuery__
 *
 * To run a query within a React component, call `useGetRateSubFeatureItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRateSubFeatureItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRateSubFeatureItemsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetRateSubFeatureItemsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetRateSubFeatureItemsQuery,
    GetRateSubFeatureItemsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetRateSubFeatureItemsQuery, GetRateSubFeatureItemsQueryVariables>(
    GetRateSubFeatureItemsDocument,
    options
  )
}
export function useGetRateSubFeatureItemsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetRateSubFeatureItemsQuery,
    GetRateSubFeatureItemsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetRateSubFeatureItemsQuery, GetRateSubFeatureItemsQueryVariables>(
    GetRateSubFeatureItemsDocument,
    options
  )
}
export type GetRateSubFeatureItemsQueryHookResult = ReturnType<
  typeof useGetRateSubFeatureItemsQuery
>
export type GetRateSubFeatureItemsLazyQueryHookResult = ReturnType<
  typeof useGetRateSubFeatureItemsLazyQuery
>
export type GetRateSubFeatureItemsQueryResult = Apollo.QueryResult<
  GetRateSubFeatureItemsQuery,
  GetRateSubFeatureItemsQueryVariables
>
export const CreateRateSubFeatureDocument = gql`
  mutation createRateSubFeature($createRateSubFeatureInput: CreateRateSubFeatureInput!) {
    createRateSubFeature(createRateSubFeatureInput: $createRateSubFeatureInput) {
      idRateSubFeature
      idOu
      code
      name
      shortName
      idRateSubFeatureType
      idProductCategory
      idStatus
      idUserCreate
      createdAt
      idUserUpdate
      updatedAt
    }
  }
`
export type CreateRateSubFeatureMutationFn = Apollo.MutationFunction<
  CreateRateSubFeatureMutation,
  CreateRateSubFeatureMutationVariables
>

/**
 * __useCreateRateSubFeatureMutation__
 *
 * To run a mutation, you first call `useCreateRateSubFeatureMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRateSubFeatureMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRateSubFeatureMutation, { data, loading, error }] = useCreateRateSubFeatureMutation({
 *   variables: {
 *      createRateSubFeatureInput: // value for 'createRateSubFeatureInput'
 *   },
 * });
 */
export function useCreateRateSubFeatureMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateRateSubFeatureMutation,
    CreateRateSubFeatureMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateRateSubFeatureMutation, CreateRateSubFeatureMutationVariables>(
    CreateRateSubFeatureDocument,
    options
  )
}
export type CreateRateSubFeatureMutationHookResult = ReturnType<
  typeof useCreateRateSubFeatureMutation
>
export type CreateRateSubFeatureMutationResult = Apollo.MutationResult<CreateRateSubFeatureMutation>
export type CreateRateSubFeatureMutationOptions = Apollo.BaseMutationOptions<
  CreateRateSubFeatureMutation,
  CreateRateSubFeatureMutationVariables
>
export const DeleteRateSubFeatureDocument = gql`
  mutation deleteRateSubFeature($idRateSubFeature: BUFFER!) {
    deleteRateSubFeature(idRateSubFeature: $idRateSubFeature) {
      idRateSubFeature
      idOu
      code
      name
      shortName
      idRateSubFeatureType
      idProductCategory
      idStatus
      idUserCreate
      createdAt
      idUserUpdate
      updatedAt
    }
  }
`
export type DeleteRateSubFeatureMutationFn = Apollo.MutationFunction<
  DeleteRateSubFeatureMutation,
  DeleteRateSubFeatureMutationVariables
>

/**
 * __useDeleteRateSubFeatureMutation__
 *
 * To run a mutation, you first call `useDeleteRateSubFeatureMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteRateSubFeatureMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteRateSubFeatureMutation, { data, loading, error }] = useDeleteRateSubFeatureMutation({
 *   variables: {
 *      idRateSubFeature: // value for 'idRateSubFeature'
 *   },
 * });
 */
export function useDeleteRateSubFeatureMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteRateSubFeatureMutation,
    DeleteRateSubFeatureMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<DeleteRateSubFeatureMutation, DeleteRateSubFeatureMutationVariables>(
    DeleteRateSubFeatureDocument,
    options
  )
}
export type DeleteRateSubFeatureMutationHookResult = ReturnType<
  typeof useDeleteRateSubFeatureMutation
>
export type DeleteRateSubFeatureMutationResult = Apollo.MutationResult<DeleteRateSubFeatureMutation>
export type DeleteRateSubFeatureMutationOptions = Apollo.BaseMutationOptions<
  DeleteRateSubFeatureMutation,
  DeleteRateSubFeatureMutationVariables
>
export const GetRateSubFeatureDocument = gql`
  query getRateSubFeature($idRateSubFeature: BUFFER!) {
    getRateSubFeature(idRateSubFeature: $idRateSubFeature) {
      idRateSubFeature
      idOu
      code
      name
      shortName
      idRateSubFeatureType
      idProductCategory
      idStatus
      idUserCreate
      createdAt
      idUserUpdate
      updatedAt
      rateSubFeatureItem {
        idRateSubFeatureItem
        idOu
        idRateSubFeature
        code
        name
        shortName
        idRateSubFeatureItemType
        idStatus
        idUserCreate
        idUserUpdate
      }
    }
  }
`

/**
 * __useGetRateSubFeatureQuery__
 *
 * To run a query within a React component, call `useGetRateSubFeatureQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRateSubFeatureQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRateSubFeatureQuery({
 *   variables: {
 *      idRateSubFeature: // value for 'idRateSubFeature'
 *   },
 * });
 */
export function useGetRateSubFeatureQuery(
  baseOptions: Apollo.QueryHookOptions<GetRateSubFeatureQuery, GetRateSubFeatureQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetRateSubFeatureQuery, GetRateSubFeatureQueryVariables>(
    GetRateSubFeatureDocument,
    options
  )
}
export function useGetRateSubFeatureLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetRateSubFeatureQuery, GetRateSubFeatureQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetRateSubFeatureQuery, GetRateSubFeatureQueryVariables>(
    GetRateSubFeatureDocument,
    options
  )
}
export type GetRateSubFeatureQueryHookResult = ReturnType<typeof useGetRateSubFeatureQuery>
export type GetRateSubFeatureLazyQueryHookResult = ReturnType<typeof useGetRateSubFeatureLazyQuery>
export type GetRateSubFeatureQueryResult = Apollo.QueryResult<
  GetRateSubFeatureQuery,
  GetRateSubFeatureQueryVariables
>
export const GetRateSubFeaturesDocument = gql`
  query getRateSubFeatures {
    getRateSubFeatures {
      idRateSubFeature
      idOu
      code
      name
      shortName
      idRateSubFeatureType
      idProductCategory
      idStatus
      idUserCreate
      createdAt
      idUserUpdate
      updatedAt
    }
  }
`

/**
 * __useGetRateSubFeaturesQuery__
 *
 * To run a query within a React component, call `useGetRateSubFeaturesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRateSubFeaturesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRateSubFeaturesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetRateSubFeaturesQuery(
  baseOptions?: Apollo.QueryHookOptions<GetRateSubFeaturesQuery, GetRateSubFeaturesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetRateSubFeaturesQuery, GetRateSubFeaturesQueryVariables>(
    GetRateSubFeaturesDocument,
    options
  )
}
export function useGetRateSubFeaturesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetRateSubFeaturesQuery,
    GetRateSubFeaturesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetRateSubFeaturesQuery, GetRateSubFeaturesQueryVariables>(
    GetRateSubFeaturesDocument,
    options
  )
}
export type GetRateSubFeaturesQueryHookResult = ReturnType<typeof useGetRateSubFeaturesQuery>
export type GetRateSubFeaturesLazyQueryHookResult = ReturnType<
  typeof useGetRateSubFeaturesLazyQuery
>
export type GetRateSubFeaturesQueryResult = Apollo.QueryResult<
  GetRateSubFeaturesQuery,
  GetRateSubFeaturesQueryVariables
>
export const UpdateRateSubFeatureDocument = gql`
  mutation updateRateSubFeature($updateRateSubFeatureInput: UpdateRateSubFeatureInput!) {
    updateRateSubFeature(updateRateSubFeatureInput: $updateRateSubFeatureInput) {
      idRateSubFeature
      idOu
      code
      name
      shortName
      idRateSubFeatureType
      idProductCategory
      idStatus
      idUserCreate
      createdAt
      idUserUpdate
      updatedAt
      rateSubFeatureItem {
        idRateSubFeatureItem
        idOu
        idRateSubFeature
        code
        name
        shortName
        idRateSubFeatureItemType
        idStatus
        idUserCreate
        idUserUpdate
      }
    }
  }
`
export type UpdateRateSubFeatureMutationFn = Apollo.MutationFunction<
  UpdateRateSubFeatureMutation,
  UpdateRateSubFeatureMutationVariables
>

/**
 * __useUpdateRateSubFeatureMutation__
 *
 * To run a mutation, you first call `useUpdateRateSubFeatureMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateRateSubFeatureMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateRateSubFeatureMutation, { data, loading, error }] = useUpdateRateSubFeatureMutation({
 *   variables: {
 *      updateRateSubFeatureInput: // value for 'updateRateSubFeatureInput'
 *   },
 * });
 */
export function useUpdateRateSubFeatureMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateRateSubFeatureMutation,
    UpdateRateSubFeatureMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<UpdateRateSubFeatureMutation, UpdateRateSubFeatureMutationVariables>(
    UpdateRateSubFeatureDocument,
    options
  )
}
export type UpdateRateSubFeatureMutationHookResult = ReturnType<
  typeof useUpdateRateSubFeatureMutation
>
export type UpdateRateSubFeatureMutationResult = Apollo.MutationResult<UpdateRateSubFeatureMutation>
export type UpdateRateSubFeatureMutationOptions = Apollo.BaseMutationOptions<
  UpdateRateSubFeatureMutation,
  UpdateRateSubFeatureMutationVariables
>
export const CreateRateDocument = gql`
  mutation createRate($rate: RateInput!) {
    createRate(rate: $rate) {
      idRate
      idOu
      idRateType
      code
      description
      idStatus
      idUserCreate
      createdAt
      idUserUpdate
      updatedAt
    }
  }
`
export type CreateRateMutationFn = Apollo.MutationFunction<
  CreateRateMutation,
  CreateRateMutationVariables
>

/**
 * __useCreateRateMutation__
 *
 * To run a mutation, you first call `useCreateRateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRateMutation, { data, loading, error }] = useCreateRateMutation({
 *   variables: {
 *      rate: // value for 'rate'
 *   },
 * });
 */
export function useCreateRateMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateRateMutation, CreateRateMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateRateMutation, CreateRateMutationVariables>(
    CreateRateDocument,
    options
  )
}
export type CreateRateMutationHookResult = ReturnType<typeof useCreateRateMutation>
export type CreateRateMutationResult = Apollo.MutationResult<CreateRateMutation>
export type CreateRateMutationOptions = Apollo.BaseMutationOptions<
  CreateRateMutation,
  CreateRateMutationVariables
>
export const DeleteRateDocument = gql`
  mutation deleteRate($idRate: BUFFER!) {
    deleteRate(idRate: $idRate) {
      idRate
      idOu
      idRateType
      code
      description
      idStatus
      idUserCreate
      createdAt
      idUserUpdate
      updatedAt
    }
  }
`
export type DeleteRateMutationFn = Apollo.MutationFunction<
  DeleteRateMutation,
  DeleteRateMutationVariables
>

/**
 * __useDeleteRateMutation__
 *
 * To run a mutation, you first call `useDeleteRateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteRateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteRateMutation, { data, loading, error }] = useDeleteRateMutation({
 *   variables: {
 *      idRate: // value for 'idRate'
 *   },
 * });
 */
export function useDeleteRateMutation(
  baseOptions?: Apollo.MutationHookOptions<DeleteRateMutation, DeleteRateMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<DeleteRateMutation, DeleteRateMutationVariables>(
    DeleteRateDocument,
    options
  )
}
export type DeleteRateMutationHookResult = ReturnType<typeof useDeleteRateMutation>
export type DeleteRateMutationResult = Apollo.MutationResult<DeleteRateMutation>
export type DeleteRateMutationOptions = Apollo.BaseMutationOptions<
  DeleteRateMutation,
  DeleteRateMutationVariables
>
export const GetRatesByProductDocument = gql`
  query GetRatesByProduct($idProduct: BUFFER!, $idProductInstance: BUFFER!) {
    getRatesByProduct(idProduct: $idProduct, idProductInstance: $idProductInstance) {
      idRate
      idOu
      idRateType
      code
      description
      idStatus
      idUserCreate
      createdAt
      idUserUpdate
      updatedAt
    }
  }
`

/**
 * __useGetRatesByProductQuery__
 *
 * To run a query within a React component, call `useGetRatesByProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRatesByProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRatesByProductQuery({
 *   variables: {
 *      idProduct: // value for 'idProduct'
 *      idProductInstance: // value for 'idProductInstance'
 *   },
 * });
 */
export function useGetRatesByProductQuery(
  baseOptions: Apollo.QueryHookOptions<GetRatesByProductQuery, GetRatesByProductQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetRatesByProductQuery, GetRatesByProductQueryVariables>(
    GetRatesByProductDocument,
    options
  )
}
export function useGetRatesByProductLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetRatesByProductQuery, GetRatesByProductQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetRatesByProductQuery, GetRatesByProductQueryVariables>(
    GetRatesByProductDocument,
    options
  )
}
export type GetRatesByProductQueryHookResult = ReturnType<typeof useGetRatesByProductQuery>
export type GetRatesByProductLazyQueryHookResult = ReturnType<typeof useGetRatesByProductLazyQuery>
export type GetRatesByProductQueryResult = Apollo.QueryResult<
  GetRatesByProductQuery,
  GetRatesByProductQueryVariables
>
export const GetRateInstancesByProductDocument = gql`
  query getRateInstancesByProduct(
    $take: Float!
    $skip: Float!
    $idProductInstance: BUFFER!
    $idProduct: BUFFER!
    $idRate: BUFFER!
  ) {
    getRateInstancesByProduct(
      take: $take
      skip: $skip
      idProductInstance: $idProductInstance
      idProduct: $idProduct
      idRate: $idRate
    ) {
      idRateInstance
      idOu
      idRate
      startDate
      endDate
      idProduct
      idProductInstance
      idEntity
      idChannel
      idMarket
      idBusiness
      idRateFeature1
      valueRateFeature1
      idRateFeature2
      valueRateFeature2
      idRateFeature3
      valueRateFeature3
      idRateFeature4
      valueRateFeature4
      idRateFeature5
      valueRateFeature5
      idRateFeature6
      valueRateFeature6
      idRateFeature7
      valueRateFeature7
      idRateFeature8
      valueRateFeature8
      idRateFeature9
      valueRateFeature9
      idRateFeature10
      valueRateFeature10
      idRateSubFeature1
      idRateSubFeatureItem1
      valueRateSubFeatureItem1
      idRateSubFeature2
      idRateSubFeatureItem2
      valueRateSubFeatureItem2
      idRateSubFeature3
      idRateSubFeatureItem3
      valueRateSubFeatureItem3
      idRateSubFeature4
      idRateSubFeatureItem4
      valueRateSubFeatureItem4
      idRateSubFeature5
      idRateSubFeatureItem5
      valueRateSubFeatureItem5
      idRateSubFeature6
      idRateSubFeatureItem6
      valueRateSubFeatureItem6
      idRateSubFeature7
      idRateSubFeatureItem7
      valueRateSubFeatureItem7
      idRateSubFeature8
      idRateSubFeatureItem8
      valueRateSubFeatureItem8
      idRateSubFeature9
      idRateSubFeatureItem9
      valueRateSubFeatureItem9
      idRateSubFeature10
      idRateSubFeatureItem10
      valueRateSubFeatureItem10
      taxesPercentage
      purchasePrice1
      profitPercentage1
      profitAmount1
      sellingValue1
      taxesAmount1
      sellingPrice1
      purchasePrice2
      profitPercentage2
      profitAmount2
      sellingValue2
      taxesAmount2
      sellingPrice2
      idRelatedRateInstance
      idStatus
      idUserCreate
      createdAt
      idUserUpdate
      updatedAt
      rate {
        idRate
        idRateType
        code
        description
      }
    }
  }
`

/**
 * __useGetRateInstancesByProductQuery__
 *
 * To run a query within a React component, call `useGetRateInstancesByProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRateInstancesByProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRateInstancesByProductQuery({
 *   variables: {
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *      idProductInstance: // value for 'idProductInstance'
 *      idProduct: // value for 'idProduct'
 *      idRate: // value for 'idRate'
 *   },
 * });
 */
export function useGetRateInstancesByProductQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetRateInstancesByProductQuery,
    GetRateInstancesByProductQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetRateInstancesByProductQuery, GetRateInstancesByProductQueryVariables>(
    GetRateInstancesByProductDocument,
    options
  )
}
export function useGetRateInstancesByProductLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetRateInstancesByProductQuery,
    GetRateInstancesByProductQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetRateInstancesByProductQuery,
    GetRateInstancesByProductQueryVariables
  >(GetRateInstancesByProductDocument, options)
}
export type GetRateInstancesByProductQueryHookResult = ReturnType<
  typeof useGetRateInstancesByProductQuery
>
export type GetRateInstancesByProductLazyQueryHookResult = ReturnType<
  typeof useGetRateInstancesByProductLazyQuery
>
export type GetRateInstancesByProductQueryResult = Apollo.QueryResult<
  GetRateInstancesByProductQuery,
  GetRateInstancesByProductQueryVariables
>
export const UpdateRateDocument = gql`
  mutation updateRate($rate: RateInput!) {
    updateRate(rate: $rate) {
      idRate
      idOu
      idRateType
      code
      description
      idStatus
      idUserCreate
      createdAt
      idUserUpdate
      updatedAt
    }
  }
`
export type UpdateRateMutationFn = Apollo.MutationFunction<
  UpdateRateMutation,
  UpdateRateMutationVariables
>

/**
 * __useUpdateRateMutation__
 *
 * To run a mutation, you first call `useUpdateRateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateRateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateRateMutation, { data, loading, error }] = useUpdateRateMutation({
 *   variables: {
 *      rate: // value for 'rate'
 *   },
 * });
 */
export function useUpdateRateMutation(
  baseOptions?: Apollo.MutationHookOptions<UpdateRateMutation, UpdateRateMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<UpdateRateMutation, UpdateRateMutationVariables>(
    UpdateRateDocument,
    options
  )
}
export type UpdateRateMutationHookResult = ReturnType<typeof useUpdateRateMutation>
export type UpdateRateMutationResult = Apollo.MutationResult<UpdateRateMutation>
export type UpdateRateMutationOptions = Apollo.BaseMutationOptions<
  UpdateRateMutation,
  UpdateRateMutationVariables
>
