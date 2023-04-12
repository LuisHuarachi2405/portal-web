import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

const organizationalUnitsSchema = zod.object({
  idOu: zod.string().optional(),
  name: zod
    .string()
    .min(1, { message: 'pages.organizational.units.form.errors.name.required' })
    .max(100),
  shortName: zod
    .string()
    .min(1, { message: 'pages.organizational.units.form.errors.shortname.required' })
    .max(100),
  code: zod
    .string()
    .min(3, { message: 'pages.organizational.units.form.errors.code.required' })
    .max(14),
  entity: zod.object({
    label: zod.string(),
    value: zod
      .string()
      .min(1, { message: 'pages.organizational.units.form.errors.id.entity.required' }),
  }),
})

export const organizationalUnitsResolver = zodResolver(organizationalUnitsSchema)
