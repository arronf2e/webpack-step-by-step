import sum1 from './esmodule'

console.log(`esmodule sum1(1,2) = ${sum1(1,2)}`)

const multi = require('./commonjs')

console.log(`commonjs sum2(1,2) = ${multi.sum2(1,2)}`)

require(['./amd.js'], function(sum3) {
    console.log(`amd sum3(1,2) = ${sum3(1,2)}`)
})