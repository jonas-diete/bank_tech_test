const Statement = require('./statement');

describe('Statement', () => {
  it('prints off the start line without any transactions', () => {
    const statement = new Statement;
    expect(statement.printStatement()).toBe('date || credit || debit || balance');
  });
});