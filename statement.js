class Statement {
  constructor() {
    this.statementLines = [];
  }

  addTransaction(date, amount, balance) {
    if (amount >= 0) {
      // Deposit
      this.statementLines.unshift(`${date} || ${amount}.00 || || ${balance}.00`);
    } else {
      // Withdrawal
      this.statementLines.unshift(`${date} || || ${(amount *= -1)}.00 || ${balance}.00`);
    }
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