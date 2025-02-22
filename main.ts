import Blockchain from './Blockchain'
import Block from './Block'

const KZTtChain = new Blockchain()

KZTtChain.addBlock(new Block('17-02-2025:23-30', { amount: 21_000_000 }))

console.log(JSON.stringify(KZTtChain, ))
