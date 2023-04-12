import { FC, useState } from 'react'
import { Delete, Edit, ErrorOutline } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { Box } from '@mui/system'
import toast from 'react-hot-toast'
import Link from 'next/link'

import { AlertDialog } from '@/shared/components/alert-dialog'
import {
  GetEntitiesDocument,
  Entity,
  useDeleteEntityMutation,
} from '@/shared/graphql/generated/entities-api'
import { paths } from '@/shared/routes/paths'
import { useIntl } from '@/shared/hooks/use-intl'

interface EntityTableActionsProps {
  row: Entity
}

export const EntityTableActions: FC<EntityTableActionsProps> = (props) => {
  const {
    row: { idEntity: id, name },
  } = props

  const [open, setOpen] = useState<boolean>(false)

  const intl = useIntl()

  const handleOpen = () => {
    setOpen(!open)
  }

  const [deleteEntityMutation] = useDeleteEntityMutation({
    refetchQueries: [GetEntitiesDocument],
    onCompleted: () => {
      toast.success('Entity deleted successfully', {
        position: 'top-right',
        duration: 2000,
      })
    },
  })

  const onDeleteConfirm = async () => {
    try {
      await deleteEntityMutation({
        variables: {
          idEntity: id,
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
          type: intl.formatMessage('pages.entity.delete.type'),
          name,
        })}
        dialogContent={intl.formatMessage('components.delete.alert.dialog.content')}
        onConfirm={onDeleteConfirm}
        icon={<ErrorOutline />}
      />
      <Box display="flex" gap="8px" justifyContent="center" width="100%">
        <Link href={paths.entities.edit(id)}>
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
