import LinkedList  from './LinkedList';

// 测试
const nodeArr = [2,1,6,4,5,7,8,5,2];
const list = new LinkedList();
list.fromArray(nodeArr);
console.log('原数组:', list.toString());
// 前插一个节点
list.prepend(2);
console.log('前插一个节点2：', list.toString());
// 尾部插入节点
list.append(5)
console.log('尾部插入节点5：', list.toString());
// 删除节点
list.delete(5)
console.log('删除节点5：', list.toString());
// 删除尾部节点
list.deleteTail();
console.log('删除尾部节点', list.toString());
// 删除头部节点
list.deleteHead();
console.log('删除头部节点', list.toString());
// 逆转链表
list.reverse();
console.log('逆转链表', list.toString());



