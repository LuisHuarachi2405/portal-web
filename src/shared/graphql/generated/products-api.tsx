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

export type CreateCurrencyExchangeRateValueInput = {
  buyExchangeRate?: InputMaybe<Scalars['Float']>
  date: Scalars['DateTime']
  idCurrency1: Scalars['BUFFER']
  idCurrency2: Scalars['BUFFER']
  idOu: Scalars['BUFFER']
  idUser: Scalars['BUFFER']
  sellExchangeRate?: InputMaybe<Scalars['Float']>
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
  idProductCategory: Scalars['BUFFER']
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
  group: Scalars['String']
  idContact: Scalars['BUFFER']
  idCurrency: Scalars['BUFFER']
  idEntity: Scalars['BUFFER']
  idOu: Scalars['BUFFER']
  idReservationType: Scalars['BUFFER']
  idUserCreate: Scalars['BUFFER']
  note: Scalars['String']
  passengersQuantity: Scalars['Float']
}

export type CreateReservationItemInput = {
  dateEnd: Scalars['DateTime']
  dateStart: Scalars['DateTime']
  idOu: Scalars['BUFFER']
  idProduct: Scalars['BUFFER']
  idProductInstance?: InputMaybe<Scalars['BUFFER']>
  idRate: Scalars['BUFFER']
  idRateInstance: Scalars['BUFFER']
  idReservation: Scalars['BUFFER']
  idUserCreate: Scalars['BUFFER']
  item: Scalars['Float']
  quantity: Scalars['Float']
  totalPayedUSD: Scalars['Float']
  totalPriceUSD: Scalars['Float']
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
  idPassenger: Array<Scalars['BUFFER']>
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

export type CurrencyExchangeRate = {
  __typename?: 'CurrencyExchangeRate'
  buyExchangeRate?: Maybe<Scalars['Float']>
  createdAt: Scalars['DateTime']
  date: Scalars['DateTime']
  idCurrency1: Scalars['BUFFER']
  idCurrency2: Scalars['BUFFER']
  idCurrencyExchangeRate: Scalars['BUFFER']
  idOu: Scalars['BUFFER']
  idStatus: Scalars['String']
  idUserCreate: Scalars['BUFFER']
  idUserUpdate: Scalars['BUFFER']
  sellExchangeRate?: Maybe<Scalars['Float']>
  updatedAt: Scalars['DateTime']
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

export type DeleteCurrencyExchangeRateValueInput = {
  idCurrencyExchangeRate: Scalars['BUFFER']
  idUser: Scalars['BUFFER']
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

export type GeneralParameterByArgsQueryInput = {
  skip: Scalars['Float']
  take: Scalars['Float']
  userInput?: InputMaybe<Scalars['String']>
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
  createCurrencyExchangeRate: CurrencyExchangeRate
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
  deleteCurrencyExchangeRate: CurrencyExchangeRate
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
  updateCurrencyExchangeRate: CurrencyExchangeRate
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
  updateReservationPayment: Reservation
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

export type MutationCreateCurrencyExchangeRateArgs = {
  CreateCurrencyExchangeRateValueInput: CreateCurrencyExchangeRateValueInput
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

export type MutationDeleteCurrencyExchangeRateArgs = {
  DeleteCurrencyExchangeRateValueInput: DeleteCurrencyExchangeRateValueInput
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

export type MutationUpdateCurrencyExchangeRateArgs = {
  UpdateCurrencyExchangeRateValueInput: UpdateCurrencyExchangeRateValueInput
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

export type MutationUpdateReservationPaymentArgs = {
  updatePaymentInput: UpdateReservationItemInput
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
  idProductType: Scalars['BUFFER']
  idStatus: Scalars['String']
  idUserCreate: Scalars['BUFFER']
  idUserUpdate: Scalars['BUFFER']
  internationalCodeSunat: Scalars['String']
  inventoryFlag: Scalars['String']
  name: Scalars['String']
  operationalCodeSunat: Scalars['String']
  productType: Scalars['String']
  productTypeSunat: Scalars['String']
  product_ProductFeature_product_idProductFeature0Toproduct_ProductFeature?: Maybe<ProductProductFeature>
  product_ProductFeature_product_idProductFeature1Toproduct_ProductFeature?: Maybe<ProductProductFeature>
  product_ProductFeature_product_idProductFeature2Toproduct_ProductFeature?: Maybe<ProductProductFeature>
  product_ProductFeature_product_idProductFeature3Toproduct_ProductFeature?: Maybe<ProductProductFeature>
  product_ProductFeature_product_idProductFeature4Toproduct_ProductFeature?: Maybe<ProductProductFeature>
  product_ProductFeature_product_idProductFeature5Toproduct_ProductFeature?: Maybe<ProductProductFeature>
  product_ProductFeature_product_idProductFeature6Toproduct_ProductFeature?: Maybe<ProductProductFeature>
  product_ProductFeature_product_idProductFeature7Toproduct_ProductFeature?: Maybe<ProductProductFeature>
  product_ProductFeature_product_idProductFeature8Toproduct_ProductFeature?: Maybe<ProductProductFeature>
  product_ProductFeature_product_idProductFeature9Toproduct_ProductFeature?: Maybe<ProductProductFeature>
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
  name?: Maybe<Scalars['String']>
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
  productFeature: ProductFeature
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
  idProductCategory: Scalars['BUFFER']
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
  generalParametersByArgs: GeneralParameterQueryResult
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
  getCurrencyExchangeRateById: CurrencyExchangeRate
  getCurrencyExchangeRates: Array<CurrencyExchangeRate>
  getCurrencyExchangeRatesByDateAndIdOu: Array<CurrencyExchangeRate>
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
  getRateInstanceByRelated: RateInstance
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
  reservationById: Reservation
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

export type QueryGeneralParametersByArgsArgs = {
  generalParameterByArgsQueryInput: GeneralParameterByArgsQueryInput
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

export type QueryGetCurrencyExchangeRateByIdArgs = {
  idCurrencyExchangeRate: Scalars['BUFFER']
}

export type QueryGetCurrencyExchangeRatesByDateAndIdOuArgs = {
  date: Scalars['DateTime']
  idOu: Scalars['BUFFER']
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

export type QueryGetRateInstanceByRelatedArgs = {
  idRelatedRateInstance: Scalars['BUFFER']
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

export type QueryProductSubFeaturesArgs = {
  productCategory?: InputMaybe<Scalars['BUFFER']>
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

export type QueryReservationByIdArgs = {
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
  group: Scalars['String']
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
  idProductInstance?: Maybe<Scalars['BUFFER']>
  idRate: Scalars['BUFFER']
  idRateInstance: Scalars['BUFFER']
  idReservation: Scalars['BUFFER']
  idReservationItem: Scalars['BUFFER']
  idStatus: Scalars['String']
  idUserCreate: Scalars['BUFFER']
  idUserUpdate: Scalars['BUFFER']
  item: Scalars['Float']
  product: Product
  productInstance?: Maybe<ProductInstance>
  quantity: Scalars['Float']
  rate: Rate
  rateInstance: RateInstance
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

export type UpdateCurrencyExchangeRateValueInput = {
  buyExchangeRate?: InputMaybe<Scalars['Float']>
  date: Scalars['DateTime']
  idCurrency1: Scalars['BUFFER']
  idCurrency2: Scalars['BUFFER']
  idCurrencyExchangeRate: Scalars['BUFFER']
  idOu: Scalars['BUFFER']
  idUser: Scalars['BUFFER']
  sellExchangeRate?: InputMaybe<Scalars['Float']>
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
  idProductCategory?: InputMaybe<Scalars['BUFFER']>
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
  group?: InputMaybe<Scalars['String']>
  idContact?: InputMaybe<Scalars['BUFFER']>
  idCurrency?: InputMaybe<Scalars['BUFFER']>
  idEntity?: InputMaybe<Scalars['BUFFER']>
  idOu?: InputMaybe<Scalars['BUFFER']>
  idReservation: Scalars['BUFFER']
  idReservationType?: InputMaybe<Scalars['BUFFER']>
  idStatus: Scalars['String']
  idUserCreate?: InputMaybe<Scalars['BUFFER']>
  idUserUpdate: Scalars['BUFFER']
  note?: InputMaybe<Scalars['String']>
  passengersQuantity?: InputMaybe<Scalars['Float']>
  totalPayedPEN: Scalars['Float']
  totalPayedUSD: Scalars['Float']
  totalPricePEN: Scalars['Float']
  totalPriceUSD: Scalars['Float']
}

export type UpdateReservationItemInput = {
  amount: Scalars['Float']
  dateEnd?: InputMaybe<Scalars['DateTime']>
  dateStart?: InputMaybe<Scalars['DateTime']>
  idOu?: InputMaybe<Scalars['BUFFER']>
  idProduct?: InputMaybe<Scalars['BUFFER']>
  idProductInstance?: InputMaybe<Scalars['BUFFER']>
  idRate?: InputMaybe<Scalars['BUFFER']>
  idRateInstance?: InputMaybe<Scalars['BUFFER']>
  idReservation: Scalars['BUFFER']
  idReservationItem: Scalars['BUFFER']
  idUserCreate?: InputMaybe<Scalars['BUFFER']>
  idUserUpdate: Scalars['BUFFER']
  item?: InputMaybe<Scalars['Float']>
  quantity?: InputMaybe<Scalars['Float']>
  totalPayedUSD?: InputMaybe<Scalars['Float']>
  totalPriceUSD?: InputMaybe<Scalars['Float']>
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

export type CreateInstanceInventoryTransactionMutationVariables = Exact<{
  createInventoryTransactionInput: CreateInventoryTransactionInput
}>

export type CreateInstanceInventoryTransactionMutation = {
  __typename?: 'Mutation'
  createInventoryTransaction: { __typename?: 'InventoryTransaction'; idInventoryTransaction: any }
}

export type GetInstanceInventoryTransactionsQueryVariables = Exact<{
  idProductInstance: Scalars['BUFFER']
}>

export type GetInstanceInventoryTransactionsQuery = {
  __typename?: 'Query'
  inventoryTransactions: Array<{
    __typename?: 'InventoryTransaction'
    idInventoryTransaction: any
    date: any
    idInventoryTransactionType: any
    idReservation: any
    idReservationItem: any
    note: string
    credit: number
    debit: number
    balance: number
  }>
}

export type GetInventoryTransactionTypesQueryVariables = Exact<{ [key: string]: never }>

export type GetInventoryTransactionTypesQuery = {
  __typename?: 'Query'
  getGeneralParametersByCode: {
    __typename?: 'GeneralParameter'
    idGeneralParameter: any
    code: string
    name: string
    generalParameterValue: Array<{
      __typename?: 'GeneralParameterValue'
      idGeneralParameterValue: any
      code: string
      name: string
    }>
  }
}

export type GetInventoryTransactionsQueryVariables = Exact<{
  idProductInstance: Scalars['BUFFER']
}>

export type GetInventoryTransactionsQuery = {
  __typename?: 'Query'
  inventoryTransactions: Array<{
    __typename?: 'InventoryTransaction'
    idInventoryTransaction: any
    idOu: any
    idProductInstance: any
    date: any
    idInventoryTransactionType: any
    idReservation: any
    idReservationItem: any
    note: string
    credit: number
    debit: number
    balance: number
  }>
}

export type CreateProductInstancesMutationVariables = Exact<{
  createProductInstanceInput: CreateProductInstanceInput
}>

export type CreateProductInstancesMutation = {
  __typename?: 'Mutation'
  createProductInstance: Array<{ __typename?: 'ProductInstance'; idProductInstance: any }>
}

export type DeleteProductInstanceMutationVariables = Exact<{
  deleteProductInstanceId: Scalars['BUFFER']
}>

export type DeleteProductInstanceMutation = {
  __typename?: 'Mutation'
  deleteProductInstance: { __typename?: 'ProductInstance'; idProductInstance: any }
}

export type GetProductInstanceQueryVariables = Exact<{
  productInstanceId: Scalars['BUFFER']
}>

export type GetProductInstanceQuery = {
  __typename?: 'Query'
  productInstance: {
    __typename?: 'ProductInstance'
    idProductInstance: any
    productSubFeatureItem1?: {
      __typename?: 'ProductSubFeatureItem'
      idProductSubFeatureItem: any
    } | null
    productSubFeatureItem2?: {
      __typename?: 'ProductSubFeatureItem'
      idProductSubFeatureItem: any
    } | null
    productSubFeatureItem3?: {
      __typename?: 'ProductSubFeatureItem'
      idProductSubFeatureItem: any
    } | null
    productSubFeatureItem4?: {
      __typename?: 'ProductSubFeatureItem'
      idProductSubFeatureItem: any
    } | null
    productSubFeatureItem5?: {
      __typename?: 'ProductSubFeatureItem'
      idProductSubFeatureItem: any
    } | null
    productSubFeatureItem6?: {
      __typename?: 'ProductSubFeatureItem'
      idProductSubFeatureItem: any
    } | null
    productSubFeatureItem7?: {
      __typename?: 'ProductSubFeatureItem'
      idProductSubFeatureItem: any
    } | null
    productSubFeatureItem8?: {
      __typename?: 'ProductSubFeatureItem'
      idProductSubFeatureItem: any
    } | null
    productSubFeatureItem9?: {
      __typename?: 'ProductSubFeatureItem'
      idProductSubFeatureItem: any
    } | null
    productSubFeatureItem10?: {
      __typename?: 'ProductSubFeatureItem'
      idProductSubFeatureItem: any
    } | null
  }
}

export type GetProductInstancesQueryVariables = Exact<{
  createProductInstanceInput: CreateProductInstanceInput
}>

export type GetProductInstancesQuery = {
  __typename?: 'Query'
  productInstances: Array<{
    __typename?: 'ProductInstance'
    idProductInstance: any
    productSubFeatureItem1?: {
      __typename?: 'ProductSubFeatureItem'
      idProductSubFeatureItem: any
    } | null
    productSubFeatureItem2?: {
      __typename?: 'ProductSubFeatureItem'
      idProductSubFeatureItem: any
    } | null
    productSubFeatureItem3?: {
      __typename?: 'ProductSubFeatureItem'
      idProductSubFeatureItem: any
    } | null
    productSubFeatureItem4?: {
      __typename?: 'ProductSubFeatureItem'
      idProductSubFeatureItem: any
    } | null
    productSubFeatureItem5?: {
      __typename?: 'ProductSubFeatureItem'
      idProductSubFeatureItem: any
    } | null
    productSubFeatureItem6?: {
      __typename?: 'ProductSubFeatureItem'
      idProductSubFeatureItem: any
    } | null
    productSubFeatureItem7?: {
      __typename?: 'ProductSubFeatureItem'
      idProductSubFeatureItem: any
    } | null
    productSubFeatureItem8?: {
      __typename?: 'ProductSubFeatureItem'
      idProductSubFeatureItem: any
    } | null
    productSubFeatureItem9?: {
      __typename?: 'ProductSubFeatureItem'
      idProductSubFeatureItem: any
    } | null
    productSubFeatureItem10?: {
      __typename?: 'ProductSubFeatureItem'
      idProductSubFeatureItem: any
    } | null
  }>
}

export type CreateProductCategoryMutationVariables = Exact<{
  createProductCategoryInput: CreateProductCategoryInput
}>

export type CreateProductCategoryMutation = {
  __typename?: 'Mutation'
  createProductCategory: { __typename?: 'ProductCategory'; idProductCategory: any }
}

export type DeleteProductCategoryMutationVariables = Exact<{
  deleteProductCategoryId: Scalars['BUFFER']
}>

export type DeleteProductCategoryMutation = {
  __typename?: 'Mutation'
  deleteProductCategory: { __typename?: 'ProductCategory'; idProductCategory: any }
}

export type GetProductCategoriesQueryVariables = Exact<{ [key: string]: never }>

export type GetProductCategoriesQuery = {
  __typename?: 'Query'
  productCategories: {
    __typename?: 'ProductCategoryOutput'
    count: number
    data: Array<{
      __typename?: 'ProductCategory'
      idProductCategory: any
      name: string
      shortName: string
      idCategoryType: any
      categoryType: string
    }>
  }
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

export type UpdateProductCategoryMutationVariables = Exact<{
  updateProductCategoryInput: UpdateProductCategoryInput
}>

export type UpdateProductCategoryMutation = {
  __typename?: 'Mutation'
  updateProductCategory: { __typename?: 'ProductCategory'; idProductCategory: any }
}

export type CreateProductFeatureMutationVariables = Exact<{
  createProductFeatureInput: CreateProductFeatureInput
}>

export type CreateProductFeatureMutation = {
  __typename?: 'Mutation'
  createProductFeature: { __typename?: 'ProductFeature'; idProductFeature: any }
}

export type DeleteProductFeatureMutationVariables = Exact<{
  deleteProductFeatureId: Scalars['BUFFER']
}>

export type DeleteProductFeatureMutation = {
  __typename?: 'Mutation'
  deleteProductFeature: { __typename?: 'ProductFeature'; idProductFeature: any }
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
    name?: string | null
    shortName: string
    idProductCategory: any
    idProductFeatureType: any
  }
}

export type GetProductFeaturesQueryVariables = Exact<{
  productCategory?: InputMaybe<Scalars['BUFFER']>
}>

export type GetProductFeaturesQuery = {
  __typename?: 'Query'
  productFeatures: Array<{
    __typename?: 'ProductFeaturesOutput'
    idProductFeature: any
    name: string
    shortName: string
    idProductCategory: any
    idProductFeatureType: any
    categoryName: string
    featureTypeName: string
  }>
}

export type UpdateProductFeatureMutationVariables = Exact<{
  updateProductFeatureInput: UpdateProductFeatureInput
}>

export type UpdateProductFeatureMutation = {
  __typename?: 'Mutation'
  updateProductFeature: { __typename?: 'ProductFeature'; idProductFeature: any }
}

export type CreateProductIdentificationMutationVariables = Exact<{
  createProductIdentificationInput: CreateProductIdentificationInput
}>

export type CreateProductIdentificationMutation = {
  __typename?: 'Mutation'
  createProductIdentification: {
    __typename?: 'ProductIdentification'
    idProductIdentification: any
  }
}

export type DeleteProductIdentificationMutationVariables = Exact<{
  deleteProductIdentificationId: Scalars['BUFFER']
}>

export type DeleteProductIdentificationMutation = {
  __typename?: 'Mutation'
  deleteProductIdentification: {
    __typename?: 'ProductIdentification'
    idProductIdentification: any
  }
}

export type GetProductIdentificationTypesQueryVariables = Exact<{ [key: string]: never }>

export type GetProductIdentificationTypesQuery = {
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

export type GetProductIdentificationsQueryVariables = Exact<{
  idProduct: Scalars['BUFFER']
}>

export type GetProductIdentificationsQuery = {
  __typename?: 'Query'
  productIdentifications: Array<{
    __typename?: 'ProductIdentification'
    idProductIdentification: any
    idProduct: any
    idProductIdentificationType: any
    productIdentificationType: string
    value: string
    productName: string
  }>
}

export type UpdateProductIdentificationMutationVariables = Exact<{
  updateProductIdentificationInput: UpdateProductIdentificationInput
}>

export type UpdateProductIdentificationMutation = {
  __typename?: 'Mutation'
  updateProductIdentification: {
    __typename?: 'ProductIdentification'
    idProductIdentification: any
  }
}

export type CreateProductProductCategoryMutationVariables = Exact<{
  createProductProductCategoryInput: CreateProductProductCategoryInput
}>

export type CreateProductProductCategoryMutation = {
  __typename?: 'Mutation'
  createProductProductCategory: {
    __typename?: 'ProductProductCategory'
    idProduct: any
    idProductCategory: any
  }
}

export type DeleteProductProductCategoryMutationVariables = Exact<{
  idProduct: Scalars['BUFFER']
  idProductCategory: Scalars['BUFFER']
}>

export type DeleteProductProductCategoryMutation = {
  __typename?: 'Mutation'
  deleteProductProductCategory: {
    __typename?: 'ProductProductCategory'
    idProduct: any
    idProductCategory: any
  }
}

export type GetProductProductCategoriesQueryVariables = Exact<{
  idProduct: Scalars['BUFFER']
}>

export type GetProductProductCategoriesQuery = {
  __typename?: 'Query'
  productProductCategories: Array<{
    __typename?: 'ProductProductCategoriesOutput'
    idProduct: any
    idProductCategory: any
    categoryName: string
    productName: string
  }>
}

export type CreateProductProductFeatureMutationVariables = Exact<{
  createProductProductFeatureInput: CreateProductProductFeatureInput
}>

export type CreateProductProductFeatureMutation = {
  __typename?: 'Mutation'
  createProductProductFeature: {
    __typename?: 'ProductProductFeature'
    idProductProductFeature: any
  }
}

export type DeleteProductProductFeatureMutationVariables = Exact<{
  deleteProductProductFeatureId: Scalars['BUFFER']
}>

export type DeleteProductProductFeatureMutation = {
  __typename?: 'Mutation'
  deleteProductProductFeature: {
    __typename?: 'ProductProductFeature'
    idProductProductFeature: any
  }
}

export type GetProductProductFeaturesQueryVariables = Exact<{
  productId: Scalars['BUFFER']
}>

export type GetProductProductFeaturesQuery = {
  __typename?: 'Query'
  productProductFeatures: Array<{
    __typename?: 'ProductProductFeaturesOutput'
    idProductProductFeature: any
    idProduct: any
    idProductFeature: any
    value: string
    productName: string
    featureName: string
  }>
}

export type UpdateProductProductFeatureMutationVariables = Exact<{
  updateProductProductFeatureInput: UpdateProductProductFeatureInput
}>

export type UpdateProductProductFeatureMutation = {
  __typename?: 'Mutation'
  updateProductProductFeature: {
    __typename?: 'ProductProductFeature'
    idProductProductFeature: any
  }
}

export type CreateProductProductSubFeatureMutationVariables = Exact<{
  createProductProductSubFeatureItemInput: CreateProductProductSubFeatureInput
}>

export type CreateProductProductSubFeatureMutation = {
  __typename?: 'Mutation'
  createProductProductSubFeature: {
    __typename?: 'ProductProductSubFeature'
    idProduct: any
    idProductSubFeature: any
  }
}

export type DeleteProductProductSubFeatureMutationVariables = Exact<{
  deleteProductProductSubFeatureId: Scalars['BUFFER']
}>

export type DeleteProductProductSubFeatureMutation = {
  __typename?: 'Mutation'
  deleteProductProductSubFeature: {
    __typename?: 'ProductProductSubFeature'
    idProductProductSubFeature: any
  }
}

export type GetProductProductSubFeaturesQueryVariables = Exact<{
  idProduct: Scalars['BUFFER']
}>

export type GetProductProductSubFeaturesQuery = {
  __typename?: 'Query'
  productProductSubFeatures: Array<{
    __typename?: 'ProductProductSubFeaturesOutput'
    idProductProductSubFeature: any
    idProduct: any
    productName: string
    idProductSubFeature: any
    productSubFeature: string
  }>
}

export type CreateProductSubFeatureMutationVariables = Exact<{
  createProductSubFeatureInput: CreateProductSubFeatureInput
}>

export type CreateProductSubFeatureMutation = {
  __typename?: 'Mutation'
  createProductSubFeature: { __typename?: 'ProductSubFeature'; idProductSubFeature: any }
}

export type DeleteProductSubFeatureMutationVariables = Exact<{
  deleteProductSubFeatureId: Scalars['BUFFER']
}>

export type DeleteProductSubFeatureMutation = {
  __typename?: 'Mutation'
  deleteProductSubFeature: { __typename?: 'ProductSubFeature'; idProductSubFeature: any }
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
    idProductCategory: any
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
  productSubFeatures: Array<{
    __typename?: 'ProductSubFeature'
    idProductSubFeature: any
    code: string
    name: string
    shortName: string
    idProductSubFeatureType: any
    productSubFeatureType: string
  }>
}

export type UpdateProductSubFeatureMutationVariables = Exact<{
  updateProductSubFeatureInput: UpdateProductSubFeatureInput
}>

export type UpdateProductSubFeatureMutation = {
  __typename?: 'Mutation'
  updateProductSubFeature: { __typename?: 'ProductSubFeature'; idProductSubFeature: any }
}

export type CreateProductMutationVariables = Exact<{
  createProductInput: CreateProductInput
}>

export type CreateProductMutation = {
  __typename?: 'Mutation'
  createProduct: { __typename?: 'Product'; idProduct: any }
}

export type DeleteProductMutationVariables = Exact<{
  deleteProductId: Scalars['BUFFER']
  inactiveFlag: Scalars['Boolean']
}>

export type DeleteProductMutation = {
  __typename?: 'Mutation'
  deleteProduct: { __typename?: 'Product'; idProduct: any }
}

export type GetEntitiesQueryVariables = Exact<{
  filter: GetEntitiesInput
}>

export type GetEntitiesQuery = {
  __typename?: 'Query'
  getEntities: {
    __typename?: 'ReponseGetEntities'
    info: { __typename?: 'Info'; count: number }
    results: Array<{ __typename?: 'Entity'; idEntity: any; name: string }>
  }
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

export type GetProductTypesQueryVariables = Exact<{ [key: string]: never }>

export type GetProductTypesQuery = {
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

export type GetProductQueryVariables = Exact<{
  productId: Scalars['BUFFER']
}>

export type GetProductQuery = {
  __typename?: 'Query'
  product: {
    __typename?: 'Product'
    idProduct: any
    code: string
    name: string
    shortName: string
    idProductType: any
    idEntitySupplier: any
    inventoryFlag: string
    internationalCodeSunat: string
    operationalCodeSunat: string
    productTypeSunat: string
    unitSunat: string
  }
}

export type GetProductsQueryVariables = Exact<{
  productsId: Scalars['BUFFER']
}>

export type GetProductsQuery = {
  __typename?: 'Query'
  products: Array<{
    __typename?: 'Product'
    code: string
    name: string
    shortName: string
    idProduct: any
    idProductType: any
    productType: string
    idEntitySupplier: any
    supplierName: string
    inventoryFlag: string
  }>
}

export type UpdateProductMutationVariables = Exact<{
  updateProductInput: UpdateProductInput
}>

export type UpdateProductMutation = {
  __typename?: 'Mutation'
  updateProduct: { __typename?: 'Product'; idProduct: any }
}

export const CreateInstanceInventoryTransactionDocument = gql`
  mutation CreateInstanceInventoryTransaction(
    $createInventoryTransactionInput: CreateInventoryTransactionInput!
  ) {
    createInventoryTransaction(createInventoryTransactionInput: $createInventoryTransactionInput) {
      idInventoryTransaction
    }
  }
`
export type CreateInstanceInventoryTransactionMutationFn = Apollo.MutationFunction<
  CreateInstanceInventoryTransactionMutation,
  CreateInstanceInventoryTransactionMutationVariables
>

/**
 * __useCreateInstanceInventoryTransactionMutation__
 *
 * To run a mutation, you first call `useCreateInstanceInventoryTransactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateInstanceInventoryTransactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createInstanceInventoryTransactionMutation, { data, loading, error }] = useCreateInstanceInventoryTransactionMutation({
 *   variables: {
 *      createInventoryTransactionInput: // value for 'createInventoryTransactionInput'
 *   },
 * });
 */
export function useCreateInstanceInventoryTransactionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateInstanceInventoryTransactionMutation,
    CreateInstanceInventoryTransactionMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateInstanceInventoryTransactionMutation,
    CreateInstanceInventoryTransactionMutationVariables
  >(CreateInstanceInventoryTransactionDocument, options)
}
export type CreateInstanceInventoryTransactionMutationHookResult = ReturnType<
  typeof useCreateInstanceInventoryTransactionMutation
>
export type CreateInstanceInventoryTransactionMutationResult =
  Apollo.MutationResult<CreateInstanceInventoryTransactionMutation>
export type CreateInstanceInventoryTransactionMutationOptions = Apollo.BaseMutationOptions<
  CreateInstanceInventoryTransactionMutation,
  CreateInstanceInventoryTransactionMutationVariables
>
export const GetInstanceInventoryTransactionsDocument = gql`
  query GetInstanceInventoryTransactions($idProductInstance: BUFFER!) {
    inventoryTransactions(idProductInstance: $idProductInstance) {
      idInventoryTransaction
      date
      idInventoryTransactionType
      idReservation
      idReservationItem
      note
      credit
      debit
      balance
    }
  }
`

/**
 * __useGetInstanceInventoryTransactionsQuery__
 *
 * To run a query within a React component, call `useGetInstanceInventoryTransactionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetInstanceInventoryTransactionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetInstanceInventoryTransactionsQuery({
 *   variables: {
 *      idProductInstance: // value for 'idProductInstance'
 *   },
 * });
 */
export function useGetInstanceInventoryTransactionsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetInstanceInventoryTransactionsQuery,
    GetInstanceInventoryTransactionsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetInstanceInventoryTransactionsQuery,
    GetInstanceInventoryTransactionsQueryVariables
  >(GetInstanceInventoryTransactionsDocument, options)
}
export function useGetInstanceInventoryTransactionsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetInstanceInventoryTransactionsQuery,
    GetInstanceInventoryTransactionsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetInstanceInventoryTransactionsQuery,
    GetInstanceInventoryTransactionsQueryVariables
  >(GetInstanceInventoryTransactionsDocument, options)
}
export type GetInstanceInventoryTransactionsQueryHookResult = ReturnType<
  typeof useGetInstanceInventoryTransactionsQuery
>
export type GetInstanceInventoryTransactionsLazyQueryHookResult = ReturnType<
  typeof useGetInstanceInventoryTransactionsLazyQuery
>
export type GetInstanceInventoryTransactionsQueryResult = Apollo.QueryResult<
  GetInstanceInventoryTransactionsQuery,
  GetInstanceInventoryTransactionsQueryVariables
>
export const GetInventoryTransactionTypesDocument = gql`
  query GetInventoryTransactionTypes {
    getGeneralParametersByCode(code: "PROTTI") {
      idGeneralParameter
      code
      name
      generalParameterValue {
        idGeneralParameterValue
        code
        name
      }
    }
  }
`

/**
 * __useGetInventoryTransactionTypesQuery__
 *
 * To run a query within a React component, call `useGetInventoryTransactionTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetInventoryTransactionTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetInventoryTransactionTypesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetInventoryTransactionTypesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetInventoryTransactionTypesQuery,
    GetInventoryTransactionTypesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetInventoryTransactionTypesQuery,
    GetInventoryTransactionTypesQueryVariables
  >(GetInventoryTransactionTypesDocument, options)
}
export function useGetInventoryTransactionTypesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetInventoryTransactionTypesQuery,
    GetInventoryTransactionTypesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetInventoryTransactionTypesQuery,
    GetInventoryTransactionTypesQueryVariables
  >(GetInventoryTransactionTypesDocument, options)
}
export type GetInventoryTransactionTypesQueryHookResult = ReturnType<
  typeof useGetInventoryTransactionTypesQuery
>
export type GetInventoryTransactionTypesLazyQueryHookResult = ReturnType<
  typeof useGetInventoryTransactionTypesLazyQuery
>
export type GetInventoryTransactionTypesQueryResult = Apollo.QueryResult<
  GetInventoryTransactionTypesQuery,
  GetInventoryTransactionTypesQueryVariables
>
export const GetInventoryTransactionsDocument = gql`
  query GetInventoryTransactions($idProductInstance: BUFFER!) {
    inventoryTransactions(idProductInstance: $idProductInstance) {
      idInventoryTransaction
      idOu
      idProductInstance
      date
      idInventoryTransactionType
      idReservation
      idReservationItem
      note
      credit
      debit
      balance
    }
  }
`

/**
 * __useGetInventoryTransactionsQuery__
 *
 * To run a query within a React component, call `useGetInventoryTransactionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetInventoryTransactionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetInventoryTransactionsQuery({
 *   variables: {
 *      idProductInstance: // value for 'idProductInstance'
 *   },
 * });
 */
export function useGetInventoryTransactionsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetInventoryTransactionsQuery,
    GetInventoryTransactionsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetInventoryTransactionsQuery, GetInventoryTransactionsQueryVariables>(
    GetInventoryTransactionsDocument,
    options
  )
}
export function useGetInventoryTransactionsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetInventoryTransactionsQuery,
    GetInventoryTransactionsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetInventoryTransactionsQuery, GetInventoryTransactionsQueryVariables>(
    GetInventoryTransactionsDocument,
    options
  )
}
export type GetInventoryTransactionsQueryHookResult = ReturnType<
  typeof useGetInventoryTransactionsQuery
>
export type GetInventoryTransactionsLazyQueryHookResult = ReturnType<
  typeof useGetInventoryTransactionsLazyQuery
>
export type GetInventoryTransactionsQueryResult = Apollo.QueryResult<
  GetInventoryTransactionsQuery,
  GetInventoryTransactionsQueryVariables
>
export const CreateProductInstancesDocument = gql`
  mutation CreateProductInstances($createProductInstanceInput: CreateProductInstanceInput!) {
    createProductInstance(createProductInstanceInput: $createProductInstanceInput) {
      idProductInstance
    }
  }
`
export type CreateProductInstancesMutationFn = Apollo.MutationFunction<
  CreateProductInstancesMutation,
  CreateProductInstancesMutationVariables
>

/**
 * __useCreateProductInstancesMutation__
 *
 * To run a mutation, you first call `useCreateProductInstancesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductInstancesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductInstancesMutation, { data, loading, error }] = useCreateProductInstancesMutation({
 *   variables: {
 *      createProductInstanceInput: // value for 'createProductInstanceInput'
 *   },
 * });
 */
export function useCreateProductInstancesMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateProductInstancesMutation,
    CreateProductInstancesMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateProductInstancesMutation,
    CreateProductInstancesMutationVariables
  >(CreateProductInstancesDocument, options)
}
export type CreateProductInstancesMutationHookResult = ReturnType<
  typeof useCreateProductInstancesMutation
>
export type CreateProductInstancesMutationResult =
  Apollo.MutationResult<CreateProductInstancesMutation>
export type CreateProductInstancesMutationOptions = Apollo.BaseMutationOptions<
  CreateProductInstancesMutation,
  CreateProductInstancesMutationVariables
>
export const DeleteProductInstanceDocument = gql`
  mutation DeleteProductInstance($deleteProductInstanceId: BUFFER!) {
    deleteProductInstance(id: $deleteProductInstanceId) {
      idProductInstance
    }
  }
`
export type DeleteProductInstanceMutationFn = Apollo.MutationFunction<
  DeleteProductInstanceMutation,
  DeleteProductInstanceMutationVariables
>

/**
 * __useDeleteProductInstanceMutation__
 *
 * To run a mutation, you first call `useDeleteProductInstanceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProductInstanceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProductInstanceMutation, { data, loading, error }] = useDeleteProductInstanceMutation({
 *   variables: {
 *      deleteProductInstanceId: // value for 'deleteProductInstanceId'
 *   },
 * });
 */
export function useDeleteProductInstanceMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteProductInstanceMutation,
    DeleteProductInstanceMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<DeleteProductInstanceMutation, DeleteProductInstanceMutationVariables>(
    DeleteProductInstanceDocument,
    options
  )
}
export type DeleteProductInstanceMutationHookResult = ReturnType<
  typeof useDeleteProductInstanceMutation
>
export type DeleteProductInstanceMutationResult =
  Apollo.MutationResult<DeleteProductInstanceMutation>
export type DeleteProductInstanceMutationOptions = Apollo.BaseMutationOptions<
  DeleteProductInstanceMutation,
  DeleteProductInstanceMutationVariables
>
export const GetProductInstanceDocument = gql`
  query GetProductInstance($productInstanceId: BUFFER!) {
    productInstance(id: $productInstanceId) {
      idProductInstance
      productSubFeatureItem1: productSubFeatureItem_productInstance_idProductSubFeatureItem1ToproductSubFeatureItem {
        idProductSubFeatureItem
      }
      productSubFeatureItem2: productSubFeatureItem_productInstance_idProductSubFeatureItem2ToproductSubFeatureItem {
        idProductSubFeatureItem
      }
      productSubFeatureItem3: productSubFeatureItem_productInstance_idProductSubFeatureItem3ToproductSubFeatureItem {
        idProductSubFeatureItem
      }
      productSubFeatureItem4: productSubFeatureItem_productInstance_idProductSubFeatureItem4ToproductSubFeatureItem {
        idProductSubFeatureItem
      }
      productSubFeatureItem5: productSubFeatureItem_productInstance_idProductSubFeatureItem5ToproductSubFeatureItem {
        idProductSubFeatureItem
      }
      productSubFeatureItem6: productSubFeatureItem_productInstance_idProductSubFeatureItem6ToproductSubFeatureItem {
        idProductSubFeatureItem
      }
      productSubFeatureItem7: productSubFeatureItem_productInstance_idProductSubFeatureItem7ToproductSubFeatureItem {
        idProductSubFeatureItem
      }
      productSubFeatureItem8: productSubFeatureItem_productInstance_idProductSubFeatureItem8ToproductSubFeatureItem {
        idProductSubFeatureItem
      }
      productSubFeatureItem9: productSubFeatureItem_productInstance_idProductSubFeatureItem9ToproductSubFeatureItem {
        idProductSubFeatureItem
      }
      productSubFeatureItem10: productSubFeatureItem_productInstance_idProductSubFeatureItem10ToproductSubFeatureItem {
        idProductSubFeatureItem
      }
    }
  }
`

/**
 * __useGetProductInstanceQuery__
 *
 * To run a query within a React component, call `useGetProductInstanceQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductInstanceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductInstanceQuery({
 *   variables: {
 *      productInstanceId: // value for 'productInstanceId'
 *   },
 * });
 */
export function useGetProductInstanceQuery(
  baseOptions: Apollo.QueryHookOptions<GetProductInstanceQuery, GetProductInstanceQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetProductInstanceQuery, GetProductInstanceQueryVariables>(
    GetProductInstanceDocument,
    options
  )
}
export function useGetProductInstanceLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetProductInstanceQuery,
    GetProductInstanceQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetProductInstanceQuery, GetProductInstanceQueryVariables>(
    GetProductInstanceDocument,
    options
  )
}
export type GetProductInstanceQueryHookResult = ReturnType<typeof useGetProductInstanceQuery>
export type GetProductInstanceLazyQueryHookResult = ReturnType<
  typeof useGetProductInstanceLazyQuery
>
export type GetProductInstanceQueryResult = Apollo.QueryResult<
  GetProductInstanceQuery,
  GetProductInstanceQueryVariables
>
export const GetProductInstancesDocument = gql`
  query GetProductInstances($createProductInstanceInput: CreateProductInstanceInput!) {
    productInstances(createProductInstanceInput: $createProductInstanceInput) {
      idProductInstance
      productSubFeatureItem1: productSubFeatureItem_productInstance_idProductSubFeatureItem1ToproductSubFeatureItem {
        idProductSubFeatureItem
      }
      productSubFeatureItem2: productSubFeatureItem_productInstance_idProductSubFeatureItem2ToproductSubFeatureItem {
        idProductSubFeatureItem
      }
      productSubFeatureItem3: productSubFeatureItem_productInstance_idProductSubFeatureItem3ToproductSubFeatureItem {
        idProductSubFeatureItem
      }
      productSubFeatureItem4: productSubFeatureItem_productInstance_idProductSubFeatureItem4ToproductSubFeatureItem {
        idProductSubFeatureItem
      }
      productSubFeatureItem5: productSubFeatureItem_productInstance_idProductSubFeatureItem5ToproductSubFeatureItem {
        idProductSubFeatureItem
      }
      productSubFeatureItem6: productSubFeatureItem_productInstance_idProductSubFeatureItem6ToproductSubFeatureItem {
        idProductSubFeatureItem
      }
      productSubFeatureItem7: productSubFeatureItem_productInstance_idProductSubFeatureItem7ToproductSubFeatureItem {
        idProductSubFeatureItem
      }
      productSubFeatureItem8: productSubFeatureItem_productInstance_idProductSubFeatureItem8ToproductSubFeatureItem {
        idProductSubFeatureItem
      }
      productSubFeatureItem9: productSubFeatureItem_productInstance_idProductSubFeatureItem9ToproductSubFeatureItem {
        idProductSubFeatureItem
      }
      productSubFeatureItem10: productSubFeatureItem_productInstance_idProductSubFeatureItem10ToproductSubFeatureItem {
        idProductSubFeatureItem
      }
    }
  }
`

/**
 * __useGetProductInstancesQuery__
 *
 * To run a query within a React component, call `useGetProductInstancesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductInstancesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductInstancesQuery({
 *   variables: {
 *      createProductInstanceInput: // value for 'createProductInstanceInput'
 *   },
 * });
 */
export function useGetProductInstancesQuery(
  baseOptions: Apollo.QueryHookOptions<GetProductInstancesQuery, GetProductInstancesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetProductInstancesQuery, GetProductInstancesQueryVariables>(
    GetProductInstancesDocument,
    options
  )
}
export function useGetProductInstancesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetProductInstancesQuery,
    GetProductInstancesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetProductInstancesQuery, GetProductInstancesQueryVariables>(
    GetProductInstancesDocument,
    options
  )
}
export type GetProductInstancesQueryHookResult = ReturnType<typeof useGetProductInstancesQuery>
export type GetProductInstancesLazyQueryHookResult = ReturnType<
  typeof useGetProductInstancesLazyQuery
>
export type GetProductInstancesQueryResult = Apollo.QueryResult<
  GetProductInstancesQuery,
  GetProductInstancesQueryVariables
>
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
export const GetProductCategoriesDocument = gql`
  query GetProductCategories {
    productCategories {
      data {
        idProductCategory
        name
        shortName
        idCategoryType
        categoryType
      }
      count
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
export const UpdateProductCategoryDocument = gql`
  mutation UpdateProductCategory($updateProductCategoryInput: UpdateProductCategoryInput!) {
    updateProductCategory(updateProductCategoryInput: $updateProductCategoryInput) {
      idProductCategory
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
  query GetProductFeatures($productCategory: BUFFER) {
    productFeatures(productCategory: $productCategory) {
      idProductFeature
      name
      shortName
      idProductCategory
      idProductFeatureType
      categoryName
      featureTypeName
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
 *      productCategory: // value for 'productCategory'
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
export const UpdateProductFeatureDocument = gql`
  mutation UpdateProductFeature($updateProductFeatureInput: UpdateProductFeatureInput!) {
    updateProductFeature(updateProductFeatureInput: $updateProductFeatureInput) {
      idProductFeature
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
export const CreateProductIdentificationDocument = gql`
  mutation CreateProductIdentification(
    $createProductIdentificationInput: CreateProductIdentificationInput!
  ) {
    createProductIdentification(
      createProductIdentificationInput: $createProductIdentificationInput
    ) {
      idProductIdentification
    }
  }
`
export type CreateProductIdentificationMutationFn = Apollo.MutationFunction<
  CreateProductIdentificationMutation,
  CreateProductIdentificationMutationVariables
>

/**
 * __useCreateProductIdentificationMutation__
 *
 * To run a mutation, you first call `useCreateProductIdentificationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductIdentificationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductIdentificationMutation, { data, loading, error }] = useCreateProductIdentificationMutation({
 *   variables: {
 *      createProductIdentificationInput: // value for 'createProductIdentificationInput'
 *   },
 * });
 */
export function useCreateProductIdentificationMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateProductIdentificationMutation,
    CreateProductIdentificationMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateProductIdentificationMutation,
    CreateProductIdentificationMutationVariables
  >(CreateProductIdentificationDocument, options)
}
export type CreateProductIdentificationMutationHookResult = ReturnType<
  typeof useCreateProductIdentificationMutation
>
export type CreateProductIdentificationMutationResult =
  Apollo.MutationResult<CreateProductIdentificationMutation>
export type CreateProductIdentificationMutationOptions = Apollo.BaseMutationOptions<
  CreateProductIdentificationMutation,
  CreateProductIdentificationMutationVariables
>
export const DeleteProductIdentificationDocument = gql`
  mutation DeleteProductIdentification($deleteProductIdentificationId: BUFFER!) {
    deleteProductIdentification(id: $deleteProductIdentificationId) {
      idProductIdentification
    }
  }
`
export type DeleteProductIdentificationMutationFn = Apollo.MutationFunction<
  DeleteProductIdentificationMutation,
  DeleteProductIdentificationMutationVariables
>

/**
 * __useDeleteProductIdentificationMutation__
 *
 * To run a mutation, you first call `useDeleteProductIdentificationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProductIdentificationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProductIdentificationMutation, { data, loading, error }] = useDeleteProductIdentificationMutation({
 *   variables: {
 *      deleteProductIdentificationId: // value for 'deleteProductIdentificationId'
 *   },
 * });
 */
export function useDeleteProductIdentificationMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteProductIdentificationMutation,
    DeleteProductIdentificationMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    DeleteProductIdentificationMutation,
    DeleteProductIdentificationMutationVariables
  >(DeleteProductIdentificationDocument, options)
}
export type DeleteProductIdentificationMutationHookResult = ReturnType<
  typeof useDeleteProductIdentificationMutation
>
export type DeleteProductIdentificationMutationResult =
  Apollo.MutationResult<DeleteProductIdentificationMutation>
export type DeleteProductIdentificationMutationOptions = Apollo.BaseMutationOptions<
  DeleteProductIdentificationMutation,
  DeleteProductIdentificationMutationVariables
>
export const GetProductIdentificationTypesDocument = gql`
  query GetProductIdentificationTypes {
    getGeneralParametersByCode(code: "PROIDE") {
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
 * __useGetProductIdentificationTypesQuery__
 *
 * To run a query within a React component, call `useGetProductIdentificationTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductIdentificationTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductIdentificationTypesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProductIdentificationTypesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetProductIdentificationTypesQuery,
    GetProductIdentificationTypesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetProductIdentificationTypesQuery,
    GetProductIdentificationTypesQueryVariables
  >(GetProductIdentificationTypesDocument, options)
}
export function useGetProductIdentificationTypesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetProductIdentificationTypesQuery,
    GetProductIdentificationTypesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetProductIdentificationTypesQuery,
    GetProductIdentificationTypesQueryVariables
  >(GetProductIdentificationTypesDocument, options)
}
export type GetProductIdentificationTypesQueryHookResult = ReturnType<
  typeof useGetProductIdentificationTypesQuery
>
export type GetProductIdentificationTypesLazyQueryHookResult = ReturnType<
  typeof useGetProductIdentificationTypesLazyQuery
>
export type GetProductIdentificationTypesQueryResult = Apollo.QueryResult<
  GetProductIdentificationTypesQuery,
  GetProductIdentificationTypesQueryVariables
>
export const GetProductIdentificationsDocument = gql`
  query GetProductIdentifications($idProduct: BUFFER!) {
    productIdentifications(idProduct: $idProduct) {
      idProductIdentification
      idProduct
      idProductIdentificationType
      productIdentificationType
      value
      productName
    }
  }
`

/**
 * __useGetProductIdentificationsQuery__
 *
 * To run a query within a React component, call `useGetProductIdentificationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductIdentificationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductIdentificationsQuery({
 *   variables: {
 *      idProduct: // value for 'idProduct'
 *   },
 * });
 */
export function useGetProductIdentificationsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetProductIdentificationsQuery,
    GetProductIdentificationsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetProductIdentificationsQuery, GetProductIdentificationsQueryVariables>(
    GetProductIdentificationsDocument,
    options
  )
}
export function useGetProductIdentificationsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetProductIdentificationsQuery,
    GetProductIdentificationsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetProductIdentificationsQuery,
    GetProductIdentificationsQueryVariables
  >(GetProductIdentificationsDocument, options)
}
export type GetProductIdentificationsQueryHookResult = ReturnType<
  typeof useGetProductIdentificationsQuery
>
export type GetProductIdentificationsLazyQueryHookResult = ReturnType<
  typeof useGetProductIdentificationsLazyQuery
>
export type GetProductIdentificationsQueryResult = Apollo.QueryResult<
  GetProductIdentificationsQuery,
  GetProductIdentificationsQueryVariables
>
export const UpdateProductIdentificationDocument = gql`
  mutation UpdateProductIdentification(
    $updateProductIdentificationInput: UpdateProductIdentificationInput!
  ) {
    updateProductIdentification(
      updateProductIdentificationInput: $updateProductIdentificationInput
    ) {
      idProductIdentification
    }
  }
`
export type UpdateProductIdentificationMutationFn = Apollo.MutationFunction<
  UpdateProductIdentificationMutation,
  UpdateProductIdentificationMutationVariables
>

/**
 * __useUpdateProductIdentificationMutation__
 *
 * To run a mutation, you first call `useUpdateProductIdentificationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProductIdentificationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProductIdentificationMutation, { data, loading, error }] = useUpdateProductIdentificationMutation({
 *   variables: {
 *      updateProductIdentificationInput: // value for 'updateProductIdentificationInput'
 *   },
 * });
 */
export function useUpdateProductIdentificationMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateProductIdentificationMutation,
    UpdateProductIdentificationMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    UpdateProductIdentificationMutation,
    UpdateProductIdentificationMutationVariables
  >(UpdateProductIdentificationDocument, options)
}
export type UpdateProductIdentificationMutationHookResult = ReturnType<
  typeof useUpdateProductIdentificationMutation
>
export type UpdateProductIdentificationMutationResult =
  Apollo.MutationResult<UpdateProductIdentificationMutation>
export type UpdateProductIdentificationMutationOptions = Apollo.BaseMutationOptions<
  UpdateProductIdentificationMutation,
  UpdateProductIdentificationMutationVariables
>
export const CreateProductProductCategoryDocument = gql`
  mutation CreateProductProductCategory(
    $createProductProductCategoryInput: CreateProductProductCategoryInput!
  ) {
    createProductProductCategory(
      createProductProductCategoryInput: $createProductProductCategoryInput
    ) {
      idProduct
      idProductCategory
    }
  }
`
export type CreateProductProductCategoryMutationFn = Apollo.MutationFunction<
  CreateProductProductCategoryMutation,
  CreateProductProductCategoryMutationVariables
>

/**
 * __useCreateProductProductCategoryMutation__
 *
 * To run a mutation, you first call `useCreateProductProductCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductProductCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductProductCategoryMutation, { data, loading, error }] = useCreateProductProductCategoryMutation({
 *   variables: {
 *      createProductProductCategoryInput: // value for 'createProductProductCategoryInput'
 *   },
 * });
 */
export function useCreateProductProductCategoryMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateProductProductCategoryMutation,
    CreateProductProductCategoryMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateProductProductCategoryMutation,
    CreateProductProductCategoryMutationVariables
  >(CreateProductProductCategoryDocument, options)
}
export type CreateProductProductCategoryMutationHookResult = ReturnType<
  typeof useCreateProductProductCategoryMutation
>
export type CreateProductProductCategoryMutationResult =
  Apollo.MutationResult<CreateProductProductCategoryMutation>
export type CreateProductProductCategoryMutationOptions = Apollo.BaseMutationOptions<
  CreateProductProductCategoryMutation,
  CreateProductProductCategoryMutationVariables
>
export const DeleteProductProductCategoryDocument = gql`
  mutation DeleteProductProductCategory($idProduct: BUFFER!, $idProductCategory: BUFFER!) {
    deleteProductProductCategory(idProduct: $idProduct, idProductCategory: $idProductCategory) {
      idProduct
      idProductCategory
    }
  }
`
export type DeleteProductProductCategoryMutationFn = Apollo.MutationFunction<
  DeleteProductProductCategoryMutation,
  DeleteProductProductCategoryMutationVariables
>

/**
 * __useDeleteProductProductCategoryMutation__
 *
 * To run a mutation, you first call `useDeleteProductProductCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProductProductCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProductProductCategoryMutation, { data, loading, error }] = useDeleteProductProductCategoryMutation({
 *   variables: {
 *      idProduct: // value for 'idProduct'
 *      idProductCategory: // value for 'idProductCategory'
 *   },
 * });
 */
export function useDeleteProductProductCategoryMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteProductProductCategoryMutation,
    DeleteProductProductCategoryMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    DeleteProductProductCategoryMutation,
    DeleteProductProductCategoryMutationVariables
  >(DeleteProductProductCategoryDocument, options)
}
export type DeleteProductProductCategoryMutationHookResult = ReturnType<
  typeof useDeleteProductProductCategoryMutation
>
export type DeleteProductProductCategoryMutationResult =
  Apollo.MutationResult<DeleteProductProductCategoryMutation>
export type DeleteProductProductCategoryMutationOptions = Apollo.BaseMutationOptions<
  DeleteProductProductCategoryMutation,
  DeleteProductProductCategoryMutationVariables
>
export const GetProductProductCategoriesDocument = gql`
  query GetProductProductCategories($idProduct: BUFFER!) {
    productProductCategories(idProduct: $idProduct) {
      idProduct
      idProductCategory
      categoryName
      productName
    }
  }
`

/**
 * __useGetProductProductCategoriesQuery__
 *
 * To run a query within a React component, call `useGetProductProductCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductProductCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductProductCategoriesQuery({
 *   variables: {
 *      idProduct: // value for 'idProduct'
 *   },
 * });
 */
export function useGetProductProductCategoriesQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetProductProductCategoriesQuery,
    GetProductProductCategoriesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetProductProductCategoriesQuery,
    GetProductProductCategoriesQueryVariables
  >(GetProductProductCategoriesDocument, options)
}
export function useGetProductProductCategoriesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetProductProductCategoriesQuery,
    GetProductProductCategoriesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetProductProductCategoriesQuery,
    GetProductProductCategoriesQueryVariables
  >(GetProductProductCategoriesDocument, options)
}
export type GetProductProductCategoriesQueryHookResult = ReturnType<
  typeof useGetProductProductCategoriesQuery
>
export type GetProductProductCategoriesLazyQueryHookResult = ReturnType<
  typeof useGetProductProductCategoriesLazyQuery
>
export type GetProductProductCategoriesQueryResult = Apollo.QueryResult<
  GetProductProductCategoriesQuery,
  GetProductProductCategoriesQueryVariables
>
export const CreateProductProductFeatureDocument = gql`
  mutation CreateProductProductFeature(
    $createProductProductFeatureInput: CreateProductProductFeatureInput!
  ) {
    createProductProductFeature(
      createProductProductFeatureInput: $createProductProductFeatureInput
    ) {
      idProductProductFeature
    }
  }
`
export type CreateProductProductFeatureMutationFn = Apollo.MutationFunction<
  CreateProductProductFeatureMutation,
  CreateProductProductFeatureMutationVariables
>

/**
 * __useCreateProductProductFeatureMutation__
 *
 * To run a mutation, you first call `useCreateProductProductFeatureMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductProductFeatureMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductProductFeatureMutation, { data, loading, error }] = useCreateProductProductFeatureMutation({
 *   variables: {
 *      createProductProductFeatureInput: // value for 'createProductProductFeatureInput'
 *   },
 * });
 */
export function useCreateProductProductFeatureMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateProductProductFeatureMutation,
    CreateProductProductFeatureMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateProductProductFeatureMutation,
    CreateProductProductFeatureMutationVariables
  >(CreateProductProductFeatureDocument, options)
}
export type CreateProductProductFeatureMutationHookResult = ReturnType<
  typeof useCreateProductProductFeatureMutation
>
export type CreateProductProductFeatureMutationResult =
  Apollo.MutationResult<CreateProductProductFeatureMutation>
export type CreateProductProductFeatureMutationOptions = Apollo.BaseMutationOptions<
  CreateProductProductFeatureMutation,
  CreateProductProductFeatureMutationVariables
>
export const DeleteProductProductFeatureDocument = gql`
  mutation DeleteProductProductFeature($deleteProductProductFeatureId: BUFFER!) {
    deleteProductProductFeature(id: $deleteProductProductFeatureId) {
      idProductProductFeature
    }
  }
`
export type DeleteProductProductFeatureMutationFn = Apollo.MutationFunction<
  DeleteProductProductFeatureMutation,
  DeleteProductProductFeatureMutationVariables
>

/**
 * __useDeleteProductProductFeatureMutation__
 *
 * To run a mutation, you first call `useDeleteProductProductFeatureMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProductProductFeatureMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProductProductFeatureMutation, { data, loading, error }] = useDeleteProductProductFeatureMutation({
 *   variables: {
 *      deleteProductProductFeatureId: // value for 'deleteProductProductFeatureId'
 *   },
 * });
 */
export function useDeleteProductProductFeatureMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteProductProductFeatureMutation,
    DeleteProductProductFeatureMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    DeleteProductProductFeatureMutation,
    DeleteProductProductFeatureMutationVariables
  >(DeleteProductProductFeatureDocument, options)
}
export type DeleteProductProductFeatureMutationHookResult = ReturnType<
  typeof useDeleteProductProductFeatureMutation
>
export type DeleteProductProductFeatureMutationResult =
  Apollo.MutationResult<DeleteProductProductFeatureMutation>
export type DeleteProductProductFeatureMutationOptions = Apollo.BaseMutationOptions<
  DeleteProductProductFeatureMutation,
  DeleteProductProductFeatureMutationVariables
>
export const GetProductProductFeaturesDocument = gql`
  query GetProductProductFeatures($productId: BUFFER!) {
    productProductFeatures(id: $productId) {
      idProductProductFeature
      idProduct
      idProductFeature
      value
      productName
      featureName
    }
  }
`

/**
 * __useGetProductProductFeaturesQuery__
 *
 * To run a query within a React component, call `useGetProductProductFeaturesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductProductFeaturesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductProductFeaturesQuery({
 *   variables: {
 *      productId: // value for 'productId'
 *   },
 * });
 */
export function useGetProductProductFeaturesQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetProductProductFeaturesQuery,
    GetProductProductFeaturesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetProductProductFeaturesQuery, GetProductProductFeaturesQueryVariables>(
    GetProductProductFeaturesDocument,
    options
  )
}
export function useGetProductProductFeaturesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetProductProductFeaturesQuery,
    GetProductProductFeaturesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetProductProductFeaturesQuery,
    GetProductProductFeaturesQueryVariables
  >(GetProductProductFeaturesDocument, options)
}
export type GetProductProductFeaturesQueryHookResult = ReturnType<
  typeof useGetProductProductFeaturesQuery
>
export type GetProductProductFeaturesLazyQueryHookResult = ReturnType<
  typeof useGetProductProductFeaturesLazyQuery
>
export type GetProductProductFeaturesQueryResult = Apollo.QueryResult<
  GetProductProductFeaturesQuery,
  GetProductProductFeaturesQueryVariables
>
export const UpdateProductProductFeatureDocument = gql`
  mutation UpdateProductProductFeature(
    $updateProductProductFeatureInput: UpdateProductProductFeatureInput!
  ) {
    updateProductProductFeature(
      updateProductProductFeatureInput: $updateProductProductFeatureInput
    ) {
      idProductProductFeature
    }
  }
`
export type UpdateProductProductFeatureMutationFn = Apollo.MutationFunction<
  UpdateProductProductFeatureMutation,
  UpdateProductProductFeatureMutationVariables
>

/**
 * __useUpdateProductProductFeatureMutation__
 *
 * To run a mutation, you first call `useUpdateProductProductFeatureMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProductProductFeatureMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProductProductFeatureMutation, { data, loading, error }] = useUpdateProductProductFeatureMutation({
 *   variables: {
 *      updateProductProductFeatureInput: // value for 'updateProductProductFeatureInput'
 *   },
 * });
 */
export function useUpdateProductProductFeatureMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateProductProductFeatureMutation,
    UpdateProductProductFeatureMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    UpdateProductProductFeatureMutation,
    UpdateProductProductFeatureMutationVariables
  >(UpdateProductProductFeatureDocument, options)
}
export type UpdateProductProductFeatureMutationHookResult = ReturnType<
  typeof useUpdateProductProductFeatureMutation
>
export type UpdateProductProductFeatureMutationResult =
  Apollo.MutationResult<UpdateProductProductFeatureMutation>
export type UpdateProductProductFeatureMutationOptions = Apollo.BaseMutationOptions<
  UpdateProductProductFeatureMutation,
  UpdateProductProductFeatureMutationVariables
>
export const CreateProductProductSubFeatureDocument = gql`
  mutation CreateProductProductSubFeature(
    $createProductProductSubFeatureItemInput: CreateProductProductSubFeatureInput!
  ) {
    createProductProductSubFeature(
      createProductProductSubFeatureItemInput: $createProductProductSubFeatureItemInput
    ) {
      idProduct
      idProductSubFeature
    }
  }
`
export type CreateProductProductSubFeatureMutationFn = Apollo.MutationFunction<
  CreateProductProductSubFeatureMutation,
  CreateProductProductSubFeatureMutationVariables
>

/**
 * __useCreateProductProductSubFeatureMutation__
 *
 * To run a mutation, you first call `useCreateProductProductSubFeatureMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductProductSubFeatureMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductProductSubFeatureMutation, { data, loading, error }] = useCreateProductProductSubFeatureMutation({
 *   variables: {
 *      createProductProductSubFeatureItemInput: // value for 'createProductProductSubFeatureItemInput'
 *   },
 * });
 */
export function useCreateProductProductSubFeatureMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateProductProductSubFeatureMutation,
    CreateProductProductSubFeatureMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateProductProductSubFeatureMutation,
    CreateProductProductSubFeatureMutationVariables
  >(CreateProductProductSubFeatureDocument, options)
}
export type CreateProductProductSubFeatureMutationHookResult = ReturnType<
  typeof useCreateProductProductSubFeatureMutation
>
export type CreateProductProductSubFeatureMutationResult =
  Apollo.MutationResult<CreateProductProductSubFeatureMutation>
export type CreateProductProductSubFeatureMutationOptions = Apollo.BaseMutationOptions<
  CreateProductProductSubFeatureMutation,
  CreateProductProductSubFeatureMutationVariables
>
export const DeleteProductProductSubFeatureDocument = gql`
  mutation DeleteProductProductSubFeature($deleteProductProductSubFeatureId: BUFFER!) {
    deleteProductProductSubFeature(id: $deleteProductProductSubFeatureId) {
      idProductProductSubFeature
    }
  }
`
export type DeleteProductProductSubFeatureMutationFn = Apollo.MutationFunction<
  DeleteProductProductSubFeatureMutation,
  DeleteProductProductSubFeatureMutationVariables
>

/**
 * __useDeleteProductProductSubFeatureMutation__
 *
 * To run a mutation, you first call `useDeleteProductProductSubFeatureMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProductProductSubFeatureMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProductProductSubFeatureMutation, { data, loading, error }] = useDeleteProductProductSubFeatureMutation({
 *   variables: {
 *      deleteProductProductSubFeatureId: // value for 'deleteProductProductSubFeatureId'
 *   },
 * });
 */
export function useDeleteProductProductSubFeatureMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteProductProductSubFeatureMutation,
    DeleteProductProductSubFeatureMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    DeleteProductProductSubFeatureMutation,
    DeleteProductProductSubFeatureMutationVariables
  >(DeleteProductProductSubFeatureDocument, options)
}
export type DeleteProductProductSubFeatureMutationHookResult = ReturnType<
  typeof useDeleteProductProductSubFeatureMutation
>
export type DeleteProductProductSubFeatureMutationResult =
  Apollo.MutationResult<DeleteProductProductSubFeatureMutation>
export type DeleteProductProductSubFeatureMutationOptions = Apollo.BaseMutationOptions<
  DeleteProductProductSubFeatureMutation,
  DeleteProductProductSubFeatureMutationVariables
>
export const GetProductProductSubFeaturesDocument = gql`
  query GetProductProductSubFeatures($idProduct: BUFFER!) {
    productProductSubFeatures(idProduct: $idProduct) {
      idProductProductSubFeature
      idProduct
      productName
      idProductSubFeature
      productSubFeature
    }
  }
`

/**
 * __useGetProductProductSubFeaturesQuery__
 *
 * To run a query within a React component, call `useGetProductProductSubFeaturesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductProductSubFeaturesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductProductSubFeaturesQuery({
 *   variables: {
 *      idProduct: // value for 'idProduct'
 *   },
 * });
 */
export function useGetProductProductSubFeaturesQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetProductProductSubFeaturesQuery,
    GetProductProductSubFeaturesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetProductProductSubFeaturesQuery,
    GetProductProductSubFeaturesQueryVariables
  >(GetProductProductSubFeaturesDocument, options)
}
export function useGetProductProductSubFeaturesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetProductProductSubFeaturesQuery,
    GetProductProductSubFeaturesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetProductProductSubFeaturesQuery,
    GetProductProductSubFeaturesQueryVariables
  >(GetProductProductSubFeaturesDocument, options)
}
export type GetProductProductSubFeaturesQueryHookResult = ReturnType<
  typeof useGetProductProductSubFeaturesQuery
>
export type GetProductProductSubFeaturesLazyQueryHookResult = ReturnType<
  typeof useGetProductProductSubFeaturesLazyQuery
>
export type GetProductProductSubFeaturesQueryResult = Apollo.QueryResult<
  GetProductProductSubFeaturesQuery,
  GetProductProductSubFeaturesQueryVariables
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
      idProductCategory
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
    productSubFeatures {
      idProductSubFeature
      code
      name
      shortName
      idProductSubFeatureType
      productSubFeatureType
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
export const CreateProductDocument = gql`
  mutation CreateProduct($createProductInput: CreateProductInput!) {
    createProduct(createProductInput: $createProductInput) {
      idProduct
    }
  }
`
export type CreateProductMutationFn = Apollo.MutationFunction<
  CreateProductMutation,
  CreateProductMutationVariables
>

/**
 * __useCreateProductMutation__
 *
 * To run a mutation, you first call `useCreateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductMutation, { data, loading, error }] = useCreateProductMutation({
 *   variables: {
 *      createProductInput: // value for 'createProductInput'
 *   },
 * });
 */
export function useCreateProductMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateProductMutation, CreateProductMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateProductMutation, CreateProductMutationVariables>(
    CreateProductDocument,
    options
  )
}
export type CreateProductMutationHookResult = ReturnType<typeof useCreateProductMutation>
export type CreateProductMutationResult = Apollo.MutationResult<CreateProductMutation>
export type CreateProductMutationOptions = Apollo.BaseMutationOptions<
  CreateProductMutation,
  CreateProductMutationVariables
>
export const DeleteProductDocument = gql`
  mutation DeleteProduct($deleteProductId: BUFFER!, $inactiveFlag: Boolean!) {
    deleteProduct(id: $deleteProductId, inactiveFlag: $inactiveFlag) {
      idProduct
    }
  }
`
export type DeleteProductMutationFn = Apollo.MutationFunction<
  DeleteProductMutation,
  DeleteProductMutationVariables
>

/**
 * __useDeleteProductMutation__
 *
 * To run a mutation, you first call `useDeleteProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProductMutation, { data, loading, error }] = useDeleteProductMutation({
 *   variables: {
 *      deleteProductId: // value for 'deleteProductId'
 *      inactiveFlag: // value for 'inactiveFlag'
 *   },
 * });
 */
export function useDeleteProductMutation(
  baseOptions?: Apollo.MutationHookOptions<DeleteProductMutation, DeleteProductMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<DeleteProductMutation, DeleteProductMutationVariables>(
    DeleteProductDocument,
    options
  )
}
export type DeleteProductMutationHookResult = ReturnType<typeof useDeleteProductMutation>
export type DeleteProductMutationResult = Apollo.MutationResult<DeleteProductMutation>
export type DeleteProductMutationOptions = Apollo.BaseMutationOptions<
  DeleteProductMutation,
  DeleteProductMutationVariables
>
export const GetEntitiesDocument = gql`
  query GetEntities($filter: GetEntitiesInput!) {
    getEntities(filter: $filter) {
      info {
        count
      }
      results {
        idEntity
        name
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
export const GetProductTypesDocument = gql`
  query GetProductTypes {
    getGeneralParametersByCode(code: "PROPRO") {
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
 * __useGetProductTypesQuery__
 *
 * To run a query within a React component, call `useGetProductTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductTypesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProductTypesQuery(
  baseOptions?: Apollo.QueryHookOptions<GetProductTypesQuery, GetProductTypesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetProductTypesQuery, GetProductTypesQueryVariables>(
    GetProductTypesDocument,
    options
  )
}
export function useGetProductTypesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetProductTypesQuery, GetProductTypesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetProductTypesQuery, GetProductTypesQueryVariables>(
    GetProductTypesDocument,
    options
  )
}
export type GetProductTypesQueryHookResult = ReturnType<typeof useGetProductTypesQuery>
export type GetProductTypesLazyQueryHookResult = ReturnType<typeof useGetProductTypesLazyQuery>
export type GetProductTypesQueryResult = Apollo.QueryResult<
  GetProductTypesQuery,
  GetProductTypesQueryVariables
>
export const GetProductDocument = gql`
  query GetProduct($productId: BUFFER!) {
    product(id: $productId) {
      idProduct
      code
      name
      shortName
      idProductType
      idEntitySupplier
      inventoryFlag
      internationalCodeSunat
      operationalCodeSunat
      productTypeSunat
      unitSunat
    }
  }
`

/**
 * __useGetProductQuery__
 *
 * To run a query within a React component, call `useGetProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductQuery({
 *   variables: {
 *      productId: // value for 'productId'
 *   },
 * });
 */
export function useGetProductQuery(
  baseOptions: Apollo.QueryHookOptions<GetProductQuery, GetProductQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetProductQuery, GetProductQueryVariables>(GetProductDocument, options)
}
export function useGetProductLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetProductQuery, GetProductQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetProductQuery, GetProductQueryVariables>(GetProductDocument, options)
}
export type GetProductQueryHookResult = ReturnType<typeof useGetProductQuery>
export type GetProductLazyQueryHookResult = ReturnType<typeof useGetProductLazyQuery>
export type GetProductQueryResult = Apollo.QueryResult<GetProductQuery, GetProductQueryVariables>
export const GetProductsDocument = gql`
  query GetProducts($productsId: BUFFER!) {
    products(id: $productsId) {
      code
      name
      shortName
      idProduct
      idProductType
      productType
      idEntitySupplier
      supplierName
      inventoryFlag
    }
  }
`

/**
 * __useGetProductsQuery__
 *
 * To run a query within a React component, call `useGetProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductsQuery({
 *   variables: {
 *      productsId: // value for 'productsId'
 *   },
 * });
 */
export function useGetProductsQuery(
  baseOptions: Apollo.QueryHookOptions<GetProductsQuery, GetProductsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, options)
}
export function useGetProductsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetProductsQuery, GetProductsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetProductsQuery, GetProductsQueryVariables>(
    GetProductsDocument,
    options
  )
}
export type GetProductsQueryHookResult = ReturnType<typeof useGetProductsQuery>
export type GetProductsLazyQueryHookResult = ReturnType<typeof useGetProductsLazyQuery>
export type GetProductsQueryResult = Apollo.QueryResult<GetProductsQuery, GetProductsQueryVariables>
export const UpdateProductDocument = gql`
  mutation UpdateProduct($updateProductInput: UpdateProductInput!) {
    updateProduct(updateProductInput: $updateProductInput) {
      idProduct
    }
  }
`
export type UpdateProductMutationFn = Apollo.MutationFunction<
  UpdateProductMutation,
  UpdateProductMutationVariables
>

/**
 * __useUpdateProductMutation__
 *
 * To run a mutation, you first call `useUpdateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProductMutation, { data, loading, error }] = useUpdateProductMutation({
 *   variables: {
 *      updateProductInput: // value for 'updateProductInput'
 *   },
 * });
 */
export function useUpdateProductMutation(
  baseOptions?: Apollo.MutationHookOptions<UpdateProductMutation, UpdateProductMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<UpdateProductMutation, UpdateProductMutationVariables>(
    UpdateProductDocument,
    options
  )
}
export type UpdateProductMutationHookResult = ReturnType<typeof useUpdateProductMutation>
export type UpdateProductMutationResult = Apollo.MutationResult<UpdateProductMutation>
export type UpdateProductMutationOptions = Apollo.BaseMutationOptions<
  UpdateProductMutation,
  UpdateProductMutationVariables
>
