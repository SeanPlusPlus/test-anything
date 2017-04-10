const test = require('tape')
const fancify = require(process.argv[2])

test('fancify', (t) => {
  const s = 'foo'
  const a = '%'
  t.equal(fancify(s), `~*~${s}~*~`, 'wraps str')
  t.equal(fancify(s, true), `~*~${s.toUpperCase()}~*~`, 'str to up')
  t.equal(fancify(s, false, a), `~${a}~${s}~${a}~`, 'set wrap char')
  t.end()
})
