import 'babel-polyfill'

let func = () => {
    console.log('func')
}

func()

let m = new Map()

m.set('name', 'jerry')

console.log(m.get('name'))

