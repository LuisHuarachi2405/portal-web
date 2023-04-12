import { Dispatch, FC, SetStateAction, useState } from 'react'
import { Delete, Edit, ErrorOutline, Visibility } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { Box } from '@mui/system'
import toast from 'react-hot-toast'

import { AlertDialog } from '@/shared/components/alert-dialog'
import { useIntl } from '@/shared/hooks/use-intl'
import {
  ReservationRepoDocument,
  ReservationRepoDocumentsDocument,
  useRemoveReservationRepoDocumentMutation,
} from '@/shared/graphql/generated/reservations-api'
import { UploadS3 } from '@/shared/utils/s3/s3'
import { useAuth } from '@/shared/contexts/auth/auth-provider'

import { FormModalState } from '../../types/shared.types'

interface DocumentTableActionsProps {
  row: ReservationRepoDocument
  setFormModalState: Dispatch<SetStateAction<FormModalState>>
}

export const DocumentTableActions: FC<DocumentTableActionsProps> = (props) => {
  const { row, setFormModalState } = props

  const [open, setOpen] = useState<boolean>(false)
  const intl = useIntl()
  const { user } = useAuth()
  let s3Process: UploadS3
  const { name, idRepoDocument } = row

  const handleOpen = () => {
    setOpen(!open)
  }

  const openFile = async () => {
    try {
      s3Process = new UploadS3(user?.idToken as string)
      await s3Process.checkCredentials()
      const pdfFile = await s3Process.getS3File(`${idRepoDocument}.pdf`)
      s3Process.blobPartToFile(pdfFile as BlobPart)
    } catch (error) {
      toast.error(String(error), {
        position: 'top-right',
        duration: 2000,
      })
    }
  }

  // const printFile = async () => {
  //   try {
  //     s3Process = new UploadS3(user?.idToken as string)
  //     await s3Process.checkCredentials()
  //     const pdfFile = await s3Process.getS3File(`${idRepoDocument}.pdf`)
  //     s3Process.printPdf(pdfFile as BlobPart)
  //   } catch (error) {
  //     toast.error(intl.formatMessage('pages.payments.form.cashier-transaction.documents'), {
  //       position: 'top-right',
  //       duration: 2000,
  //     })
  //   }
  // }

  const [deleteDocumentMutation] = useRemoveReservationRepoDocumentMutation({
    refetchQueries: [ReservationRepoDocumentsDocument],
    onCompleted: () => {
      toast.success('Document deleted successfully', {
        position: 'top-right',
        duration: 2000,
      })
    },
  })

  const onDeleteConfirm = async () => {
    try {
      await deleteDocumentMutation({
        variables: {
          idRepoDocument,
        },
      })
      handleOpen()
    } catch (error) {
      toast.error(`${error}`, {
        position: 'top-right',
        duration: 2000,
      })
    }
  }

  const openModal = () => {
    setFormModalState({
      open: true,
      itemToEdit: row,
    })
  }

  return (
    <>
      <AlertDialog
        open={open}
        maxWidth="sm"
        handleOpen={handleOpen}
        dialogTitle={intl.formatMessage('components.delete.alert.dialog.title', {
          type: 'Document',
          name,
        })}
        dialogContent={intl.formatMessage('components.delete.alert.dialog.content')}
        onConfirm={onDeleteConfirm}
        icon={<ErrorOutline />}
      />
      <Box display="flex" gap="8px" justifyContent="center" width="100%">
        <IconButton onClick={openModal} color="primary">
          <Edit fontSize="small" />
        </IconButton>

        <IconButton onClick={openFile} color="primary">
          <Visibility fontSize="small" />
        </IconButton>

        <IconButton onClick={handleOpen}>
          <Delete fontSize="small" />
        </IconButton>
      </Box>
    </>
  )
}
