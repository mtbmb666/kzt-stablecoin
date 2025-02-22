class Transaction {
    fromAddress;
    toAddress;
    amount;
    constructor(fromAddress, toAddress, amount) {
        this.fromAddress = fromAddress;
        this.toAddress = toAddress;
        this.amount = amount;
    }
}
export default Transaction;
