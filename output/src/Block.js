import pkg from "crypto-js";
const { SHA256 } = pkg;
class Block {
    timestamp;
    transactions;
    previousHash;
    hash;
    nonce;
    constructor(timestamp, transactions, previousHash = '') {
        this.timestamp = timestamp;
        this.transactions = transactions;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
        this.nonce = 0;
    }
    calculateHash() {
        const hash = SHA256(this.previousHash +
            this.timestamp +
            JSON.stringify(this.transactions) +
            this.nonce);
        return hash.toString();
    }
    mineBlock(difficulty) {
        while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join('0')) {
            this.nonce++;
            this.hash = this.calculateHash();
        }
        console.log("Block mined", this.hash);
    }
}
export default Block;
