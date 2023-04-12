import Link from 'next/link'
import toast from 'react-hot-toast'
import { FC, useState } from 'react'
import { Box, IconButton } from '@mui/material'
import { Delete, Edit, ErrorOutline } from '@mui/icons-material'

import { paths } from '@/shared/routes/paths'
import { useIntl } from '@/shared/hooks/use-intl'
import { AlertDialog } from '@/shared/components/alert-dialog'
import {
  ProductFeature,
  GetProductFeaturesDocument,
  useDeleteProductFeatureMutation,
} from '@/shared/graphql/generated/products-api'

interface ProductFeaturesTableActionsProps {
  row: ProductFeature
}

export const ProductFeaturesTableActions: FC<ProductFeaturesTableActionsProps> = (props) => {
  const {
    row: { idProductFeature, name },
  } = props

  const [deleteProductFeature] = useDeleteProductFeatureMutation({
    refetchQueries: [GetProductFeaturesDocument],
  })

  const [open, setOpen] = useState<boolean>(false)

  const intl = useIntl()

  const handleOpen = () => {
    setOpen(!open)
  }

  const onDeleteConfirm = async () => {
    try {
      await deleteProductFeature({
        variables: {
          deleteProductFeatureId: idProductFeature,
        },
      })
      handleOpen()
      toast.success('Product Category deleted successfully', {
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

  // TODO: Separate AlertDialog into a separate component and render outside of the table

  return (
    <>
      <AlertDialog
        open={open}
        maxWidth="sm"
        handleOpen={handleOpen}
        dialogTitle={intl.formatMessage('components.delete.alert.dialog.title', {
          type: intl.formatMessage('pages.products.features.delete-feature-type'),
          name,
        })}
        dialogContent={intl.formatMessage('components.delete.alert.dialog.content')}
        onConfirm={onDeleteConfirm}
        icon={<ErrorOutline />}
      />
      <Box display="flex" gap="8px" justifyContent="center" width="100%">
        <Link href={paths.products.features.edit(idProductFeature)}>
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
