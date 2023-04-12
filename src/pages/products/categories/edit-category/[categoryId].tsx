import { NextPage } from 'next'
import { useRouter } from 'next/router'

import { ProductCategoryForm } from '@/features/products/components/product-category-form'
import { useGetProductCategoryQuery } from '@/shared/graphql/generated/products-api'

const EditProductCategoryPage: NextPage = () => {
  const router = useRouter()
  const { categoryId } = router.query as { categoryId: string }

  // get product category by id
  const { data, loading } = useGetProductCategoryQuery({
    fetchPolicy: 'cache-and-network',
    variables: { productCategoryId: categoryId },
    skip: !categoryId,
  })

  if (categoryId && loading) {
    return <div>Loading...</div>
  }

  return (
    <ProductCategoryForm
      initialValues={
        data
          ? {
              name: data.productCategory.name,
              shortName: data.productCategory.shortName,
              categoryType: data.productCategory.idCategoryType,
            }
          : undefined
      }
    />
  )
}

export default EditProductCategoryPage
