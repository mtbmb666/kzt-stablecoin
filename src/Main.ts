import Blockchain from './Blockchain'
import pkg from 'elliptic'
const { ec } = pkg

const E = new ec('secp256k1')
const KZTtChain = new Blockchain()

const myKey = E.keyFromPrivate('dd5b1f8ec04305bfedceef83a2f9d396c836e6f22fe53d4c1e14a25ce8a3e8e2')

console.log(myKey.getPrivate('hex'))
console.log(myKey.getPublic('hex'))