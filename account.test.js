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
});