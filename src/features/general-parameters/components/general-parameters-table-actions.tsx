import { FC, useState } from 'react'
import { Delete, Edit, ErrorOutline } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { Box } from '@mui/system'
import Link from 'next/link'
import toast from 'react-hot-toast'

import { AlertDialog } from '@/shared/components/alert-dialog'
import {
  GeneralParameter,
  GetGeneralParametersDocument,
  useDeleteGeneralParameterMutation,
} from '@/shared/graphql/generated/general-parameters-api'
import { useIntl } from '@/shared/hooks/use-intl'
import { paths } from '@/shared/routes/paths'

interface GeneralParametersTableActionsProps {
  row: GeneralParameter
}

export const GeneralParametersTableActions: FC<GeneralParametersTableActionsProps> = (props) => {
  const {
    row: { idGeneralParameter: id, name },
  } = props

  const [open, setOpen] = useState<boolean>(false)

  const intl = useIntl()

  const handleOpen = () => {
    setOpen(!open)
  }

  const [deleteGeneralParameter] = useDeleteGeneralParameterMutation({
    refetchQueries: [GetGeneralParametersDocument],
    onCompleted: () => {
      toast.success('General Parameter deleted successfully', {
        position: 'top-right',
        duration: 2000,
      })
    },
  })

  const onDeleteConfirm = async () => {
    try {
      await deleteGeneralParameter({ variables: { id } })
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
          type: intl.formatMessage('pages.general.parameters.delete.type'),
          name,
        })}
        dialogContent={intl.formatMessage('components.delete.alert.dialog.content')}
        onConfirm={onDeleteConfirm}
        icon={<ErrorOutline />}
      />
      <Box display="flex" gap="8px" justifyContent="center" width="100%">
        <Link href={paths.generalParameters.edit(id)}>
          <IconButton color="primary">
            <Edit fontSize="small" />
          </IconButton>
        </Link>

        <IconButton onClick={handleOpen}>
          <Delete fontSize="small" />
        </IconButton>
      </Box>
    </>
  )
}
