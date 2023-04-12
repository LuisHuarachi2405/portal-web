/* eslint-disable class-methods-use-this */
import { IDocumentPayments } from '../../types/documentPayments'

export class DocumentsPaymentsFactory {
  create(payment: any): IDocumentPayments {
    return {
      idDocument: payment.idDocument,
      idDocumentItem: payment.idDocumentItem,
      item: payment.itemNumber,
      idPaymentDocumentType: payment.idDocumentType,
      idPaymentDocumentTypeName: payment.idDocumentTypeName,
      numberDocumentTransaction: payment.number,
      datePayment: payment.date,
      idCurrency1: payment.idCurrency1,
      idCurrency2: payment.idCurrency2,
      idCurrency3: payment.idCurrency1,
      paymentAmount: Number(payment.TOTAL_TO_PAY),
      paymentGlosaAndNumber: payment.description,
      exchangeRate1: payment.currencyExchangeRate.buyExchangeRate,
      exchangeRate2: 1,
      exchangeRate3: payment.currencyExchangeRate.buyExchangeRate,
      idCurrencyMN: payment.idCurrencyMN,
      idCashierTransactionItemType: payment.typePaymentsGeneralParameters?.idValue,
      idCashierTransactionItemTypeName: payment.typePaymentsGeneralParameters?.code,
    }
  }
}
