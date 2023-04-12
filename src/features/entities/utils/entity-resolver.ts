import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

const entityDirectionValuesSchema = zod.object({
  idCountry: zod.string().min(1, {
    message: 'pages.entities.form.errors.address.required',
  }),
  line1: zod.string().min(1, {
    message: 'pages.entities.form.errors.address.required',
  }),
  line2: zod.string().min(1).optional(),
  idState: zod.string().min(1, {
    message: 'pages.entities.form.errors.address.required',
  }),
  idProvince: zod.string().min(1, {
    message: 'pages.entities.form.errors.address.required',
  }),
  postalCode: zod.string().min(1, {
    message: 'pages.entities.form.errors.address.required',
  }),
  idAddressType: zod.string().min(1, {
    message: 'pages.entities.form.errors.address.required',
  }),
})

const entityContactValuesSchema = zod.object({
  idContactType: zod.string().min(1, {
    message: 'pages.entities.form.errors.contacts.required',
  }),
  value: zod.string().min(1, {
    message: 'pages.entities.form.errors.contacts.required',
  }),
})

const entityIdTypeValueSchema = zod.object({
  idEntityIdType: zod.string().min(1, {
    message: 'pages.entities.form.errors.idEntityIdType.required',
  }),
  value: zod.string().min(1, {
    message: 'pages.entities.form.errors.idEntityIdTypeValue.required',
  }),
})

const entitySchema = zod.object({
  idEntity: zod.string().optional(),
  name: zod.string().min(1, {
    message: 'pages.entities.form.errors.name.required',
  }),
  commercialName: zod.string().min(1, {
    message: 'pages.entities.form.errors.commercialName.required',
  }),
  entityType: zod.string().min(1, {
    message: 'pages.entities.form.errors.entityType.required',
  }),
  role: zod.string().min(1, {
    message: 'pages.entities.form.errors.role.required',
  }),
  idEntityIdType: entityIdTypeValueSchema,
  entityDirectionValues: zod.array(entityDirectionValuesSchema),
  entityContactValues: zod.array(entityContactValuesSchema),
  market: zod
    .string({
      required_error: 'pages.entities.form.errors.market.required',
    })
    .optional(),
  channel: zod
    .string({
      required_error: 'pages.entities.form.errors.channel.required',
    })
    .optional(),
  industry: zod
    .string({
      required_error: 'pages.entities.form.errors.industry.required',
    })
    .optional(),
  businessType: zod.string().min(1, {
    message: 'pages.entities.form.errors.businessType.required',
  }),
})

export const entityResolver = zodResolver(entitySchema)
