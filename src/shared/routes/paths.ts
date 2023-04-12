export const paths = {
  home: '/',
  notFound: '/404',
  products: {
    root: '/products',
    create: '/products/create-product',
    categories: {
      root: '/products/categories',
      create: '/products/categories/create-category',
      edit: (id: number | string) => `/products/categories/edit-category/${id}`,
    },
    features: {
      root: '/products/features',
      create: '/products/features/create-feature',
      edit: (id: number | string) => `/products/features/edit-feature/${id}`,
    },
    subfeatures: {
      root: '/products/subfeatures',
      create: '/products/subfeatures/create-subfeature',
      edit: (id: number | string) => `/products/subfeatures/edit-subfeature/${id}`,
    },
  },
  generalParameters: {
    root: '/general-parameters',
    create: '/general-parameters/create-parameter',
    edit: (id: number | string) => `/general-parameters/edit/${id}`,
  },
  entities: {
    root: '/entities',
    create: '/entities/create-entity',
    edit: (id: number | string) => `/entities/edit/${id}`,
  },
}
