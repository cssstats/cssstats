module.exports = value => {
  if (typeof value !== 'string') {
    throw new TypeError('is-important expected a string')
  }

  return /!important/.test(value)
}
