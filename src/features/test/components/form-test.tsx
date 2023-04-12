import { TextField } from '@mui/material'
import { useForm } from 'react-hook-form'
import styled from '@emotion/styled'

import type { FormTestValues } from '@/features/test/types/forms'

export const FormTest = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormTestValues>()

  const onSubmit = () => {}

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputsContainer>
          <TextField
            id="test"
            defaultValue="test"
            {...register('example')}
            label="Outlined"
            variant="outlined"
          />

          <TextField
            id="test"
            error={!!errors.exampleRequired}
            {...register('exampleRequired', { required: true })}
            label="Outlined"
            variant="outlined"
          />

          {errors.exampleRequired && <span>This field is required</span>}

          <input type="submit" />
        </InputsContainer>
      </form>
    </div>
  )
}

const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`
