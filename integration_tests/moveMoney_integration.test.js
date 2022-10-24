const MoveMoney = require('../moveMoney');
const Account = require('../account');

describe('MoveMoney', () => {
  it('deposits money', () => {
    const account = new Account;
    const moveMoney = new MoveMoney(account);
    moveMoney.deposit(1000);
    expect(account.getBalance()).toBe(1000);
  });

  it('withdraws money', () => {
    const account = new Account;
    const moveMoney = new MoveMoney(account);
    moveMoney.withdraw(300);
    expect(account.getBalance()).toBe(-300);
  });
});