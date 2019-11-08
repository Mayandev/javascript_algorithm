import Stack  from './Stack';

// 测试
const stack = new Stack();
console.log('原队列:', stack.toString());
stack.push(2)
stack.push(3);
stack.push(2);
stack.push(1);
console.log('入栈:', stack.toString());
stack.pop();
stack.pop();
console.log('出栈:', stack.toString());
console.log('栈顶元素:', stack.peek());
console.log('判断栈是否为空:', stack.isEmpty());
