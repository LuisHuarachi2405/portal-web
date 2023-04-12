import type { FC } from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { Suspense } from 'react'

import { Spinner } from '@/shared/components/spinner'
import { useGetEntityQuery } from '@/shared/graphql/generated/entities-api'

const DynamicEntityForm = dynamic(
  () =>
    import('@/features/entities/components/entities-form').then((module) => ({
      default: module.default,
    })),
  {
    suspense: true,
  }
)

export const EditEntityContent: FC = () => {
  const {
    query: { paramId },
  } = useRouter()

  const { data, loading, error } = useGetEntityQuery({
    variables: { idEntity: paramId },
    fetchPolicy: 'cache-and-network',
    skip: !paramId,
  })

  if (error) return <p>Error</p>

  if (!data || loading) return <Spinner />

  const dataEntity = data.getEntity.entity

  const dataContacts: any = dataEntity.entity_Contact?.map((contact) => ({
    ...contact,
    idContactType: contact.contact?.idContactType,
    value: contact.contact?.value,
    idUserCreate: '11110000000000000000000000000000',
  }))

  const dataAddress: any = dataEntity?.entity_Address?.map((address) => ({
    ...address,
    ...address.address,
  }))

  return (
    <Suspense fallback={<Spinner />}>
      <DynamicEntityForm
        isEditing
        prevValues={{
          idEntity: dataEntity.idEntity,
          entityType: dataEntity.entity_EntityType?.idEntityType,
          role: dataEntity.entity_Role?.idRole,
          name: dataEntity.name,
          commercialName: dataEntity.commercialName,
          idEntityIdType: {
            idEntityIdType: dataEntity.entity_IdType![0].idEntityIdType,
            value: dataEntity.entity_IdType![0].value,
          },
          entityContactValues: dataContacts,
          entityDirectionValues: dataAddress,
          market: dataEntity.idMarket,
          channel: dataEntity.idChannel != null ? dataEntity.idChannel : '',
          industry: dataEntity.idIndustry != null ? dataEntity.idIndustry : '',
          businessType: dataEntity.idBusinessType,
        }}
      />
    </Suspense>
  )
}
