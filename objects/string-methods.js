let name = '  Scott Gregg  '

// Length property

console.log(name.length)

// convert to upper case

console.log(name.toUpperCase())

console.log(name.toLowerCase())

let password = 'abc123098'
console.log(password.includes('password'))

// trim
console.log(name.trim())

// CHALLENGE AREA

// isValidPassword
// length is more than 8
// doesn't contain 'password'
// if standards met, return true



let isValidPassword = function (password) {
    password.toLowerCase()
    return password.length < 9 || password.includes('password')
}

console.log(isValidPassword('asdf'))
console.log(isValidPassword('abc123!@#$%^'))
console.log(isValidPassword('asdfpasswordfdsa'))
