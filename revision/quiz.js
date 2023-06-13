// Write a Javascript function that takes in an array of numbers and consoles the 
// last four items multiplied by 12 and the first two added by 2. 
// Console the array with the new values.

function arr(numbers){
    for(let i=0;i<numbers.length;i++){
        if(i < 2){
            numbers[i]+=2;
        }
        else if(i>=numbers.length-4){
            numbers[i]*=12;
        }
    }
    console.log(numbers);
}

const number=[1,2,3,4,5,6,7,8,9];
arr(number);


function manipulateArray(arr) {
    const lastFour = arr.slice(-4).map(num => num * 12);
    const firstTwo = arr.slice(0, 2).map(num => num + 2);
    const manipulatedArray = [...firstTwo, ...lastFour];
    console.log(manipulatedArray);
  }
  
  const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  manipulateArray(myArray);

//JS program that extract characters at odd indices from the following string "Beautiful" const str="Beautiful"

const str="Beautiful"
// function extractChar(str){
    let result=" "
    for (x=0;x<str.length;x++){
        if(x %2!==0){
            result +=str[x]
        }
    }
// }

console.log(result);

//Javascript function that given a string,reverses each word in the sentence 
//without using any inbuilt methods.

function reverseWords(str) {
    let words = str.split(" ");
    let result = "";
  
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      let reversed = "";
      for (let j = word.length - 1; j >= 0; j--) {
        reversed += word[j];
      }
      result += reversed + " ";
    }
  
    return result.trim();
//.trim removes whitespace from both the start and the end of a string and does not include any parameters.
  }

const y="I am beautiful"  
console.log(reverseWords(y));
  
//Javascript function that capitalise the first letter os each word in a string.

function capitalizeString(str1) {
    let words = str1.split(' ');
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
  }
  
  let str1 = "the quick brown fox jumps over the lazy dog";
  let capitalizedStr = capitalizeString(str1);
  console.log(capitalizedStr);