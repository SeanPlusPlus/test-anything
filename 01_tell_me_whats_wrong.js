const assert = require('assert')
const isCoolNumber = require(process.argv[2])

assert(isCoolNumber(42) === true)
assert(isCoolNumber(10) === false)
