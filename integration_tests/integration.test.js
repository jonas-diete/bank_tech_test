const Transactions = require('../transactions');
const Account = require('../account');

describe('Transactions', () => {
  it('deposits money', () => {
    const account = new Account;
    const transactions = new Transactions(account);
    transactions.deposit(1000);
    expect(account.getBalance()).toBe(1000);
  });

  it('withdraws money', () => {
    const account = new Account;
    const transactions = new Transactions(account);
    transactions.withdraw(300);
    expect(account.getBalance()).toBe(-300);
  });
});