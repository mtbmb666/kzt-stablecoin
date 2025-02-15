import pkg from "crypto-js";
const { SHA256 } = pkg;
class Block {
    index;
    timestamp;
    data;
    previousHash;
    hash;
    constructor(index, timestamp, data, previousHash = '') {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    }
    calculateHash() {
        const hash = SHA256(this.index +
            this.previousHash +
            this.timestamp +
            JSON.stringify(this.data));
        console.log("hash:", hash);
        console.log("hash str:", hash.toString());
        return hash.toString();
    }
}
export default Block;
