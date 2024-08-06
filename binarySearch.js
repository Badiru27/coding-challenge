//When we are dealing with search question, we are dealing with index
//Applied when list is ordered
//Pick the mid as called pivot

function binarySearch(values, target) {
  const length = values.length - 1;

  let right = length;
  let left = 0;

  while (left <= right) {
    pivot = Math.floor((left + right) / 2);
    if (values[pivot] === target) return pivot;

    if (values[pivot] > target) {
      right = pivot - 1;
    } else {
      left = pivot + 1;
    }
  }

  return -1;
}

// Example usage
// let numbers = [1, 3, 5, 7, 9, 11, 13, 15];
// console.log(binarySearch(numbers, 7)); // Output: 3 (index of 7 in the array)
// console.log(binarySearch(numbers, 6)); // Output: -1 (6 is not in the array)
// console.log(binarySearch(numbers, 15)); // Output: -1 (6 is not in the array)

// There is an integer array nums sorted in ascending order (with distinct values).

// Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

// Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:

// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1
// Example 3:

// Input: nums = [1], target = 0
// Output: -1

//[7,8,9,10,11,12,13,14,15,0,1,2,3,4,5,6]

var search = function (nums, target) {
  const length = nums.length - 1;

  let right = length;
  let left = 0;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] > nums[length]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  function binarySearch(left, right, target) {
    while (left <= right) {
      pivot = Math.floor((left + right) / 2);
      if (nums[pivot] === target) return pivot;

      if (nums[pivot] > target) {
        right = pivot - 1;
      } else {
        left = pivot + 1;
      }
    }

    return -1;
  }

  const leftSearch = binarySearch(0, left-1, target);

  if (leftSearch !== -1) return leftSearch;

  return binarySearch(left, length, target);
};

// const val = [7, 8, 9, 10, 11, 12, 13, 14, 15, 0, 1, 2, 3, 4, 5, 6];
// search(val, 3);


/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {

        let left = 0;
        let right = n;

        while(left < right){

            const mid = Math.floor((left + right)/2);

            const midBad = isBadVersion(mid);

            if(midBad){
                right = mid -1;
            }else{

                left = mid;
            }


        }

        return left;
        
    };
};

