import BinarySearchTree from '../binary-search-tree/BinarySearchTree';

const RED_BLACK_TREE_COLORS = {
  red: 'red',
  black: 'black',
};

const COLOR_PROP_NAME = 'color';

export default class RedBlackTree extends BinarySearchTree {


  insert(value) {
    const insertedNode = super.insert(value);

    // 如果插入的是根节点，设为黑色，其他节点插入都设为红色
    if (insertedNode == this.root) {
      this.makeNodeBlack(insertedNode);
    } else {
      this.makeNodeRed(insertedNode);
    }
  }

  balance(node) {
    // 如果插入的是根节点，不用平衡
    if (node == this.root) {
      return;
    }

    // 如果父节点是黑色，符合条件，返回
    if (this.isNodeBlack(node.parent)) {
      return;
    }

    const grandParent = node.parent.parent;

    // 如果叔叔节点为红色，对父节点和叔叔节点重新染色
    if (node.uncle && this.isNodeRed(node.uncle)) {
      this.makeNodeBlack(node.uncle);
      this.makeNodeBlack(node.parent);

      // 如果祖父节点不是根节点
      if (grandParent != this.root) {
        // 将祖父节点染成红色
        this.makeNodeRed(parent);
      } else {
        return;
      }

      // 递归，使其成为满足规则的红黑树
      this.balance(grandParent);
    } else if (!node.uncle || this.isNodeBlack(node.uncle)) {
      // 如果叔叔节点为黑色，需要旋转节点
      if (grandParent) {
        let newGrandParent;

        if (grandParent.left == node.parent) {
          // 如果是左孩子
          if (node == node.parent.left) {
            newGrandParent = this.leftLeftRotation(grandParent);
          } else {
            newGrandParent = this.leftRightRotation(grandParent);
          }
        } else {
          if (node == node.parent.right) {
            // Right-right case.
            newGrandParent = this.rightRightRotation(grandParent);
          } else {
            // Right-left case.
            newGrandParent = this.rightLeftRotation(grandParent);
          }
        }
      }
    }

    
  }


  /**
   * Left Left Case (p is left child of g and x is left child of p)
   * @param {BinarySearchTreeNode|BinaryTreeNode} grandParentNode
   * @return {BinarySearchTreeNode}
   */
  leftLeftRotation(grandParentNode) {
    // Memorize the parent of grand-parent node.
    const grandGrandParent = grandParentNode.parent;

    // Check what type of sibling is our grandParentNode is (left or right).
    let grandParentNodeIsLeft;
    if (grandGrandParent) {
      grandParentNodeIsLeft = this.nodeComparator.equal(grandGrandParent.left, grandParentNode);
    }

    // Memorize grandParentNode's left node.
    const parentNode = grandParentNode.left;

    // Memorize parent's right node since we're going to transfer it to
    // grand parent's left subtree.
    const parentRightNode = parentNode.right;

    // Make grandParentNode to be right child of parentNode.
    parentNode.setRight(grandParentNode);

    // Move child's right subtree to grandParentNode's left subtree.
    grandParentNode.setLeft(parentRightNode);

    // Put parentNode node in place of grandParentNode.
    if (grandGrandParent) {
      if (grandParentNodeIsLeft) {
        grandGrandParent.setLeft(parentNode);
      } else {
        grandGrandParent.setRight(parentNode);
      }
    } else {
      // Make parent node a root
      parentNode.parent = null;
    }

    // Swap colors of granParent and parent nodes.
    this.swapNodeColors(parentNode, grandParentNode);

    // Return new root node.
    return parentNode;
  }

  /**
   * Left Right Case (p is left child of g and x is right child of p)
   * @param {BinarySearchTreeNode|BinaryTreeNode} grandParentNode
   * @return {BinarySearchTreeNode}
   */
  leftRightRotation(grandParentNode) {
    // Memorize left and left-right nodes.
    const parentNode = grandParentNode.left;
    const childNode = parentNode.right;

    // We need to memorize child left node to prevent losing
    // left child subtree. Later it will be re-assigned to
    // parent's right sub-tree.
    const childLeftNode = childNode.left;

    // Make parentNode to be a left child of childNode node.
    childNode.setLeft(parentNode);

    // Move child's left subtree to parent's right subtree.
    parentNode.setRight(childLeftNode);

    // Put left-right node in place of left node.
    grandParentNode.setLeft(childNode);

    // Now we're ready to do left-left rotation.
    return this.leftLeftRotation(grandParentNode);
  }

  /**
   * Right Right Case (p is right child of g and x is right child of p)
   * @param {BinarySearchTreeNode|BinaryTreeNode} grandParentNode
   * @return {BinarySearchTreeNode}
   */
  rightRightRotation(grandParentNode) {
    // Memorize the parent of grand-parent node.
    const grandGrandParent = grandParentNode.parent;

    // Check what type of sibling is our grandParentNode is (left or right).
    let grandParentNodeIsLeft;
    if (grandGrandParent) {
      grandParentNodeIsLeft = this.nodeComparator.equal(grandGrandParent.left, grandParentNode);
    }

    // Memorize grandParentNode's right node.
    const parentNode = grandParentNode.right;

    // Memorize parent's left node since we're going to transfer it to
    // grand parent's right subtree.
    const parentLeftNode = parentNode.left;

    // Make grandParentNode to be left child of parentNode.
    parentNode.setLeft(grandParentNode);

    // Transfer all left nodes from parent to right sub-tree of grandparent.
    grandParentNode.setRight(parentLeftNode);

    // Put parentNode node in place of grandParentNode.
    if (grandGrandParent) {
      if (grandParentNodeIsLeft) {
        grandGrandParent.setLeft(parentNode);
      } else {
        grandGrandParent.setRight(parentNode);
      }
    } else {
      // Make parent node a root.
      parentNode.parent = null;
    }

    // Swap colors of granParent and parent nodes.
    this.swapNodeColors(parentNode, grandParentNode);

    // Return new root node.
    return parentNode;
  }

  /**
   * Right Left Case (p is right child of g and x is left child of p)
   * @param {BinarySearchTreeNode|BinaryTreeNode} grandParentNode
   * @return {BinarySearchTreeNode}
   */
  rightLeftRotation(grandParentNode) {
    // Memorize right and right-left nodes.
    const parentNode = grandParentNode.right;
    const childNode = parentNode.left;

    // We need to memorize child right node to prevent losing
    // right child subtree. Later it will be re-assigned to
    // parent's left sub-tree.
    const childRightNode = childNode.right;

    // Make parentNode to be a right child of childNode.
    childNode.setRight(parentNode);

    // Move child's right subtree to parent's left subtree.
    parentNode.setLeft(childRightNode);

    // Put childNode node in place of parentNode.
    grandParentNode.setRight(childNode);

    // Now we're ready to do right-right rotation.
    return this.rightRightRotation(grandParentNode);
  }

  /**
   * 设置节点颜色为红色
   * @param {*} node 
   */
  makeNodeRed(node) {
    node.meta.set(COLOR_PROP_NAME, RED_BLACK_TREE_COLORS.red);
    return node;
  }

  /**
   * 设置节点为黑色
   * @param {*} node 
   */
  makeNodeBlack(node) {
    node.meta.set(COLOR_PROP_NAME, RED_BLACK_TREE_COLORS.black);
  }

  isNodeRed(node) {
    return node.meta.get(COLOR_PROP_NAME) === RED_BLACK_TREE_COLORS.red;
  }

  isNodeBlack(node) {
    return node.meta.get(COLOR_PROP_NAME) === RED_BLACK_TREE_COLORS.black;
  }

  /**
   * @param {BinarySearchTreeNode|BinaryTreeNode} node
   * @return {boolean}
   */
  isNodeColored(node) {
    return this.isNodeRed(node) || this.isNodeBlack(node);
  }

  /**
   * @param {BinarySearchTreeNode|BinaryTreeNode} firstNode
   * @param {BinarySearchTreeNode|BinaryTreeNode} secondNode
   */
  swapNodeColors(firstNode, secondNode) {
    const firstColor = firstNode.meta.get(COLOR_PROP_NAME);
    const secondColor = secondNode.meta.get(COLOR_PROP_NAME);

    firstNode.meta.set(COLOR_PROP_NAME, secondColor);
    secondNode.meta.set(COLOR_PROP_NAME, firstColor);
  }

}