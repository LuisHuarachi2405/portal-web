import { NextPage } from 'next'
import dynamic from 'next/dynamic'

const DynamicEditRateSubfeatureContent = dynamic(() =>
  import('@/features/rates/components/subfeatures/edit-rate-subfeature').then(
    (mod) => mod.EditRateSubfeatureContent
  )
)

const EditRateSubfeature: NextPage = () => <DynamicEditRateSubfeatureContent />

export default EditRateSubfeature
