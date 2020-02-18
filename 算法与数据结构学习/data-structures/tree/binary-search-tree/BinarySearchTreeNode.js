import BinaryTreeNode from '../BinaryTreeNode';

export default class BinarySearchTreeNode extends BinaryTreeNode {
  constructor(value = null) {
    super(value);
  }

  // 插入
  insert(value) {
    if (this.value == null) {
      this.value = value;
      return this;
    }

    if (value < this.value) {
      if (this.left) {
        return this.left.insert(value);
      }
      const newNode = new BinarySearchTreeNode(value);
      this.setLeft(newNode);
      return newNode;
    }

    if (value > this.value) {
      if (this.right) {
        return this.right.insert(value);
      }
      const newNode = new BinarySearchTreeNode(value);
      this.setRight(newNode);
      return newNode;
    }
    return this;
  }

  find(value) {
    if (value == this.value) {
      return this;
    }

    if ((value < this.value) && this.left) {

      return this.left.find(value);
    }

    if ((value > this.value) && this.right) {
      return this.right.find(value);
    }

    return null;
  }

  contains(value) {
    return !!this.find(value);
  }

  /**
   * 删除节点
   * 1、如果被删除节点是叶子节点（直接删除）
   * 2、如果被删除节点有左右孩子（找到右子树的最小值，替换）
   * 3、如果被删除节点只有一个孩子（让父节点指向被删除节点的孩子节点）
   */
  remove(value) {
    const nodeToRemove = this.find(value);

    if (!nodeToRemove) {
      throw new Error('Item not found in the tree');
    }
    const { parent } = nodeToRemove;

    if (!nodeToRemove.left && !nodeToRemove.right) {
      // 如果删除的是叶子节点
      if (parent) {
        parent.removeChild(nodeToRemove);
      } else {
        // 如果没有父节点，直接插除数据
        nodeToRemove.setValue(undefined);
      }
    } else if (nodeToRemove.left && nodeToRemove.right) {
      // 被删除的节点有左右孩子
      // 找到右子树的最小值，将其替换当前被删除节点的位置
      // nextBiggerNode 一定是叶子节点
      const nextBiggerNode = nodeToRemove.right.findMin();
      if (nextBiggerNode != nodeToRemove.right) {
        // 如果右子树的最小值节点比较深，需要继续递归一次删除
        // 这个节点一定是叶子节点
        this.remove(nextBiggerNode.value);
        nodeToRemove.setValue(nextBiggerNode.value);
      } else {
        // 如果右子树最小值的节点就是右孩子
        // 将值替换，指针指向right的right
        nodeToRemove.setValue(nodeToRemove.right.value);
        nodeToRemove.setRight(nodeToRemove.right.right);
      }
    } else {
      // 被删除节点只有一个孩子
      const childNode = nodeToRemove.left || nodeToRemove.right;
      if (parent) {
        parent.replaceChild(nodeToRemove, childNode);
      } else {
        BinaryTreeNode.copyNode(childNode, nodeToRemove);
      }
    }

    nodeToRemove.parent = null;

    return true;


  }

  findMin() {
    if (!this.left) {
      return this;
    }

    return this.left.findMin()
  }
}