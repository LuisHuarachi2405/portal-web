import { NextPage } from 'next'
import { useRouter } from 'next/router'

import { useGetProductSubFeatureQuery } from '@/shared/graphql/generated/products-api'
import { ProductSubfeatureForm } from '@/features/products/components/product-subfeature-form'

const EditProductSubfeaturePage: NextPage = () => {
  const router = useRouter()
  const { subfeatureId } = router.query as { subfeatureId: string }

  // get product category by id
  const { data, loading } = useGetProductSubFeatureQuery({
    fetchPolicy: 'cache-and-network',
    variables: { productSubFeatureId: subfeatureId },
    skip: !subfeatureId,
  })

  if (subfeatureId && loading) {
    return <div>Loading...</div>
  }

  return (
    <ProductSubfeatureForm
      initialValues={
        data
          ? {
              code: data.productSubFeature.code,
              name: data.productSubFeature.name,
              shortName: data.productSubFeature.shortName,
              productSubfeatureType: data.productSubFeature.idProductSubFeatureType,
              items: data.productSubFeature.productSubFeatureItem.map((item) => ({
                id: item.idProductSubFeatureItem,
                code: item.code,
                name: item.name,
                shortName: item.shortName,
                value: item.value,
                productSubfeatureItemType: item.idProductSubFeatureItemType,
              })),
            }
          : undefined
      }
    />
  )
}

export default EditProductSubfeaturePage
