import { NextPage } from 'next'
import dynamic from 'next/dynamic'

const DynamicEntityContent = dynamic(() =>
  import('@/features/entities/components/edit-entity').then((mod) => mod.EditEntityContent)
)

const EditEntity: NextPage = () => <DynamicEntityContent />

export default EditEntity
