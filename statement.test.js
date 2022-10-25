const Statement = require('./statement');

describe('Statement', () => {
  it('returns the start line without any transactions', () => {
    const statement = new Statement;
    expect(statement.printStatement()).toBe('date || credit || debit || balance');
  });

  it('returns start line and one additional line', () => {
    const statement = new Statement;
    statement.addTransaction('10/01/2023', 1000, 1000);
    expect(statement.printStatement()).toBe('date || credit || debit || balance\n10/01/2023 || 1000.00 || || 1000.00');
  });

  it('returns start line and more lines in reverse chronological order', () => {
    const statement = new Statement;
    statement.addTransaction('10/01/2023', 1000, 1000);
    statement.addTransaction('13/01/2023', 2000, 3000);
    statement.addTransaction('14/01/2023', -500, 2500);
    expect(statement.printStatement()).toBe('date || credit || debit || balance\n14/01/2023 || || 500.00 || 2500.00\n13/01/2023 || 2000.00 || || 3000.00\n10/01/2023 || 1000.00 || || 1000.00');
  });
});