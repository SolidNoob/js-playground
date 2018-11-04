/*
let name = 'John Doe'

console.log(name.length)

console.log(name.toUpperCase())


let password = 'abc123password789'
console.log(password.includes('password'))
*/

let isValidPassword = function (password){
    return password.length > 8 && ! password.includes('password')
}

console.log(isValidPassword('lorem'))
console.log(isValidPassword('abc!!!123456'))
console.log(isValidPassword('abc!!!12password3456'))