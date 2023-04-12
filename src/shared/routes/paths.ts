export const paths = {
  home: '/',
  notFound: '/404',
  auth: {
    signin: '/auth/signin',
    register: '/auth/register',
    forgotPassword: '/auth/forgot-password',
    resetPassword: '/auth/reset-password',
  },
  products: {
    root: '/products',
    create: '/products/new',
    product: {
      root: (id: string) => `/products/${id}`,
      edit: (id: string) => `/products/${id}/edit`,
      categories: (id: string) => `/products/${id}/categories`,
      features: (id: string) => `/products/${id}/features`,
      identifications: (id: string) => `/products/${id}/identifications`,
      subfeatures: (id: string) => `/products/${id}/subfeatures`,
      instances: {
        root: (id: string) => `/products/${id}/instances`,
        inventory: (id: string, instanceId: string) =>
          `/products/${id}/instances/${instanceId}/inventory`,
      },
      subproducts: {
        root: (id: string) => `/products/${id}/subproducts`,
        create: (id: string) => `/products/${id}/subproducts/new`,
        subproduct: {
          root: (id: string, subproductId: string) => `/products/${id}/subproducts/${subproductId}`,
          edit: (id: string, subproductId: string) =>
            `/products/${id}/subproducts/${subproductId}/edit`,
          categories: (id: string, subproductId: string) =>
            `/products/${id}/subproducts/${subproductId}/categories`,
          features: (id: string, subproductId: string) =>
            `/products/${id}/subproducts/${subproductId}/features`,
          identifications: (id: string, subproductId: string) =>
            `/products/${id}/subproducts/${subproductId}/identifications`,
          subfeatures: (id: string, subproductId: string) =>
            `/products/${id}/subproducts/${subproductId}/subfeatures`,
          instances: {
            root: (id: string, subproductId: string) =>
              `/products/${id}/subproducts/${subproductId}/instances`,
            inventory: (id: string, subproductId: string, instanceId: string) =>
              `/products/${id}/subproducts/${subproductId}/instances/${instanceId}/inventory`,
          },
        },
      },
    },
    categories: {
      root: '/products/categories',
      create: '/products/categories/new',
      edit: (id: string) => `/products/categories/${id}/edit`,
    },
    features: {
      root: '/products/features',
      create: '/products/features/new',
      edit: (id: string) => `/products/features/${id}/edit`,
    },
    subfeatures: {
      root: '/products/subfeatures',
      create: '/products/subfeatures/new',
      edit: (id: string) => `/products/subfeatures/${id}/edit`,
    },
  },
  reservations: {
    root: '/reservations',
    add: {
      root: '/reservations/new',
      passengers: '/reservations/new/passengers',
      documents: '/reservations/new/documents',
    },
    reservation: {
      root: (id: string) => `/reservations/${id}`,
      edit: {
        root: (id: string) => `/reservations/${id}/edit`,
        passengers: (id: string) => `/reservations/${id}/edit/passengers`,
        documents: (id: string) => `/reservations/${id}/documents/`,
      },
    },
  },
  generalParameters: {
    root: '/general-parameters',
    new: '/general-parameters/new',
    edit: (id: string) => `/general-parameters/${id}/edit`,
  },

  entities: {
    root: '/entities',
    new: '/entities/new',
    edit: (id: string) => `/entities/${id}/edit`,
  },
  rates: {
    root: '/rates',
    create: '/rates/new',
    rates: {
      root: (id: string) => `/rates/${id}`,
    },
    features: {
      root: '/rates/features',
      new: '/rates/features/new',
      edit: (id: string) => `/rates/features/${id}/edit`,
    },
    subfeatures: {
      root: '/rates/subfeatures',
      new: '/rates/subfeatures/new',
      edit: (id: string) => `/rates/subfeatures/${id}/edit`,
    },
  },
  users: {
    root: '/users',
    new: '/users/new',
    edit: (userId: string) => `/users/${userId}/edit`,
    organizationalUnits: {
      root: '/users/organizational-units',
      new: '/users/organizational-units/new',
      edit: (id: string) => `/users/organizational-units/${id}/edit`,
    },
    rolePermissions: {
      root: '/users/role-permissions',
      new: '/users/role-permissions/new',
      edit: ({ idRole, idPermission }: { idRole: string; idPermission: string }) =>
        `/users/role-permissions/${idRole}/edit?idPermission=${idPermission}`,
    },
    modulePermissions: {
      root: '/users/module-permissions',
      new: '/users/module-permissions/new',
      edit: ({ idModule, idPermission }: { idModule: string; idPermission: string }) =>
        `/users/module-permissions/${idModule}/edit?idPermission=${idPermission}`,
    },
  },
  payments: {
    root: '/cashier-transaction',
    transactions: '/cashier-transaction/transactions',
    edit: (id: number | string) => `/cashier-transaction/payment/${id}/edit`,
    payments: (id: number | string) => `/cashier-transaction/payment/${id}/search-payment`,
    reservation: (id: number | string) => `/cashier-transaction/payment/${id}/search-reservations`,
    paymentsadd: (id: number | string) =>
      `/cashier-transaction/payment/${id}/register-document-payment`,
    advances: {
      root: '/cashier-transaction/payment/advances',
      new: '/cashier-transaction/payment/advances/new',
    },
  },
}
