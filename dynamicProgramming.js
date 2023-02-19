function fibonacciN(n, m = {}) {
  if (m[n]) return m[n];

  if (n <= 2) return 1;

  m[n] = fibonacciN(n - 1, m) + fibonacciN(n - 2, m);

  return m[n];
}

function tableFib(n){
  const arr = Array(n + 1).fill(0);
  arr[1] = 1;

  for(let i = 0; i <= n; i++){
    arr[i + 1] += arr[i];
    arr[i + 2] += arr[i];
  }

  return arr[n];
}

function fibonacciSeq(n) {
  let result = [0, 1];

  let pre = 0;
  let curr = 1;

  for (let i = 2; i <= n; i++) {
    const next = pre + curr;
    result.push(next);
    pre = curr;
    curr = next;
  }

  return result;
}

const canSum = (a, arr, m = {}) => {
  if (a in m) return m[a];

  if (a === 0) return true;

  if (a < 0) return false;

  for (let i of arr) {
    if (canSum(a - i, arr, m)) {
      m[a] = true;
      return m[a];
    }
  }

  m[a] = false;
  return m[a];
};



const howSum = (a, arr, m = {}) => {
  if (a in m) return m[a];

  if (a === 0) return [[]];

  if (a < 0) return [];

  let result = [];

  for (let i of arr) {
    const sumWays = howSum(a - i, arr, m);
    sumWays.map((w) => result.push([...w, i]));
  }

  m[a] = result;
  return result;
};

const bestSum = (a, arr, m = {}) => {
  if (m[a]) return m[a];
  if (a === 0) return [];

  if (a < 0) return null;

  let result = null;

  for (let i of arr) {
    const sumWays = bestSum(a - i, arr, m);
    if (sumWays) {
      const val = [...sumWays, i];
      if (result === null || val.length < result.length) {
        result = val;
      }
    }
  }

  m[a] = result;
  return result;
};

const allConstruct = (a, arr, m = {}) => {
  if (a in m) return m[a];

  if (a === "") return [[]];

  const result = [];

  for (const i of arr) {
    if (a.startsWith(i)) {
      const subString = a.slice(i.length);
      const ways = allConstruct(subString, arr, m);
      ways.forEach((w) => result.push([i, ...w]));
    }
  }

  m[a] = result;
  return result;
};

//  console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']))
// console.log(allConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee"]))
//  console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]))
//console.log(howSum(300, [7, 14]));
// console.log(bestSum(7, [5, 3, 4, 7]));
// console.log(bestSum(8, [2, 3, 5]));
//console.log(howSum(7, [5, 3, 4, 7]));
// console.log(canSum(300, [7, 14]));
// console.log(canSum(7, [5, 3, 4, 7]))
// console.log(fibonacciN(50));
// console.log(fibonacciSeq(10));
console.log(tableFib(6));
console.log(tableFib(7));
console.log(tableFib(8));
console.log(tableFib(50));
