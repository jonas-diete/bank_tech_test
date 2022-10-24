const Account = require('./account');

describe('Account', () => {
  it('shows the balance', () => {
    const account = new Account;
    expect(account.getBalance()).toBe(0);
  });

  it('shows the correct balance after updating', () => {
    const account = new Account;
    account.updateBalance(1000);
    expect(account.getBalance()).toBe(1000);
  });

  it('shows the correct balance after updating multiple times', () => {
    const account = new Account;
    account.updateBalance(5000);
    account.updateBalance(-800);
    account.updateBalance(400);
    expect(account.getBalance()).toBe(4600);
  });
});