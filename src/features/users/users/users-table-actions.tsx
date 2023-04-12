import { Delete, Edit, ErrorOutline } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { Box } from '@mui/system'
import Link from 'next/link'
import { FC, useState } from 'react'
import toast from 'react-hot-toast'

import { AlertDialog } from '@/shared/components/alert-dialog'
import { useIntl } from '@/shared/hooks/use-intl'
import { paths } from '@/shared/routes/paths'
import { GetAllUsersDocument, useDeleteUserMutation } from '@/shared/graphql/generated/users-api'

interface UsersTableActionsProps {
  row: any
}

export const UsersTableActions: FC<UsersTableActionsProps> = (props) => {
  const {
    row: { idUser, name },
  } = props

  const [open, setOpen] = useState<boolean>(false)

  const intl = useIntl()

  const handleOpen = () => {
    setOpen(!open)
  }

  const [deleteUser] = useDeleteUserMutation({
    refetchQueries: [GetAllUsersDocument],
    onCompleted: () => {
      toast.success('Users deleted successfully', {
        position: 'top-right',
        duration: 2000,
      })
    },
  })

  const onDeleteConfirm = async () => {
    try {
      await deleteUser({
        variables: {
          data: {
            idUser,
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
          type: 'User',
          name,
        })}
        dialogContent={intl.formatMessage('components.delete.alert.dialog.content')}
        onConfirm={onDeleteConfirm}
        icon={<ErrorOutline />}
      />
      <Box display="flex" gap="8px" justifyContent="center" width="100%">
        <Link href={paths.users.edit(idUser)}>
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
