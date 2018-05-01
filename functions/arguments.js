// multiple arguments

let add = function (a, b, c) {
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result)

// Default arguments

let getScoreText = function (name = 'Anonymous', score = 0) {
    // return 'Name: ' + name + ' Score: ' + score
    return `Name: ${name} - Score: ${score}`
}

let scoreText = getScoreText(undefined, 99)
console.log(scoreText)

// Challenge time
// total for bill, tip percent  - .2

let tipCalculator = function (total, tipPercent = .2) {
    return total + (total * tipPercent)
}

// A 25% tip on 45 would

let total = tipCalculator(15)
console.log(total)

let name = 'Jen';
let age = 12;
console.log(`Hey, my name is ${name}!  I am ${age} years old.`);