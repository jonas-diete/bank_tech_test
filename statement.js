class Statement {
  constructor() {
    this.statementLines = ['date || credit || debit || balance'];
  }

  printStatement() {
    const output = this.statementLines.join('\n');
    return output;
  }
}

module.exports = Statement;