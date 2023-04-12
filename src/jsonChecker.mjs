import { writeFile } from 'fs'

import en from './shared/languages/en.json' assert { type: 'json' }
import es from './shared/languages/es.json' assert { type: 'json' }

export function jsonChecker(json1, json2) {
  const json1Keys = Object.keys(json1).sort()
  const json2Keys = Object.keys(json2).sort()

  const copy = JSON.parse(JSON.stringify(json2))

  const mismatches = json1Keys.filter((key) => {
    if (json2Keys.includes(key)) {
      delete copy[key]
      return false
    }
    return true
  })

  // create file with missing keys
  writeFile('./missing.json', JSON.stringify(mismatches, null, 2), (err) => {
    if (err) throw err
    // eslint-disable-next-line no-console
  })

  return mismatches
}

jsonChecker(en, es)
