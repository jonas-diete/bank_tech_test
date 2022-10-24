const Transactions = require('./transactions');
const Account = require('./account');
const Statement = require('./statement');

describe('Integration', () => {
  it('deposits money', () => {
    const account = new Account;
    const statement = new Statement;
    const transactions = new Transactions(account, statement);
    transactions.deposit(1000);
    expect(account.getBalance()).toBe(1000);
  });

  it('withdraws money', () => {
    const account = new Account;
    const statement = new Statement;
    const transactions = new Transactions(account, statement);
    transactions.withdraw(300);
    expect(account.getBalance()).toBe(-300);
  });

  it('withdraw and deposit can use floats', () => {
    const account = new Account;
    const statement = new Statement;
    const transactions = new Transactions(account, statement);
    transactions.deposit(532.90);
    transactions.withdraw(310.50);
    expect(account.getBalance()).toBe(222.40);
  });

  it('adds correct statement line after depositing', () => {
    const account = new Account;
    const statement = new Statement;
    const transactions = new Transactions(account, statement);
    transactions.deposit(1000, '10/01/2023');
    expect(statement.printStatement()).toBe('date || credit || debit || balance\n10/01/2023 || 1000.00 || || 1000.00');
  });

  it('adds correct statement line after withdrawing', () => {
    const account = new Account;
    const statement = new Statement;
    const transactions = new Transactions(account, statement);
    transactions.withdraw(500, '14/01/2023');
    expect(statement.printStatement()).toBe('date || credit || debit || balance\n14/01/2023 || || 500.00 || -500.00');
  });

  it('prints the whole correct statement after depositing and withdrawing a few times', () => {
    const account = new Account;
    const statement = new Statement;
    const transactions = new Transactions(account, statement);
    transactions.deposit(1000, '10/01/2023');
    transactions.deposit(2000, '13/01/2023');
    transactions.withdraw(500, '14/01/2023');
    expect(statement.printStatement()).toBe('date || credit || debit || balance\n14/01/2023 || || 500.00 || 2500.00\n13/01/2023 || 2000.00 || || 3000.00\n10/01/2023 || 1000.00 || || 1000.00');
  });
});