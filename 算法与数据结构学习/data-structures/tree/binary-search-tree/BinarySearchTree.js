import BinarySearchTreeNode from './BinarySearchTreeNode';

export default class BinarySearchTree {
  constructor() {
    this.root = new BinarySearchTreeNode(null);
  }

  insert(value) {
    return this.root.insert(value);
  }


  /**
   * @param {*} value
   * @return {boolean}
   */
  contains(value) {
    return this.root.contains(value);
  }

  /**
   * @param {*} value
   * @return {boolean}
   */
  remove(value) {
    return this.root.remove(value);
  }

  /**
   * @return {string}
   */
  toString() {
    return this.root.toString();
  }
}