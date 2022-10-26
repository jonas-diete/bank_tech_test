const Account = require('./src/account');
const TransactionMaker = require('./src/transactionMaker');
const Statement = require('./src/statement');

// An example of how the program works
// Enter 'node run.js' to see the output

const account = new Account;
const transactionMaker = new TransactionMaker(account);
const statement = new Statement(account);

transactionMaker.deposit(1000);
transactionMaker.deposit(2000);
transactionMaker.withdraw(500);
console.log(statement.printStatement());

