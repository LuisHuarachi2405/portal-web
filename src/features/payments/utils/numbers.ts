/* eslint-disable prefer-template */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-param-reassign */
export function isNumber(value: string | number) {
  return value != null && value !== '' && !Number.isNaN(Number(value.toString()))
}

export function add(value1: string, value2: string, decimalPrecision: number = 2) {
  if (!isNumber(value1)) {
    value1 = '0'
  }
  if (!isNumber(value2)) {
    value2 = '0'
  }
  return approx(String(parseFloat(value1) + parseFloat(value2)), decimalPrecision)
}

export function sub(value1: string, value2: string, decimalPrecision: number = 2) {
  if (!isNumber(value1)) {
    value1 = '0'
  }
  if (!isNumber(value2)) {
    value2 = '0'
  }
  return approx(String(parseFloat(value1) - parseFloat(value2)), decimalPrecision)
}

export function comp(value1: string, value2: string, decimalPrecision: null | number = null) {
  if (!isNumber(value1)) {
    value1 = '0'
  }
  if (!isNumber(value2)) {
    value2 = '0'
  }
  let num1 = parseFloat(value1)
  let num2 = parseFloat(value2)

  if (decimalPrecision !== null) {
    num1 = parseFloat(num1.toFixed(decimalPrecision))
    num2 = parseFloat(num2.toFixed(decimalPrecision))
  }

  if (num1 === num2) {
    return 0
  }

  if (num1 > num2) {
    return 1
  }

  return -1
}

export function approx(value1: string, decimalPrecision: number) {
  return parseFloat(value1).toFixed(decimalPrecision)
}

export function priceFormatter(number: string, decimalPrecision = null, abbreviate = false) {
  const company = {
    currency: {
      symbol: '$',
    },
    decimalSeparator: '.',
    decimalPrecision: 2,
  }
  let separator = 'de-DE'
  let sign = ''
  const symbol = company.currency.symbol ?? '$'
  const decimal = decimalPrecision !== null ? decimalPrecision : company?.decimalPrecision

  if (company.decimalSeparator === '.') {
    separator = 'en-US'
  }

  if (comp(number, '0', decimal) < 0) {
    sign = '-'
  }

  let numberFormated = null

  if (abbreviate) {
    numberFormated =
      Math.abs(Number(number)) >= Number('1.0e+9')
        ? (Math.abs(Number(number)) / Number('1.0e+9')).toFixed(0) + ' B'
        : Math.abs(Number(number)) >= Number('1.0e+6')
        ? (Math.abs(Number(number)) / Number('1.0e+6')).toFixed(0) + ' M'
        : Math.abs(Number(number)) >= Number('1.0e+3')
        ? (Math.abs(Number(number)) / Number('1.0e+3')).toFixed(0) + ' K'
        : Math.abs(Number(number))
  } else {
    numberFormated = new Intl.NumberFormat(separator, {
      minimumFractionDigits: decimal,
      maximumFractionDigits: decimal,
    }).format(parseFloat(String(Math.abs(Number(number)))))
  }

  return sign + symbol + numberFormated
}
