let myAccount = {
    name: 'Scott Gregg',
    expenses: 0,
    income: 0
}


let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
}

// addIncome
// resetAccount
// getAccountSummary
// Account for Scott has $900. $1000 in income. $100 in expenses.

// addIncome
// addExpense
// addExpense
// getAccountSummary
// resetAccount
// getAccountSummary

let addIncome = function (account, amount) {
    account.income = account.income + amount
}

let resetAccount = function (account) {
    account.expenses = 0
    account.income = 0
    console.log(`${account.name}'s account has been reset. `)
}

let getAccountSummary = function (account) {
    let balance = account.income - account.expenses
    console.log(
        `Account for ${account.name} has $${balance}. $${account.income} in income, and $${account.expenses} in expenses.`
    )

}


addIncome(myAccount, 1000)
addExpense(myAccount, 200)
addExpense(myAccount, 150)
getAccountSummary(myAccount)
resetAccount(myAccount)
getAccountSummary(myAccount)
addIncome(myAccount, 5000)
addExpense(myAccount, 3000)
getAccountSummary(myAccount)