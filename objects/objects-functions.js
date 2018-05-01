let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: "A Peoples History",
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long.`
    }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.summary)
console.log(bookSummary.pageCountSummary)

// CHALLENGE AREA

let convertFahrenheit = function (fah) {
    return {
        fahrenheit: fah,
        celcius: (fah - 32) * 5 / 9,
        kelvin: (fah + 459.67) * 5 / 9
    }
}

let temp = convertFahrenheit(69)

console.log(temp)