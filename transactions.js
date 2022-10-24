class Transactions {
  constructor(account, statement) {
    this.account = account;
    this.statement = statement;
  }

  getDate() {
    const date = new Date;
    return `${date.getUTCDate()}/${date.getUTCMonth() + 1}/${date.getUTCFullYear()}`;
  }

  checkArgument(argument) {
    // checking for input to be positive number, above zero and not a float
    if (typeof argument != 'number' || argument <= 0 || !(argument % 1 == 0)) {
      throw 'Input needs to be a positive integer';
    }
  }

  deposit(amount, dateString = this.getDate()) {
    this.checkArgument(amount);
    this.account.updateBalance(amount);
    this.statement.addLine(`${dateString} || ${amount}.00 || || ${this.account.getBalance()}.00`);
  }

  withdraw(amount, dateString = this.getDate()) {
    this.checkArgument(amount);
    this.account.updateBalance(- amount);
    this.statement.addLine(`${dateString} || || ${amount}.00 || ${this.account.getBalance()}.00`)
  }
}

module.exports = Transactions;