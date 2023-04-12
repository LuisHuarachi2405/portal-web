import { FC, useState } from 'react'

import { ProductsTable } from './products-table'
import { SearchForm } from './search-form'

import { Product } from '../../types/shared.types'

export const SearchProductSection: FC<{
  quantity: number
  handleAddToItinerary: (item: Product, quantity: number) => void
}> = ({ quantity, handleAddToItinerary }) => {
  //   const [isLoading, setIsLoading] = useState(false)

  const [products, setProducts] = useState<Product[]>([])

  return (
    <section>
      <SearchForm quantity={quantity} setProducts={setProducts} />

      <ProductsTable data={products} handleAddToItinerary={handleAddToItinerary} />
    </section>
  )
}
