import { FullEntityOutput } from '@/shared/graphql/generated/entities-api'

/* eslint-disable class-methods-use-this */
export class EntityInvoiceFactory {
  create(entityEmisor: FullEntityOutput, entityCliente: FullEntityOutput): Invoice {
    return {
      EMISOR_RAZON_SOCIAL: entityEmisor?.businessName,
      EMISOR_DIRECCION: entityEmisor?.address?.line1,

      CLIENTE_TIPO_DOCUMENTO: entityCliente?.documentType,
      CLIENTE_NUMERO_DOCUNENTO: entityCliente?.documentNumber,
      CLIENTE_NOMBRE_RAZON_SOCIAL: entityCliente?.businessName,
      CLIENTE_DIRECCION: entityCliente?.address?.line1,

      EMISOR_RUC: entityEmisor?.documentNumber,
    }
  }
}

interface Invoice {
  EMISOR_RAZON_SOCIAL: string
  EMISOR_DIRECCION: string
  CLIENTE_TIPO_DOCUMENTO: string
  CLIENTE_NUMERO_DOCUNENTO: string
  CLIENTE_NOMBRE_RAZON_SOCIAL: string
  CLIENTE_DIRECCION: string
  EMISOR_RUC: string
}
