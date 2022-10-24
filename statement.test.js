const Statement = require('./statement');

describe('Statement', () => {
  it('returns the start line without any transactions', () => {
    const statement = new Statement;
    expect(statement.printStatement()).toBe('date || credit || debit || balance');
  });

  it('returns start line and one additional line', () => {
    const statement = new Statement;
    statement.addLine('10/01/2023 || 1000.00 || || 1000.00')
    expect(statement.printStatement()).toBe('date || credit || debit || balance\n10/01/2023 || 1000.00 || || 1000.00');
  });
});