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

export type CashierTransactionItem = {
  __typename?: 'CashierTransactionItem'
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
  exchangeRate1?: Maybe<Scalars['Float']>
  exchangeRate2?: Maybe<Scalars['Float']>
  exchangeRate3?: Maybe<Scalars['Float']>
  idCashierTransaction?: Maybe<Scalars['BUFFER']>
  idCashierTransactionItem: Scalars['BUFFER']
  idCashierTransactionItemType?: Maybe<Scalars['BUFFER']>
  idCashierTransactionItemTypeName?: Maybe<Scalars['String']>
  idCurrency1?: Maybe<Scalars['BUFFER']>
  idCurrency2?: Maybe<Scalars['BUFFER']>
  idCurrency3?: Maybe<Scalars['BUFFER']>
  idDailyCashier?: Maybe<Scalars['BUFFER']>
  idDocumentItemPayment?: Maybe<Scalars['BUFFER']>
  idDocumentItemReservation?: Maybe<Scalars['BUFFER']>
  idDocumentPayment?: Maybe<Scalars['BUFFER']>
  idDocumentReservation?: Maybe<Scalars['BUFFER']>
  idOu?: Maybe<Scalars['BUFFER']>
  idReservation?: Maybe<Scalars['BUFFER']>
  idReservationItem?: Maybe<Scalars['BUFFER']>
  idStatus?: Maybe<Scalars['String']>
  idUserCreate: Scalars['BUFFER']
  idUserUpdate: Scalars['BUFFER']
  item: Scalars['Float']
  updateAt: Scalars['DateTime']
}

export type CashierTransactionItemView = {
  __typename?: 'CashierTransactionItemView'
  SerialDcoument?: Maybe<Scalars['String']>
  amount1?: Maybe<Scalars['Float']>
  date: Scalars['DateTime']
  description?: Maybe<Scalars['String']>
  idCashierTransactionItem: Scalars['BUFFER']
  idCashierTransactionItemType?: Maybe<Scalars['BUFFER']>
  idCashierTransactionItemTypeName?: Maybe<Scalars['String']>
  idCurrency1?: Maybe<Scalars['BUFFER']>
  idDocumentItemPayment?: Maybe<Scalars['BUFFER']>
  idDocumentPayment?: Maybe<Scalars['BUFFER']>
  idReservation?: Maybe<Scalars['BUFFER']>
  idReservationItem?: Maybe<Scalars['BUFFER']>
  idStatus?: Maybe<Scalars['String']>
  idUserUpdate: Scalars['BUFFER']
  numberDocument?: Maybe<Scalars['String']>
  updateAt: Scalars['DateTime']
}

export type CashierTransactionReservationItem = {
  __typename?: 'CashierTransactionReservationItem'
  IdRelatedProfit?: Maybe<Scalars['BUFFER']>
  amount1?: Maybe<Scalars['Float']>
  amount2?: Maybe<Scalars['Float']>
  amount3?: Maybe<Scalars['Float']>
  amountTotal?: Maybe<Scalars['Float']>
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
  idStatus?: Maybe<Scalars['String']>
  idUserCreate?: Maybe<Scalars['BUFFER']>
  idUserUpdate?: Maybe<Scalars['BUFFER']>
  idcurrency2?: Maybe<Scalars['BUFFER']>
  isProfit?: Maybe<Scalars['String']>
  profitPercentage1?: Maybe<Scalars['Float']>
  purchasePrice1?: Maybe<Scalars['Float']>
  sellingPrice1?: Maybe<Scalars['Float']>
  sellingValue1?: Maybe<Scalars['Float']>
  taxesAmount1?: Maybe<Scalars['Float']>
  taxesPercentage?: Maybe<Scalars['Float']>
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
  description: Scalars['String']
  idPaymentPercent?: InputMaybe<Scalars['BUFFER']>
  idReservation: Scalars['BUFFER']
  idReservationItem: Scalars['BUFFER']
  item: Scalars['Float']
  paymentAmount: Scalars['Float']
  pendingPayment: Scalars['Float']
  valuePaymentPercent: Scalars['Float']
}

export type CreateCashierTransactionReservationItemInput = {
  IdRelatedProfit: Scalars['BUFFER']
  amount3?: InputMaybe<Scalars['Float']>
  amountTotal?: InputMaybe<Scalars['Float']>
  description: Scalars['String']
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
  isProfit: Scalars['String']
  profitPercentage1?: InputMaybe<Scalars['Float']>
  purchasePrice1?: InputMaybe<Scalars['Float']>
  sellingPrice1?: InputMaybe<Scalars['Float']>
  sellingValue1?: InputMaybe<Scalars['Float']>
  taxesAmount1?: InputMaybe<Scalars['Float']>
  taxesPercentage?: InputMaybe<Scalars['Float']>
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
  item: Scalars['Float']
  numberDocumentTransaction: Scalars['String']
  paymentAmount: Scalars['Float']
  paymentGlosaAndNumber: Scalars['String']
}

export type CreateDocumentResponseEntity = {
  __typename?: 'CreateDocumentResponseEntity'
  CDR?: Maybe<Scalars['String']>
  CODRESPUESTA?: Maybe<Scalars['String']>
  MENSAJE?: Maybe<Scalars['String']>
  NOMBRE?: Maybe<Scalars['String']>
  PDF?: Maybe<Scalars['String']>
  QR?: Maybe<Scalars['String']>
  QR_VALOR?: Maybe<Scalars['String']>
  RGBCOLOR_BACK?: Maybe<Scalars['String']>
  RGBCOLOR_FORECOLOR?: Maybe<Scalars['String']>
  TICKET?: Maybe<Scalars['String']>
  TYPE?: Maybe<Scalars['String']>
  XML?: Maybe<Scalars['String']>
  idDocument?: Maybe<Scalars['BUFFER']>
}

export type CreateDocumentSerialValueInput = {
  Serial: Scalars['String']
  idDocumentType: Scalars['BUFFER']
  idOu: Scalars['BUFFER']
  idUser: Scalars['BUFFER']
}

export type CreateDocumentValueInput = {
  CLIENTE_DIRECCION?: InputMaybe<Scalars['String']>
  CLIENTE_NOMBRE_RAZON_SOCIAL?: InputMaybe<Scalars['String']>
  CLIENTE_NUMERO_DOCUNENTO?: InputMaybe<Scalars['String']>
  CLIENTE_TIPO_DOCUMENTO?: InputMaybe<Scalars['String']>
  EMISOR_DIRECCION?: InputMaybe<Scalars['String']>
  EMISOR_RAZON_SOCIAL?: InputMaybe<Scalars['String']>
  EMISOR_RUC?: InputMaybe<Scalars['String']>
  amount3?: InputMaybe<Scalars['Float']>
  date: Scalars['DateTime']
  description: Scalars['String']
  exchangeRate1?: InputMaybe<Scalars['Float']>
  exchangeRate3?: InputMaybe<Scalars['Float']>
  idBankAccount?: InputMaybe<Scalars['BUFFER']>
  idCashierTransaction?: InputMaybe<Scalars['BUFFER']>
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
  endDate?: InputMaybe<Scalars['DateTime']>
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

export type CreatePaymentResponseEntity = {
  __typename?: 'CreatePaymentResponseEntity'
  CDR?: Maybe<Scalars['String']>
  CODRESPUESTA?: Maybe<Scalars['String']>
  MENSAJE?: Maybe<Scalars['String']>
  NOMBRE?: Maybe<Scalars['String']>
  PDF?: Maybe<Scalars['String']>
  QR?: Maybe<Scalars['String']>
  QR_VALOR?: Maybe<Scalars['String']>
  RGBCOLOR_BACK?: Maybe<Scalars['String']>
  RGBCOLOR_FORECOLOR?: Maybe<Scalars['String']>
  TICKET?: Maybe<Scalars['String']>
  TYPE?: Maybe<Scalars['String']>
  XML?: Maybe<Scalars['String']>
  idDocument?: Maybe<Scalars['BUFFER']>
}

export type CreatePaymentValueInput = {
  CLIENTE_DIRECCION?: InputMaybe<Scalars['String']>
  CLIENTE_NOMBRE_RAZON_SOCIAL?: InputMaybe<Scalars['String']>
  CLIENTE_NUMERO_DOCUNENTO?: InputMaybe<Scalars['String']>
  CLIENTE_TIPO_DOCUMENTO?: InputMaybe<Scalars['String']>
  EMISOR_DIRECCION?: InputMaybe<Scalars['String']>
  EMISOR_RAZON_SOCIAL?: InputMaybe<Scalars['String']>
  EMISOR_RUC?: InputMaybe<Scalars['String']>
  datePayment: Scalars['DateTime']
  idCashierTransaction: Scalars['BUFFER']
  idCreditNote?: InputMaybe<Scalars['BUFFER']>
  idCreditNoteName: Scalars['String']
  idCurrency1: Scalars['BUFFER']
  idCurrency2: Scalars['BUFFER']
  idCurrency3: Scalars['BUFFER']
  idCurrencyMN: Scalars['BUFFER']
  idDocumentStatementTypeBalIniDay: Scalars['BUFFER']
  idDocumentStatementTypeBalIniDoc: Scalars['BUFFER']
  idDocumentStatementTypeBalIniMon: Scalars['BUFFER']
  idDocumentStatementTypeBalIniYear: Scalars['BUFFER']
  idEntity: Scalars['BUFFER']
  idInvoice?: InputMaybe<Scalars['BUFFER']>
  idInvoiceName: Scalars['String']
  idOu: Scalars['BUFFER']
  idUser: Scalars['BUFFER']
  note: Scalars['String']
  paymentItem: Array<CreateDocumentItemValueInput>
  reservationItem: Array<CreateCartReservationItemValueInput>
}

export type CreateProductCategoryInput = {
  code: Scalars['String']
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

export type CreateReservationPassengerInput = {
  idOu: Scalars['BUFFER']
  idPassenger: Array<Scalars['BUFFER']>
  idReservation: Scalars['BUFFER']
  idUserCreate: Scalars['BUFFER']
}

export type CreateReservationRepoDocumentInput = {
  idOu: Scalars['BUFFER']
  idReservation: Scalars['BUFFER']
  idUserCreate: Scalars['BUFFER']
  name: Scalars['String']
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

export type DeleteCashierTransactionEntity = {
  __typename?: 'DeleteCashierTransactionEntity'
  count?: Maybe<Scalars['Float']>
}

export type DeleteCashierTransactionReservarionItemEntity = {
  __typename?: 'DeleteCashierTransactionReservarionItemEntity'
  count?: Maybe<Scalars['Float']>
}

export type DeleteCashierTransactionValueInput = {
  idCashierTransaction: Scalars['BUFFER']
  idOu: Scalars['BUFFER']
  idUser: Scalars['BUFFER']
}

export type DeleteContactInput = {
  idContact: Scalars['BUFFER']
}

export type DeleteCreateCashierTransactionReservationItemInput = {
  idCashierTransaction: Scalars['BUFFER']
  idReservationItem: Scalars['BUFFER']
  idUser?: InputMaybe<Scalars['BUFFER']>
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

export type FullEntityOutput = {
  __typename?: 'FullEntityOutput'
  address: Address
  businessName: Scalars['String']
  commercialName: Scalars['String']
  currencyType: Scalars['String']
  documentNumber: Scalars['String']
  documentType: Scalars['String']
  geolocSunat?: Maybe<Scalars['String']>
  igv: Scalars['Float']
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
  idReservation?: Maybe<Scalars['BUFFER']>
  idReservationItem?: Maybe<Scalars['BUFFER']>
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
  createDocument: CreateDocumentResponseEntity
  createDocumentSerial: DocumentSerial
  createEntity: ReponseCreateEntity
  createGeneralParameter: GeneralParameter
  createInventoryTransaction: InventoryTransaction
  createInventoryTransactionRange: Array<InventoryTransaction>
  createModulePermission: ModulePermission
  createOu: Ou
  createPassenger: Passenger
  createPassengers: Array<Passenger>
  createPayment: Array<CreatePaymentResponseEntity>
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
  createReservationRepoDocument: ReservationRepoDocument
  createRolePermission: RolePermission
  createSession: Session
  createUser: Users
  createUserModule: UserModulesModule
  createUserRole: UserRole
  createUserTransaction: UserTransaction
  deleteAddress: Address
  deleteCashierTransaction: DeleteCashierTransactionEntity
  deleteCashierTransactionReservationItem: DeleteCashierTransactionReservarionItemEntity
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
  removeReservationRepoDocument: ReservationRepoDocument
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
  updateReservationRepoDocument: ReservationRepoDocument
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
  createCashierTransactionReservationItem: CreateCashierTransactionReservationItemInput
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

export type MutationCreateInventoryTransactionRangeArgs = {
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

export type MutationCreatePassengersArgs = {
  createPassengerInputArray: Array<CreatePassengerInput>
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

export type MutationCreateReservationRepoDocumentArgs = {
  createReservationRepoDocumentInput: CreateReservationRepoDocumentInput
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

export type MutationDeleteCashierTransactionArgs = {
  deleteCashierTransaction: DeleteCashierTransactionValueInput
}

export type MutationDeleteCashierTransactionReservationItemArgs = {
  deleteCashierTransactionReservationItem: DeleteCreateCashierTransactionReservationItemInput
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

export type MutationRemoveReservationRepoDocumentArgs = {
  idRepoDocument: Scalars['BUFFER']
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

export type MutationUpdateReservationRepoDocumentArgs = {
  updateReservationRepoDocumentInput: UpdateReservationRepoDocumentInput
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
  code: Scalars['String']
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
  findFullEntityById: FullEntityOutput
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
  getCashierTransactionItems: Array<CashierTransactionItem>
  getCashierTransactionItemsByParams: Array<CashierTransactionItem>
  getCashierTransactionItemsViewByParams: Array<CashierTransactionItemView>
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
  productCategoriesByCode: Array<ProductCategory>
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
  reservationById: Reservation
  reservationDocument: ReservationDocument
  reservationItemsByFilter: Array<ReservationItem>
  reservationPassenger: ReservationPassenger
  reservationRepoDocument: ReservationRepoDocument
  reservationRepoDocuments: Array<ReservationRepoDocument>
  reservations: ReservationQueryOutput
  reservationsByFilter: ReservationQueryOutput
}

export type QueryReservationItemArgs = {
  idReservationItem: Scalars['BUFFER']
}

export type QueryFindForReservationsArgs = {
  searchInput: ReservationSearchInput
}

export type QueryFindFullEntityByIdArgs = {
  idEntity: Scalars['BUFFER']
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

export type QueryGetCashierTransactionItemsByParamsArgs = {
  idCashierTransaction: Scalars['BUFFER']
  idOu: Scalars['BUFFER']
}

export type QueryGetCashierTransactionItemsViewByParamsArgs = {
  idCashierTransaction: Scalars['BUFFER']
  idOu: Scalars['BUFFER']
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
  idCurrency1: Scalars['BUFFER']
  idCurrency2: Scalars['BUFFER']
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

export type QueryProductCategoriesByCodeArgs = {
  codesArray: Array<Scalars['String']>
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

export type QueryReservationByIdArgs = {
  idReservation: Scalars['BUFFER']
}

export type QueryReservationDocumentArgs = {
  idDocument: Scalars['BUFFER']
  idReservation: Scalars['BUFFER']
}

export type QueryReservationItemsByFilterArgs = {
  reservationItemQueryInput: ReservationItemQueryInput
}

export type QueryReservationPassengerArgs = {
  idPassenger: Scalars['BUFFER']
  idReservation: Scalars['BUFFER']
}

export type QueryReservationRepoDocumentArgs = {
  idRepoDocument: Scalars['BUFFER']
}

export type QueryReservationRepoDocumentsArgs = {
  idReservation: Scalars['BUFFER']
}

export type QueryReservationsArgs = {
  idEntity: Scalars['BUFFER']
  skip: Scalars['Float']
  take: Scalars['Float']
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
  reservationType: Scalars['String']
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
  idRelatedReservationItem?: Maybe<Scalars['BUFFER']>
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

export type ReservationItemQueryInput = {
  idReservationItem: Scalars['BUFFER']
  reservationID: Scalars['BUFFER']
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
  entity: Scalars['BUFFER']
  fileNumber?: InputMaybe<Scalars['String']>
  reservationCode?: InputMaybe<Scalars['String']>
  reservationID?: InputMaybe<Scalars['BUFFER']>
  skip: Scalars['Float']
  take: Scalars['Float']
}

export type ReservationQueryOutput = {
  __typename?: 'ReservationQueryOutput'
  count: Scalars['Float']
  data: Array<Reservation>
}

export type ReservationRepoDocument = {
  __typename?: 'ReservationRepoDocument'
  createdAt: Scalars['DateTime']
  idOu: Scalars['BUFFER']
  idRepoDocument: Scalars['BUFFER']
  idReservation: Scalars['BUFFER']
  idStatus: Scalars['String']
  idUserCreate: Scalars['BUFFER']
  idUserUpdate: Scalars['BUFFER']
  name: Scalars['String']
  updatedAt: Scalars['DateTime']
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
  code?: InputMaybe<Scalars['String']>
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

export type UpdateReservationRepoDocumentInput = {
  idOu?: InputMaybe<Scalars['BUFFER']>
  idRepoDocument: Scalars['BUFFER']
  idReservation?: InputMaybe<Scalars['BUFFER']>
  idUserCreate?: InputMaybe<Scalars['BUFFER']>
  idUserUpdate: Scalars['BUFFER']
  name?: InputMaybe<Scalars['String']>
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

export type IdProductsInput = {
  date: Scalars['DateTime']
  idProduct: Scalars['BUFFER']
  idProductInstance: Scalars['BUFFER']
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
      idUserCreate?: any | null
      createdAt: any
      idUserUpdate?: any | null
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
      idUserCreate?: any | null
      createdAt: any
      idUserUpdate?: any | null
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
      idUserCreate?: any | null
      idUserUpdate?: any | null
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
      entity_Role?: Array<{
        __typename?: 'EntityRol'
        idEntity: any
        idOu: any
        idRole: any
        idStatus: IdStatus
        idUserCreate: any
        createdAt: any
        idUserUpdate: any
        updatedAt: any
      }> | null
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
      idUserCreate?: any | null
      idUserUpdate?: any | null
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
      entity_Role?: Array<{
        __typename?: 'EntityRol'
        idEntity: any
        idOu: any
        idRole: any
        idStatus: IdStatus
        idUserCreate: any
        createdAt: any
        idUserUpdate: any
        updatedAt: any
      }> | null
    }
  }
}

export type FindFullEntityByIdQueryVariables = Exact<{
  idEntity: Scalars['BUFFER']
}>

export type FindFullEntityByIdQuery = {
  __typename?: 'Query'
  findFullEntityById: {
    __typename?: 'FullEntityOutput'
    commercialName: string
    businessName: string
    currencyType: string
    documentNumber: string
    documentType: string
    geolocSunat?: string | null
    igv: number
    address: { __typename?: 'Address'; line1: string; line2?: string | null }
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
      idUserCreate?: any | null
      idUserUpdate?: any | null
      createdAt: any
      updatedAt: any
    }
  }
}

export const CreateEntityDocument = gql`
  mutation createEntity($entity: CreateEntityInput!) {
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
  mutation deleteEntity($idEntity: BUFFER!) {
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
  query getEntities($filter: GetEntitiesInput!) {
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
  query getEntity($idEntity: BUFFER!) {
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
export const FindFullEntityByIdDocument = gql`
  query FindFullEntityById($idEntity: BUFFER!) {
    findFullEntityById(idEntity: $idEntity) {
      commercialName
      businessName
      currencyType
      documentNumber
      documentType
      geolocSunat
      igv
      address {
        line1
        line2
      }
    }
  }
`

/**
 * __useFindFullEntityByIdQuery__
 *
 * To run a query within a React component, call `useFindFullEntityByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindFullEntityByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindFullEntityByIdQuery({
 *   variables: {
 *      idEntity: // value for 'idEntity'
 *   },
 * });
 */
export function useFindFullEntityByIdQuery(
  baseOptions: Apollo.QueryHookOptions<FindFullEntityByIdQuery, FindFullEntityByIdQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<FindFullEntityByIdQuery, FindFullEntityByIdQueryVariables>(
    FindFullEntityByIdDocument,
    options
  )
}
export function useFindFullEntityByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    FindFullEntityByIdQuery,
    FindFullEntityByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<FindFullEntityByIdQuery, FindFullEntityByIdQueryVariables>(
    FindFullEntityByIdDocument,
    options
  )
}
export type FindFullEntityByIdQueryHookResult = ReturnType<typeof useFindFullEntityByIdQuery>
export type FindFullEntityByIdLazyQueryHookResult = ReturnType<
  typeof useFindFullEntityByIdLazyQuery
>
export type FindFullEntityByIdQueryResult = Apollo.QueryResult<
  FindFullEntityByIdQuery,
  FindFullEntityByIdQueryVariables
>
export const UpdateEntityDocument = gql`
  mutation updateEntity($updateEntityInput: UpdateEntityInput!) {
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
