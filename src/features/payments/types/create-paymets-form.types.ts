export interface CreatePaymentsForm {
  date: string
  idDocumentType: string
  idBankAccount: string
  idPaymentGateway: string
  number: string
  description: string
  amount: string
  note: string
  typeCurrency: string
  exchangeRate: string
}
