import { NextPage } from 'next'
import dynamic from 'next/dynamic'

const DynamicEditRateFeatureContent = dynamic(() =>
  import('@/features/rates/components/features/edit-rate-feature').then(
    (mod) => mod.EditRateFeatureContent
  )
)

const EditRateFeature: NextPage = () => <DynamicEditRateFeatureContent />

export default EditRateFeature
