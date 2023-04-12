import {
  Apartment,
  FiberManualRecord,
  GroupAdd,
  LockPerson,
  ManageAccounts,
  LocalActivity as ReservationsIcon,
  PeopleAlt,
  RateReview,
  RoomPreferences,
  Home,
  Payments,
} from '@mui/icons-material'

import { paths } from '@/shared/routes/paths'

interface SidebarItemProps {
  name: string
  path?: string
  icon?: React.ReactNode
  subPaths?: SidebarItemProps[]
}

export const sidebarItems: SidebarItemProps[] = [
  {
    name: 'components.sidebar.item.home',
    path: paths.home,
    icon: <Home />,
  },
  {
    name: 'components.sidebar.item.products',
    subPaths: [
      {
        name: 'components.sidebar.item.products.list',
        path: paths.products.root,
      },
      {
        name: 'components.sidebar.item.products.categories',
        path: paths.products.categories.root,
      },
      {
        name: 'components.sidebar.item.products.features',
        path: paths.products.features.root,
      },
      {
        name: 'components.sidebar.item.products.subfeatures',
        path: paths.products.subfeatures.root,
      },
    ],
  },
  {
    name: 'components.sidebar.item.reservations',
    path: paths.reservations.root,
    icon: <ReservationsIcon />,
  },
  {
    name: 'components.sidebar.item.general.parameters',
    path: paths.generalParameters.root,
    icon: <RoomPreferences />,
  },
  {
    name: 'components.sidebar.item.entity',
    path: paths.entities.root,
    icon: <PeopleAlt />,
  },
  {
    name: 'components.sidebar.item.users',
    icon: <ManageAccounts />,
    subPaths: [
      {
        name: 'components.sidebar.item.ou',
        path: paths.users.organizationalUnits.root,
        icon: <Apartment />,
      },
      {
        name: 'components.sidebar.item.users.list',
        path: paths.users.root,
        icon: <GroupAdd />,
      },
      {
        name: 'components.sidebar.items.role.permissions',
        path: paths.users.rolePermissions.root,
        icon: <LockPerson />,
      },
      {
        name: 'components.sidebar.items.module.permissions',
        path: paths.users.modulePermissions.root,
        icon: <FiberManualRecord />,
      },
    ],
  },
  {
    name: 'components.sidebar.item.rates',
    icon: <RateReview />,
    subPaths: [
      {
        name: 'components.sidebar.item.rates',
        path: paths.rates.root,
        icon: <RateReview />,
      },
      {
        name: 'components.sidebar.item.rates.features',
        path: paths.rates.features.root,
        icon: <RateReview />,
      },
      {
        name: 'components.sidebar.item.rates.subfeatures',
        path: paths.rates.subfeatures.root,
        icon: <RateReview />,
      },
    ],
  },
  {
    name: 'components.sidebar.item.payments',
    icon: <Payments />,
    subPaths: [
      {
        name: 'components.sidebar.item.payments.list',
        path: paths.payments.root,
      },
      {
        name: 'components.sidebar.item.payments.advances',
        path: paths.payments.advances.root,
      },
    ],
  },
]
