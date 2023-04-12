import Link from 'next/link'
import { FC, useState } from 'react'
import { Box, IconButton } from '@mui/material'
import { Delete, Edit, ErrorOutline } from '@mui/icons-material'
import toast from 'react-hot-toast'

import { paths } from '@/shared/routes/paths'
import { useIntl } from '@/shared/hooks/use-intl'
import { AlertDialog } from '@/shared/components/alert-dialog'
import {
  GetRateSubFeaturesDocument,
  RateSubFeature,
  useDeleteRateSubFeatureMutation,
} from '@/shared/graphql/generated/rates-api'

interface ProductSubfeaturesTableActionsProps {
  row: RateSubFeature
}

export const RatesSubfeaturesTableActions: FC<ProductSubfeaturesTableActionsProps> = (props) => {
  const {
    row: { idRateSubFeature, name },
  } = props

  const [open, setOpen] = useState<boolean>(false)

  const intl = useIntl()

  const handleOpen = () => {
    setOpen((prev) => !prev)
  }

  const [deleteGeneralParameter] = useDeleteRateSubFeatureMutation({
    refetchQueries: [GetRateSubFeaturesDocument],
    onCompleted: () => {
      toast.success('Rate Feature deleted successfully', {
        position: 'top-right',
        duration: 2000,
      })
    },
  })

  const onDeleteConfirm = async () => {
    try {
      await deleteGeneralParameter({ variables: { idRateSubFeature } })
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
          type: intl.formatMessage('pages.rates.subfeatures.delete-subfeature-type'),
          name,
        })}
        dialogContent={intl.formatMessage('components.delete.alert.dialog.content')}
        onConfirm={onDeleteConfirm}
        icon={<ErrorOutline />}
      />
      <Box display="flex" gap="8px" justifyContent="center" width="100%">
        <Link href={paths.rates.subfeatures.edit(idRateSubFeature)}>
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
