const Account = require('../src/account');

describe('Account', () => {
  it('start balance is 0', () => {
    const account = new Account;
    expect(account.balance).toBe(0);
  });

  it('start transactions is empty array', () => {
    const account = new Account;
    expect(account.transactions).toEqual([]);
  });

  it('adding a transaction creates object and pushes to array', () => {
    const account = new Account;
    account.addTransaction('25/10/2022', 1000);
    expect(account.transactions).toEqual([{
      date: '25/10/2022',
      amount: 1000,
      balance: 1000
    }]);
  });

  it('adding a transaction changes balance correctly', () => {
    const account = new Account;
    account.addTransaction('25/10/2022', 1000);
    expect(account.balance).toBe(1000);
  });

  it('has correct array of transactions after adding multiple transactions', () => {
    const account = new Account;
    account.addTransaction('23/10/2022', 5000);
    account.addTransaction('25/10/2022', -800);
    account.addTransaction('26/10/2022', 400);
    expect(account.transactions).toEqual([
      { date: '26/10/2022', amount: 400, balance: 4600 },
      { date: '25/10/2022', amount: -800, balance: 4200 },
      { date: '23/10/2022', amount: 5000, balance: 5000 }
    ]);
  });

  it('has correct balance after adding multiple transactions', () => {
    const account = new Account;
    account.addTransaction('23/10/2022', 5000);
    account.addTransaction('25/10/2022', -800);
    account.addTransaction('26/10/2022', 400);
    expect(account.balance).toBe(4600);
  });
});