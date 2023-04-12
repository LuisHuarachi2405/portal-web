import { NextPage } from 'next'
import { useRouter } from 'next/router'

import { useGetProductQuery } from '@/shared/graphql/generated/products-api'
import { ProductForm } from '@/features/products/components/product/product-form'

const EditProductPage: NextPage = () => {
  const router = useRouter()
  const { productId } = router.query as { productId: string }

  const { data, loading } = useGetProductQuery({
    fetchPolicy: 'cache-and-network',
    variables: { productId },
  })

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <ProductForm
      initialValues={
        data
          ? {
              code: data.product.code,
              name: data.product.name,
              shortName: data.product.shortName,
              supplier: data.product.idEntitySupplier,
              productType: data.product.idProductType,
              hasInventory: data.product.inventoryFlag,
              internationalCodeSunat: data.product.internationalCodeSunat,
              operationalCodeSunat: data.product.operationalCodeSunat,
              productTypeSunat: data.product.productTypeSunat,
              unitSunat: data.product.unitSunat,
            }
          : undefined
      }
    />
  )
}

export default EditProductPage
