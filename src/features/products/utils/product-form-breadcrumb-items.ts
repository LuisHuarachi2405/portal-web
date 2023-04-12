import { paths } from '@/shared/routes/paths'

const basePaths = [
  {
    name: 'components.sidebar.item.home',
    href: paths.home,
  },
  {
    name: 'components.sidebar.item.products',
    href: paths.products.root,
  },
]

const getCreateProductPaths = () => [
  {
    name: 'components.sidebar.item.products.form',
    href: paths.products.create,
  },
]

const getEditProductPaths = (productId: string) => [
  {
    name: 'Product',
    href: paths.products.product.root(productId),
  },
  {
    name: 'Edit Product',
    href: paths.products.product.edit(productId),
  },
]

const getCreateSubproductPaths = (productId: string) => [
  {
    name: 'Product',
    href: paths.products.product.root(productId),
  },
  {
    name: 'Subproducts',
    href: paths.products.product.subproducts.root(productId),
  },
  {
    name: 'New Subproduct',
    href: paths.products.product.subproducts.create(productId),
  },
]

const getEditSubproductPaths = (productId: string, subproductId: string) => [
  {
    name: 'Product',
    href: paths.products.product.root(productId),
  },
  {
    name: 'Subproducts',
    href: paths.products.product.subproducts.root(productId),
  },
  {
    name: 'Subproduct',
    href: paths.products.product.subproducts.subproduct.root(productId, subproductId),
  },
  {
    name: 'Edit Subproduct',
    href: paths.products.product.subproducts.subproduct.edit(productId, subproductId),
  },
]

export const getProductFormBreadcrumbItems = (
  productId?: string,
  subproductId?: string,
  isSubproduct?: true
) => {
  if (productId) {
    if (isSubproduct) {
      if (subproductId) {
        const editSubproductPaths = getEditSubproductPaths(productId, subproductId)
        return basePaths.concat(basePaths, editSubproductPaths)
      }
      const createSubproductPaths = getCreateSubproductPaths(productId)
      return basePaths.concat(createSubproductPaths)
    }
    const editProductPaths = getEditProductPaths(productId)
    return basePaths.concat(editProductPaths)
  }

  const createProductPaths = getCreateProductPaths()
  return basePaths.concat(createProductPaths)
}
