import HashTable from '../hash-table/HashTable'

// 每个节点都对应一个字符，以及存储子节点的hash表
export default class TrieNode {
  constructor(character, isCompleteWord = false) {
    this.character = character;
    this.isCompleteWord = isCompleteWord;
    this.children = new HashTable();
  }

  getChild(character) {
    return this.children.get(character);
  }

  addChild(character, isCompleteWord = false) {
    if (!this.children.has(character)) {
      this.children.set(character, new TrieNode(character, isCompleteWord));
    }
    const childNode = this.children.get(character);
    childNode.isCompleteWord = childNode.isCompleteWord || isCompleteWord;

    return childNode;
  }

  removeChild(character) {
    const childNode = this.getChild(character);
    // 删除节点：
    // 1、节点没有子节点
    // 2、节点为未完成节点
    if (childNode && !childNode.isCompleteWord && !childNode.hasChildren()) {
      this.children.delete(character);
    }
    return this;
  }

  // 节点是否有某个子节点
  hasChild(character) {
    return this.children.has(character);
  }


  // 节点子否有子节点
  hasChildren() {
    return this.children.getKeys().length != 0;
  }

  suggestChildren() {
    return [...this.children.getKeys()];
  }

    /**
   * @return {string}
   */
  toString() {
    let childrenAsString = this.suggestChildren().toString();
    childrenAsString = childrenAsString ? `:${childrenAsString}` : '';
    const isCompleteString = this.isCompleteWord ? '*' : '';

    return `${this.character}${isCompleteString}${childrenAsString}`;
  }

  


} 
