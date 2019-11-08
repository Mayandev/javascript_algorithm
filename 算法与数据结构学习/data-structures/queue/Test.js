import Queue  from './Queue';

// 测试
const queue = new Queue();
console.log('原队列:', queue.toString());
queue.enqueue(4);
queue.enqueue(3);
queue.enqueue(2);
queue.enqueue(1);
console.log('入队列:', queue.toString());
queue.dequeue();
console.log('出队列:', queue.toString());
console.log('队头元素:', queue.peek());
console.log('队列是否为空:', queue.isEmpty());
