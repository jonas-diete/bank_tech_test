const Transactions = require('../transactions');
const Account = require('../account');
const Statement = require('../statement');

describe('Transactions', () => {
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

  it('adds correct statement line after depositing', () => {
    const account = new Account;
    const statement = new Statement;
    const transactions = new Transactions(account, statement);
    transactions.deposit(1000, '10/01/2023');
    expect(statement.printStatement()).toBe('date || credit || debit || balance\n10/01/2023 || 1000.00 || || 1000.00')
  });

  it('adds correct statement line after withdrawing', () => {
    const account = new Account;
    const statement = new Statement;
    const transactions = new Transactions(account, statement);
    transactions.withdraw(500, '10/01/2023');
    expect(statement.printStatement()).toBe('date || credit || debit || balance\n10/01/2023 || || 500.00 || -500.00')
  });
});