import { NextPage } from 'next'
import dynamic from 'next/dynamic'

const DynamicEditModulePermissionsContent = dynamic(() =>
  import('@/features/users/module-permissions/edit-module-permissions').then(
    (mod) => mod.EditModulePermissionsContent
  )
)

const EditGeneralParameter: NextPage = () => <DynamicEditModulePermissionsContent />

export default EditGeneralParameter
