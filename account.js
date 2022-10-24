class Account {
  constructor() {
    this.balance = 0;
  }

  getBalance() {
    // if this.balance is a float, limit it to 2 decimal digits and convert back to a number
    return Number(this.balance.toFixed(2));
  }

  updateBalance(amount) {
    this.balance += amount;
  }
};

module.exports = Account;