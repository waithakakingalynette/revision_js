//Given a nested list return a new list with the nested list flattened.

function flattenString(inputString) {
    let outputString = '';
    let nestedString = '';
    let nestedCount = 0;
  
    for (let i = 0; i < inputString.length; i++) {
      if (inputString[i] === '[') { //If we reach the opening bracket we increment
        nestedCount++;
      } else if (inputString[i] === ']') { //If we reach the closing bracket we decremeant till we reach the end of the nested string.
        nestedCount--;
        if (nestedCount === 0) {
          outputString += flattenString(nestedString);
          nestedString = '';
          continue;
        }
      }
  
      if (nestedCount > 0) {
        nestedString += inputString[i];
      } else {
        outputString += inputString[i];
      }
    }
  
    return outputString;
  }
//Let's break down how this function works. We start by initializing an empty 
//output string, an empty nested string, and a nested count of 0.
// We then iterate through the input string character by character. 
//If we encounter an opening bracket, we increment the nested count. 
//If we encounter a closing bracket, we decrement the nested count and check
// if we have reached the end of a nested string. If we have, we recursively 
//call the flattenString function on the nested string and append the result 
//to the output string. If we are currently inside a nested string, we append 
//the current character to the nested string. Otherwise, we append the current 
//character to the output string. Finally, we return the output string.
  
//   Let's test this function with the example input "hello [world [of] programming]":
  
  
  console.log(flattenString("hello [world [of] programming]"));



//simple method.
const array1=[1,[2,[3,[4]]]]
console.log(array1);

const array2=array1.flat();
console.log(array2);

const array3=array1.flat(Infinity);//Infinity is a number that represents a positive infinity,-Infinity represents negative infinity.
console.log(array3);
  
//Give an array of strings return the longest string in the array.
 function find_longeststring(array){
    let longeststring='';
    for(let i=0;i<array.length;i++){
        for(let x=0;x<array[i].length;x++){
            if(array[i][x] > longeststring.length){
                longeststring = array[i][x];
            }
        }
    }
    return  longeststring;
 }

 const array = [
    ['apple', 'banana', 'cherry'],
    ['date', 'elderberry', 'fig'],
    ['grape', 'honeydew', 'kiwi', 'lemon']
  ];

  const longeststring=find_longeststring(array)
  console.log(find_longeststring(longeststring));