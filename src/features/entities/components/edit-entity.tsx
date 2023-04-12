import type { FC } from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { Suspense } from 'react'

import { Spinner } from '@/shared/components/spinner'
import { useGetEntityQuery } from '@/shared/graphql/generated/entities-api'
import { ErrorBoundary } from '@/shared/components/error-boundary'

import { EntityContactValues, EntityDirectionValues } from '../types/form.types'

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

  const { data, loading, error, refetch } = useGetEntityQuery({
    variables: { idEntity: paramId },
    fetchPolicy: 'cache-and-network',
    skip: !paramId,
  })

  if (error) return <ErrorBoundary retry={refetch} />

  if (!data || loading) return <Spinner />

  const dataEntity = data.getEntity.entity

  const dataContacts = dataEntity.entity_Contact?.map((contact) => ({
    ...contact,
    idContactType: contact.contact?.idContactType,
    value: contact.contact?.value,
    idUserCreate: '11110000000000000000000000000000',
  }))

  const dataAddress = dataEntity?.entity_Address?.map((address) => ({
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
          role: dataEntity?.entity_Role?.map((role) => role.idRole) ?? [],
          name: dataEntity.name,
          commercialName: dataEntity.commercialName,
          idEntityIdType: dataEntity.entity_IdType?.length
            ? dataEntity.entity_IdType.map((entityIdType) => ({
                idEntityIdType: entityIdType.idEntityIdType,
                value: entityIdType.value,
              }))
            : [{ idEntityIdType: '', value: '' }],
          entityContactValues: dataContacts?.length
            ? (dataContacts as unknown as EntityContactValues[])
            : ([{ idContactType: '', value: '' }] as unknown as EntityContactValues[]),
          entityDirectionValues: dataAddress?.length
            ? (dataAddress as EntityDirectionValues[])
            : ([
                {
                  idCountry: '',
                  line1: '',
                  line2: '',
                  idState: '',
                  idProvince: '',
                  postalCode: '',
                  idAddressType: '',
                },
              ] as EntityDirectionValues[]),
          market: dataEntity.idMarket,
          channel: dataEntity.idChannel != null ? dataEntity.idChannel : '',
          industry: dataEntity.idIndustry != null ? dataEntity.idIndustry : '',
          businessType: dataEntity.idBusinessType,
        }}
      />
    </Suspense>
  )
}
