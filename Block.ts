import pkg from "crypto-js"
const { SHA256 } = pkg

class Block {
	index: number
	timestamp: string
	data: any
	previousHash: string
	hash: string
	nonce: number

	constructor(
		index: number,
		timestamp: string,
		data: any,
		previousHash = ''
	) {
		this.index = index
		this.timestamp = timestamp
		this.data = data
		this.previousHash = previousHash
		this.hash = this.calculateHash()
		this.nonce = 0
	}

	calculateHash(): string {
		const hash = SHA256(
			this.index +
			this.previousHash +
			this.timestamp +
			JSON.stringify(this.data) +
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
}

export default Block