const fallback = require('./fallback')

try {
  const native = require('./native')

  exports.crc32 = function crc32 (buffer) {
    return buffer.byteLength <= 24 ? fallback.crc32(buffer) : native.crc32(buffer)
  }
} catch {
  module.exports = fallback
}
