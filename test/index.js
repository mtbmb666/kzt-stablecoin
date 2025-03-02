import pkg from 'elliptic'
const { ec } = pkg

const PRIVATE_KEY = process.env.PRIVATE_KEY
const PUBLIC_KEY = process.env.PUBLIC_KEY

const E = new ec('secp256k1')
const key = E.genKeyPair()

const publicKey = key.getPublic('hex')
const privateKey = key.getPrivate('hex')

console.log(publicKey)
console.log(privateKey)