import pkg from "crypto-js"
import Transaction from './Transaction'
const { SHA256 } = pkg

class Block {
	timestamp: number
	transactions: Transaction[]
	previousHash: string
	hash: string
	nonce: number

	constructor(
		timestamp: number,
		transactions: Transaction[],
		previousHash = ''
	) {
		this.timestamp = timestamp
		this.transactions = transactions
		this.previousHash = previousHash
		this.hash = this.calculateHash()
		this.nonce = 0
	}

	calculateHash(): string {
		const hash = SHA256(
			this.previousHash +
			this.timestamp +
			JSON.stringify(this.transactions) +
			this.nonce
		)
		return hash.toString()
	}

	mineBlock(difficulty: number) {
		while (
			this.hash.substring(0, difficulty) !== Array(difficulty + 1).join('0')
		) {
			this.nonce++
			this.hash = this.calculateHash()
		}
		console.log("Block mined", this.hash)
	}

	hasValidTransaction() {
		for (const tx of this.transactions) {
			if (!tx.isValid()) return false
		}
		
		return true
	}
}

export default Block