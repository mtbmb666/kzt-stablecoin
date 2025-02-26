import Blockchain from './Blockchain'
import Transaction from './Transaction'
import pkg from 'elliptic'
import 'dotenv/config'

const PRIVATE_KEY = process.env.PRIVATE_KEY!
const PUBLIC_KEY = process.env.PUBLIC_KEY!

const { ec } = pkg
const E = new ec('secp256k1')
const myKey = E.keyFromPrivate(PRIVATE_KEY)


const tx1 = new Transaction(PUBLIC_KEY, 'puk1', 10)
tx1.signTransaction(myKey)

const KZTtChain = new Blockchain()

KZTtChain.addTransaction(tx1)


console.log('starting the miner')
KZTtChain.minePendingTransactions('reward_owner')

console.log(KZTtChain.getBalanceOf(PUBLIC_KEY))
