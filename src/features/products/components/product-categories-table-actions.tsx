import Link from 'next/link'
import toast from 'react-hot-toast'
import { FC, useState } from 'react'
import { Box, IconButton } from '@mui/material'
import { Delete, Edit, ErrorOutline } from '@mui/icons-material'

import { AlertDialog } from '@/shared/components/alert-dialog'
import { useIntl } from '@/shared/hooks/use-intl'
import { paths } from '@/shared/routes/paths'
import {
  ProductCategory,
  GetProductCategoriesDocument,
  useDeleteProductCategoryMutation,
} from '@/shared/graphql/generated/products-api'

interface ProductCategoriesTableActionsProps {
  row: ProductCategory
}

export const ProductCategoriesTableActions: FC<ProductCategoriesTableActionsProps> = (props) => {
  const {
    row: { idProductCategory, name },
  } = props

  const [deleteProductCategory] = useDeleteProductCategoryMutation({
    refetchQueries: [GetProductCategoriesDocument],
  })

  const [open, setOpen] = useState<boolean>(false)

  const intl = useIntl()

  const handleOpen = () => {
    setOpen(!open)
  }

  const onDeleteConfirm = async () => {
    try {
      await deleteProductCategory({
        variables: {
          deleteProductCategoryId: idProductCategory,
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
          type: intl.formatMessage('pages.general.parameters.delete.type'),
          name,
        })}
        dialogContent={intl.formatMessage('components.delete.alert.dialog.content')}
        onConfirm={onDeleteConfirm}
        icon={<ErrorOutline />}
      />
      <Box display="flex" gap="8px" justifyContent="center" width="100%">
        <Link href={paths.products.categories.edit(idProductCategory)}>
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
