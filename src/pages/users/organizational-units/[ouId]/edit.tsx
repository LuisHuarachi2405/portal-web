import { NextPage } from 'next'
import dynamic from 'next/dynamic'

const DynamicEditOrganizationalUnitsContent = dynamic(() =>
  import('@/features/users/ou/edit-organizational-units').then(
    (mod) => mod.EditOrganizationalUnitContent
  )
)

const EditOrganizationalUnitPage: NextPage = () => <DynamicEditOrganizationalUnitsContent />

export default EditOrganizationalUnitPage
