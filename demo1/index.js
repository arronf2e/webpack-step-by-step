import sum1 from './module/esm'

console.log(sum1(1, 2), 'esm')

var { sum2 } = require('./module/commonjs')

console.log(sum2(3, 4), 'commonjs')

require(['./module/amd.js'], function(sum3) {
    console.log(sum3(3, 4), 'amd')
})