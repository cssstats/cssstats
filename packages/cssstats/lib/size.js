module.exports = function (string) {
  return Buffer.byteLength(string, 'utf8')
}
