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
}

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());
console.log(list.at(5));
console.log(list.contains("snake"));
console.log(list.contains("ant"));
console.log(list.find("dog"));
