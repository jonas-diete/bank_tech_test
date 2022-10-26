const TransactionMaker = require('./transactionMaker');

describe('TransactionMaker', () => {
  it('deposit function exists', () => {
    const fakeAccount = {
      balance: 1000,
      addTransaction: (date, amount) => {}
    };
    const transactionMaker = new TransactionMaker(fakeAccount);
    transactionMaker.deposit(1000);
    expect(fakeAccount.balance).toBe(1000);
  });

  it('withdraw function exists', () => {
    const fakeAccount = {
      balance: -300,
      addTransaction: (date, amount) => {}
    };
    const transactionMaker = new TransactionMaker(fakeAccount);
    transactionMaker.withdraw(300);
    expect(fakeAccount.balance).toBe(-300);
  });

  it('error is thrown when a float is passed in to deposit', () => {
    const fakeAccount = {};
    const transactionMaker = new TransactionMaker(fakeAccount);
    expect(() => {transactionMaker.deposit(150.53)}).toThrow('Input needs to be a positive integer');
  });

  it('error is thrown when something other than a number is passed in to deposit', () => {
    const fakeAccount = {};
    const transactionMaker = new TransactionMaker(fakeAccount);
    expect(() => {transactionMaker.deposit('hello')}).toThrow('Input needs to be a positive integer');
  });

  it('error is thrown when deposit input is empty', () => {
    const fakeAccount = {};
    const transactionMaker = new TransactionMaker(fakeAccount);
    expect(() => {transactionMaker.deposit()}).toThrow('Input needs to be a positive integer');
  });

  it('error is thrown when deposit input is negative', () => {
    const fakeAccount = {};
    const transactionMaker = new TransactionMaker(fakeAccount);
    expect(() => {transactionMaker.deposit(-300)}).toThrow('Input needs to be a positive integer');
  });

  it('error is thrown when deposit input is 0', () => {
    const fakeAccount = {};
    const transactionMaker = new TransactionMaker(fakeAccount);
    expect(() => {transactionMaker.deposit(0)}).toThrow('Input needs to be a positive integer');
  });
});