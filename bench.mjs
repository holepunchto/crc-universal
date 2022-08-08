import bench from 'nanobench'

const buffer = Buffer.alloc(24, 'a')
const iterations = 1000000

bench('javascript', async (b) => {
  const { crc32 } = await import('./browser.js')

  b.start()

  let c
  for (let i = 0; i < iterations; i++) {
    c = crc32(buffer) >>> 0
  }

  b.log(c.toString(16))
  b.end()
})

bench('native', async (b) => {
  const { crc32 } = await import('crc-native')

  b.start()

  let c
  for (let i = 0; i < iterations; i++) {
    c = crc32(buffer)
  }

  b.log(c.toString(16))
  b.end()
})
