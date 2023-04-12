import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

const typeAdvancePaymentSchema = zod.object({
  date: zod.string().min(1, {
    message: 'pages.payments.form.cashier-transaction.payments.deposit.form.date.required',
  }),
  idDocumentType: zod.string().min(1, {
    message: 'pages.payments.form.cashier-transaction.payments.deposit.form.paymentType.required',
  }),
  idBankAccount: zod.string().min(1, {
    message: 'pages.payments.form.cashier-transaction.payments.deposit.form.bankAccount.required',
  }),
  // idPaymentGateway: zod.string().min(1, {
  //  message: 'pages.payments.form.cashier-transaction.payments.deposit.date.required' }),
  number: zod
    .string()
    .min(1, {
      message: 'pages.payments.form.cashier-transaction.payments.deposit.form.number.required',
    })
    .regex(
      /^\d+([.]\d+)?$/,
      'pages.payments.form.cashier-transaction.payments.deposit.form.number.invalid'
    ),

  amount: zod
    .string()
    .min(1, {
      message: 'pages.payments.form.cashier-transaction.payments.deposit.form.amount.required',
    })
    .regex(
      /^\d+([.]\d+)?$/,
      'pages.payments.form.cashier-transaction.payments.deposit.form.amount.invalid'
    ),
  description: zod.string().optional(),
  note: zod.string().optional(),
})

const typeDefaultPaymentSchema = zod.object({
  date: zod.string().min(1, {
    message: 'pages.payments.form.cashier-transaction.payments.deposit.form.date.required',
  }),
  idDocumentType: zod.string().min(1, {
    message: 'pages.payments.form.cashier-transaction.payments.deposit.form.paymentType.required',
  }),
})

const typeCashPaymentSchema = zod.object({
  date: zod.string().min(1, {
    message: 'pages.payments.form.cashier-transaction.payments.deposit.form.date.required',
  }),
  idDocumentType: zod.string().min(1, {
    message: 'pages.payments.form.cashier-transaction.payments.deposit.form.paymentType.required',
  }),
  amount: zod
    .string()
    .min(1, {
      message: 'pages.payments.form.cashier-transaction.payments.deposit.form.amount.required',
    })
    .regex(
      /^\d+([.]\d+)?$/,
      'pages.payments.form.cashier-transaction.payments.deposit.form.amount.invalid'
    ),
  typeCurrency: zod.string().min(1, {
    message: 'pages.payments.form.cashier-transaction.payments.deposit.form.type-currency.required',
  }),
  exchangeRate: zod.string(),
})

export const typeAdvancePaymentResolver = zodResolver(typeAdvancePaymentSchema)

export const typeDefaultPaymentResolver = zodResolver(typeDefaultPaymentSchema)

export const typeCashPaymentSchemaResolver = zodResolver(typeCashPaymentSchema)
