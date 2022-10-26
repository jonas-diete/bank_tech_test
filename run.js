const TransactionMaker = require('./transactionMaker');
const Account = require('./account');
const Statement = require('./statement');


// An example of how the program works
// Enter 'node run.js' to see the output
const account = new Account;
const statement = new Statement(account);
const transactionMaker = new TransactionMaker(account);
transactionMaker.deposit(1000);
transactionMaker.deposit(2000);
transactionMaker.withdraw(500);
console.log(statement.printStatement());