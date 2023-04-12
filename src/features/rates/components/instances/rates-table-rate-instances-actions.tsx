import { Dispatch, FC, SetStateAction, useState } from 'react'
import { Box, IconButton } from '@mui/material'
import { GridRowId, GridRowModes, GridRowModesModel } from '@mui/x-data-grid'
import { Cancel, Delete, Edit, ErrorOutline, Save } from '@mui/icons-material'
import toast from 'react-hot-toast'

import {
  GetRateInstancesByProductDocument,
  RateInstance,
  useDeleteRateInstanceMutation,
} from '@/shared/graphql/generated/rates-api'
import { AlertDialog } from '@/shared/components/alert-dialog'
import { useIntl } from '@/shared/hooks/use-intl'

interface RateInstancesTableActionsProps {
  row: RateInstance
  isInEditMode: boolean
  setRowModesModel: Dispatch<SetStateAction<GridRowModesModel>>
  rowModesModel: GridRowModesModel
}

export const RateInstancesTableActions: FC<RateInstancesTableActionsProps> = (props) => {
  const { row, isInEditMode, setRowModesModel, rowModesModel } = props
  const [open, setOpen] = useState<boolean>(false)
  const intl = useIntl()
  const { idRateInstance, rate } = row
  const name = rate?.code ?? ''

  const handleOpen = () => {
    setOpen((prev) => !prev)
  }

  const handleEditClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } })
  }

  const handleSaveClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } })
  }

  const handleCancelClick = (id: GridRowId) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    })
  }

  const [deleteRateInstance] = useDeleteRateInstanceMutation({
    refetchQueries: [GetRateInstancesByProductDocument],
    onCompleted: () => {
      toast.success('Rate Instance deleted successfully', {
        position: 'top-right',
        duration: 2000,
      })
    },
  })

  const onDeleteConfirm = async () => {
    try {
      await deleteRateInstance({ variables: { idRateInstance } })
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
          type: 'Rate Instance with rate code',
          name,
        })}
        dialogContent={intl.formatMessage('components.delete.alert.dialog.content')}
        onConfirm={onDeleteConfirm}
        icon={<ErrorOutline />}
      />
      <Box display="flex" gap={1} justifyContent="center" width="100%">
        {isInEditMode ? (
          <>
            <IconButton onClick={handleSaveClick(row.idRateInstance)}>
              <Save />
            </IconButton>
            <IconButton onClick={handleCancelClick(row.idRateInstance)}>
              <Cancel />
            </IconButton>
          </>
        ) : (
          <>
            <IconButton onClick={handleEditClick(row.idRateInstance)}>
              <Edit />
            </IconButton>
            <IconButton onClick={handleOpen}>
              <Delete />
            </IconButton>
          </>
        )}
      </Box>
    </>
  )
}
