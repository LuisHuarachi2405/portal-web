import { FC, MouseEvent, useState } from 'react'
// import { Add, Delete } from '@mui/icons-material'
import { IconButton, MenuItem, TextField } from '@mui/material'
import { Add, Delete } from '@mui/icons-material'
import { Box } from '@mui/system'
import styled from '@emotion/styled'
import { Controller, useFormContext } from 'react-hook-form'

import { useIntl } from '@/shared/hooks/use-intl'
import {
  useGetGeneralParametersByCodeQuery,
  useGetGeneralParametersByGeneralParameterValueIdQuery,
} from '@/shared/graphql/generated/general-parameters-api'

import { FormDataEntity } from '../types/form.types'

interface EntityInputsAddressProps {
  item: any
  addDirectionValues: () => void
  deleteDirectionValues: (event: MouseEvent<HTMLButtonElement>) => void
  DataGeneralParameters: Record<string, []>
  index: number
  isEditing: boolean
  entityDirectionValuesFieldsLength: number
}

export const EntityInputsAddress: FC<EntityInputsAddressProps> = (props) => {
  const {
    item,
    addDirectionValues,
    deleteDirectionValues,
    DataGeneralParameters,
    index,
    entityDirectionValuesFieldsLength,
  } = props

  const {
    control,
    formState: { errors },
  } = useFormContext<FormDataEntity>()

  const [country, setCountry] = useState(item?.idCountry)
  const [state, setState] = useState(item?.idState)

  const intl = useIntl()

  const { data } = useGetGeneralParametersByCodeQuery({
    variables: {
      code: 'ENTPAI',
    },
    fetchPolicy: 'cache-and-network',
  })

  const { data: dataStates } = useGetGeneralParametersByGeneralParameterValueIdQuery({
    variables: {
      idGeneralParameterValue: country,
    },
    fetchPolicy: 'cache-and-network',
    skip: !country,
  })

  const { data: dataCities } = useGetGeneralParametersByGeneralParameterValueIdQuery({
    variables: {
      idGeneralParameterValue: state,
    },
    fetchPolicy: 'cache-and-network',
    skip: !state,
  })

  const countriesOptions = data?.getGeneralParametersByCode.generalParameterValue ?? []

  const onSelectedCountry = (value: string) => {
    setCountry(value)
    onSelectedState('')
  }

  const onSelectedState = (value: string) => {
    setState(value)
  }

  const listStates = dataStates?.getGeneralParametersByGeneralParameterValueId!.find((value) => ({
    states: value.generalParameterValue,
  }))

  const listCities = dataCities?.getGeneralParametersByGeneralParameterValueId!.find((value) => ({
    cities: value.generalParameterValue,
  }))

  return (
    <GridLayout>
      <Controller
        name={`entityDirectionValues.${index}.idAddressType`}
        control={control}
        render={({ field }) => (
          <Box width="100%">
            <TextField
              {...field}
              id="entity-type-contact"
              label={intl.formatMessage(
                'pages.entities.create.entity.form.directionType.array.field.label'
              )}
              select
              variant="outlined"
              error={!!errors.entityDirectionValues?.[index]?.idAddressType}
              size="small"
              helperText={
                errors.entityDirectionValues?.[index]?.idAddressType?.message &&
                intl.formatMessage(
                  errors.entityDirectionValues?.[index]?.idAddressType?.message as string
                )
              }
              sx={{ marginBottom: '8px' }}
              fullWidth
            >
              {DataGeneralParameters.directionType!.map(
                (value: { name: string; idGeneralParameterValue: string }) => (
                  <MenuItem
                    key={value.idGeneralParameterValue}
                    value={value.idGeneralParameterValue}
                  >
                    {value.name}
                  </MenuItem>
                )
              )}
            </TextField>
          </Box>
        )}
      />

      <Controller
        name={`entityDirectionValues.${index}.line1`}
        control={control}
        render={({ field }) => (
          <Box width="100%">
            <TextField
              {...field}
              label={intl.formatMessage(
                'pages.entities.create.entity.form.direction.array.field.label'
              )}
              variant="outlined"
              error={!!errors.entityDirectionValues?.[index]?.line1}
              size="small"
              sx={{ marginBottom: '8px' }}
              helperText={
                errors.entityDirectionValues?.[index]?.line1?.message &&
                intl.formatMessage(errors.entityDirectionValues?.[index]?.line1?.message!)
              }
              fullWidth
            />
          </Box>
        )}
      />

      <Controller
        name={`entityDirectionValues.${index}.line2`}
        control={control}
        render={({ field }) => (
          <Box width="100%">
            <TextField
              {...field}
              label={intl.formatMessage(
                'pages.entities.create.entity.form.direction.array.field.label'
              )}
              variant="outlined"
              error={!!errors.entityDirectionValues?.[index]?.line2}
              size="small"
              placeholder="Direction Optional"
              sx={{ marginBottom: '8px' }}
              helperText={
                errors.entityDirectionValues?.[index]?.line2?.message &&
                intl.formatMessage(errors.entityDirectionValues?.[index]?.line2?.message!)
              }
              fullWidth
            />
          </Box>
        )}
      />

      <Controller
        name={`entityDirectionValues.${index}.idCountry`}
        control={control}
        render={({ field }) => (
          <Box width="100%">
            <TextField
              {...field}
              id="entity-country"
              label={intl.formatMessage(
                'pages.entities.create.entity.form.country.array.field.label'
              )}
              select
              variant="outlined"
              error={!!errors.entityDirectionValues?.[index]?.idCountry}
              size="small"
              helperText={
                errors.entityDirectionValues?.[index]?.idCountry?.message &&
                intl.formatMessage(
                  errors.entityDirectionValues?.[index]?.idCountry?.message as string
                )
              }
              sx={{ marginBottom: '8px' }}
              fullWidth
              onChange={(e) => {
                field.onChange(e.target.value)
                onSelectedCountry(e.target.value)
              }}
            >
              {countriesOptions.map((value) => (
                <MenuItem key={value.idGeneralParameterValue} value={value.idGeneralParameterValue}>
                  {value.name}
                </MenuItem>
              ))}
            </TextField>
          </Box>
        )}
      />

      <Controller
        name={`entityDirectionValues.${index}.idState`}
        control={control}
        render={({ field }) => (
          <Box width="100%">
            <TextField
              {...field}
              label={intl.formatMessage(
                'pages.entities.create.entity.form.state.array.field.label'
              )}
              select
              variant="outlined"
              error={!!errors.entityDirectionValues?.[index]?.idState}
              size="small"
              helperText={
                errors.entityDirectionValues?.[index]?.idState &&
                intl.formatMessage(
                  errors.entityDirectionValues?.[index]?.idState?.message as string
                )
              }
              sx={{ marginBottom: '8px' }}
              onChange={(e) => {
                field.onChange(e.target.value)
                onSelectedState(e.target.value)
              }}
              disabled={!country}
              fullWidth
            >
              {listStates?.generalParameterValue.map((value) => (
                <MenuItem key={value.idGeneralParameterValue} value={value.idGeneralParameterValue}>
                  {value.name}
                </MenuItem>
              ))}
            </TextField>
          </Box>
        )}
      />

      <Controller
        name={`entityDirectionValues.${index}.idProvince`}
        control={control}
        render={({ field }) => (
          <Box width="100%">
            <TextField
              {...field}
              label={intl.formatMessage('pages.entities.create.entity.form.city.array.field.label')}
              select
              variant="outlined"
              error={!!errors.entityDirectionValues?.[index]?.idProvince}
              size="small"
              helperText={
                errors.entityDirectionValues?.[index]?.idProvince?.message &&
                intl.formatMessage(
                  errors.entityDirectionValues?.[index]?.idProvince?.message as string
                )
              }
              sx={{ marginBottom: '8px' }}
              fullWidth
              disabled={!state}
            >
              {listCities?.generalParameterValue.map((value) => (
                <MenuItem key={value.idGeneralParameterValue} value={value.idGeneralParameterValue}>
                  {value.name}
                </MenuItem>
              ))}
            </TextField>
          </Box>
        )}
      />

      <Controller
        name={`entityDirectionValues.${index}.postalCode`}
        control={control}
        render={({ field }) => (
          <Box width="100%">
            <TextField
              {...field}
              label={intl.formatMessage(
                'pages.entities.create.entity.form.postal.array.field.label'
              )}
              variant="outlined"
              error={!!errors.entityDirectionValues?.[index]?.postalCode}
              size="small"
              sx={{ marginBottom: '8px' }}
              helperText={
                errors.entityDirectionValues?.[index]?.postalCode?.message &&
                intl.formatMessage(errors.entityDirectionValues?.[index]?.postalCode?.message!)
              }
              fullWidth
            />
          </Box>
        )}
      />

      <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
        <TextField hidden type="hidden" variant="standard" />
      </Box>

      <Box display="flex" alignItems="center" justifyContent="flex-end" minWidth="124px">
        {entityDirectionValuesFieldsLength - 1 === index && (
          <IconButton color="primary" onClick={addDirectionValues}>
            <Add />
          </IconButton>
        )}
        {entityDirectionValuesFieldsLength > 1 && (
          <IconButton data-index={index} onClick={deleteDirectionValues}>
            <Delete />
          </IconButton>
        )}
      </Box>
    </GridLayout>
  )
}

const GridLayout = styled(Box)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 10fr);
  }
  @media (max-width: 900px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
