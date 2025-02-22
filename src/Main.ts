import Blockchain from './Blockchain'
import Transaction from './Transaction'
const KZTtChain = new Blockchain()

KZTtChain.createTransaction(new Transaction('a1', 'a2', 100))
KZTtChain.createTransaction(new Transaction('a2', 'a1', 50))

console.log("starting the mining")
KZTtChain.minePendingTransactions('a3')
console.log('a3 balance', KZTtChain.getBalanceOf('a3'))

console.log('mining anothor one')
KZTtChain.minePendingTransactions('a3')
console.log('a3 balance', KZTtChain.getBalanceOf('a3'))
