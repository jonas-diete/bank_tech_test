class TransactionMaker {
  constructor(account) {
    this.account = account;
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

  deposit(amount) {
    this.checkArgument(amount);
    this.account.addTransaction(this.getDate(), amount);
  }

  withdraw(amount) {
    this.checkArgument(amount);
    this.account.addTransaction(this.getDate(), - amount);
  }
}

module.exports = TransactionMaker;