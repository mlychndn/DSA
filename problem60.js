class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

const node1 = new Node(34);
node1.next = 67;
node1.next.next = 69;

console.log(node1);
console.log(node1.next);