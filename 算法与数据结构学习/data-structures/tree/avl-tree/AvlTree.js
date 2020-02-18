import BinarySearchTree from '../binary-search-tree/BinarySearchTree';

export default class AvlTree extends BinarySearchTree {


  insert(value) {
    super.insert(value);

    let currentNode = this.root.find(value);
    while (currentNode) {
      this.balance(currentNode);
      currentNode = currentNode.parent;
    }
  }

  remove(value) {
    // Do standard BST removal.
    super.remove(value);

    // Balance the tree starting from the root node.
    this.balance(this.root);
  }

  /**
   * 旋转平衡
   * @param {} node 
   */
  balance(node) {
    if (node.balanceFactor > 1) {
      // Left rotation.
      if (node.left.balanceFactor > 0) {
        // Left-Left rotation
        this.rotateLeftLeft(node);
      } else if (node.left.balanceFactor < 0) {
        // Left-Right rotation.
        this.rotateLeftRight(node);
      }
    } else if (node.balanceFactor < -1) {
      // Right rotation.
      if (node.right.balanceFactor < 0) {
        // Right-Right rotation
        this.rotateRightRight(node);
      } else if (node.right.balanceFactor > 0) {
        // Right-Left rotation.
        this.rotateRightLeft(node);
      }
    }
  }

  /**
   * 对rootNode的左孩子的左子树进行插入
   * @param {*} rootNode 
   */
  rotateLeftLeft(rootNode) {
    // 将左节点分离
    const leftNode = rootNode.left;
    rootNode.setLeft(null);

    // 让左节点成为rootNode的父节点
    if (rootNode.parent) {
      rootNode.parent.setLeft(leftNode);
    } else if (rootNode === this.root) {
      this.root = leftNode;
    }

    // 如果 leftNode 有右孩子，需要分离
    if (leftNode.right) {
      rootNode.setLeft(leftNode.right);
    }
    leftNode.setRight(rootNode);
  }

  rotateLeftRight(rootNode) {
    const leftNode = rootNode.left;
    rootNode.setLeft(null);

    const leftRightNode = leftNode.right;
    leftNode.setRight(null);

    if (leftRightNode.left) {
      leftNode.setRight(leftRightNode.left);
      leftRightNode.setLeft(null);
    }

    rootNode.setLeft(leftRightNode);
    leftRightNode.setLeft(leftNode);

    this.rotateLeftLeft(rootNode);
  }

  rotateRightRight(rootNode) {
    const rightNode = rootNode.right;
    rootNode.setRight(null);

    if (rootNode.parent) {
      rootNode.parent.setRight(rightNode);
    } else if (rootNode === this.root) {
      this.root = rightNode;
    }

    if (rightNode.left) {
      rootNode.setRight(rightNode.left);
    }
    rightNode.setLeft(rootNode);
  }

  rotateRightLeft(rootNode) {
    const rightNode = rootNode.right;
    rootNode.setRight(null);

    const rightLeftNode = rightNode.left;
    rightNode.setLeft(null);

    if (rightLeftNode.right) {
      rightNode.setLeft(rightLeftNode.right);
      rightLeftNode.setRight(null);
    }

    rootNode.setRight(rightLeftNode);

    rightLeftNode.setRight(rightNode);

    // 在做一次RR旋转
    this.rotateRightRight(rootNode);
  }

}