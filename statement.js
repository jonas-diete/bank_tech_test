class Statement {
  constructor(account) {
    this.account = account;
  }

  createStatementLines(transactions) {
    let statementLines = []
    transactions.forEach((transaction) => {
      if (transaction.amount >= 0) {
      // Deposit
      statementLines.push(`${transaction.date} || ${transaction.amount}.00 || || ${transaction.balance}.00`);
      } else {
      // Withdrawal
      statementLines.push(`${transaction.date} || || ${(transaction.amount *= -1)}.00 || ${transaction.balance}.00`);
      };
    });
    return statementLines;
  }

  printStatement() {
    let statementLines = this.createStatementLines(this.account.transactions);

    statementLines.unshift(['date || credit || debit || balance', ])

    // Create a single string to return
    const statementString = statementLines.join('\n');

    return statementString;
  }
}

module.exports = Statement;