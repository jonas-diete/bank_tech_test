class Account {
  constructor() {
    this.balance = 0;
  }

  getBalance() {
    return this.balance;
  }

  updateBalance(amount) {
    this.balance += amount;
  }
}

module.exports = Account;