// A tree is a single direction from root to nodes.

// Binary tree mean a tree can have at most two children.

//FULL TREE - A complete tree must have the two peers of children
//COMPLETE TREE - A complete tree must fill out the left nodes before the right. LEFT Most be complete
//PERFECT TREE - All leaf are on the same level and have complete children

//DFS PreOrder, InOrder and PostOrder

// PreOrder - Process Data, Left, Right
// InOrder - Left, Process Data, Right
// PostOrder - Left, Right, Process Data

//######### PRE ORDER ####################

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const depthFirstValues = (root) => {
  if (root === null) return [];
  const result = [];

  const stack = [root];

  while (stack.length > 0) {
    const current = stack.pop();
    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
    result.push(current.val);
  }

  return result;
};

const depthFirstValuesRecursion = (root) => {
  if (root === null) return [];

  const leftValue = depthFirstValues(root.left);
  const rightValue = depthFirstValues(root.right);
  return [root.val, ...leftValue, ...rightValue];
};

const breadthFirstValues = (root) => {
  if (root === null) return [];

  const result = [];
  const queue = [root];

  while (queue.length > 0) {
    const current = queue.shift();
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
    result.push(current.val);
  }

  return result;
};

const treeSum = (root) => {
  let sum = 0;
  const stack = [root];

  if (root === null) return sum;

  while (stack.length > 0) {
    const current = stack.pop();
    if (current.left) stack.push(current.left);
    if (current.right) stack.push(current.right);
    sum += current.val;
  }
  return sum;
};

const treeSumRecursion = (root) => {
  if (root === null) return 0;

  const leftSum = treeSum(root.left);
  const rightSum = treeSum(root.right);

  return root.val + leftSum + rightSum;
};

const treeIncludes = (root, target) => {
  const stack = [root];

  if (root === null) return false;

  while (stack.length > 0) {
    const current = stack.pop();
    if (current.val === target) return true;

    if (current.left) stack.push(current.left);
    if (current.right) stack.push(current.right);
  }

  return false;
};

const treeIncludesRecursion = (root, target) => {
  if (root === null) return false;

  return (
    root.val === target ||
    treeIncludes(root.left, target) ||
    treeIncludes(root.right, target)
  );
};

const treeMinValue = (root) => {
  const stack = [root];
  let min = Infinity;

  while (stack.length > 0) {
    const current = stack.pop();
    min = Math.min(min, current.val);
    if (current.left) stack.push(current.left);
    if (current.right) stack.push(current.right);
  }

  return min;
};

const treeMinValueRecursion = (root) => {
  if (root === null) return Infinity;

  return Math.min(root.val, treeMinValue(root.left), treeMinValue(root.right));
};



const maxPathSum = (root) => {

    const stack = [[root, 0]];
    let maxPath = -Infinity;
  
    while(stack.length > 0){
      const [current, sum] = stack.pop();
      const currentSum = (sum + current.val);
      
      if(!current.left && !current.right){
        maxPath =  Math.max(maxPath, currentSum)
      }
      
      if (current.right) stack.push([current.right, currentSum]);
      if (current.left) stack.push([current.left, currentSum]);
     
    }
  
    return maxPath;
  };
  
  const maxPathSumRecursion = (root) => {
    if(root === null) return -Infinity;
    
   if(root.left === null && root.right === null){
    return root.val;
   }
  
    const maxChildSum = Math.max(maxPathSum(root.left), maxPathSum(root.right));
  
    return root.val + maxChildSum;
    
  }
  
  module.exports = {
    maxPathSum,
  };
  