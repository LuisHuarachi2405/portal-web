import { NextPage } from 'next'
import { useRouter } from 'next/router'

import { Spinner } from '@/shared/components/spinner'
import { useGetProductFeatureQuery } from '@/shared/graphql/generated/products-api'
import { ProductFeatureForm } from '@/features/products/components/features/product-feature-form'

const EditProductFeaturePage: NextPage = () => {
  const router = useRouter()
  const { featureId } = router.query as { featureId: string }

  // get product feature by id
  const { data, loading } = useGetProductFeatureQuery({
    fetchPolicy: 'cache-and-network',
    variables: { productFeatureId: featureId },
    skip: !featureId,
  })

  if (featureId && loading) {
    return <Spinner />
  }

  return (
    <ProductFeatureForm
      initialValues={
        data
          ? {
              name: data.productFeature.name ?? '',
              shortName: data.productFeature.shortName,
              featureType: data.productFeature.idProductFeatureType,
              productCategory: data.productFeature.idProductCategory,
            }
          : undefined
      }
    />
  )
}

export default EditProductFeaturePage
