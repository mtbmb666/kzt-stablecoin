import Transaction from './Transaction'
import Block from './Block'

class Blockchain {
	chain: Block[]
	difficulty: number
	pendingTransactions: Transaction[]
	miningReward: number

	constructor() {
		this.chain = [this.createGenesisBlock()]
		this.difficulty = 2
		this.pendingTransactions = []
		this.miningReward = 100
	}

	private createGenesisBlock(): Block {
		return new Block(Date.now(), [], "FIRSHHASH")
	}

	getLatestBlock() {
		return this.chain[this.chain.length - 1]
	}

	minePendingTransactions(miningRewardAddress: string) {
		let block = new Block(Date.now(), this.pendingTransactions, this.getLatestBlock().hash)
		block.mineBlock(this.difficulty)
		console.log('Block successfully mined')
		this.chain.push(block)

		this.pendingTransactions = [
			new Transaction('null', miningRewardAddress, this.miningReward)
		]
	}

	addTransaction(transaction: Transaction) {
		if (!transaction.fromAddress || !transaction.toAddress) {
			throw new Error('Transaction must include from and to address')
		}
		if (!transaction.isValid()) {
			throw new Error('Cannot add invalid transaction to chain')
		}
		this.pendingTransactions.push(transaction)
	}

	getBalanceOf(address: string) {
		let balance = 0
		for (const block of this.chain) {
			for (const t of block.transactions) {
				if (t.fromAddress === address) {
					balance -= t.amount
				}
				if (t.toAddress === address) {
					balance += t.amount
				}
			}
		}

		return balance
	}

	isChainValid() {
		for (let i = 1; i < this.chain.length; i++) {
			const currentBlock = this.chain[i]
			const previousBlock = this.chain[i - 1]

			if (!currentBlock.hasValidTransaction()) {
				return false
			}
			if (currentBlock.hash !== currentBlock.calculateHash()) {
				return false
			}
			if (currentBlock.previousHash !== previousBlock.hash) {
				return false
			}
		}

		return true
	}
}

export default Blockchain