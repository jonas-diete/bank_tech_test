class Account {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  addTransaction(date, amount) {
    this.balance += amount;
    const transaction = {
      date: date,
      amount: amount,
      balance: this.balance
    }
    this.transactions.unshift(transaction);
  }
}

module.exports = Account;