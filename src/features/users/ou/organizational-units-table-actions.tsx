import { Delete, Edit, ErrorOutline } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { Box } from '@mui/system'
import Link from 'next/link'
import { FC, useState } from 'react'
import toast from 'react-hot-toast'

import { AlertDialog } from '@/shared/components/alert-dialog'
import { GetAllOusDocument, useDeleteOuMutation } from '@/shared/graphql/generated/users-api'
import { useIntl } from '@/shared/hooks/use-intl'
import { paths } from '@/shared/routes/paths'

interface OrganizationalUnitsTableActionsProps {
  row: any
}

export const OrganizationalUnitsTableActions: FC<OrganizationalUnitsTableActionsProps> = (
  props
) => {
  const {
    row: { idOu, name },
  } = props

  const [open, setOpen] = useState<boolean>(false)

  const intl = useIntl()

  const handleOpen = () => {
    setOpen(!open)
  }

  const [deleteOrganizationalUnit] = useDeleteOuMutation({
    refetchQueries: [GetAllOusDocument],
    onCompleted: () => {
      toast.success('Organizational Unit deleted successfully', {
        position: 'top-right',
        duration: 2000,
      })
    },
  })

  const onDeleteConfirm = async () => {
    try {
      await deleteOrganizationalUnit({
        variables: {
          data: {
            idOu,
          },
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
          type: intl.formatMessage('pages.organizational.units.delete.type'),
          name,
        })}
        dialogContent={intl.formatMessage('components.delete.alert.dialog.content')}
        onConfirm={onDeleteConfirm}
        icon={<ErrorOutline />}
      />
      <Box display="flex" gap="8px" justifyContent="center" width="100%">
        <Link href={paths.users.organizationalUnits.edit(idOu)}>
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
