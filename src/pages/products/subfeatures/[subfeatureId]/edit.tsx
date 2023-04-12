import { NextPage } from 'next'
import { useRouter } from 'next/router'

import { Spinner } from '@/shared/components/spinner'
import { useGetProductSubFeatureQuery } from '@/shared/graphql/generated/products-api'
import { ProductSubfeatureForm } from '@/features/products/components/subfeatures/product-subfeature-form'

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
    return <Spinner />
  }

  return (
    <ProductSubfeatureForm
      initialValues={
        data
          ? {
              code: data.productSubFeature.code,
              name: data.productSubFeature.name,
              shortName: data.productSubFeature.shortName,
              productCategory: data.productSubFeature.idProductCategory,
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
