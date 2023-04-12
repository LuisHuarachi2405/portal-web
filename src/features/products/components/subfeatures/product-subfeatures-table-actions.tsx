import Link from 'next/link'
import toast from 'react-hot-toast'
import { FC, useState } from 'react'
import { Box, IconButton } from '@mui/material'
import { Delete, Edit, ErrorOutline } from '@mui/icons-material'

import { paths } from '@/shared/routes/paths'
import { useIntl } from '@/shared/hooks/use-intl'
import { AlertDialog } from '@/shared/components/alert-dialog'
import {
  ProductSubFeature,
  GetProductSubFeaturesDocument,
  useDeleteProductSubFeatureMutation,
} from '@/shared/graphql/generated/products-api'

interface ProductSubfeaturesTableActionsProps {
  row: ProductSubFeature
}

export const ProductSubfeaturesTableActions: FC<ProductSubfeaturesTableActionsProps> = (props) => {
  const {
    row: { idProductSubFeature, name },
  } = props

  const [open, setOpen] = useState<boolean>(false)

  const intl = useIntl()
  const [deleteProductSubfeature] = useDeleteProductSubFeatureMutation({
    refetchQueries: [GetProductSubFeaturesDocument],
  })

  const handleOpen = () => {
    setOpen(!open)
  }

  const onDeleteConfirm = async () => {
    try {
      await deleteProductSubfeature({
        variables: {
          deleteProductSubFeatureId: idProductSubFeature,
        },
      })
      handleOpen()
      toast.success('Product subfeature deleted successfully', {
        position: 'bottom-center',
        duration: 2000,
      })
    } catch (error) {
      toast.error(`${error}`, {
        position: 'bottom-center',
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
          type: intl.formatMessage('pages.products.subfeatures.delete-subfeature-type'),
          name,
        })}
        dialogContent={intl.formatMessage('components.delete.alert.dialog.content')}
        onConfirm={onDeleteConfirm}
        icon={<ErrorOutline />}
      />
      <Box display="flex" gap="8px" justifyContent="center" width="100%">
        <Link href={paths.products.subfeatures.edit(idProductSubFeature)}>
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
