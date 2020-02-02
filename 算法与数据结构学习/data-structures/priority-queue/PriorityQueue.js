import MinHeap from '../heap/MinHeap';

export default class PriorityQueue extends MinHeap {
  constructor() {
    // 先调用 MinHeap 的构造方法
    super();
    this.priorities = new Map();
  }

  /**
   * 添加元素
   * @param {*} item 
   * @param {*} priority 
   */
  add(item, priority = 0) {
    this.priorities.set(item, priority);
    super.add(item);
    return this;
  }

  remove(item) {
    super.remove(item);
    this.priorities.delete(item);

    return this;
  }

  changePriority(item, priority) {
    this.remove(item);
    this.add(item, priority);
    return this;
  }

  findByValue(item) {
    return this.find(item);
  }

  hasValue(item) {
    return this.findByValue(item).length > 0;
  }

  /**
   * 比较优先级
   */
  comparePriority(a, b) {
    if (this.priorities.get(a) === this.priorities.get(b)) {
      return 0;
    }
    return this.priorities.get(a) < this.priorities.get(b) ? -1 : 1;
  }

  /**
   * 比较两个值的大小
   */
  compareValue(a, b) {
    if (a === b) {
      return 0;
    }
    return a < b ? -1 : 1;
  }
}