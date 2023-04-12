import { ComponentProps, FC } from 'react'
import { ErrorOutline as ErrorIcon } from '@mui/icons-material'

import { AlertDialog } from '@/shared/components/alert-dialog'

type DeleteConfirmProps = ComponentProps<typeof AlertDialog>

export const DeleteConfirm: FC<DeleteConfirmProps> = ({
  open,
  handleOpen,
  dialogTitle,
  dialogContent,
  onConfirm,
}) => (
  <AlertDialog
    open={open}
    maxWidth="sm"
    handleOpen={handleOpen}
    dialogTitle={dialogTitle}
    dialogContent={dialogContent}
    onConfirm={onConfirm}
    icon={<ErrorIcon />}
  />
)
