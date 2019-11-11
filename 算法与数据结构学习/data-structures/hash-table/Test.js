import HashTable from './HashTable';

let hashTable = new HashTable();

hashTable.set('a', 'aaaaaa')
hashTable.set('b', 'bbbbbb')
hashTable.set('c', 'cccccc')
hashTable.set('d', 'dddddd')

hashTable.get('c')
console.log(hashTable.getKeys())
console.log(hashTable.has);

