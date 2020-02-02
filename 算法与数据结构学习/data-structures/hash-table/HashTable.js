import LinkedList from '../linked-list/LinkedList';

//哈希表的大小直接影响到冲突的数量，哈希表的大小越大，冲突就越少。
// 为演示起见，哈希表的大小很小，可以显示如何处理冲突。
const defaultHashTableSize = 32;

export default class HashTable {

  constructor(hashTableSize = defaultHashTableSize) {
    // 创建一定大小的哈希表，并用空链表填充每个存储区。
    this.buckets = Array(hashTableSize).fill(null).map(() => new LinkedList());
    this.keys = {}
  }


  // 哈希函数
  hash(key) {
    // 为简单起见，我们将只使用键的所有字符的字符代码总和计算哈希值。
    // 也可以使用更复杂的方法（例如多项式字符串哈希）来减少碰撞次数：
    // 哈希= charCodeAt（0）* PRIME ^（n-1）+ charCodeAt（1）* PRIME ^（n-2）+ ... + charCodeAt（n-1）
    // 其中charCodeAt（i）是密钥的第i个字符代码，n是密钥的长度，并且
    // PRIME就是任何质数，例如31。
    const hash = Array.from(key).reduce(
      // Array.from 将 string 转换为数组
      (hashAccumulator, keySymbol) => (hashAccumulator + keySymbol.charCodeAt(0)),
      0,
    );

    console.log(hash);
    

    
    // 减少哈希数，使其适合哈希表的大小。
    return hash % this.buckets.length;
  }

  // 插入函数
  set(key, value) {
    const keyHash = this.hash(key);
    this.keys[key] = keyHash;
    const bucketLinkedList = this.buckets[keyHash];
    const node = bucketLinkedList.find({callback: nodeValue => nodeValue.key === key})
    
    if (!node) {
      // 插入新的节点
      bucketLinkedList.append({ key, value });
    } else {
      // Update value of existing node.
      node.value.value = value;
    }
  }

  delete(key) {
    const keyHash = this.hash(key);
    delete this.keys[key];
    const bucketLinkedList = this.buckets[keyHash];
    const node = bucketLinkedList.find({ callback: nodeValue => nodeValue.key === key });

    if (node) {
      return bucketLinkedList.delete(node.value);
    }

    return null;
  }

  get(key) {
    const bucketLinkedList = this.buckets[this.hash(key)];
    const node = bucketLinkedList.find({ callback: nodeValue => nodeValue.key === key });
    
    return node ? node.value.value : undefined;
  }

  has(key) {
    return Object.hasOwnProperty.call(this.keys, key);
  }

    /**
   * @return {string[]}
   */
  getKeys() {
    return Object.keys(this.keys);
  }



}