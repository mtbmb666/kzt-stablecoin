import Transaction from './Transaction.js';
import Block from './Block.js';
class Blockchain {
    chain;
    difficulty;
    pendingTransactions;
    miningReward;
    constructor() {
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 2;
        this.pendingTransactions = [];
        this.miningReward = 100;
    }
    createGenesisBlock() {
        return new Block(Date.now(), [], "FIRSHHASH");
    }
    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }
    // addBlock(newBlock: Block) {
    // 	newBlock.previousHash = this.getLatestBlock().hash
    // 	// newBlock.hash = newBlock.calculateHash()
    // 	newBlock.mineBlock(this.difficulty)
    // 	this.chain.push(newBlock)
    // }
    minePendingTransactions(miningRewardAddress) {
        let block = new Block(Date.now(), this.pendingTransactions);
        block.mineBlock(this.difficulty);
        console.log('Block successfully mined');
        this.chain.push(block);
        this.pendingTransactions = [
            new Transaction('MININGREWARD', miningRewardAddress, this.miningReward)
        ];
    }
    createTransaction(transaction) {
        this.pendingTransactions.push(transaction);
    }
    getBalanceOf(address) {
        let balance = 0;
        for (const block of this.chain) {
            for (const t of block.transactions) {
                if (t.fromAddress === address) {
                    balance -= t.amount;
                }
                if (t.toAddress === address) {
                    balance += t.amount;
                }
            }
        }
        return balance;
    }
    isChainValid() {
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];
            if (currentBlock.hash !== currentBlock.calculateHash()) {
                return false;
            }
            if (currentBlock.previousHash !== previousBlock.hash) {
                return false;
            }
        }
        return true;
    }
}
export default Blockchain;
