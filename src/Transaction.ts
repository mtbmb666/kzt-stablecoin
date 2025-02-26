import pkg from "crypto-js"
const { SHA256 } = pkg

class Transaction {
	fromAddress: string
	toAddress: string
	amount: number

	constructor(
		fromAddress: string,
		toAddress: string,
		amount: number
	) {
		this.fromAddress = fromAddress
		this.toAddress = toAddress
		this.amount = amount
	}

	calculateHash() {
		return SHA256(this.fromAddress + this.toAddress + this.amount).toString()
	}
}

export default Transaction
