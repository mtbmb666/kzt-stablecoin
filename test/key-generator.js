import { ec } from 'elliptic'
const E = new ec('secp256k1')
const key = E.genKeyPair()

const publicKey = key.getPublic('hex')
const privateKey = key.getPrivate('hex')

console.log(publicKey)
console.log(privateKey)