import { FC } from 'react'
import { useRouter } from 'next/router'

import { paths } from '@/shared/routes/paths'
import { BreadCrumb } from '@/shared/components/breadcrumb'
import { ViewLayout } from '@/shared/components/view-layout'

import { SubproductForm } from './subproduct-form'

const getBreadCrumbItems = (productId: string) => [
  {
    name: 'components.sidebar.item.home',
    href: paths.home,
  },
  {
    name: 'components.sidebar.item.products',
    href: paths.products.root,
  },
  {
    name: 'Product',
    href: paths.products.product.root(productId),
  },
  {
    name: 'Subproducts',
    href: paths.products.product.subproducts.root(productId),
  },
]

export const SubproductsView: FC = () => {
  const router = useRouter()
  const { productId } = router.query as { productId: string }

  return (
    <ViewLayout>
      <h1>Subproducts</h1>
      <BreadCrumb items={getBreadCrumbItems(productId)} />
      <SubproductForm />
    </ViewLayout>
  )
}
