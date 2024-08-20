//We have Max and Min Heap
//Max heap has the largest element at the top of the node
//Min heap has the smallest element at the top of the node

//Heap are represented with arrays
// Index 0 should always be null
// the root of the heap is 1 and the heapSize is length - 1

//Formula
// left = i * 2;
// right = i * 2 + 1;
// parent = Math.floor(i/2);


//[MIN HEAP]
//Inset flow

//push the item as last in the array
//if heap length is more than two element then:
// index = heapSize
// Loop while the parent node item Math.floor(i/2) is greater than the current node i
// If the index >= 1. We swap the parent with the current node
// If the parent node Math.floor(i/2) > 1, we move the index to the parent node i = Math.floor(i/2)
// Else we break out of the loop

class MinHeap{
   constructor(){
    this.heap = [null]
   }

   insert(val){
    this.heap.push(val);

    if(this.heap.length > 2){
      let index =   this.heap.length -1;

      while(this.heap[Math.floor(index/2)]> this.heap[index]){
        if(index >= 1){
            [this.heap[Math.floor(index/2)], this.heap[index]] = [this.heap[index], this.heap[Math.floor(index/2)]];

            if(Math.floor(index/2) > 1){
                index = Math.floor(index/2);
            }else{
                break;
            }
        }
      }
    }
   }

   logHeap(){
    console.log(this.heap)
   }
}

// const heap = new MinHeap();

// heap.logHeap();
// heap.insert(5);
// heap.insert(1);
// heap.logHeap();
// heap.insert(9);
// heap.insert(12);
// heap.logHeap();
// heap.insert(10);
// heap.insert(6);
// heap.logHeap();


// class MaxHeap{
//     constructor(){
//      this.heap = [null]
//     }
 
//     insert(val){
//      this.heap.push(val);

//      if(this.heap.length > 2){
//         let index = this.heap.length -1;

//         while(this.heap[Math.floor(index/2)] < this.heap[index]){
//             if(index >=1){
//                 [this.heap[Math.floor(index/2)], this.heap[index]] = [this.heap[index], this.heap[Math.floor(index/2)]];

//                 if(Math.floor(index/2) > 1){
//                     index = Math.floor(index/2);
//                 }else{
//                     break;
//                 }
//             }
//         }
//      }

//     }

//     logHeap(){
//         console.log(this.heap)
//        }
// }

class MaxHeap {
    constructor() {
        this.heap = [null];
    }

    insert(val) {
        this.heap.push(val);
        let index = this.heap.length - 1;
        
        while (index > 1 && this.heap[Math.floor(index / 2)] < this.heap[index]) {
            [this.heap[Math.floor(index / 2)], this.heap[index]] = [this.heap[index], this.heap[Math.floor(index / 2)]];
            index = Math.floor(index / 2);
        }
    }

    logHeap() {
        console.log(this.heap);
    }

    logInOrder(){

        let index = 1;
        const len = this.heap.length -1;

        while(index <= len){

            if(index === 1){
                console.log(this.heap[index], this.heap[index * 2], this.index[index * 2 +1])
            }else{
                
            }
        }
    }
}

const mexHeap = new MaxHeap();

 mexHeap.logHeap();
 mexHeap.insert(20);
 mexHeap.insert(10);
 mexHeap.logHeap();
 mexHeap.insert(19);
 mexHeap.insert(9);
 mexHeap.logHeap();
 mexHeap.insert(17);
 mexHeap.insert(11);
 mexHeap.logHeap();
 mexHeap.insert(13);
 mexHeap.insert(5);
 mexHeap.logHeap();
 mexHeap.insert(15);
 mexHeap.insert(8);
 mexHeap.logHeap();