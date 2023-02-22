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