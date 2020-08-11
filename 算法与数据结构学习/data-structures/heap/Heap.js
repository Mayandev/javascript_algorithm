export default class Heap {
  constructor(params) {
    // 不能直接通过 new 来创建堆
    if (new.target === Heap) {
      throw new TypeError('Cannot construct Heap instance directly');
    }
    this.heapContainer = [];
  }

  /**
   * 获取左孩子的下标
   */
  getLeftChildIndex(parentIndex) {
    return (2 * parentIndex) + 1;
  }

  /**
   * 获取右孩子的下标
   */
  getRightChildIndex(parentIndex) {
    return (2 * parentIndex) + 2;
  }

  /**
   * 获取父节点下标
   */
  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  /**
   * 判断是否有父节点
   */
  hasParent(childIndex) {
    return this.getParentIndex(childIndex) >= 0;
  }

  /**
   * 判断是否有左节点
   */
  hasLeftChild(parentIndex) {
    return this.getLeftChildIndex(parentIndex) < this.heapContainer.length;
  }

  /**
   * 判断是否有右节点
   */
  hasRightChild(parentIndex) {
    return this.getRightChildIndex(parentIndex) < this.heapContainer.length;
  }

  /**
   * 返回左孩子
   */
  leftChild(parentIndex) {
    return this.heapContainer[this.getLeftChildIndex(parentIndex)];
  }

  /**
   * 返回右孩子
   */
  rightChild(parentIndex) {
    return this.heapContainer[this.getRightChildIndex(parentIndex)];
  }

  /**
   * 返回父节点
   */
  parent(childIndex) {
    return this.heapContainer[this.getParentIndex(childIndex)];
  }

  /**
   * 交换两个节点
   * @param {*} indexOne 
   * @param {*} indexTwo 
   */
  swap(indexOne, indexTwo) {
    const tmp = this.heapContainer[indexTwo];
    this.heapContainer[indexTwo] = this.heapContainer[indexOne];
    this.heapContainer[indexOne] = tmp;
  }

  /**
   * 获取根节点
   * @return {*}
   */
  peek() {
    if (this.heapContainer.length === 0) {
      return null;
    }
    return this.heapContainer[0];
  }

  // 删除根节点
  poll() {
    if (this.heapContainer.length === 0) {
      return null;
    }

    if (this.heapContainer.length === 1) {
      return this.heapContainer.pop();
    }

    const item = this.heapContainer[0];

    this.heapContainer[0] = this.heapContainer.pop();

    // 下移
    this.heapifyDown();
    return item;
  }

  add(item) {
    this.heapContainer.push(item);
    this.heapifyUp();
    return this;
  }

  /**
   * 删除值为 item 的元素
   * @param {*} item 
   */
  remove(item) {
    const numberOfItemsToRemove = this.find(item).length;

    for (let i = 0; i < numberOfItemsToRemove; i++) {
      // 每次循环都要 find 一遍，因为删除一次后所有的下标都有可能改变
      const indexToRemove = this.find(item).pop();

      // 如果删除的是最后一个元素，直接 pop
      if (indexToRemove === (this.heapContainer.length - 1)) {
        this.heapContainer.pop();
      } else {
        // 让最后一个元素到被删除到元素的index 上
        this.heapContainer[indexToRemove] = this.heapContainer.pop();

        // 获取到父元素
        const parentItem = this.parent(indexToRemove);

        // 如果被删除的元素有左孩子，并且被删除的元素（没有父节点或者顺序正确），则向下移动
        if (this.hasLeftChild(indexToRemove)
          && (!parentItem || this.pairIsInCorrectOrder(parentItem, this.heapContainer[indexToRemove]))) {
          this.heapifyDown(indexToRemove)
        } else {
          this.heapifyUp(indexToRemove)
        }
      }
    }
    return this;
  }



  /**
   * @return {boolean}
   */
  isEmpty() {
    return !this.heapContainer.length;
  }

  /**
   * @return {string}
   */
  toString() {
    return this.heapContainer.toString();
  }


  /**
   * 查询值为 item 的元素下标
   * @param {*} item 
   */
  find(item) {
    const foundItemIndices = [];

    for (let itemIndex = 0; itemIndex < this.heapContainer.length; itemIndex += 1) {
      if (item === this.heapContainer[itemIndex]) {
        foundItemIndices.push(itemIndex);
      }
    }
    return foundItemIndices;
  }

  /**
   * 堆化，位置上升
   */
  heapifyUp(customStartIndex) {
    let currentIndex = customStartIndex || this.heapContainer.length - 1;
    // 停止条件
    // 1: 上升到根节点
    // 2: 已排好顺序
    while (this.hasParent(currentIndex)
      && !this.pairIsInCorrectOrder(this.parent(currentIndex), this.heapContainer[currentIndex])) {
      // 交换，向上移动
      this.swap(currentIndex, this.getParentIndex(currentIndex));
      currentIndex = this.getParentIndex(currentIndex);
    }
  }

  heapifyDown(customStartIndex = 0) {
    let currentIndex = customStartIndex;
    let nextIndex = null;

    // 一直下移，直到没有左孩子
    while (this.hasLeftChild(currentIndex)) {
      if (this.hasRightChild(currentIndex)
        && this.pairIsInCorrectOrder(this.rightChild(currentIndex), this.leftChild(currentIndex))) {
        nextIndex = this.getRightChildIndex(currentIndex);
      } else {
        nextIndex = this.getLeftChildIndex(currentIndex);
      }

      if (this.pairIsInCorrectOrder(
        this.heapContainer[currentIndex],
        this.heapContainer[nextIndex]
      )) {
        break;
      }

      this.swap(currentIndex, nextIndex);
      currentIndex = nextIndex;
    }
  }


  /**
   * Checks if pair of heap elements is in correct order.
   * For MinHeap the first element must be always smaller or equal.
   * For MaxHeap the first element must be always bigger or equal.
   *
   * @param {*} firstElement
   * @param {*} secondElement
   * @return {boolean}
   */
  /* istanbul ignore next */
  pairIsInCorrectOrder(firstElement, secondElement) {
    throw new Error(`
      You have to implement heap pair comparision method
      for ${firstElement} and ${secondElement} values.
    `);
  }

}