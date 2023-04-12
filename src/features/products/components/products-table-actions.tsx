import Link from 'next/link'
import toast from 'react-hot-toast'
import { FC, useState } from 'react'
import { useRouter } from 'next/router'
import { Tooltip, Box, IconButton } from '@mui/material'
import { Delete, Edit, ErrorOutline, Info } from '@mui/icons-material'

import { paths } from '@/shared/routes/paths'
import { useIntl } from '@/shared/hooks/use-intl'
import { AlertDialog } from '@/shared/components/alert-dialog'
import {
  GetProductsDocument,
  Product,
  useDeleteProductMutation,
} from '@/shared/graphql/generated/products-api'

interface ProductsTableActionsProps {
  row: Product
}

export const ProductsTableActions: FC<ProductsTableActionsProps> = (props) => {
  const router = useRouter()
  const { productId } = router.query as { productId: string }

  const {
    row: { idProduct, name },
  } = props

  const [deleteProduct] = useDeleteProductMutation({
    refetchQueries: [GetProductsDocument],
  })

  const [open, setOpen] = useState<boolean>(false)

  const intl = useIntl()

  const handleOpen = () => {
    setOpen(!open)
  }

  const onDeleteConfirm = async () => {
    try {
      await deleteProduct({
        variables: {
          deleteProductId: idProduct,
          inactiveFlag: false,
        },
      })
      handleOpen()
      toast.success('Product deleted successfully', {
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
          type: intl.formatMessage('pages.general.parameters.delete.type'),
          name,
        })}
        dialogContent={intl.formatMessage('components.delete.alert.dialog.content')}
        onConfirm={onDeleteConfirm}
        icon={<ErrorOutline />}
      />
      <Box display="flex" gap="8px" justifyContent="center" width="100%">
        <Link
          href={
            productId
              ? paths.products.product.subproducts.subproduct.root(productId, idProduct)
              : paths.products.product.root(idProduct)
          }
        >
          <Tooltip arrow title="Info">
            <IconButton color="primary">
              <Info fontSize="small" />
            </IconButton>
          </Tooltip>
        </Link>

        <Link
          href={
            productId
              ? paths.products.product.subproducts.subproduct.edit(productId, idProduct)
              : paths.products.product.edit(idProduct)
          }
        >
          <Tooltip arrow title="Edit">
            <IconButton color="primary">
              <Edit fontSize="small" />
            </IconButton>
          </Tooltip>
        </Link>

        <Tooltip arrow title="Delete">
          <IconButton onClick={handleOpen}>
            <Delete fontSize="small" />
          </IconButton>
        </Tooltip>
      </Box>
    </>
  )
}
