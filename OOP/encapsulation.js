console.log("Hello OOP")

class BankAccount {
    constructor(accountNumber, balance) {
        this.accountNumber =accountNumber;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
        } else {
            console.log('Insufficient balance!')
        }
    }

    getAccountInfo() {
        return `Account Number: ${this.accountNumber}, Balance: ${this.balance}`;
       //console.log('Information loaded!')
    }

}

const myAccount = new BankAccount('123456789',1000);
console.log(myAccount.getAccountInfo());
myAccount.deposit(5000);
console.log(myAccount.getAccountInfo());
myAccount.withdraw(6000);
console.log(myAccount.getAccountInfo());