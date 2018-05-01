// Undefined for variable

let name

if (name === undefined) {
    console.log("Please provide a name.")
} else {
    console.log(name)
}



// undefined for function arguments

let square = function (num) {
    console.log(num)
}

let result = square()
console.log(result)

let age = 27


age = null

console.log(age)