  

//Quick Union 
class DisjoinSet {
  root = [];

  constructor(size) {
    for (let i = 0; i < size; i++) {
      this.root.push(i);
    }
  }

  print() {
    console.log(this.root);
  }

  find(x) {
    while (x != this.root[x]) {
      x = this.root[x];
    }

    return x;
  }

  unionSet(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootX !== rootY) {
      this.root[rootX] = rootY;
    }
  }

  connected = (x, y) => this.find(x) === this.find(y);
}

const uf = new DisjoinSet(10);
uf.unionSet(1, 2);
uf.unionSet(2, 5);
uf.unionSet(5, 6);
uf.unionSet(6, 7);
uf.unionSet(3, 8);
uf.unionSet(8, 9);

console.log(uf.connected(1, 5))
console.log(uf.connected(5, 7))
console.log(uf.connected(4, 9))

uf.unionSet(4, 9);

console.log(uf.connected(4, 9))

uf.print();
