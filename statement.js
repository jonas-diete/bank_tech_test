class Statement {
  constructor() {
    this.statementLines = ['date || credit || debit || balance'];
  }

  addLine(newLine) {
    this.statementLines.push(newLine);
  }

  printStatement() {
    const output = this.statementLines.join('\n');
    return output;
  }
}

module.exports = Statement;