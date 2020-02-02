import HashTable from '../hash-table/HashTable';

export default class BinaryTreeNode {

  constructor(value = null) {
    this.left = null;
    this.right = null;
    this.parent = null;
    this.value = value;

    // 存储一些元信息
    this.meta = new HashTable();
  }


  get leftHeight() {
    if (!this.left) {
      return 0;
    }
    return this.left.height + 1;
  }

   /**
   * @return {number}
   */
  get rightHeight() {
    if (!this.right) {
      return 0;
    }
    return this.right.height + 1;
  }

  get height() {
    return Math.max(this.leftHeight, this.rightHeight)
  }

  get balanceFactor() {
    return this.leftHeight - this.rightHeight;
  }

  // 获取父节点的兄弟节点
  get uncle() {
    if (!this.parent) {
      return undefined;
    }

    if (!this.parent.parent) {
      return undefined;
    }

    if (!this.parent.parent.left || !this.parent.parent.right) {
      return undefined;
    }

    
  }

}

