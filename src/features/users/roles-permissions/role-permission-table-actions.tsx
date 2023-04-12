import { Delete, ErrorOutline } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { Box } from '@mui/system'
import { FC, useState } from 'react'
import toast from 'react-hot-toast'

import { AlertDialog } from '@/shared/components/alert-dialog'
import {
  GetAllRolePermissionsDocument,
  RolePermission,
  useDeleteRolePermissionMutation,
} from '@/shared/graphql/generated/users-api'
import { useIntl } from '@/shared/hooks/use-intl'

interface RolePermissionTableActionsProps {
  row: RolePermission
}

export const RolePermissionTableActions: FC<RolePermissionTableActionsProps> = (props) => {
  const {
    row: { idPermission, idRole },
  } = props

  const [open, setOpen] = useState<boolean>(false)

  const intl = useIntl()

  const handleOpen = () => {
    setOpen(!open)
  }

  const [deleteRolePermission] = useDeleteRolePermissionMutation({
    refetchQueries: [GetAllRolePermissionsDocument],
    onCompleted: () => {
      toast.success('Role Permission deleted successfully', {
        position: 'top-right',
        duration: 2000,
      })
    },
  })

  const onDeleteConfirm = async () => {
    try {
      await deleteRolePermission({ variables: { idPermission, idRole } })
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
          type: intl.formatMessage('pages.role.permission.delete.type'),
          name: '',
        })}
        dialogContent={intl.formatMessage('components.delete.alert.dialog.content')}
        onConfirm={onDeleteConfirm}
        icon={<ErrorOutline />}
      />
      <Box display="flex" gap="8px" justifyContent="center" width="100%">
        <IconButton onClick={handleOpen}>
          <Delete fontSize="small" />
        </IconButton>
      </Box>
    </>
  )
}
