
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

class Solution {
  bool isValid(String s) {
      
      final values = {
          '(': ')',
          '[': ']',
          '{': '}'
      };
      
      
      List<String> stack = [];
      final length = s.length -1;
      
     if(length % 2 ==0) return false;
      
      for(int i = 0; i<=length; i++){
          
          if(values.containsKey(s[i])){
              stack.add(values[s[i]]!);
          }else{
              if(stack.isEmpty || stack.last != s[i]){
                  return false;
              }else{
                 stack.removeLast();
              }
          
          }
          
          
      }
      
      return stack.isEmpty;
      
  }
}