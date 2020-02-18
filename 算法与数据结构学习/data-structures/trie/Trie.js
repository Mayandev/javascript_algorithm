import TrieNode from './TrieNode';

const HEAD_CHARACTER = "*";

export default class Trie {
  constructor() {
    this.head = new TrieNode(HEAD_CHARACTER);
  }

  /**
   * 添加单词
   */
  addWord(word) {
    const characters = Array.from(word);
    let currentNode = this.head;

    for (let charIndex = 0; charIndex < characters.length; charIndex++) {
      const isCommplete = charIndex === characters.length - 1;
      currentNode = currentNode.addChild(characters[charIndex], isCommplete)
    }

    return this;
  }

  deleteWord(word) {
    // 定义一个函数表达式，递归删除
    const depthFirstDelete = (currentNode, charIndex = 0) => {
      if (charIndex >= word.length) {
        return;
      }
      const character = word[charIndex];
      const nextNode = currentNode.getChild(character);
      if (nextNode == null) {
        return;
      }
      depthFirstDelete(nextNode, charIndex + 1);
      if (charIndex === (word.length - 1)) {
        nextNode.isCompleteWord = false;
      }
      currentNode.removeChild(character);
    }

    depthFirstDelete(this.head);
    return this;
  }

  suggestNextCharacters(word) {
    const lastCharacter = this.getLastCharacterNode(word);

    if (!lastCharacter) {
      return null;
    }
    return lastCharacter.suggestChildren();
  }

   /**
   * 判断单词是否存在于字典树中
   *
   * @param {string} word
   * @return {boolean}
   */
  doesWordExist(word) {
    const lastCharacter = this.getLastCharacterNode(word);
    return !!lastCharacter && lastCharacter.isCompleteWord;
  }

  getLastCharacterNode(word) {
    const characters = Array.from(word);
    let currentNode = this.head;

    for (let charIndex = 0; charIndex < characters.length; charIndex++) {
      if (!currentNode.hasChild(characters[charIndex])) {
        return null;
      }

      currentNode = currentNode.getChild(characters[charIndex]);
      
    }
    return currentNode;
  }
}