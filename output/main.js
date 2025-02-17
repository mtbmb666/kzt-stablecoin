import Blockchain from './Blockchain.js';
import Block from './Block.js';
const KZTtChain = new Blockchain();
KZTtChain.addBlock(new Block(1, '17-02-2025:23-30', { amount: 21_000_000 }));
// console.log(JSON.stringify(KZTtChain))
console.log('Is chain valid? ' + KZTtChain.isChainValid());
