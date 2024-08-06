import 'dart:io';

class FileConverter{
  void filterInputFile() {
  final inputFile = File('input.txt');
  final excludeFile = File('exclude.txt');
  final outputFile = File('output.txt');

  final inputLines = inputFile.readAsLinesSync().where((line) => line.isNotEmpty).toList();
  final excludeLines = excludeFile.readAsLinesSync().where((line) => line.isNotEmpty).toSet();

  final filteredLines = inputLines.where((line) => !excludeLines.contains(line)).toList();

  if (filteredLines.isNotEmpty) {
    final outputString = filteredLines.join('\n');
    outputFile.writeAsStringSync(outputString);
  } else {
    outputFile.writeAsStringSync('');
  }
}
}


class NextFriday{
  Iterable<String> fridaysIterator(String dateOfFirstFriday) sync*{
 final  dateList = dateOfFirstFriday.split('-');
 
  final year = int.parse(dateList[0]);
  final month = int.parse(dateList[1]);
  final day = int.parse(dateList[2]);
  
  final dateObject = DateTime(year, month, day);
  
  var fridayIter = dateObject;
  
  while(true){
    yield '${fridayIter.year}-${fridayIter.month.toString().padLeft(2, '0')}-${fridayIter.day.toString().padLeft(2, '0')}';
    
    fridayIter = fridayIter.add(const Duration(days:7));
    
  }
}
}
  
// final Iterable it = fridaysIterator('2021-06-04');
// final Iterator iterator = it.iterator;

// iterator.moveNext();
  
// print(iterator.current); // '2021-06-04'

// iterator.moveNext();
// print(iterator.current); // '2021-06-11'
  
  
  
class ValidateString {
      bool stringValidator(String text) {
  
    if(text.length< 6 || text.length > 15) return false;
    
    RegExp digits = RegExp(r'\d(?!\d)');
    if(digits.allMatches(text).length < 2) return false;
    
    if(text.toLowerCase() == text || text.toUpperCase() == text) return false;
    
    RegExp specialChar = RegExp(r'[$%>]{1}');
    if(specialChar.allMatches(text).length != 1) return false;
    
    
    Set<String> chars = {};
    final length = text.length -1;
    
    for(int i = 0; i<= length; i++){
      
      if(chars.contains(text[i])) return false;
      
      chars.add(text[i]);
    }
    
    return true;
}
}
  
//   print(stringValidator('AABc%defg3hij7'));