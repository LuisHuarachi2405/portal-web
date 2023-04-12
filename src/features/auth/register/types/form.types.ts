export interface FormDataRegister {
  name: string
  lastName: string
  email: string
  password: string
  phone: string
  businessName?: string
  idOu?: string
  country?: {
    label: string
    value: string
  }
  idLanguage?: string
  businessCode?: string
}
