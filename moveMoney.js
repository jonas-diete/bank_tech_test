class MoveMoney {
  constructor(account) {
    this.account = account;
  }

  deposit(amount) {
    this.account.updateBalance(amount);
  };

  withdraw(amount) {
    this.account.updateBalance(- amount);
  }
};

module.exports = MoveMoney;