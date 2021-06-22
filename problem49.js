// linked list is a connection of node.

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }

}

let node1 = new Node('Malay');
// console.log(node1);

node1.next = new Node('Chandan');
node1.next.next = new Node('Suriya');

console.log(node1);

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value){
        let newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head
        }else{
            this.tail.next = newNode
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
}

let list1 = new SinglyLinkedList();
console.log(list1);
console.log(list1.push('Malay'));
console.log(list1.push('Chandan'));
console.log(list1.push('Suriya'));