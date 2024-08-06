///
///Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
///Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].
// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

class Solution {
  List<int> sortedSquares(List<int> nums) {
      
      
      int interSection = 0;
      final numLength = nums.length - 1;
      
      while(interSection < numLength && nums[interSection] < 0){
          interSection ++;
      }
      
      
      int positiveCount = interSection;
      int negativeCount = interSection -1;   
      List<int> sortedSquareArr = [];
      
      while(negativeCount >=0 && positiveCount <=numLength){
          final nSquare = nums[negativeCount] * nums[negativeCount];
          final pSquare = nums[positiveCount] * nums[positiveCount];
          
          if(nSquare < pSquare){
             sortedSquareArr.add(nSquare);
             negativeCount --; 
          } else{
              sortedSquareArr.add(pSquare);
              positiveCount ++;
          }
      }
      
      while(negativeCount >= 0){
         sortedSquareArr.add(nums[negativeCount] * nums[negativeCount]);
        negativeCount --; 
      }
      
      while(positiveCount <= numLength){
           sortedSquareArr.add(nums[positiveCount] * nums[positiveCount]);
            positiveCount ++;
      }
      
      
      return sortedSquareArr;
  }
}