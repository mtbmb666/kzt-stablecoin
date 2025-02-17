import Block from './Block'

class Blockchain {
	chain: Block[]

	constructor() {
		this.chain = [this.createGenesisBlock()]
	}

	createGenesisBlock(): Block {
		return new Block(0, "2025-02-15", "First Block On Network", "0")
	}

	getLatestBlock() {
		return this.chain[this.chain.length - 1]
	}

	addBlock(newBlock: Block) {
		newBlock.previousHash = this.getLatestBlock().hash
		newBlock.hash = newBlock.calculateHash()
		this.chain.push(newBlock)
	}
}

export default Blockchain