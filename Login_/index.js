"use strict"

const account1 = {
    owner: "Jonas Schmedtmann",
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300,900,-200],
    interestRate: 1.2,
    pin: 1111,
};

const account2 = {
    owner: "Jessica Davis",
    movements: [5000, 3400, -150, 3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
}

const account3 = {
    owner: "Steve Thomas Williams",
    movements: [200, -200, 350, -200, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 4444,
}

const account4 = {
    owner: "Sarah Smith",
    movements: [430, 1000, 200, 98],
    interestRate: 1,
    pin: 4444,
}


const accounts = [account1, account2, account3, account4]


const labelWelcome = document.querySelector('.welcome');
const labeDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance_value');
const labelSumIn = document.querySelector('.summary_value--in');
const labeSumOUt = document.querySelector('.summary_value--out');
const labelSumInterest = document.querySelector('.summary_value-interest');


const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');
const btnLogin = document.querySelector('.login_btn');

const btnTransfer = document.querySelector('.money-transfer_btn');
const btnLoan = document.querySelector('.loan_btn');
const btnClose = document.querySelector('.close-account_btn');

const inputLoginUsername = document.querySelector('.login_input--user');
const inputLoginPin = document.querySelector('.login_input--pin');

const inputTransferTo = document.querySelector('.money-transfer_input--to');
const inputTransferAmount = document.querySelector('.money-transfer_input--amount');

const inputLoanAmount = document.querySelector('.loan_input--amount');
const inputCloseUsername = document.querySelector('.close-account_input--user');
const inputClosePin = document.querySelector('.close-account_input--pin');

const balanceValue = document.querySelector('.balance_value_span');
const movementsValue1 = document.querySelector('.movements_value1_span');
const movementsValue2 = document.querySelector('.movements_value2_span');


const displayMovements = function (movements) {
    containerMovements.innerHTML = '';
    movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements_row">
        <div class="movements_type movements_type--${type}">${i+1} ${type}</div>
        <div class="movements_value ">${mov}</div>`

        containerMovements.insertAdjacentHTML('afterbegin', html);
    });

}
displayMovements(account1.movements)

const createUsernames = 

const {movements}  = account1;

const user = 'Steve Thomas Williams'
const username = user.toLowerCase().split(' ').map(name => name[0])

console.log(username);