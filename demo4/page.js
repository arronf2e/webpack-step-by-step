import('./subPageA').then(subPageA => {
    console.log(subPageA)
})

import('./subPageB').then(subPageB => {
    console.log(subPageB)
})

import('lodash').then(_ => {
    console.log(_.join(['1', '2']))
})

// import subPageA from './subPageA'
// import subPageB from './subPageB'

console.log(subPageA, subPageB)

export default 'page'