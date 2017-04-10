const test = require('tape')
const repeatCallback = require(process.argv[2])

test('repeatCallback', (t) => {
  const n = 10
  t.plan(n)
  repeatCallback(n, () => {
    t.pass('callback called')
  })
  t.end()
})
