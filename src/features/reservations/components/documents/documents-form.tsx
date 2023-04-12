import { FC, useEffect, useState } from 'react'
import { Controller, SubmitHandler } from 'react-hook-form'
import { Box, Button, CircularProgress, Dialog, TextField } from '@mui/material'
import toast from 'react-hot-toast'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'

import { useIntl } from '@/shared/hooks/use-intl'
import { useAuth } from '@/shared/contexts/auth/auth-provider'
import {
  ReservationRepoDocument,
  ReservationRepoDocumentsDocument,
  useCreateReservationRepoDocumentMutation,
  useUpdateReservationRepoDocumentMutation,
} from '@/shared/graphql/generated/reservations-api'
import { UploadS3 } from '@/shared/utils/s3/s3'
import { FilesTypes } from '@/shared/utils/s3/s3-type-file'

import { DocumentFormValues, useDocumentForm } from '../../hooks/use-documents-form'

interface DocumentFormProps {
  open: boolean
  handleClose: () => void
  itemToEdit: ReservationRepoDocument | null
}

export const DocumentForm: FC<DocumentFormProps> = (props) => {
  const { itemToEdit, open, handleClose } = props
  const intl = useIntl()
  const { user } = useAuth()
  const router = useRouter()
  const { reservationId } = router.query as { reservationId: string }
  let s3Process: UploadS3
  const [file, setFile] = useState<FileList>()

  const [createDocument, { loading: createDocumentLoading }] =
    useCreateReservationRepoDocumentMutation({
      refetchQueries: [ReservationRepoDocumentsDocument],
      onCompleted: () => {
        toast.success('Document Created', {
          position: 'top-right',
          duration: 2000,
        })
      },
    })

  const [updateDocument, { loading: updateDocumentLoading }] =
    useUpdateReservationRepoDocumentMutation({
      refetchQueries: [ReservationRepoDocumentsDocument],
      onCompleted: () => {
        toast.success('Document Updated', {
          position: 'top-right',
          duration: 2000,
        })
      },
    })

  const {
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useDocumentForm()

  const uploadFile = async (idDocument: string, dataFile: File) => {
    try {
      s3Process = new UploadS3(user?.idToken as string)
      await s3Process.checkCredentials()
      const base64 = await s3Process.convertBase64(dataFile)

      const regex = /data:.*base64,/
      const base64Formatted = base64.replace(regex, '')

      s3Process.uploadS3File(String(base64Formatted), `${String(idDocument)}.pdf`, FilesTypes.PDF)
    } catch (error) {
      toast.error(intl.formatMessage('upload failed'), {
        position: 'top-right',
        duration: 2000,
      })
    }
  }

  const onSubmit: SubmitHandler<DocumentFormValues> = async (formData) => {
    try {
      if (itemToEdit) {
        await updateDocument({
          variables: {
            updateReservationRepoDocumentInput: {
              idRepoDocument: itemToEdit!.idRepoDocument,
              name: formData.name,
              idUserUpdate: user?.idUser,
            },
          },
        })
        handleClose()

        return
      }

      const dataDocument = await createDocument({
        variables: {
          createReservationRepoDocumentInput: {
            idReservation: reservationId,
            name: formData.name,
            idOu: user?.idOu,
            idUserCreate: user?.idUser,
          },
        },
      })

      await uploadFile(dataDocument.data?.createReservationRepoDocument.idRepoDocument, file![0])

      handleClose()
    } catch (error) {
      toast.error(`${error}`, {
        position: 'top-right',
        duration: 2000,
      })
    }
  }

  useEffect(() => {
    if (open && itemToEdit) {
      reset({
        name: itemToEdit.name,
      })
    }
  }, [reset, open, itemToEdit])

  useEffect(() => {
    if (!open) {
      reset({
        name: '',
        file: '',
      })
    }
  }, [reset, open])

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" disableEscapeKeyDown fullWidth>
      <Box display="flex" flexDirection="column" gap="16px" padding="32px">
        <h2>{itemToEdit === null ? 'Add Document' : 'Edit Document'}</h2>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            name="name"
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                size="small"
                error={!!errors.name}
                helperText={errors.name?.message && intl.formatMessage(errors.name?.message)}
                label="Name"
              />
            )}
          />

          {!itemToEdit && (
            <Controller
              control={control}
              name="file"
              render={({ field }) => (
                <input
                  {...field}
                  type="file"
                  onChange={(e) => {
                    setFile(e.target.files!)
                    field.onChange(e.target.value)
                  }}
                  required={!itemToEdit}
                />
              )}
            />
          )}

          <Box display="flex" justifyContent="flex-end" gap="16px">
            <Box sx={{ m: 1, position: 'relative' }}>
              <Button
                type="button"
                variant="outlined"
                onClick={handleClose}
                disabled={createDocumentLoading || updateDocumentLoading}
              >
                Cancel
              </Button>
              {(createDocumentLoading || updateDocumentLoading) && (
                <CircularProgress
                  size={24}
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    marginTop: '-12px',
                    marginLeft: '-12px',
                  }}
                />
              )}
            </Box>
            <Box sx={{ m: 1, position: 'relative' }}>
              <Button
                type="submit"
                variant="contained"
                disabled={createDocumentLoading || updateDocumentLoading}
              >
                {itemToEdit === null ? 'Add' : 'Edit'}
              </Button>
              {(createDocumentLoading || updateDocumentLoading) && (
                <CircularProgress
                  size={24}
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    marginTop: '-12px',
                    marginLeft: '-12px',
                  }}
                />
              )}
            </Box>
          </Box>
        </StyledForm>
      </Box>
    </Dialog>
  )
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`
