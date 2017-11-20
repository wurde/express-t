'use strict'

const assert = require('assert')

describe("translate.js", () => {
  it("should set default locales_path to './config/locales'", () => {
    let t = require('../lib/translate.js')()
    assert.ok(t.locales_path, "Doesn't have a locales_path property.")
    assert.equal(t.locales_path, './locales', "Incorrect default path.")
  })
  it("should accept a custom locales_path in options", () => {
    let t = require('../lib/translate.js')({ locales_path: "./config/locales" })
    assert.equal(t.locales_path, './config/locales', "Incorrect custom path.")
  })
})
