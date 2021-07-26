class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// linkedlist class
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(element) {
        // create a new node
        const element = new ListNode(element);
        // to store current node
        const current;
        if (this.head === null) {
            this.head = element;
        }
        else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }

            // add node
            current.next = node;
        }
        this.size++;
    }

    insertAt(element, index) {
        if (index < 0 || index > this.size) 
            return console.log('Please enter correct index.');
        else {
            // create a new node 
            const node = new ListNode(element);
            const curr, prev;
            curr = this.head;

            if (index === 0) {
                node.next = this.head;
                this.head = node;
            } else {
                curr = this.head;
                var iter = 0;

                while(iter < index) {
                    iter++;
                    prev = curr;
                    curr = curr.next;
                }

                node.next = curr;
                prev.next = node;
            }
            this.size++;
        }
    }

    removeFrom(index) {
        if (index < 0 || index >= this.size) 
            return console.log('Please Enter a valid index');
        else {
            const curr, prev, iter = 0;
            curr = this.head;
            prev = curr;

            if (index === 0) {
                this.head = curr.next;
            }else{
                while (iter < index) {
                    iter++;
                    prev = curr;
                    curr = curr.next;
                }

                prev.next = curr.next;
            }
            this.size--;
            return curr.element;
        }
    }

    removeElement(element) {
        const current = this.head;
        const prev = null;

        while (current != null) {
            if (current.element === element) {
                if (prev == null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                return current.element;
            }
            prev = current;
            current = current.next;
        }
        return -1;
    }

    indexOf(element) {
        const count = 0;
        const current = this.head;

        while (current != null) {
            if (current.element === element)
                return count;
            count++;
            current = current.next;
        }
        return -1;
    }

    isEmpty() {
        return this.size == 0;
    }

    size_of_list() {
        console.log(this.size);
    }

    printLists() {
        const curr = this.head;
        const str = "";
        while (curr) {
            str += curr.element + " ";
            curr = curr.next; 
        }
        console.log(str);
    }
}

const ll = new LinkedList();

console.log(ll.isEmpty())