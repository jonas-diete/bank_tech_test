const Transactions = require('./transactions');

describe('Transaction', () => {
  it('deposit function exists', () => {
    const fakeAccount = {
      updateBalance: (amount) => {},
      getBalance: () => {return 1000}
    };
    const fakeStatement = {
      addTransaction: (date, amount, balance) => {}
    };
    const transactions = new Transactions(fakeAccount, fakeStatement);
    transactions.deposit(1000, '23/10/2022');
    expect(fakeAccount.getBalance()).toBe(1000);
  });

  it('withdraw function exists', () => {
    const fakeAccount = {
      updateBalance: (amount) => {},
      getBalance: () => {return -300}
    };
    const fakeStatement = {
      addTransaction: (date, amount, balance) => {}
    };
    const transactions = new Transactions(fakeAccount, fakeStatement);
    transactions.withdraw(300, '24/10/2022');
    expect(fakeAccount.getBalance()).toBe(-300);
  });

  it('withdrawing and depositing dont need a date (todays date is added automatically)', () => {
    const fakeAccount = {
      updateBalance: (amount) => {},
      getBalance: () => {return 500}
    };
    const fakeStatement = {
      addTransaction: (date, amount, balance) => {}
    };
    const transactions = new Transactions(fakeAccount, fakeStatement);
    transactions.deposit(1000);
    transactions.withdraw(500);
    expect(fakeAccount.getBalance()).toBe(500);
  });

  it('error is thrown when a float is passed in to deposit', () => {
    const fakeAccount = {};
    const fakeStatement = {};
    const transactions = new Transactions(fakeAccount, fakeStatement);
    expect(() => {transactions.deposit(150.53)}).toThrow('Input needs to be a positive integer');
  });

  it('error is thrown when something other than a number is passed in to deposit', () => {
    const fakeAccount = {};
    const fakeStatement = {};
    const transactions = new Transactions(fakeAccount, fakeStatement);
    expect(() => {transactions.deposit('hello')}).toThrow('Input needs to be a positive integer');
  });

  it('error is thrown when deposit input is empty', () => {
    const fakeAccount = {};
    const fakeStatement = {};
    const transactions = new Transactions(fakeAccount, fakeStatement);
    expect(() => {transactions.deposit()}).toThrow('Input needs to be a positive integer');
  });

  it('error is thrown when deposit input is negative', () => {
    const fakeAccount = {};
    const fakeStatement = {};
    const transactions = new Transactions(fakeAccount, fakeStatement);
    expect(() => {transactions.deposit(-300)}).toThrow('Input needs to be a positive integer');
  });

  it('error is thrown when deposit input is 0', () => {
    const fakeAccount = {};
    const fakeStatement = {};
    const transactions = new Transactions(fakeAccount, fakeStatement);
    expect(() => {transactions.deposit(0)}).toThrow('Input needs to be a positive integer');
  });
});