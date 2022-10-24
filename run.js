const Transactions = require('./transactions');
const Account = require('./account');
const Statement = require('./statement');

const account = new Account;
const statement = new Statement;
const transactions = new Transactions(account, statement);
transactions.deposit(1000, '10/01/2023');
transactions.deposit(2000, '13/01/2023');
transactions.withdraw(500, '14/01/2023');
console.log(statement.printStatement());