import BinarySearchTree from '../BinarySearchTree';

describe('BinarySearchTree', () => {
  it('should create binary search tree', () => {
    const bst = new BinarySearchTree();

    expect(bst).toBeDefined();
    expect(bst.root).toBeDefined();
    expect(bst.root.value).toBeNull();
    expect(bst.root.left).toBeNull();
    expect(bst.root.right).toBeNull();
  });

  it('should insert values', () => {
    const bst = new BinarySearchTree();

    const insertedNode1 = bst.insert(10);
    const insertedNode2 = bst.insert(20);
    bst.insert(5);

    expect(bst.toString()).toBe('5,10,20');
    expect(insertedNode1.value).toBe(10);
    expect(insertedNode2.value).toBe(20);
  });

  it('should check if value exists', () => {
    const bst = new BinarySearchTree();

    bst.insert(10);
    bst.insert(20);
    bst.insert(5);

    expect(bst.contains(20)).toBe(true);
    expect(bst.contains(40)).toBe(false);
  });

  it('should remove nodes', () => {
    const bst = new BinarySearchTree();

    bst.insert(10);
    bst.insert(20);
    bst.insert(5);

    expect(bst.toString()).toBe('5,10,20');

    const removed1 = bst.remove(5);
    expect(bst.toString()).toBe('10,20');
    expect(removed1).toBe(true);

    const removed2 = bst.remove(20);
    expect(bst.toString()).toBe('10');
    expect(removed2).toBe(true);
  });


  it('should be traversed to sorted array', () => {
    const bst = new BinarySearchTree();

    bst.insert(10);
    bst.insert(-10);
    bst.insert(20);
    bst.insert(-20);
    bst.insert(25);
    bst.insert(6);

    expect(bst.toString()).toBe('-20,-10,6,10,20,25');
    expect(bst.root.height).toBe(2);

    bst.insert(4);

    expect(bst.toString()).toBe('-20,-10,4,6,10,20,25');
    expect(bst.root.height).toBe(3);
  });
});
