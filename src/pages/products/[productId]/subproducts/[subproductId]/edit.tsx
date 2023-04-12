import { NextPage } from 'next'
import { useRouter } from 'next/router'

import { useGetProductQuery } from '@/shared/graphql/generated/products-api'
import { ProductForm } from '@/features/products/components/product/product-form'

const EditProductPage: NextPage = () => {
  const router = useRouter()
  const { subproductId } = router.query as { subproductId: string }

  const { data, loading } = useGetProductQuery({
    fetchPolicy: 'cache-and-network',
    variables: { productId: subproductId },
  })

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <ProductForm
      isSubproduct
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
