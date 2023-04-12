import type { FC } from 'react'
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
  Typography,
} from '@mui/material'

import { useIntl } from '../hooks/use-intl'

interface AlertDialogProps extends DialogProps {
  open: boolean
  handleOpen: () => void
  onConfirm: () => void
  dialogTitle: string
  dialogContent: string
  icon?: JSX.Element
}

export const AlertDialog: FC<AlertDialogProps> = (props) => {
  const { open, handleOpen, dialogTitle, dialogContent, onConfirm, icon } = props

  const intl = useIntl()

  return (
    <Dialog
      open={open}
      color="primary"
      onClose={handleOpen}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        <Typography fontSize="h6" fontWeight="bold">
          {dialogTitle}
        </Typography>
      </DialogTitle>

      <DialogContent>
        <Box display="flex" alignItems="center" gap="8px">
          {icon && (
            <Box display="flex" alignItems="center">
              {icon}
            </Box>
          )}
          <div>{dialogContent}</div>
        </Box>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleOpen}>
          {intl.formatMessage('components.alert.dialog.cancel.button')}
        </Button>
        <Button onClick={onConfirm} autoFocus>
          {intl.formatMessage('components.alert.dialog.confirmation.button')}
        </Button>
      </DialogActions>
    </Dialog>
  )
}
