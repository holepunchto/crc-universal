import test from 'brittle'

test('crc32', async (t) => {
  const ops = 10000000

  const buf = Buffer.alloc(32, 'a')
  const expected = 0xcab11777

  await t.test('native', async (t) => {
    const { crc32 } = await import('./index.js')

    let result

    const elapsed = await t.execution(() => {
      for (let i = 0; i < ops; i++) {
        result = crc32(buf)
      }
    })

    t.alike(result, expected)

    t.comment(Math.round((ops / elapsed) * 1e3) + ' ops/s')
  })

  await t.test('javascript', async (t) => {
    const { crc32 } = await import('./fallback.js')

    let result

    const elapsed = await t.execution(() => {
      for (let i = 0; i < ops; i++) {
        result = crc32(buf)
      }
    })

    t.alike(result, expected)

    t.comment(Math.round((ops / elapsed) * 1e3) + ' ops/s')
  })
})
