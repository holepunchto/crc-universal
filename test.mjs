import test from 'brittle'

import { crc32 } from './fallback.js'

test('crc32', (t) => {
  t.is(
    crc32(
      Buffer.from(
        'abcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefgh'
      )
    ),
    0x6b64f5d
  )
})
