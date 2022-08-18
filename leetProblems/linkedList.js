class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class LinkeList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    // console.log("val", value);
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = this.tail.next;
    }
    this.length++;
    return this;
  }

  traverseFormNumber() {
    let initialNode = this.head;
    console.log(initialNode);

    let str = "";
    while (initialNode !== null) {
      str = str + initialNode.value;
      initialNode = initialNode.next;
    }
    return +str.split("").reverse().join("");
  }

  createNewList(num1, num2) {
    let num3 = String(num1 + num2)
      .split("")
      .reverse();
    //console.log(num3);

    for (let i = 0; i < num3.length; i++) {
      this.push(num3[i]);
    }

    return this;
  }
}

//export default LinkeList;
