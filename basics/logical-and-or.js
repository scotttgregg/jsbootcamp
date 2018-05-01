let temp = 55

if (temp >= 60 && temp <= 90) {
    console.log("it's pretty nice out")
} else if (temp <= 0 || temp >= 120) {
    console.log("Don't go")
} else {
    console.log("do you")
}

let isGuestOneVegan = false
let isGuestTwoVegan = false

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log("serve only vegan dishes")
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log("show vegan options")
} else {
    console.log("don't serve any vegan options")
}