
// Global scope (convertFahrenheitToCelcius, tempONe, tempTwo)
    // local scope (fahrenheit, celcius)
        // local scope (isFreezing)



let convertFahrenheitToCelcius = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9;

    if (celsius <= 0) {
        let isFreezing = true
    }
    return celcius
};

let tempOne = convertFahrenheitToCelcius(32);
let tempTwo = convertFahrenheitToCelcius(68);

console.log(tempOne);
console.log(tempTwo);

let name = 'Jen';
let age = 12;
console.log(`Hey, my name is ${name}!  I am ${age} years old.`);