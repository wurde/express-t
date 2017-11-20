module.exports = (options={}) => {
  let locales_path = './locales'
  if ('locales_path' in options) { locales_path = options['locales_path'] }
  return (locale, key) => {
    return 'Hello, world!'
  }
}
