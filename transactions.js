class Transactions {
  constructor(account, statement) {
    this.account = account;
    this.statement = statement;
  }

  deposit(amount, dateString = '') {
    this.account.updateBalance(amount);

    // getting date and formating it to DD/MM/YYYY
    if (dateString === '') {
      const date = new Date;
      dateString = `${date.getUTCDate()}/${date.getUTCMonth() + 1}/${date.getUTCFullYear()}`
    }
    
    this.statement.addLine(`${dateString} || ${amount}.00 || || ${this.account.getBalance()}.00`)
  };

  withdraw(amount, dateString = '') {
    this.account.updateBalance(- amount);

    // getting date and formating it to DD/MM/YYYY
    if (dateString === '') {
      const date = new Date;
      dateString = `${date.getUTCDate()}/${date.getUTCMonth() + 1}/${date.getUTCFullYear()}`
    }

    this.statement.addLine(`${dateString} || || ${amount}.00 || ${this.account.getBalance()}.00`)
  }
};

module.exports = Transactions;