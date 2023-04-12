import { Rate } from '@/shared/graphql/generated/rates-api'

export interface FormModalState {
  open: boolean
  itemToEdit: Rate | null
}

export interface DeleteConfirmState {
  open: boolean
  itemToDelete: string | null
}
