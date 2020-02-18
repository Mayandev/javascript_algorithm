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

    if (this.parent === this.parent.parent.left) {
      return this.parent.parent.right;
    }

    return this.parent.parent.left;
  }

  setValue(value) {
    this.value = value;
    return this;
  }

  /**
   * 设置左节点
   * @param {*} node 
   */
  setLeft(node) {
    if (this.left) {
      this.left.parent = null;
    }

    this.left = node;

    if (this.left) {
      this.left.parent = this;
    }

    return this;
  }

  setRight(node) {
    if (this.right) {
      this.right.parent = null;
    }

    this.right = node;

    if (this.right) {
      this.right.parent = this;
    }
    return this;
  }

  /**
   * 删除子节点
   * @param {*} nodeToRemove 
   */
  removeChild(nodeToRemove) {
    if (this.left && (this.left == nodeToRemove)) {
      this.left = null;
      return true;
    }

    if (this.right && (this.right == nodeToRemove)) {
      this.right = null;
      return true;
    }

    return false;
  }

  replaceChild(nodeToReplace, replacementNode) {
    if (!nodeToReplace || !replacementNode) {
      return false;
    }

    if (this.left && this.left == nodeToReplace) {
      this.left = replacementNode;
      return true;
    }

    if (this.right && this.right == nodeToReplace) {
      this.right = replacementNode;
      return true;
    }
    return false;
  }

  static copyNode(sourceNode, targetNode) {
    targetNode.setValue(sourceNode.value);
    targetNode.setLeft(sourceNode.left);
    targetNode.setRight(sourceNode.right);
  }

  traverseInOrder() {
    let traverse = [];

    // 如果左子树还未遍历完
    if (this.left) {
      traverse = traverse.concat(this.left.traverseInOrder())
    }

    // 新增进路径
    traverse.push(this.value);

    if (this.right) {
      traverse = traverse.concat(this.right.traverseInOrder())
    }
    return traverse;
  }

  /**
   * @return {string}
   */
  toString() {
    return this.traverseInOrder().toString();
  }

}

