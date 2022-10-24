class MoveMoney {
  constructor(account) {
    this.account = account;
  }

  deposit(amount) {
    this.account.updateBalance(amount);
    // need to get date here
    // need to do statement.addLine
  };

  withdraw(amount) {
    this.account.updateBalance(- amount);
    // need to get date here
    // need to do statement.addLine
  }
};

module.exports = MoveMoney;