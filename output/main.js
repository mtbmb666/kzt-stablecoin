import Block from './Block';
class Blockchain {
    chain;
    constructor() {
        this.chain = [this.createGenesisBlock()];
    }
    createGenesisBlock() {
        return new Block(0, "2025-02-15", { amount: 0 }, "0");
    }
}
const myBlockchain = new Blockchain();
console.log(myBlockchain);
