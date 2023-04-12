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
  cpeCodResponseSunat?: Maybe<Scalars['String']>
  cpeStatusSunat?: Maybe<Scalars['String']>
  date: Scalars['DateTime']
  description?: Maybe<Scalars['String']>
  idCashierTransactionItemType?: Maybe<Scalars['BUFFER']>
  idCashierTransactionItemTypeName?: Maybe<Scalars['String']>
  idCurrency1?: Maybe<Scalars['BUFFER']>
  idDocumentItemReservation?: Maybe<Scalars['BUFFER']>
  idDocumentReservation?: Maybe<Scalars['BUFFER']>
  idReservation?: Maybe<Scalars['BUFFER']>
  idReservationItem?: Maybe<Scalars['BUFFER']>
  idReservationItemOrigin?: Maybe<Scalars['BUFFER']>
  idReservationOrigin?: Maybe<Scalars['BUFFER']>
  idStatus?: Maybe<Scalars['String']>
  idUserUpdate: Scalars['BUFFER']
  iddocument?: Maybe<Scalars['BUFFER']>
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

export type CheckInput = {
  idModule?: InputMaybe<Scalars['BUFFER']>
  idPermission?: InputMaybe<Scalars['BUFFER']>
  idRole: Scalars['BUFFER']
  idUi?: InputMaybe<Scalars['BUFFER']>
}

export type CheckOutput = {
  __typename?: 'CheckOutput'
  result: Scalars['Boolean']
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
  typeRegister?: InputMaybe<Scalars['String']>
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
  idInvoice: Scalars['BUFFER']
  idInvoiceName: Scalars['String']
  idOu: Scalars['BUFFER']
  idSaleNote: Scalars['BUFFER']
  idSaleNoteName: Scalars['String']
  idUser: Scalars['BUFFER']
  note: Scalars['String']
  paymentItem: Array<CreateDocumentItemValueInput>
  reservationItem: Array<CreateCartReservationItemValueInput>
  typeDocumentPyment?: InputMaybe<Scalars['String']>
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

export type CreateRoleModuleInput = {
  idModule: Scalars['BUFFER']
  idOu: Scalars['BUFFER']
  idRole: Scalars['BUFFER']
  idUserCreate: Scalars['BUFFER']
}

export type CreateRolePermissionInput = {
  idOu: Scalars['BUFFER']
  idPermissions: Array<Scalars['BUFFER']>
  idRole: Scalars['BUFFER']
  idUserCreate: Scalars['BUFFER']
}

export type CreateRoleUiInput = {
  idOu: Scalars['BUFFER']
  idRole: Scalars['BUFFER']
  idUi: Scalars['BUFFER']
  idUserCreate: Scalars['BUFFER']
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

export type DeleteReservationInput = {
  idOu: Scalars['BUFFER']
  idReservation: Scalars['BUFFER']
  idUserUpdate: Scalars['BUFFER']
}

export type DeleteReservationItemInput = {
  idOu: Scalars['BUFFER']
  idReservationItem: Scalars['BUFFER']
  idUserUpdate: Scalars['BUFFER']
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
  cpeCodResponseSunat?: Maybe<Scalars['String']>
  cpeStatusSunat?: Maybe<Scalars['String']>
  cpeTypeOperation?: Maybe<Scalars['String']>
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

export type DocumentItemPaymentResponseEntity = {
  __typename?: 'DocumentItemPaymentResponseEntity'
  DocumentTypeTrx?: Maybe<Scalars['BUFFER']>
  PaymentRegister?: Maybe<Scalars['BUFFER']>
  PaymentSunatMoney?: Maybe<Scalars['String']>
  SaldoUSD?: Maybe<Scalars['Float']>
  SerialDocument?: Maybe<Scalars['String']>
  SerialDocumentRelated?: Maybe<Scalars['String']>
  amountTotal?: Maybe<Scalars['Float']>
  cpeCodResponseSunat?: Maybe<Scalars['String']>
  cpeCustomerAddress?: Maybe<Scalars['String']>
  cpeCustomerDocumentNumber?: Maybe<Scalars['String']>
  cpeCustomerName?: Maybe<Scalars['String']>
  cpeCustomerTypeDocument?: Maybe<Scalars['String']>
  cpeSellingPrice?: Maybe<Scalars['Float']>
  cpeSellingValue?: Maybe<Scalars['Float']>
  cpeStatusSunat?: Maybe<Scalars['String']>
  cpeTaxesAmount?: Maybe<Scalars['Float']>
  cpeTtaxesValue?: Maybe<Scalars['Float']>
  cpeTypeOperation?: Maybe<Scalars['String']>
  date?: Maybe<Scalars['DateTime']>
  dateRelated?: Maybe<Scalars['DateTime']>
  description?: Maybe<Scalars['String']>
  descriptionRelated?: Maybe<Scalars['String']>
  idDocument?: Maybe<Scalars['BUFFER']>
  idDocumentItem?: Maybe<Scalars['BUFFER']>
  idDocumentType?: Maybe<Scalars['BUFFER']>
  idDocumentTypeName?: Maybe<Scalars['String']>
  idRelatedDocument?: Maybe<Scalars['BUFFER']>
  idRelatedDocumentType?: Maybe<Scalars['BUFFER']>
  idRelatedDocumentTypeName?: Maybe<Scalars['String']>
  idRelatedDocumentTypePayment?: Maybe<Scalars['BUFFER']>
  idStatus?: Maybe<Scalars['String']>
  number?: Maybe<Scalars['String']>
  numberRelated?: Maybe<Scalars['String']>
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
  createRoleModule: RoleModule
  createRolePermission: Array<RolePermission>
  createRoleUi: RoleUi
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
  removeReservationPassenger: ReservationPassenger
  removeReservationPassengers: ReservationPassenger
  removeReservationRepoDocument: ReservationRepoDocument
  removeRoleModule: RoleModule
  removeRoleUi: RoleUi
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

export type MutationCreateRoleModuleArgs = {
  createRoleModuleInput: CreateRoleModuleInput
}

export type MutationCreateRolePermissionArgs = {
  createRolePermissionInput: CreateRolePermissionInput
}

export type MutationCreateRoleUiArgs = {
  createRoleUiInput: CreateRoleUiInput
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
  deleteReservationInput: DeleteReservationInput
}

export type MutationRemoveReservationDocumentArgs = {
  idDocument: Scalars['BUFFER']
  idReservation: Scalars['BUFFER']
}

export type MutationRemoveReservationDocumentsArgs = {
  idReservation: Scalars['BUFFER']
}

export type MutationRemoveReservationItemArgs = {
  deleteReservationItemInput: DeleteReservationItemInput
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

export type MutationRemoveRoleModuleArgs = {
  idModule: Scalars['BUFFER']
  idRole: Scalars['BUFFER']
}

export type MutationRemoveRoleUiArgs = {
  idRole: Scalars['BUFFER']
  idUi: Scalars['BUFFER']
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
  checkPermissions: CheckOutput
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
  getDocumentsPymentsAll: Array<DocumentItemPaymentResponseEntity>
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
  reservationPassengers: Array<ReservationPassenger>
  reservationRepoDocument: ReservationRepoDocument
  reservationRepoDocuments: Array<ReservationRepoDocument>
  reservations: ReservationQueryOutput
  reservationsByFilter: ReservationQueryOutput
  roleModule: RoleModule
  roleModules: Array<RoleModule>
  roleUi: RoleUi
}

export type QueryReservationItemArgs = {
  idReservationItem: Scalars['BUFFER']
}

export type QueryCheckPermissionsArgs = {
  checkInput: CheckInput
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

export type QueryGetDocumentsPymentsAllArgs = {
  date: Scalars['String']
  idOu: Scalars['BUFFER']
  numDocumento: Scalars['String']
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

export type QueryReservationPassengersArgs = {
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

export type QueryRoleModuleArgs = {
  idModule: Scalars['BUFFER']
  idRole: Scalars['BUFFER']
}

export type QueryRoleUiArgs = {
  idRole: Scalars['BUFFER']
  idUi: Scalars['BUFFER']
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

export type RoleModule = {
  __typename?: 'RoleModule'
  createdAt: Scalars['DateTime']
  idModule: Scalars['BUFFER']
  idOu: Scalars['BUFFER']
  idRole: Scalars['BUFFER']
  idStatus: Scalars['String']
  idUserCreate: Scalars['BUFFER']
  idUserUpdate: Scalars['BUFFER']
  updatedAt: Scalars['DateTime']
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

export type RoleUi = {
  __typename?: 'RoleUi'
  createdAt: Scalars['DateTime']
  idOu: Scalars['BUFFER']
  idRole: Scalars['BUFFER']
  idStatus: Scalars['String']
  idUi: Scalars['BUFFER']
  idUserCreate: Scalars['BUFFER']
  idUserUpdate: Scalars['BUFFER']
  updatedAt: Scalars['DateTime']
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

export type CreateAccountingPeriodAnioMutationVariables = Exact<{
  accountingPeriodValueInput: AccountingPeriodValueInput
}>

export type CreateAccountingPeriodAnioMutation = {
  __typename?: 'Mutation'
  createAccountingPeriodAnio: {
    __typename?: 'AccountingPeriod'
    idAccountingPeriod: any
    idOu?: any | null
    idStatus?: string | null
    idUserCreate?: any | null
    idUserUpdate?: any | null
    idAccountingPeriodType?: any | null
    createdAt: any
    code?: string | null
    dateFrom: any
    dateTo: any
    updatedAt: any
  }
}

export type CreateAccountingPeriodAnioMonthMutationVariables = Exact<{
  accountingPeriodValueInput: AccountingPeriodValueInput
}>

export type CreateAccountingPeriodAnioMonthMutation = {
  __typename?: 'Mutation'
  createAccountingPeriodAnioMonth: {
    __typename?: 'AccountingPeriodResult'
    Message?: string | null
    count?: number | null
  }
}

export type CreateAccountingPeriodAnioMonthDayMutationVariables = Exact<{
  createAccountingPeriodAnioMonthDay: AccountingPeriodValueInput
}>

export type CreateAccountingPeriodAnioMonthDayMutation = {
  __typename?: 'Mutation'
  createAccountingPeriodAnioMonthDay: {
    __typename?: 'AccountingPeriodResult'
    Message?: string | null
    count?: number | null
  }
}

export type CreateCashierTransactionDocumentItemMutationVariables = Exact<{
  createCashierTransactionDocumentItem: CreateDocumentItemInput
}>

export type CreateCashierTransactionDocumentItemMutation = {
  __typename?: 'Mutation'
  createCashierTransactionDocumentItem: {
    __typename?: 'DocumentItem'
    idDailyCashier?: any | null
    idCashierTransaction?: any | null
    idDocument?: any | null
    idDocumentItem?: any | null
    idOu?: any | null
    idCurrency1?: any | null
    idcurrency2?: any | null
    idCurrency3?: any | null
    idStatus: string
    idUserCreate?: any | null
    idUserUpdate?: any | null
    amount1?: number | null
    credit1?: number | null
    debit1?: number | null
    exchangeRate1?: number | null
    amount2?: number | null
    credit2?: number | null
    debit2?: number | null
    exchangerate2?: number | null
    amount3?: number | null
    credit3?: number | null
    debit3?: number | null
    exchangeRate3?: number | null
    createdAt: any
  }
}

export type CreateCashierTransactionReservationItemMutationVariables = Exact<{
  createCashierTransactionReservationItem: CreateCashierTransactionReservationItemInput
}>

export type CreateCashierTransactionReservationItemMutation = {
  __typename?: 'Mutation'
  createCashierTransactionReservationItem: {
    __typename?: 'CashierTransactionReservationItem'
    idDailyCashier?: any | null
    idCashierTransaction?: any | null
    idReservation?: any | null
    idReservationItem?: any | null
    idDocument?: any | null
    idDocumentItem?: any | null
    idOu?: any | null
    idCurrency1?: any | null
    idcurrency2?: any | null
    idCurrency3?: any | null
    IdRelatedProfit?: any | null
    idStatus?: string | null
    idUserCreate?: any | null
    idUserUpdate?: any | null
    amount1?: number | null
    credit1?: number | null
    debit1?: number | null
    exchangeRate1?: number | null
    amount2?: number | null
    credit2?: number | null
    debit2?: number | null
    exchangerate2?: number | null
    amount3?: number | null
    credit3?: number | null
    debit3?: number | null
    exchangeRate3?: number | null
    taxesPercentage?: number | null
    purchasePrice1?: number | null
    profitPercentage1?: number | null
    sellingValue1?: number | null
    taxesAmount1?: number | null
    sellingPrice1?: number | null
    amountTotal?: number | null
    isProfit?: string | null
    createdAt: any
  }
}

export type CreateCashierTransactionMutationVariables = Exact<{
  createCashierTransactionValueInput: CreateCashierTransactionValueInput
}>

export type CreateCashierTransactionMutation = {
  __typename?: 'Mutation'
  createCashierTransaction: { __typename?: 'CashierTransaction'; idCashierTransaction: any }
}

export type CreateDailyCashierMutationVariables = Exact<{
  createDailyCashierValueInput: CreateDailyCashierValueInput
}>

export type CreateDailyCashierMutation = {
  __typename?: 'Mutation'
  createDailyCashier: {
    __typename?: 'DailyCashier'
    idDailyCashier: any
    idOu: any
    idUser: any
    idDailyCashierType: any
    idStatus: string
    idUserCreate: any
    idUserUpdate: any
    createdAt: any
    date: any
    note: string
    updatedAt: any
  }
}

export type CreateDocumentMutationVariables = Exact<{
  createDocumentValueInput: CreateDocumentValueInput
}>

export type CreateDocumentMutation = {
  __typename?: 'Mutation'
  createDocument: {
    __typename?: 'CreateDocumentResponseEntity'
    TYPE?: string | null
    CODRESPUESTA?: string | null
    MENSAJE?: string | null
    XML?: string | null
    PDF?: string | null
    CDR?: string | null
    QR?: string | null
    TICKET?: string | null
    NOMBRE?: string | null
    QR_VALOR?: string | null
    RGBCOLOR_BACK?: string | null
    RGBCOLOR_FORECOLOR?: string | null
    idDocument?: any | null
  }
}

export type CreatePaymentMutationVariables = Exact<{
  createPayment: CreatePaymentValueInput
}>

export type CreatePaymentMutation = {
  __typename?: 'Mutation'
  createPayment: Array<{
    __typename?: 'CreatePaymentResponseEntity'
    CODRESPUESTA?: string | null
    MENSAJE?: string | null
    XML?: string | null
    PDF?: string | null
    CDR?: string | null
    QR?: string | null
    TICKET?: string | null
    NOMBRE?: string | null
    QR_VALOR?: string | null
    RGBCOLOR_BACK?: string | null
    RGBCOLOR_FORECOLOR?: string | null
    idDocument?: any | null
  }>
}

export type DeleteCashierTransactionReservationItemMutationVariables = Exact<{
  deleteCashierTransactionReservationItem: DeleteCreateCashierTransactionReservationItemInput
}>

export type DeleteCashierTransactionReservationItemMutation = {
  __typename?: 'Mutation'
  deleteCashierTransactionReservationItem: {
    __typename?: 'DeleteCashierTransactionReservarionItemEntity'
    count?: number | null
  }
}

export type DeleteCashierTransactionMutationVariables = Exact<{
  deleteCashierTransaction: DeleteCashierTransactionValueInput
}>

export type DeleteCashierTransactionMutation = {
  __typename?: 'Mutation'
  deleteCashierTransaction: { __typename?: 'DeleteCashierTransactionEntity'; count?: number | null }
}

export type GetAccountingPeriodsByIdOuQueryVariables = Exact<{
  idOu: Scalars['BUFFER']
}>

export type GetAccountingPeriodsByIdOuQuery = {
  __typename?: 'Query'
  getAccountingPeriodsByIdOu: { __typename?: 'AccountingPeriodCountResult'; _count: number }
}

export type GetBankAccountsByIdOuQueryVariables = Exact<{
  idOu: Scalars['BUFFER']
}>

export type GetBankAccountsByIdOuQuery = {
  __typename?: 'Query'
  getBankAccountsByIdOu: Array<{
    __typename?: 'BankAccount'
    idBankAccount: any
    idOu: any
    idCurrency: any
    idBankAccountType: any
    idEntity: any
    idUserCreate: any
    idUserUpdate: any
    idStatus: string
    number: string
    interbankNumber: string
    createdAt: any
    updatedAt: any
  }>
}

export type GetCashierTransactionByIdQueryVariables = Exact<{
  getCashierTransactionByIdId: Scalars['BUFFER']
}>

export type GetCashierTransactionByIdQuery = {
  __typename?: 'Query'
  getCashierTransactionById: {
    __typename?: 'CashierTransaction'
    idCashierTransaction: any
    idOu: any
    idDailyCashier: any
    idEntity: any
    idCashierTransactionType: any
    idCurrency1?: any | null
    idCurrency2?: any | null
    idCurrency3?: any | null
    idStatus: string
    idUserCreate: any
    idUserUpdate: any
    date: any
    dateEntry: any
    note?: string | null
    amount1?: number | null
    credit1?: number | null
    debit1?: number | null
    exchangeRate1?: number | null
    amount2?: number | null
    credit2?: number | null
    debit2?: number | null
    exchangeRate2?: number | null
    amount3?: number | null
    credit3?: number | null
    debit3?: number | null
    exchangeRate3?: number | null
    updatedAt: any
  }
}

export type GetCashierTransactionDocumentsPymentsQueryVariables = Exact<{
  idCashierTransaction: Scalars['BUFFER']
  idOu: Scalars['BUFFER']
  idEntity: Scalars['BUFFER']
  status: Scalars['String']
}>

export type GetCashierTransactionDocumentsPymentsQuery = {
  __typename?: 'Query'
  getCashierTransactionDocumentsPyments: Array<{
    __typename?: 'CashierTransactionDocumentItem'
    idDocument?: any | null
    idDocumentType?: any | null
    idDocumentTypeName: string
    idDocumentItem?: any | null
    idCurrency1?: any | null
    idStatus: string
    idRelatedDocumentTypePayment?: any | null
    DocumentTypeTrx?: any | null
    date: any
    exchangeRate1?: any | null
    number: string
    description: string
    balance1?: number | null
  }>
}

export type GetCashierTransactionItemsViewByParamsQueryVariables = Exact<{
  idOu: Scalars['BUFFER']
  idCashierTransaction: Scalars['BUFFER']
}>

export type GetCashierTransactionItemsViewByParamsQuery = {
  __typename?: 'Query'
  getCashierTransactionItemsViewByParams: Array<{
    __typename?: 'CashierTransactionItemView'
    idCashierTransactionItemType?: any | null
    idCashierTransactionItemTypeName?: string | null
    idReservation?: any | null
    idReservationItem?: any | null
    idCurrency1?: any | null
    idStatus?: string | null
    idUserUpdate: any
    iddocument?: any | null
    cpeCodResponseSunat?: string | null
    cpeStatusSunat?: string | null
    date: any
    description?: string | null
    SerialDcoument?: string | null
    numberDocument?: string | null
    amount1?: number | null
    updateAt: any
  }>
}

export type GetcashierTransactionReservationItemsByParamsQueryVariables = Exact<{
  idCashierTransaction: Scalars['BUFFER']
}>

export type GetcashierTransactionReservationItemsByParamsQuery = {
  __typename?: 'Query'
  getcashierTransactionReservationItemsByParams: Array<{
    __typename?: 'CashierTransactionReservationItem'
    idDailyCashier?: any | null
    idCashierTransaction?: any | null
    idReservation?: any | null
    idReservationItem?: any | null
    idDocument?: any | null
    idDocumentItem?: any | null
    idOu?: any | null
    idCurrency1?: any | null
    idcurrency2?: any | null
    idCurrency3?: any | null
    idStatus?: string | null
    idUserCreate?: any | null
    idUserUpdate?: any | null
    amount1?: number | null
    credit1?: number | null
    debit1?: number | null
    exchangeRate1?: number | null
    amount2?: number | null
    credit2?: number | null
    debit2?: number | null
    exchangerate2?: number | null
    amount3?: number | null
    credit3?: number | null
    debit3?: number | null
    exchangeRate3?: number | null
    createdAt: any
  }>
}

export type GetCashierTransactionsByParamsQueryVariables = Exact<{
  note: Scalars['String']
  date: Scalars['String']
  amount: Scalars['Float']
}>

export type GetCashierTransactionsByParamsQuery = {
  __typename?: 'Query'
  getCashierTransactionsByParams: Array<{
    __typename?: 'CashierTransaction'
    idCashierTransaction: any
    idOu: any
    idDailyCashier: any
    idEntity: any
    idCashierTransactionType: any
    idCurrency1?: any | null
    idCurrency2?: any | null
    idCurrency3?: any | null
    idStatus: string
    idUserCreate: any
    idUserUpdate: any
    date: any
    dateEntry: any
    note?: string | null
    amount1?: number | null
    credit1?: number | null
    debit1?: number | null
    exchangeRate1?: number | null
    amount2?: number | null
    credit2?: number | null
    debit2?: number | null
    exchangeRate2?: number | null
    amount3?: number | null
    credit3?: number | null
    debit3?: number | null
    exchangeRate3?: number | null
    updatedAt: any
  }>
}

export type GetCurrencyExchangeRatesByDateAndIdOuQueryVariables = Exact<{
  idOu: Scalars['BUFFER']
  date: Scalars['DateTime']
  idCurrency1: Scalars['BUFFER']
  idCurrency2: Scalars['BUFFER']
}>

export type GetCurrencyExchangeRatesByDateAndIdOuQuery = {
  __typename?: 'Query'
  getCurrencyExchangeRatesByDateAndIdOu: Array<{
    __typename?: 'CurrencyExchangeRate'
    idCurrencyExchangeRate: any
    idOu: any
    idCurrency1: any
    idCurrency2: any
    idStatus: string
    idUserCreate: any
    idUserUpdate: any
    date: any
    sellExchangeRate?: number | null
    buyExchangeRate?: number | null
    createdAt: any
    updatedAt: any
  }>
}

export type GetDailyCashierOpenByIdOuAndDateQueryVariables = Exact<{
  idOu: Scalars['BUFFER']
  date: Scalars['DateTime']
}>

export type GetDailyCashierOpenByIdOuAndDateQuery = {
  __typename?: 'Query'
  getDailyCashierOpenByIdOuAndDate: Array<{
    __typename?: 'DailyCashier'
    idDailyCashier: any
    idOu: any
    idUser: any
    idDailyCashierType: any
    idStatus: string
    idUserCreate: any
    idUserUpdate: any
    date: any
    note: string
    createdAt: any
    updatedAt: any
  }>
}

export type GetDocumentsPymentsAllQueryVariables = Exact<{
  date: Scalars['String']
  numDocumento: Scalars['String']
  idOu: Scalars['BUFFER']
}>

export type GetDocumentsPymentsAllQuery = {
  __typename?: 'Query'
  getDocumentsPymentsAll: Array<{
    __typename?: 'DocumentItemPaymentResponseEntity'
    idDocument?: any | null
    idDocumentItem?: any | null
    idDocumentType?: any | null
    idDocumentTypeName?: string | null
    idRelatedDocument?: any | null
    date?: any | null
    description?: string | null
    SerialDocument?: string | null
    number?: string | null
    idRelatedDocumentTypePayment?: any | null
    idRelatedDocumentType?: any | null
    idRelatedDocumentTypeName?: string | null
    dateRelated?: any | null
    descriptionRelated?: string | null
    SerialDocumentRelated?: string | null
    numberRelated?: string | null
    PaymentRegister?: any | null
    PaymentSunatMoney?: string | null
    DocumentTypeTrx?: any | null
    cpeTypeOperation?: string | null
    cpeTtaxesValue?: number | null
    cpeSellingPrice?: number | null
    amountTotal?: number | null
    cpeSellingValue?: number | null
    cpeTaxesAmount?: number | null
    cpeCustomerTypeDocument?: string | null
    cpeCustomerDocumentNumber?: string | null
    cpeCustomerName?: string | null
    cpeCustomerAddress?: string | null
    SaldoUSD?: number | null
    cpeCodResponseSunat?: string | null
    cpeStatusSunat?: string | null
    idStatus?: string | null
  }>
}

export type GetDocumentsPymentsQueryVariables = Exact<{
  date: Scalars['String']
  idDocumentTypeName: Scalars['String']
  numDocumento: Scalars['String']
  status: Scalars['String']
  idOu: Scalars['BUFFER']
  idEntity: Scalars['BUFFER']
}>

export type GetDocumentsPymentsQuery = {
  __typename?: 'Query'
  getDocumentsPyments: Array<{
    __typename?: 'DocumentItemPayment'
    idDocument?: any | null
    idDocumentType?: any | null
    idDocumentTypeName?: string | null
    idDocumentItem?: any | null
    idOu?: any | null
    idCurrency1?: any | null
    idStatus: string
    idDocumentStatementTypeDoc?: any | null
    idcurrency2?: any | null
    idCurrency3?: any | null
    idRelatedDocumentTypePayment?: any | null
    exchangeRate3?: number | null
    date: any
    description: string
    number: string
    DocumentTypeTrx?: any | null
    balance1?: number | null
    exchangeRate1?: number | null
  }>
}

export type GetNumbersDailyCashierByDateAndIdOuQueryVariables = Exact<{
  idOu: Scalars['BUFFER']
  date: Scalars['DateTime']
}>

export type GetNumbersDailyCashierByDateAndIdOuQuery = {
  __typename?: 'Query'
  getNumbersDailyCashierByDateAndIdOu: { __typename?: 'DailyCashierCount'; _count: number }
}

export const CreateAccountingPeriodAnioDocument = gql`
  mutation CreateAccountingPeriodAnio($accountingPeriodValueInput: AccountingPeriodValueInput!) {
    createAccountingPeriodAnio(AccountingPeriodValueInput: $accountingPeriodValueInput) {
      idAccountingPeriod
      idOu
      idStatus
      idUserCreate
      idUserUpdate
      idAccountingPeriodType
      createdAt
      code
      dateFrom
      dateTo
      updatedAt
    }
  }
`
export type CreateAccountingPeriodAnioMutationFn = Apollo.MutationFunction<
  CreateAccountingPeriodAnioMutation,
  CreateAccountingPeriodAnioMutationVariables
>

/**
 * __useCreateAccountingPeriodAnioMutation__
 *
 * To run a mutation, you first call `useCreateAccountingPeriodAnioMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAccountingPeriodAnioMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAccountingPeriodAnioMutation, { data, loading, error }] = useCreateAccountingPeriodAnioMutation({
 *   variables: {
 *      accountingPeriodValueInput: // value for 'accountingPeriodValueInput'
 *   },
 * });
 */
export function useCreateAccountingPeriodAnioMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateAccountingPeriodAnioMutation,
    CreateAccountingPeriodAnioMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateAccountingPeriodAnioMutation,
    CreateAccountingPeriodAnioMutationVariables
  >(CreateAccountingPeriodAnioDocument, options)
}
export type CreateAccountingPeriodAnioMutationHookResult = ReturnType<
  typeof useCreateAccountingPeriodAnioMutation
>
export type CreateAccountingPeriodAnioMutationResult =
  Apollo.MutationResult<CreateAccountingPeriodAnioMutation>
export type CreateAccountingPeriodAnioMutationOptions = Apollo.BaseMutationOptions<
  CreateAccountingPeriodAnioMutation,
  CreateAccountingPeriodAnioMutationVariables
>
export const CreateAccountingPeriodAnioMonthDocument = gql`
  mutation CreateAccountingPeriodAnioMonth(
    $accountingPeriodValueInput: AccountingPeriodValueInput!
  ) {
    createAccountingPeriodAnioMonth(AccountingPeriodValueInput: $accountingPeriodValueInput) {
      Message
      count
    }
  }
`
export type CreateAccountingPeriodAnioMonthMutationFn = Apollo.MutationFunction<
  CreateAccountingPeriodAnioMonthMutation,
  CreateAccountingPeriodAnioMonthMutationVariables
>

/**
 * __useCreateAccountingPeriodAnioMonthMutation__
 *
 * To run a mutation, you first call `useCreateAccountingPeriodAnioMonthMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAccountingPeriodAnioMonthMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAccountingPeriodAnioMonthMutation, { data, loading, error }] = useCreateAccountingPeriodAnioMonthMutation({
 *   variables: {
 *      accountingPeriodValueInput: // value for 'accountingPeriodValueInput'
 *   },
 * });
 */
export function useCreateAccountingPeriodAnioMonthMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateAccountingPeriodAnioMonthMutation,
    CreateAccountingPeriodAnioMonthMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateAccountingPeriodAnioMonthMutation,
    CreateAccountingPeriodAnioMonthMutationVariables
  >(CreateAccountingPeriodAnioMonthDocument, options)
}
export type CreateAccountingPeriodAnioMonthMutationHookResult = ReturnType<
  typeof useCreateAccountingPeriodAnioMonthMutation
>
export type CreateAccountingPeriodAnioMonthMutationResult =
  Apollo.MutationResult<CreateAccountingPeriodAnioMonthMutation>
export type CreateAccountingPeriodAnioMonthMutationOptions = Apollo.BaseMutationOptions<
  CreateAccountingPeriodAnioMonthMutation,
  CreateAccountingPeriodAnioMonthMutationVariables
>
export const CreateAccountingPeriodAnioMonthDayDocument = gql`
  mutation CreateAccountingPeriodAnioMonthDay(
    $createAccountingPeriodAnioMonthDay: AccountingPeriodValueInput!
  ) {
    createAccountingPeriodAnioMonthDay(
      createAccountingPeriodAnioMonthDay: $createAccountingPeriodAnioMonthDay
    ) {
      Message
      count
    }
  }
`
export type CreateAccountingPeriodAnioMonthDayMutationFn = Apollo.MutationFunction<
  CreateAccountingPeriodAnioMonthDayMutation,
  CreateAccountingPeriodAnioMonthDayMutationVariables
>

/**
 * __useCreateAccountingPeriodAnioMonthDayMutation__
 *
 * To run a mutation, you first call `useCreateAccountingPeriodAnioMonthDayMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAccountingPeriodAnioMonthDayMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAccountingPeriodAnioMonthDayMutation, { data, loading, error }] = useCreateAccountingPeriodAnioMonthDayMutation({
 *   variables: {
 *      createAccountingPeriodAnioMonthDay: // value for 'createAccountingPeriodAnioMonthDay'
 *   },
 * });
 */
export function useCreateAccountingPeriodAnioMonthDayMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateAccountingPeriodAnioMonthDayMutation,
    CreateAccountingPeriodAnioMonthDayMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateAccountingPeriodAnioMonthDayMutation,
    CreateAccountingPeriodAnioMonthDayMutationVariables
  >(CreateAccountingPeriodAnioMonthDayDocument, options)
}
export type CreateAccountingPeriodAnioMonthDayMutationHookResult = ReturnType<
  typeof useCreateAccountingPeriodAnioMonthDayMutation
>
export type CreateAccountingPeriodAnioMonthDayMutationResult =
  Apollo.MutationResult<CreateAccountingPeriodAnioMonthDayMutation>
export type CreateAccountingPeriodAnioMonthDayMutationOptions = Apollo.BaseMutationOptions<
  CreateAccountingPeriodAnioMonthDayMutation,
  CreateAccountingPeriodAnioMonthDayMutationVariables
>
export const CreateCashierTransactionDocumentItemDocument = gql`
  mutation CreateCashierTransactionDocumentItem(
    $createCashierTransactionDocumentItem: CreateDocumentItemInput!
  ) {
    createCashierTransactionDocumentItem(
      createCashierTransactionDocumentItem: $createCashierTransactionDocumentItem
    ) {
      idDailyCashier
      idCashierTransaction
      idDocument
      idDocumentItem
      idOu
      idCurrency1
      idcurrency2
      idCurrency3
      idStatus
      idUserCreate
      idUserUpdate
      amount1
      credit1
      debit1
      exchangeRate1
      amount2
      credit2
      debit2
      exchangerate2
      amount3
      credit3
      debit3
      exchangeRate3
      createdAt
    }
  }
`
export type CreateCashierTransactionDocumentItemMutationFn = Apollo.MutationFunction<
  CreateCashierTransactionDocumentItemMutation,
  CreateCashierTransactionDocumentItemMutationVariables
>

/**
 * __useCreateCashierTransactionDocumentItemMutation__
 *
 * To run a mutation, you first call `useCreateCashierTransactionDocumentItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCashierTransactionDocumentItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCashierTransactionDocumentItemMutation, { data, loading, error }] = useCreateCashierTransactionDocumentItemMutation({
 *   variables: {
 *      createCashierTransactionDocumentItem: // value for 'createCashierTransactionDocumentItem'
 *   },
 * });
 */
export function useCreateCashierTransactionDocumentItemMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateCashierTransactionDocumentItemMutation,
    CreateCashierTransactionDocumentItemMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateCashierTransactionDocumentItemMutation,
    CreateCashierTransactionDocumentItemMutationVariables
  >(CreateCashierTransactionDocumentItemDocument, options)
}
export type CreateCashierTransactionDocumentItemMutationHookResult = ReturnType<
  typeof useCreateCashierTransactionDocumentItemMutation
>
export type CreateCashierTransactionDocumentItemMutationResult =
  Apollo.MutationResult<CreateCashierTransactionDocumentItemMutation>
export type CreateCashierTransactionDocumentItemMutationOptions = Apollo.BaseMutationOptions<
  CreateCashierTransactionDocumentItemMutation,
  CreateCashierTransactionDocumentItemMutationVariables
>
export const CreateCashierTransactionReservationItemDocument = gql`
  mutation CreateCashierTransactionReservationItem(
    $createCashierTransactionReservationItem: CreateCashierTransactionReservationItemInput!
  ) {
    createCashierTransactionReservationItem(
      createCashierTransactionReservationItem: $createCashierTransactionReservationItem
    ) {
      idDailyCashier
      idCashierTransaction
      idReservation
      idReservationItem
      idDocument
      idDocumentItem
      idOu
      idCurrency1
      idcurrency2
      idCurrency3
      IdRelatedProfit
      idStatus
      idUserCreate
      idUserUpdate
      amount1
      credit1
      debit1
      exchangeRate1
      amount2
      credit2
      debit2
      exchangerate2
      amount3
      credit3
      debit3
      exchangeRate3
      taxesPercentage
      purchasePrice1
      profitPercentage1
      sellingValue1
      taxesAmount1
      sellingPrice1
      amountTotal
      isProfit
      createdAt
    }
  }
`
export type CreateCashierTransactionReservationItemMutationFn = Apollo.MutationFunction<
  CreateCashierTransactionReservationItemMutation,
  CreateCashierTransactionReservationItemMutationVariables
>

/**
 * __useCreateCashierTransactionReservationItemMutation__
 *
 * To run a mutation, you first call `useCreateCashierTransactionReservationItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCashierTransactionReservationItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCashierTransactionReservationItemMutation, { data, loading, error }] = useCreateCashierTransactionReservationItemMutation({
 *   variables: {
 *      createCashierTransactionReservationItem: // value for 'createCashierTransactionReservationItem'
 *   },
 * });
 */
export function useCreateCashierTransactionReservationItemMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateCashierTransactionReservationItemMutation,
    CreateCashierTransactionReservationItemMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateCashierTransactionReservationItemMutation,
    CreateCashierTransactionReservationItemMutationVariables
  >(CreateCashierTransactionReservationItemDocument, options)
}
export type CreateCashierTransactionReservationItemMutationHookResult = ReturnType<
  typeof useCreateCashierTransactionReservationItemMutation
>
export type CreateCashierTransactionReservationItemMutationResult =
  Apollo.MutationResult<CreateCashierTransactionReservationItemMutation>
export type CreateCashierTransactionReservationItemMutationOptions = Apollo.BaseMutationOptions<
  CreateCashierTransactionReservationItemMutation,
  CreateCashierTransactionReservationItemMutationVariables
>
export const CreateCashierTransactionDocument = gql`
  mutation CreateCashierTransaction(
    $createCashierTransactionValueInput: CreateCashierTransactionValueInput!
  ) {
    createCashierTransaction(
      CreateCashierTransactionValueInput: $createCashierTransactionValueInput
    ) {
      idCashierTransaction
    }
  }
`
export type CreateCashierTransactionMutationFn = Apollo.MutationFunction<
  CreateCashierTransactionMutation,
  CreateCashierTransactionMutationVariables
>

/**
 * __useCreateCashierTransactionMutation__
 *
 * To run a mutation, you first call `useCreateCashierTransactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCashierTransactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCashierTransactionMutation, { data, loading, error }] = useCreateCashierTransactionMutation({
 *   variables: {
 *      createCashierTransactionValueInput: // value for 'createCashierTransactionValueInput'
 *   },
 * });
 */
export function useCreateCashierTransactionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateCashierTransactionMutation,
    CreateCashierTransactionMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateCashierTransactionMutation,
    CreateCashierTransactionMutationVariables
  >(CreateCashierTransactionDocument, options)
}
export type CreateCashierTransactionMutationHookResult = ReturnType<
  typeof useCreateCashierTransactionMutation
>
export type CreateCashierTransactionMutationResult =
  Apollo.MutationResult<CreateCashierTransactionMutation>
export type CreateCashierTransactionMutationOptions = Apollo.BaseMutationOptions<
  CreateCashierTransactionMutation,
  CreateCashierTransactionMutationVariables
>
export const CreateDailyCashierDocument = gql`
  mutation CreateDailyCashier($createDailyCashierValueInput: CreateDailyCashierValueInput!) {
    createDailyCashier(CreateDailyCashierValueInput: $createDailyCashierValueInput) {
      idDailyCashier
      idOu
      idUser
      idDailyCashierType
      idStatus
      idUserCreate
      idUserUpdate
      createdAt
      date
      note
      updatedAt
    }
  }
`
export type CreateDailyCashierMutationFn = Apollo.MutationFunction<
  CreateDailyCashierMutation,
  CreateDailyCashierMutationVariables
>

/**
 * __useCreateDailyCashierMutation__
 *
 * To run a mutation, you first call `useCreateDailyCashierMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDailyCashierMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDailyCashierMutation, { data, loading, error }] = useCreateDailyCashierMutation({
 *   variables: {
 *      createDailyCashierValueInput: // value for 'createDailyCashierValueInput'
 *   },
 * });
 */
export function useCreateDailyCashierMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateDailyCashierMutation,
    CreateDailyCashierMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateDailyCashierMutation, CreateDailyCashierMutationVariables>(
    CreateDailyCashierDocument,
    options
  )
}
export type CreateDailyCashierMutationHookResult = ReturnType<typeof useCreateDailyCashierMutation>
export type CreateDailyCashierMutationResult = Apollo.MutationResult<CreateDailyCashierMutation>
export type CreateDailyCashierMutationOptions = Apollo.BaseMutationOptions<
  CreateDailyCashierMutation,
  CreateDailyCashierMutationVariables
>
export const CreateDocumentDocument = gql`
  mutation CreateDocument($createDocumentValueInput: CreateDocumentValueInput!) {
    createDocument(CreateDocumentValueInput: $createDocumentValueInput) {
      TYPE
      CODRESPUESTA
      MENSAJE
      XML
      PDF
      CDR
      QR
      TICKET
      NOMBRE
      QR_VALOR
      RGBCOLOR_BACK
      RGBCOLOR_FORECOLOR
      idDocument
    }
  }
`
export type CreateDocumentMutationFn = Apollo.MutationFunction<
  CreateDocumentMutation,
  CreateDocumentMutationVariables
>

/**
 * __useCreateDocumentMutation__
 *
 * To run a mutation, you first call `useCreateDocumentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDocumentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDocumentMutation, { data, loading, error }] = useCreateDocumentMutation({
 *   variables: {
 *      createDocumentValueInput: // value for 'createDocumentValueInput'
 *   },
 * });
 */
export function useCreateDocumentMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateDocumentMutation, CreateDocumentMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateDocumentMutation, CreateDocumentMutationVariables>(
    CreateDocumentDocument,
    options
  )
}
export type CreateDocumentMutationHookResult = ReturnType<typeof useCreateDocumentMutation>
export type CreateDocumentMutationResult = Apollo.MutationResult<CreateDocumentMutation>
export type CreateDocumentMutationOptions = Apollo.BaseMutationOptions<
  CreateDocumentMutation,
  CreateDocumentMutationVariables
>
export const CreatePaymentDocument = gql`
  mutation CreatePayment($createPayment: CreatePaymentValueInput!) {
    createPayment(createPayment: $createPayment) {
      CODRESPUESTA
      MENSAJE
      XML
      PDF
      CDR
      QR
      TICKET
      NOMBRE
      QR_VALOR
      RGBCOLOR_BACK
      RGBCOLOR_FORECOLOR
      idDocument
    }
  }
`
export type CreatePaymentMutationFn = Apollo.MutationFunction<
  CreatePaymentMutation,
  CreatePaymentMutationVariables
>

/**
 * __useCreatePaymentMutation__
 *
 * To run a mutation, you first call `useCreatePaymentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePaymentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPaymentMutation, { data, loading, error }] = useCreatePaymentMutation({
 *   variables: {
 *      createPayment: // value for 'createPayment'
 *   },
 * });
 */
export function useCreatePaymentMutation(
  baseOptions?: Apollo.MutationHookOptions<CreatePaymentMutation, CreatePaymentMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreatePaymentMutation, CreatePaymentMutationVariables>(
    CreatePaymentDocument,
    options
  )
}
export type CreatePaymentMutationHookResult = ReturnType<typeof useCreatePaymentMutation>
export type CreatePaymentMutationResult = Apollo.MutationResult<CreatePaymentMutation>
export type CreatePaymentMutationOptions = Apollo.BaseMutationOptions<
  CreatePaymentMutation,
  CreatePaymentMutationVariables
>
export const DeleteCashierTransactionReservationItemDocument = gql`
  mutation DeleteCashierTransactionReservationItem(
    $deleteCashierTransactionReservationItem: DeleteCreateCashierTransactionReservationItemInput!
  ) {
    deleteCashierTransactionReservationItem(
      deleteCashierTransactionReservationItem: $deleteCashierTransactionReservationItem
    ) {
      count
    }
  }
`
export type DeleteCashierTransactionReservationItemMutationFn = Apollo.MutationFunction<
  DeleteCashierTransactionReservationItemMutation,
  DeleteCashierTransactionReservationItemMutationVariables
>

/**
 * __useDeleteCashierTransactionReservationItemMutation__
 *
 * To run a mutation, you first call `useDeleteCashierTransactionReservationItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCashierTransactionReservationItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCashierTransactionReservationItemMutation, { data, loading, error }] = useDeleteCashierTransactionReservationItemMutation({
 *   variables: {
 *      deleteCashierTransactionReservationItem: // value for 'deleteCashierTransactionReservationItem'
 *   },
 * });
 */
export function useDeleteCashierTransactionReservationItemMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteCashierTransactionReservationItemMutation,
    DeleteCashierTransactionReservationItemMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    DeleteCashierTransactionReservationItemMutation,
    DeleteCashierTransactionReservationItemMutationVariables
  >(DeleteCashierTransactionReservationItemDocument, options)
}
export type DeleteCashierTransactionReservationItemMutationHookResult = ReturnType<
  typeof useDeleteCashierTransactionReservationItemMutation
>
export type DeleteCashierTransactionReservationItemMutationResult =
  Apollo.MutationResult<DeleteCashierTransactionReservationItemMutation>
export type DeleteCashierTransactionReservationItemMutationOptions = Apollo.BaseMutationOptions<
  DeleteCashierTransactionReservationItemMutation,
  DeleteCashierTransactionReservationItemMutationVariables
>
export const DeleteCashierTransactionDocument = gql`
  mutation DeleteCashierTransaction(
    $deleteCashierTransaction: DeleteCashierTransactionValueInput!
  ) {
    deleteCashierTransaction(deleteCashierTransaction: $deleteCashierTransaction) {
      count
    }
  }
`
export type DeleteCashierTransactionMutationFn = Apollo.MutationFunction<
  DeleteCashierTransactionMutation,
  DeleteCashierTransactionMutationVariables
>

/**
 * __useDeleteCashierTransactionMutation__
 *
 * To run a mutation, you first call `useDeleteCashierTransactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCashierTransactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCashierTransactionMutation, { data, loading, error }] = useDeleteCashierTransactionMutation({
 *   variables: {
 *      deleteCashierTransaction: // value for 'deleteCashierTransaction'
 *   },
 * });
 */
export function useDeleteCashierTransactionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteCashierTransactionMutation,
    DeleteCashierTransactionMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    DeleteCashierTransactionMutation,
    DeleteCashierTransactionMutationVariables
  >(DeleteCashierTransactionDocument, options)
}
export type DeleteCashierTransactionMutationHookResult = ReturnType<
  typeof useDeleteCashierTransactionMutation
>
export type DeleteCashierTransactionMutationResult =
  Apollo.MutationResult<DeleteCashierTransactionMutation>
export type DeleteCashierTransactionMutationOptions = Apollo.BaseMutationOptions<
  DeleteCashierTransactionMutation,
  DeleteCashierTransactionMutationVariables
>
export const GetAccountingPeriodsByIdOuDocument = gql`
  query GetAccountingPeriodsByIdOu($idOu: BUFFER!) {
    getAccountingPeriodsByIdOu(idOu: $idOu) {
      _count
    }
  }
`

/**
 * __useGetAccountingPeriodsByIdOuQuery__
 *
 * To run a query within a React component, call `useGetAccountingPeriodsByIdOuQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAccountingPeriodsByIdOuQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAccountingPeriodsByIdOuQuery({
 *   variables: {
 *      idOu: // value for 'idOu'
 *   },
 * });
 */
export function useGetAccountingPeriodsByIdOuQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetAccountingPeriodsByIdOuQuery,
    GetAccountingPeriodsByIdOuQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetAccountingPeriodsByIdOuQuery, GetAccountingPeriodsByIdOuQueryVariables>(
    GetAccountingPeriodsByIdOuDocument,
    options
  )
}
export function useGetAccountingPeriodsByIdOuLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAccountingPeriodsByIdOuQuery,
    GetAccountingPeriodsByIdOuQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetAccountingPeriodsByIdOuQuery,
    GetAccountingPeriodsByIdOuQueryVariables
  >(GetAccountingPeriodsByIdOuDocument, options)
}
export type GetAccountingPeriodsByIdOuQueryHookResult = ReturnType<
  typeof useGetAccountingPeriodsByIdOuQuery
>
export type GetAccountingPeriodsByIdOuLazyQueryHookResult = ReturnType<
  typeof useGetAccountingPeriodsByIdOuLazyQuery
>
export type GetAccountingPeriodsByIdOuQueryResult = Apollo.QueryResult<
  GetAccountingPeriodsByIdOuQuery,
  GetAccountingPeriodsByIdOuQueryVariables
>
export const GetBankAccountsByIdOuDocument = gql`
  query GetBankAccountsByIdOu($idOu: BUFFER!) {
    getBankAccountsByIdOu(idOu: $idOu) {
      idBankAccount
      idOu
      idCurrency
      idBankAccountType
      idEntity
      idUserCreate
      idUserUpdate
      idStatus
      number
      interbankNumber
      createdAt
      updatedAt
    }
  }
`

/**
 * __useGetBankAccountsByIdOuQuery__
 *
 * To run a query within a React component, call `useGetBankAccountsByIdOuQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBankAccountsByIdOuQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBankAccountsByIdOuQuery({
 *   variables: {
 *      idOu: // value for 'idOu'
 *   },
 * });
 */
export function useGetBankAccountsByIdOuQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetBankAccountsByIdOuQuery,
    GetBankAccountsByIdOuQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetBankAccountsByIdOuQuery, GetBankAccountsByIdOuQueryVariables>(
    GetBankAccountsByIdOuDocument,
    options
  )
}
export function useGetBankAccountsByIdOuLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetBankAccountsByIdOuQuery,
    GetBankAccountsByIdOuQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetBankAccountsByIdOuQuery, GetBankAccountsByIdOuQueryVariables>(
    GetBankAccountsByIdOuDocument,
    options
  )
}
export type GetBankAccountsByIdOuQueryHookResult = ReturnType<typeof useGetBankAccountsByIdOuQuery>
export type GetBankAccountsByIdOuLazyQueryHookResult = ReturnType<
  typeof useGetBankAccountsByIdOuLazyQuery
>
export type GetBankAccountsByIdOuQueryResult = Apollo.QueryResult<
  GetBankAccountsByIdOuQuery,
  GetBankAccountsByIdOuQueryVariables
>
export const GetCashierTransactionByIdDocument = gql`
  query GetCashierTransactionById($getCashierTransactionByIdId: BUFFER!) {
    getCashierTransactionById(id: $getCashierTransactionByIdId) {
      idCashierTransaction
      idOu
      idDailyCashier
      idEntity
      idCashierTransactionType
      idCurrency1
      idCurrency2
      idCurrency3
      idStatus
      idUserCreate
      idUserUpdate
      date
      dateEntry
      note
      amount1
      credit1
      debit1
      exchangeRate1
      amount2
      credit2
      debit2
      exchangeRate2
      amount3
      credit3
      debit3
      exchangeRate3
      updatedAt
    }
  }
`

/**
 * __useGetCashierTransactionByIdQuery__
 *
 * To run a query within a React component, call `useGetCashierTransactionByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCashierTransactionByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCashierTransactionByIdQuery({
 *   variables: {
 *      getCashierTransactionByIdId: // value for 'getCashierTransactionByIdId'
 *   },
 * });
 */
export function useGetCashierTransactionByIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetCashierTransactionByIdQuery,
    GetCashierTransactionByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetCashierTransactionByIdQuery, GetCashierTransactionByIdQueryVariables>(
    GetCashierTransactionByIdDocument,
    options
  )
}
export function useGetCashierTransactionByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCashierTransactionByIdQuery,
    GetCashierTransactionByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetCashierTransactionByIdQuery,
    GetCashierTransactionByIdQueryVariables
  >(GetCashierTransactionByIdDocument, options)
}
export type GetCashierTransactionByIdQueryHookResult = ReturnType<
  typeof useGetCashierTransactionByIdQuery
>
export type GetCashierTransactionByIdLazyQueryHookResult = ReturnType<
  typeof useGetCashierTransactionByIdLazyQuery
>
export type GetCashierTransactionByIdQueryResult = Apollo.QueryResult<
  GetCashierTransactionByIdQuery,
  GetCashierTransactionByIdQueryVariables
>
export const GetCashierTransactionDocumentsPymentsDocument = gql`
  query GetCashierTransactionDocumentsPyments(
    $idCashierTransaction: BUFFER!
    $idOu: BUFFER!
    $idEntity: BUFFER!
    $status: String!
  ) {
    getCashierTransactionDocumentsPyments(
      idCashierTransaction: $idCashierTransaction
      idOu: $idOu
      idEntity: $idEntity
      status: $status
    ) {
      idDocument
      idDocumentType
      idDocumentTypeName
      idDocumentItem
      idCurrency1
      idStatus
      idRelatedDocumentTypePayment
      DocumentTypeTrx
      date
      exchangeRate1
      number
      description
      balance1
    }
  }
`

/**
 * __useGetCashierTransactionDocumentsPymentsQuery__
 *
 * To run a query within a React component, call `useGetCashierTransactionDocumentsPymentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCashierTransactionDocumentsPymentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCashierTransactionDocumentsPymentsQuery({
 *   variables: {
 *      idCashierTransaction: // value for 'idCashierTransaction'
 *      idOu: // value for 'idOu'
 *      idEntity: // value for 'idEntity'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useGetCashierTransactionDocumentsPymentsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetCashierTransactionDocumentsPymentsQuery,
    GetCashierTransactionDocumentsPymentsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetCashierTransactionDocumentsPymentsQuery,
    GetCashierTransactionDocumentsPymentsQueryVariables
  >(GetCashierTransactionDocumentsPymentsDocument, options)
}
export function useGetCashierTransactionDocumentsPymentsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCashierTransactionDocumentsPymentsQuery,
    GetCashierTransactionDocumentsPymentsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetCashierTransactionDocumentsPymentsQuery,
    GetCashierTransactionDocumentsPymentsQueryVariables
  >(GetCashierTransactionDocumentsPymentsDocument, options)
}
export type GetCashierTransactionDocumentsPymentsQueryHookResult = ReturnType<
  typeof useGetCashierTransactionDocumentsPymentsQuery
>
export type GetCashierTransactionDocumentsPymentsLazyQueryHookResult = ReturnType<
  typeof useGetCashierTransactionDocumentsPymentsLazyQuery
>
export type GetCashierTransactionDocumentsPymentsQueryResult = Apollo.QueryResult<
  GetCashierTransactionDocumentsPymentsQuery,
  GetCashierTransactionDocumentsPymentsQueryVariables
>
export const GetCashierTransactionItemsViewByParamsDocument = gql`
  query GetCashierTransactionItemsViewByParams($idOu: BUFFER!, $idCashierTransaction: BUFFER!) {
    getCashierTransactionItemsViewByParams(
      idOu: $idOu
      idCashierTransaction: $idCashierTransaction
    ) {
      idCashierTransactionItemType
      idCashierTransactionItemTypeName
      idReservation
      idReservationItem
      idCurrency1
      idStatus
      idUserUpdate
      iddocument
      cpeCodResponseSunat
      cpeStatusSunat
      date
      description
      SerialDcoument
      numberDocument
      amount1
      updateAt
      cpeCodResponseSunat
      cpeStatusSunat
    }
  }
`

/**
 * __useGetCashierTransactionItemsViewByParamsQuery__
 *
 * To run a query within a React component, call `useGetCashierTransactionItemsViewByParamsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCashierTransactionItemsViewByParamsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCashierTransactionItemsViewByParamsQuery({
 *   variables: {
 *      idOu: // value for 'idOu'
 *      idCashierTransaction: // value for 'idCashierTransaction'
 *   },
 * });
 */
export function useGetCashierTransactionItemsViewByParamsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetCashierTransactionItemsViewByParamsQuery,
    GetCashierTransactionItemsViewByParamsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetCashierTransactionItemsViewByParamsQuery,
    GetCashierTransactionItemsViewByParamsQueryVariables
  >(GetCashierTransactionItemsViewByParamsDocument, options)
}
export function useGetCashierTransactionItemsViewByParamsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCashierTransactionItemsViewByParamsQuery,
    GetCashierTransactionItemsViewByParamsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetCashierTransactionItemsViewByParamsQuery,
    GetCashierTransactionItemsViewByParamsQueryVariables
  >(GetCashierTransactionItemsViewByParamsDocument, options)
}
export type GetCashierTransactionItemsViewByParamsQueryHookResult = ReturnType<
  typeof useGetCashierTransactionItemsViewByParamsQuery
>
export type GetCashierTransactionItemsViewByParamsLazyQueryHookResult = ReturnType<
  typeof useGetCashierTransactionItemsViewByParamsLazyQuery
>
export type GetCashierTransactionItemsViewByParamsQueryResult = Apollo.QueryResult<
  GetCashierTransactionItemsViewByParamsQuery,
  GetCashierTransactionItemsViewByParamsQueryVariables
>
export const GetcashierTransactionReservationItemsByParamsDocument = gql`
  query GetcashierTransactionReservationItemsByParams($idCashierTransaction: BUFFER!) {
    getcashierTransactionReservationItemsByParams(idCashierTransaction: $idCashierTransaction) {
      idDailyCashier
      idCashierTransaction
      idReservation
      idReservationItem
      idDocument
      idDocumentItem
      idOu
      idCurrency1
      idcurrency2
      idCurrency3
      idStatus
      idUserCreate
      idUserUpdate
      amount1
      credit1
      debit1
      exchangeRate1
      amount2
      credit2
      debit2
      exchangerate2
      amount3
      credit3
      debit3
      exchangeRate3
      createdAt
    }
  }
`

/**
 * __useGetcashierTransactionReservationItemsByParamsQuery__
 *
 * To run a query within a React component, call `useGetcashierTransactionReservationItemsByParamsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetcashierTransactionReservationItemsByParamsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetcashierTransactionReservationItemsByParamsQuery({
 *   variables: {
 *      idCashierTransaction: // value for 'idCashierTransaction'
 *   },
 * });
 */
export function useGetcashierTransactionReservationItemsByParamsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetcashierTransactionReservationItemsByParamsQuery,
    GetcashierTransactionReservationItemsByParamsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetcashierTransactionReservationItemsByParamsQuery,
    GetcashierTransactionReservationItemsByParamsQueryVariables
  >(GetcashierTransactionReservationItemsByParamsDocument, options)
}
export function useGetcashierTransactionReservationItemsByParamsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetcashierTransactionReservationItemsByParamsQuery,
    GetcashierTransactionReservationItemsByParamsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetcashierTransactionReservationItemsByParamsQuery,
    GetcashierTransactionReservationItemsByParamsQueryVariables
  >(GetcashierTransactionReservationItemsByParamsDocument, options)
}
export type GetcashierTransactionReservationItemsByParamsQueryHookResult = ReturnType<
  typeof useGetcashierTransactionReservationItemsByParamsQuery
>
export type GetcashierTransactionReservationItemsByParamsLazyQueryHookResult = ReturnType<
  typeof useGetcashierTransactionReservationItemsByParamsLazyQuery
>
export type GetcashierTransactionReservationItemsByParamsQueryResult = Apollo.QueryResult<
  GetcashierTransactionReservationItemsByParamsQuery,
  GetcashierTransactionReservationItemsByParamsQueryVariables
>
export const GetCashierTransactionsByParamsDocument = gql`
  query GetCashierTransactionsByParams($note: String!, $date: String!, $amount: Float!) {
    getCashierTransactionsByParams(note: $note, date: $date, amount: $amount) {
      idCashierTransaction
      idOu
      idDailyCashier
      idEntity
      idCashierTransactionType
      idCurrency1
      idCurrency2
      idCurrency3
      idStatus
      idUserCreate
      idUserUpdate
      date
      dateEntry
      note
      amount1
      credit1
      debit1
      exchangeRate1
      amount2
      credit2
      debit2
      exchangeRate2
      amount3
      credit3
      debit3
      exchangeRate3
      updatedAt
    }
  }
`

/**
 * __useGetCashierTransactionsByParamsQuery__
 *
 * To run a query within a React component, call `useGetCashierTransactionsByParamsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCashierTransactionsByParamsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCashierTransactionsByParamsQuery({
 *   variables: {
 *      note: // value for 'note'
 *      date: // value for 'date'
 *      amount: // value for 'amount'
 *   },
 * });
 */
export function useGetCashierTransactionsByParamsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetCashierTransactionsByParamsQuery,
    GetCashierTransactionsByParamsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetCashierTransactionsByParamsQuery,
    GetCashierTransactionsByParamsQueryVariables
  >(GetCashierTransactionsByParamsDocument, options)
}
export function useGetCashierTransactionsByParamsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCashierTransactionsByParamsQuery,
    GetCashierTransactionsByParamsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetCashierTransactionsByParamsQuery,
    GetCashierTransactionsByParamsQueryVariables
  >(GetCashierTransactionsByParamsDocument, options)
}
export type GetCashierTransactionsByParamsQueryHookResult = ReturnType<
  typeof useGetCashierTransactionsByParamsQuery
>
export type GetCashierTransactionsByParamsLazyQueryHookResult = ReturnType<
  typeof useGetCashierTransactionsByParamsLazyQuery
>
export type GetCashierTransactionsByParamsQueryResult = Apollo.QueryResult<
  GetCashierTransactionsByParamsQuery,
  GetCashierTransactionsByParamsQueryVariables
>
export const GetCurrencyExchangeRatesByDateAndIdOuDocument = gql`
  query GetCurrencyExchangeRatesByDateAndIdOu(
    $idOu: BUFFER!
    $date: DateTime!
    $idCurrency1: BUFFER!
    $idCurrency2: BUFFER!
  ) {
    getCurrencyExchangeRatesByDateAndIdOu(
      idOu: $idOu
      date: $date
      idCurrency1: $idCurrency1
      idCurrency2: $idCurrency2
    ) {
      idCurrencyExchangeRate
      idOu
      idCurrency1
      idCurrency2
      idStatus
      idUserCreate
      idUserUpdate
      date
      sellExchangeRate
      buyExchangeRate
      createdAt
      updatedAt
    }
  }
`

/**
 * __useGetCurrencyExchangeRatesByDateAndIdOuQuery__
 *
 * To run a query within a React component, call `useGetCurrencyExchangeRatesByDateAndIdOuQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCurrencyExchangeRatesByDateAndIdOuQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCurrencyExchangeRatesByDateAndIdOuQuery({
 *   variables: {
 *      idOu: // value for 'idOu'
 *      date: // value for 'date'
 *      idCurrency1: // value for 'idCurrency1'
 *      idCurrency2: // value for 'idCurrency2'
 *   },
 * });
 */
export function useGetCurrencyExchangeRatesByDateAndIdOuQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetCurrencyExchangeRatesByDateAndIdOuQuery,
    GetCurrencyExchangeRatesByDateAndIdOuQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetCurrencyExchangeRatesByDateAndIdOuQuery,
    GetCurrencyExchangeRatesByDateAndIdOuQueryVariables
  >(GetCurrencyExchangeRatesByDateAndIdOuDocument, options)
}
export function useGetCurrencyExchangeRatesByDateAndIdOuLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCurrencyExchangeRatesByDateAndIdOuQuery,
    GetCurrencyExchangeRatesByDateAndIdOuQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetCurrencyExchangeRatesByDateAndIdOuQuery,
    GetCurrencyExchangeRatesByDateAndIdOuQueryVariables
  >(GetCurrencyExchangeRatesByDateAndIdOuDocument, options)
}
export type GetCurrencyExchangeRatesByDateAndIdOuQueryHookResult = ReturnType<
  typeof useGetCurrencyExchangeRatesByDateAndIdOuQuery
>
export type GetCurrencyExchangeRatesByDateAndIdOuLazyQueryHookResult = ReturnType<
  typeof useGetCurrencyExchangeRatesByDateAndIdOuLazyQuery
>
export type GetCurrencyExchangeRatesByDateAndIdOuQueryResult = Apollo.QueryResult<
  GetCurrencyExchangeRatesByDateAndIdOuQuery,
  GetCurrencyExchangeRatesByDateAndIdOuQueryVariables
>
export const GetDailyCashierOpenByIdOuAndDateDocument = gql`
  query GetDailyCashierOpenByIdOuAndDate($idOu: BUFFER!, $date: DateTime!) {
    getDailyCashierOpenByIdOuAndDate(idOu: $idOu, date: $date) {
      idDailyCashier
      idOu
      idUser
      idDailyCashierType
      idStatus
      idUserCreate
      idUserUpdate
      date
      note
      createdAt
      updatedAt
    }
  }
`

/**
 * __useGetDailyCashierOpenByIdOuAndDateQuery__
 *
 * To run a query within a React component, call `useGetDailyCashierOpenByIdOuAndDateQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDailyCashierOpenByIdOuAndDateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDailyCashierOpenByIdOuAndDateQuery({
 *   variables: {
 *      idOu: // value for 'idOu'
 *      date: // value for 'date'
 *   },
 * });
 */
export function useGetDailyCashierOpenByIdOuAndDateQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetDailyCashierOpenByIdOuAndDateQuery,
    GetDailyCashierOpenByIdOuAndDateQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetDailyCashierOpenByIdOuAndDateQuery,
    GetDailyCashierOpenByIdOuAndDateQueryVariables
  >(GetDailyCashierOpenByIdOuAndDateDocument, options)
}
export function useGetDailyCashierOpenByIdOuAndDateLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetDailyCashierOpenByIdOuAndDateQuery,
    GetDailyCashierOpenByIdOuAndDateQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetDailyCashierOpenByIdOuAndDateQuery,
    GetDailyCashierOpenByIdOuAndDateQueryVariables
  >(GetDailyCashierOpenByIdOuAndDateDocument, options)
}
export type GetDailyCashierOpenByIdOuAndDateQueryHookResult = ReturnType<
  typeof useGetDailyCashierOpenByIdOuAndDateQuery
>
export type GetDailyCashierOpenByIdOuAndDateLazyQueryHookResult = ReturnType<
  typeof useGetDailyCashierOpenByIdOuAndDateLazyQuery
>
export type GetDailyCashierOpenByIdOuAndDateQueryResult = Apollo.QueryResult<
  GetDailyCashierOpenByIdOuAndDateQuery,
  GetDailyCashierOpenByIdOuAndDateQueryVariables
>
export const GetDocumentsPymentsAllDocument = gql`
  query GetDocumentsPymentsAll($date: String!, $numDocumento: String!, $idOu: BUFFER!) {
    getDocumentsPymentsAll(date: $date, numDocumento: $numDocumento, idOu: $idOu) {
      idDocument
      idDocumentItem
      idDocumentType
      idDocumentTypeName
      idRelatedDocument
      date
      description
      SerialDocument
      number
      idRelatedDocumentTypePayment
      idRelatedDocumentType
      idRelatedDocumentTypeName
      dateRelated
      descriptionRelated
      SerialDocumentRelated
      numberRelated
      PaymentRegister
      PaymentSunatMoney
      DocumentTypeTrx
      cpeTypeOperation
      cpeTtaxesValue
      cpeSellingPrice
      amountTotal
      cpeSellingValue
      cpeTaxesAmount
      cpeCustomerTypeDocument
      cpeCustomerDocumentNumber
      cpeCustomerName
      cpeCustomerAddress
      SaldoUSD
      cpeCodResponseSunat
      cpeStatusSunat
      idStatus
    }
  }
`

/**
 * __useGetDocumentsPymentsAllQuery__
 *
 * To run a query within a React component, call `useGetDocumentsPymentsAllQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDocumentsPymentsAllQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDocumentsPymentsAllQuery({
 *   variables: {
 *      date: // value for 'date'
 *      numDocumento: // value for 'numDocumento'
 *      idOu: // value for 'idOu'
 *   },
 * });
 */
export function useGetDocumentsPymentsAllQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetDocumentsPymentsAllQuery,
    GetDocumentsPymentsAllQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetDocumentsPymentsAllQuery, GetDocumentsPymentsAllQueryVariables>(
    GetDocumentsPymentsAllDocument,
    options
  )
}
export function useGetDocumentsPymentsAllLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetDocumentsPymentsAllQuery,
    GetDocumentsPymentsAllQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetDocumentsPymentsAllQuery, GetDocumentsPymentsAllQueryVariables>(
    GetDocumentsPymentsAllDocument,
    options
  )
}
export type GetDocumentsPymentsAllQueryHookResult = ReturnType<
  typeof useGetDocumentsPymentsAllQuery
>
export type GetDocumentsPymentsAllLazyQueryHookResult = ReturnType<
  typeof useGetDocumentsPymentsAllLazyQuery
>
export type GetDocumentsPymentsAllQueryResult = Apollo.QueryResult<
  GetDocumentsPymentsAllQuery,
  GetDocumentsPymentsAllQueryVariables
>
export const GetDocumentsPymentsDocument = gql`
  query GetDocumentsPyments(
    $date: String!
    $idDocumentTypeName: String!
    $numDocumento: String!
    $status: String!
    $idOu: BUFFER!
    $idEntity: BUFFER!
  ) {
    getDocumentsPyments(
      date: $date
      idDocumentTypeName: $idDocumentTypeName
      numDocumento: $numDocumento
      status: $status
      idOu: $idOu
      idEntity: $idEntity
    ) {
      idDocument
      idDocumentType
      idDocumentTypeName
      idDocumentItem
      idOu
      idCurrency1
      idStatus
      idDocumentStatementTypeDoc
      idcurrency2
      idCurrency3
      idRelatedDocumentTypePayment
      exchangeRate3
      date
      description
      number
      DocumentTypeTrx
      balance1
      exchangeRate1
    }
  }
`

/**
 * __useGetDocumentsPymentsQuery__
 *
 * To run a query within a React component, call `useGetDocumentsPymentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDocumentsPymentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDocumentsPymentsQuery({
 *   variables: {
 *      date: // value for 'date'
 *      idDocumentTypeName: // value for 'idDocumentTypeName'
 *      numDocumento: // value for 'numDocumento'
 *      status: // value for 'status'
 *      idOu: // value for 'idOu'
 *      idEntity: // value for 'idEntity'
 *   },
 * });
 */
export function useGetDocumentsPymentsQuery(
  baseOptions: Apollo.QueryHookOptions<GetDocumentsPymentsQuery, GetDocumentsPymentsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetDocumentsPymentsQuery, GetDocumentsPymentsQueryVariables>(
    GetDocumentsPymentsDocument,
    options
  )
}
export function useGetDocumentsPymentsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetDocumentsPymentsQuery,
    GetDocumentsPymentsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetDocumentsPymentsQuery, GetDocumentsPymentsQueryVariables>(
    GetDocumentsPymentsDocument,
    options
  )
}
export type GetDocumentsPymentsQueryHookResult = ReturnType<typeof useGetDocumentsPymentsQuery>
export type GetDocumentsPymentsLazyQueryHookResult = ReturnType<
  typeof useGetDocumentsPymentsLazyQuery
>
export type GetDocumentsPymentsQueryResult = Apollo.QueryResult<
  GetDocumentsPymentsQuery,
  GetDocumentsPymentsQueryVariables
>
export const GetNumbersDailyCashierByDateAndIdOuDocument = gql`
  query GetNumbersDailyCashierByDateAndIdOu($idOu: BUFFER!, $date: DateTime!) {
    getNumbersDailyCashierByDateAndIdOu(idOu: $idOu, date: $date) {
      _count
    }
  }
`

/**
 * __useGetNumbersDailyCashierByDateAndIdOuQuery__
 *
 * To run a query within a React component, call `useGetNumbersDailyCashierByDateAndIdOuQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNumbersDailyCashierByDateAndIdOuQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNumbersDailyCashierByDateAndIdOuQuery({
 *   variables: {
 *      idOu: // value for 'idOu'
 *      date: // value for 'date'
 *   },
 * });
 */
export function useGetNumbersDailyCashierByDateAndIdOuQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetNumbersDailyCashierByDateAndIdOuQuery,
    GetNumbersDailyCashierByDateAndIdOuQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetNumbersDailyCashierByDateAndIdOuQuery,
    GetNumbersDailyCashierByDateAndIdOuQueryVariables
  >(GetNumbersDailyCashierByDateAndIdOuDocument, options)
}
export function useGetNumbersDailyCashierByDateAndIdOuLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetNumbersDailyCashierByDateAndIdOuQuery,
    GetNumbersDailyCashierByDateAndIdOuQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetNumbersDailyCashierByDateAndIdOuQuery,
    GetNumbersDailyCashierByDateAndIdOuQueryVariables
  >(GetNumbersDailyCashierByDateAndIdOuDocument, options)
}
export type GetNumbersDailyCashierByDateAndIdOuQueryHookResult = ReturnType<
  typeof useGetNumbersDailyCashierByDateAndIdOuQuery
>
export type GetNumbersDailyCashierByDateAndIdOuLazyQueryHookResult = ReturnType<
  typeof useGetNumbersDailyCashierByDateAndIdOuLazyQuery
>
export type GetNumbersDailyCashierByDateAndIdOuQueryResult = Apollo.QueryResult<
  GetNumbersDailyCashierByDateAndIdOuQuery,
  GetNumbersDailyCashierByDateAndIdOuQueryVariables
>
