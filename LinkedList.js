class Node {
  constructor(value, nextNode) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    if (this.head === null) {
      this.head = new Node(value, null);
      return;
    }
    let tmp = this.head;
    while (tmp.nextNode != null) tmp = tmp.nextNode;

    tmp.nextNode = new Node(value, null);
  }

  prepend(value) {
    this.head = node(value, head);
  }

  size() {
    let tmp = this.head;
    let count = 0;
    while (tmp != null) {
      tmp = tmp.nextNode;
      count++;
    }
    console.log("Size of the list:", count);
  }

  getHead() {
    return this.head;
  }

  pop() {
    if (this.head == null) {
      console.log("No item to pop");
      return null;
    } else if (this.head.nextNode == null) {
      this.head = null;
    } else {
      let tmp = this.head;
      while (tmp.nextNode != null) {
        var prev = tmp;
        tmp = tmp.nextNode;
      }
      prev.nextNode = null;
    }
  }

  tail() {
    let tmp = this.head;
    if (!tmp) return null;
    while (tmp.nextNode != null) {
      tmp = tmp.nextNode;
    }
    return tmp.value;
  }

  at(index) {
    let tmp = this.head;
    let count = 0;
    while (tmp != null) {
      if (count == index) return tmp.value;
      tmp = tmp.nextNode;
      count++;
    }
  }

  contains(value) {
    let tmp = this.head;
    while (tmp != null) {
      if (tmp.value == value) {
        return true;
      }
      tmp = tmp.nextNode;
    }
    return false;
  }

  find(value) {
    let tmp = this.head;
    let index = 0;
    while (tmp != null) {
      if (tmp.value == value) {
        return index;
      }
      tmp = tmp.nextNode;
      index++;
    }
    return null;
  }

  toString() {
    let tmp = this.head;
    let string = "";
    while (tmp != null) {
      string += `(${tmp.value}) -> `;
      tmp = tmp.nextNode;
    }
    string += "null";
    return string;
  }

  insertAt(value, index) {
    let tmp = this.head;
    let count = 0;
    while (tmp != null && count < index - 1) {
      tmp = tmp.nextNode;
      count++;
    }

    const newNode = new Node(value, tmp.nextNode);
    tmp.nextNode = newNode;
  }

  removeAt(index) {
    if (this.head === null) {
      console.log("List is empty");
      return null;
    }
    if (index == 0) {
      this.head = this.head.nextNode;
      return;
    }
    let tmp = this.head;
    let count = 0;
    while (tmp.nextNode != null && count < index - 1) {
      tmp = tmp.nextNode;
      count++;
    }
    tmp.nextNode = tmp.nextNode.nextNode;
  }
}

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.insertAt("mongoose", 3);

console.log(list.toString());
console.log(list.at(5));
console.log(list.contains("snake"));
console.log(list.contains("ant"));
console.log(list.find("mongoose"));
list.removeAt(2);
console.log(list.find("mongoose"));
