class Statement {
  constructor() {
    this.statementLines = [];
  }

  addLine(newLine) {
    this.statementLines.unshift(newLine);
  }

  printStatement() {
    // Add the headings line
    this.statementLines.unshift('date || credit || debit || balance');

    // Create a single string to return
    const statementString = this.statementLines.join('\n');

    // Delete the headings line again, ready to add more transactions
    this.statementLines.splice(0, 1);

    return statementString;
  }
}

module.exports = Statement;