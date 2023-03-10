

// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Input: strs = ["a"]
// Output: [["a"]]


class Solution {
  List<List<String>> groupAnagrams(List<String> strs) {

      //hasmap
      Map<String, List<String>> anagramMap = {};
      final length = strs.length -1;

      //loop through element

      for(int i = 0; i <= length; i++){

          final count = List.filled(26, 0);
          final valueL = strs[i].length -1;

          for(int j =0; j<= valueL; j++){
              count[strs[i][j].codeUnitAt(0) - 'a'.codeUnitAt(0)]++;
          }

          final hash = count.join("#");

          if(anagramMap.containsKey(hash)){
              anagramMap[hash] = [...anagramMap[hash]!, strs[i]];
          }else{
              anagramMap[hash] = [strs[i]];
          }


      }


             return List.from(anagramMap.values);



  }
}