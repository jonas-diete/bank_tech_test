const TransactionMaker = require('./transactionMaker');
const Account = require('./account');
const Statement = require('./statement');

describe('Integration', () => {
  it('deposits money', () => {
    const account = new Account;
    const statement = new Statement(account);
    const transactionMaker = new TransactionMaker(account);
    transactionMaker.deposit(1000);
    expect(account.balance).toBe(1000);
  });

  it('withdraws money', () => {
    const account = new Account;
    const statement = new Statement(account);
    const transactionMaker = new TransactionMaker(account);
    transactionMaker.withdraw(300);
    expect(account.balance).toBe(-300);
  });

  it('adds correct statement line after depositing', () => {
    const account = new Account;
    const statement = new Statement(account);
    const transactionMaker = new TransactionMaker(account);
    transactionMaker.deposit(1000);
    const date = new Date;
    const dateString = `${date.getUTCDate()}/${date.getUTCMonth() + 1}/${date.getUTCFullYear()}`;
    expect(statement.printStatement()).toBe(`date || credit || debit || balance\n${dateString} || 1000.00 || || 1000.00`);
  });

  it('adds correct statement line after withdrawing', () => {
    const account = new Account;
    const statement = new Statement(account);
    const transactionMaker = new TransactionMaker(account);
    transactionMaker.withdraw(500);
    const date = new Date;
    const dateString = `${date.getUTCDate()}/${date.getUTCMonth() + 1}/${date.getUTCFullYear()}`;
    expect(statement.printStatement()).toBe(`date || credit || debit || balance\n${dateString} || || 500.00 || -500.00`);
  });

  it('prints the whole correct statement after depositing and withdrawing a few times', () => {
    const account = new Account;
    const statement = new Statement(account);
    const transactionMaker = new TransactionMaker(account);
    transactionMaker.deposit(1000);
    transactionMaker.deposit(2000);
    transactionMaker.withdraw(500);
    const date = new Date;
    const dateString = `${date.getUTCDate()}/${date.getUTCMonth() + 1}/${date.getUTCFullYear()}`;
    expect(statement.printStatement()).toBe(`date || credit || debit || balance\n${dateString} || || 500.00 || 2500.00\n${dateString} || 2000.00 || || 3000.00\n${dateString} || 1000.00 || || 1000.00`);
  });
});