'use strict'

/**
 * Dependencies
 */

const fs = require('fs')
const path = require('path')

/**
 * Express t() helper constructor
 */

function express_t(base_path) {
  /**
   * Constants
   */

  const locales_path = path.join(base_path, "/config/locales")
  const locales = {}

  /**
   * Ensure the locales directory exists
   */

  const stats = fs.statSync(locales_path)

  if (!stats.isDirectory()) {
    throw new Error(`${locales_path} is not a directory.`)
  }

  /**
   * Collect all locales
   */

  const locale_files = fs.readdirSync(locales_path)

  for (let i = 0; i < locale_files.length; i++) {
    let json = JSON.parse(fs.readFileSync(path.join(locales_path, locale_files[i]), "utf8"))
    let json_keys = Object.keys(json)

    for (let j = 0; j < json_keys.length; j++) {
      locales[json_keys[j]] = json[json_keys[j]]
    }
  }

  /**
   * Export helper method
   */

  return (locale, str) => {
    let keys = str.split(".")
    if (!Object.keys(locales).includes(locale)) { throw new Error(`Translations for locale '${locale}' are missing.`) }
    let x = locales[locale]

    for (let i = 0; i < keys.length; i++) {
      if (keys[i] in x) { x = x[keys[i]] } else { return '' }
    }

    return x
  }
}

/**
 * Exports constructor
 */

module.exports = express_t
