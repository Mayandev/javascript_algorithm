import HashTable from './HashTable';

let hashTable = new HashTable();

hashTable.set('a', 'sky-old');
hashTable.set('a', 'sky');
hashTable.set('b', 'sea');
hashTable.set('c', 'earth');
hashTable.set('d', 'ocean');

hashTable.buckets[1].toString();
console.log(hashTable.getKeys())
console.log(hashTable.has);

