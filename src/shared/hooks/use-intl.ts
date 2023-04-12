import { useIntl as reactIntl } from 'react-intl'

export const useIntl = () => {
  const intl = reactIntl()

  const formatMessage = (id: string, values?: Record<string, string>) =>
    intl.formatMessage({ id }, values)

  return { ...intl, formatMessage }
}
