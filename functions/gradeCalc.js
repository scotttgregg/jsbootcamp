// student's score, total possible score
// generate letter grade and percent.
// You got a C (75%)!

let scoreGrade = function (score, totalScore) {
    return score / totalScore
}

let grade = scoreGrade(1, 25) * 100
console.log(grade)

if (grade >= 90) {
    console.log(`You got an A! ${grade}%`)
} else if (grade >= 80) {
    console.log(`You got an B! ${grade}%`)
} else if (grade >= 70) {
    console.log(`You got an C! ${grade}%`)
} else if (grade >= 60) {
    console.log(`You got an D! ${grade}%`)
} else if (grade < 60) {
    console.log(`You got an F! ${grade}%`)
}