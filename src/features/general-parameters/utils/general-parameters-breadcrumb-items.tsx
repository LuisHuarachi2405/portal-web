import { paths } from '@/shared/routes/paths'

export const useBuildBreadcrumbItems = (isEditing: boolean | undefined) =>
  isEditing
    ? [
        {
          name: 'pages.general.parameters.create.parameter.breadcrumb.home.pathname',
          href: paths.home,
        },
        {
          name: 'pages.general.parameters.create.parameter.breadcrumb.general.parameters.pathname',
          href: paths.generalParameters.root,
        },
        {
          name: 'pages.general.parameters.create.parameter.breadcrumb.edit.parameter.pathname',
          href: '#',
        },
      ]
    : [
        {
          name: 'pages.general.parameters.create.parameter.breadcrumb.home.pathname',
          href: paths.home,
        },
        {
          name: 'pages.general.parameters.create.parameter.breadcrumb.general.parameters.pathname',
          href: paths.generalParameters.root,
        },
        {
          name: 'pages.general.parameters.create.parameter.breadcrumb.new.parameter.pathname',
          href: paths.generalParameters.create,
        },
      ]
