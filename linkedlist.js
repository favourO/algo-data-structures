class Node {
    constructor(data) {
        this.head = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    insertFirst(data) {
        this.head = new Node(data);
        this.size++;
    }

    insertLast(data) {
        let element = new Node(data, this.head);
        //console.log(element)
        let current;

        if (!this.head) {
            this.head = element;
            //this.size++;
        }else{
            current = this.head;
            while(current.next) {
                current = current.next;
            }

            current.next = element;
        }
        this.size++;
    }

    printListData() {
        let current = this.head;
        //console.log(current)
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const ll = new LinkedList();
ll.insertLast(5)
ll.insertFirst(90)
ll.printListData();