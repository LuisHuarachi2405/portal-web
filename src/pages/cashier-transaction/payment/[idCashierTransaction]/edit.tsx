import { NextPage } from 'next'
import dynamic from 'next/dynamic'

const DynamicEditCashierTransactionsContent = dynamic(
  () =>
    import('@/features/payments/components/cashier-transaction/cashier-transaction-form').then(
      (module) => ({
        default: module.CashierTransactionForm,
      })
    ),
  {
    suspense: true,
  }
)

const EditCashierTransaction: NextPage = () => <DynamicEditCashierTransactionsContent />

export default EditCashierTransaction
