import type { NextPage } from 'next'

import { ProductsTable } from '@/features/products/components/products-table'
import { AddProductAsSubproductTable } from '@/features/products/components/add-product-as-subproduct-table'

const SubproductsPage: NextPage = () => (
  <>
    <ProductsTable />
    <AddProductAsSubproductTable />
  </>
)

export default SubproductsPage
