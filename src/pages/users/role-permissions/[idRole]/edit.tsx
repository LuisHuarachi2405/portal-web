import { NextPage } from 'next'
import dynamic from 'next/dynamic'

const DynamicEditRolePermissionsContent = dynamic(() =>
  import('@/features/users/roles-permissions/edit-role-permissions').then(
    (mod) => mod.EditRolePermissionsContent
  )
)

const EditGeneralParameter: NextPage = () => <DynamicEditRolePermissionsContent />

export default EditGeneralParameter
