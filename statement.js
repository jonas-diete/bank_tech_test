class Statement {
  constructor() {
    this.statementLines = [];
    this.startLine = 'date || credit || debit || balance';
  }

  addLine(newLine) {
    this.statementLines.push(newLine);
  }

  printStatement() {
    // Add start line at the end, then reverse to get reverse chronological order of transactions
    this.statementLines.push(this.startLine);
    const reversedLines = this.statementLines.reverse();

    // Create one string to return
    const output = reversedLines.join('\n');
    return output;
  }
}

module.exports = Statement;