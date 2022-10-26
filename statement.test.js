const Statement = require('./statement');

describe('Statement', () => {
  it('returns the start line without any transactions', () => {
    const fakeAccount = {
      transactions: []
    }
    const statement = new Statement(fakeAccount);
    expect(statement.printStatement()).toBe('date || credit || debit || balance');
  });

  it('returns start line and one additional line', () => {
    const fakeAccount = {
      transactions: [{date: '10/01/2023', amount: 1000, balance: 1000}]
    }
    const statement = new Statement(fakeAccount);
    expect(statement.printStatement()).toBe('date || credit || debit || balance\n10/01/2023 || 1000.00 || || 1000.00');
  });

  it('returns start line and more lines in reverse chronological order', () => {
    const fakeAccount = {
      transactions: [
        {date: '14/01/2023', amount: -500, balance: 2500},
        {date: '13/01/2023', amount: 2000, balance: 3000},
        {date: '10/01/2023', amount: 1000, balance: 1000},
      ]
    }
    const statement = new Statement(fakeAccount);
    expect(statement.printStatement()).toBe('date || credit || debit || balance\n14/01/2023 || || 500.00 || 2500.00\n13/01/2023 || 2000.00 || || 3000.00\n10/01/2023 || 1000.00 || || 1000.00');
  });

  it('displays previous withdrawals correctly', () => {
    const fakeAccount = {
      transactions: [
        {date: '16/01/2023', amount: -1260, balance: 1240},
        {date: '14/01/2023', amount: -500, balance: 2500},
        {date: '13/01/2023', amount: 2000, balance: 3000},
        {date: '10/01/2023', amount: 1000, balance: 1000},
      ]
    }
    const statement = new Statement(fakeAccount);
    expect(statement.printStatement()).toBe('date || credit || debit || balance\n16/01/2023 || || 1260.00 || 1240.00\n14/01/2023 || || 500.00 || 2500.00\n13/01/2023 || 2000.00 || || 3000.00\n10/01/2023 || 1000.00 || || 1000.00');
  });
});