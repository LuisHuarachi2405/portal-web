import { NextPage } from 'next'
import dynamic from 'next/dynamic'

const DynamicEditGeneralParameterContent = dynamic(() =>
  import('@/features/general-parameters/components/edit-general-parameter').then(
    (mod) => mod.EditGeneralParameterContent
  )
)

const EditGeneralParameter: NextPage = () => <DynamicEditGeneralParameterContent />

export default EditGeneralParameter
