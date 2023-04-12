import { Dispatch, FC, SetStateAction, useState } from 'react'
import { Box, IconButton } from '@mui/material'
import { Delete, Edit, ErrorOutline } from '@mui/icons-material'
import toast from 'react-hot-toast'

import {
  GetRatesByProductDocument,
  Rate,
  useDeleteRateMutation,
} from '@/shared/graphql/generated/rates-api'
import { AlertDialog } from '@/shared/components/alert-dialog'
import { useIntl } from '@/shared/hooks/use-intl'

import { FormModalState } from '../types/shared.types'

interface RatesTableActionsProps {
  row: Rate
  setFormModalState: Dispatch<SetStateAction<FormModalState>>
}

export const RatesTableActions: FC<RatesTableActionsProps> = (props) => {
  const { row, setFormModalState } = props
  const [open, setOpen] = useState<boolean>(false)
  const intl = useIntl()
  const name = row.code

  const handleOpen = () => {
    setOpen(!open)
  }

  const [deleteRateMutation] = useDeleteRateMutation({
    refetchQueries: [GetRatesByProductDocument],
    onCompleted: () => {
      toast.success('Entity deleted successfully', {
        position: 'top-right',
        duration: 2000,
      })
    },
  })

  const handleUpdate = () => {
    setFormModalState({
      open: true,
      itemToEdit: row,
    })
  }

  const onDeleteConfirm = async () => {
    try {
      await deleteRateMutation({
        variables: {
          idRate: row.idRate,
        },
      })
      handleOpen()
    } catch (error) {
      toast.error(`${error}`, {
        position: 'top-right',
        duration: 2000,
      })
    }
  }

  return (
    <>
      <AlertDialog
        open={open}
        maxWidth="sm"
        handleOpen={handleOpen}
        dialogTitle={intl.formatMessage('components.delete.alert.dialog.title', {
          type: 'Rate',
          name,
        })}
        dialogContent={intl.formatMessage('components.delete.alert.dialog.content')}
        onConfirm={onDeleteConfirm}
        icon={<ErrorOutline />}
      />
      <Box display="flex" gap={1} justifyContent="center" width="100%">
        <IconButton onClick={handleUpdate}>
          <Edit />
        </IconButton>
        <IconButton onClick={handleOpen}>
          <Delete />
        </IconButton>
      </Box>
    </>
  )
}
