export interface IDocumentPayments {
  idDocument: string
  idDocumentItem: string
  item: number
  idPaymentDocumentType: string
  idPaymentDocumentTypeName: string
  numberDocumentTransaction: string
  datePayment: string
  idCurrency1: string
  idCurrency2: string
  idCurrency3: string
  paymentAmount: number
  paymentGlosaAndNumber: string
  exchangeRate1: number
  exchangeRate2: number
  exchangeRate3: number
  idCurrencyMN: string
  idCashierTransactionItemType: string
  idCashierTransactionItemTypeName: string
}
