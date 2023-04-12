import { NextPage } from 'next'
import dynamic from 'next/dynamic'

const DynamicEditUsersContent = dynamic(() =>
  import('@/features/users/users/edit-users').then((mod) => mod.EditUsersContent)
)

const EditUserPage: NextPage = () => <DynamicEditUsersContent />

export default EditUserPage
