class Transactions {
  constructor(account, statement) {
    this.account = account;
    this.statement = statement;
  }

  getDate() {
    const date = new Date;
    return `${date.getUTCDate()}/${date.getUTCMonth() + 1}/${date.getUTCFullYear()}`;
  };

  deposit(amount, dateString = this.getDate()) {
    this.account.updateBalance(amount);
    this.statement.addLine(`${dateString} || ${amount}.00 || || ${this.account.getBalance()}.00`);
  };

  withdraw(amount, dateString = this.getDate()) {
    this.account.updateBalance(- amount);
    this.statement.addLine(`${dateString} || || ${amount}.00 || ${this.account.getBalance()}.00`)
  }
};

module.exports = Transactions;