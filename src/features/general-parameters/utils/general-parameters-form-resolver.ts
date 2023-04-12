import { zodResolver } from '@hookform/resolvers/zod'
import { z as zod } from 'zod'

const generalParametersValuesSchema = zod.object({
  idGeneralParameterValue: zod.string().optional(),
  name: zod
    .string()
    .min(1, { message: 'pages.general.parameters.form.errors.name.value.required' })
    .max(100),
  shortName: zod
    .string()
    .min(1, { message: 'pages.general.parameters.form.errors.shortname.value.required' })
    .max(100),
  code: zod
    .string()
    .min(3, { message: 'pages.general.parameters.form.errors.code.value.required' })
    .max(14),
  value: zod.unknown().optional(),
})

const generalParametersSchema = zod.object({
  idGeneralParameter: zod.string().optional(),
  name: zod
    .string()
    .min(1, { message: 'pages.general.parameters.form.errors.name.required' })
    .max(100),
  shortName: zod
    .string()
    .min(1, { message: 'pages.general.parameters.form.errors.shortname.required' })
    .max(100),
  code: zod
    .string()
    .min(3, { message: 'pages.general.parameters.form.errors.code.value.required' })
    .max(14),
  parentParameter: zod.object({ label: zod.string(), value: zod.string() }).optional().nullable(),
  generalParametersValues: zod.array(generalParametersValuesSchema),
})

export const generalParametersFormResolver = zodResolver(generalParametersSchema)
