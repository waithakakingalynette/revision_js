//.deepToString converts multi_dimensional arrays to strings.
//function multi_dimensional(){
    //int[][] mat = new int[2][2];
        //mat[0][0] = 99;
        //mat[0][1] = 151;
        //mat[1][0] = 30;
        //mat[1][1] = 50;
        //System.out.println(Arrays.toString(mat));
//}
//Write a function that takes a string as input and returns the length of the string.
function str(){
    let x="I am beautiful"
    return x.length
    // console.log(x.length);
}
console.log(str())

function arr(){
    //let str="I am studying Information technology at AkiraChix" //Counts every letter
    //as a single string and does not consider them as single elements.
    //let str1=["I am studying Information technology at AkiraChix"]//in an array the words
    //are counted as one element despite the number of wordings.
   // return str.length
   //let str2=("I am studying Information technology at AkiraChix") // works same as the
   //.double quatations
   let str3=`I am studying Information technology at AkiraChix`
    return str3.length

}
console.log(arr())


//Write a function that takes a string as input and returns the string in uppercase letters.
function uppercase(){
    let a="This is akirachix"
    let h=a.toUpperCase();
    let w=a.toLocaleUpperCase();
    // return h
    // return w
    console.log(h);
    console.log(w);
    //There is no actual difference with the two since they gave the same output.
}
// console.log(uppercase())
uppercase();

function lowercase(){
    let r="I am fom Kenya"
    let d=r.toLocaleLowerCase();
    console.log(d);
    let b=r.toLowerCase();
    console.log(b);
}
lowercase();

//Write a function that takes a string as input and returns the string in lowercase letters.
function lowercase(){
    let b="Hello I am from Kenya"
    let x=b.toLowerCase();
    console.log(x);
}
lowercase()

//Write a function that takes a string as input and returns the first character of the string.
function character(){
    let c="Akirachix"
    return c[0]
    // console.log( c[0])
}
//console.log(character.first())

console.log(character())

//Write a function that takes a string as input and returns the last character of the string.
function lastChar(smt){
    // let school = "AkraChix";
    return smt.charAt(smt.length -1); 
    // charAt returns character of the specified index in a string.
    //return (smt[-1])
    // let d = "AkraChix";
    // console.log(d [-1])
    // return d[-]
}
// let last_character = getLastCharacter(school);
let smt = "AkraChix"
console.log(lastChar(smt));
// console.log(last_character())


// //Write a function that takes two strings as input and concatenates them together.
function concat(){
    let s="Hello world"
    let f=" today is on a Thursday"
    console.log(s.concat( f))
//     console.log(s.concat( f))
//     let w=["Hello World"]
//    let p=[" today is on a Thursday"]
//     let text=w.join(" today is on a Thursday")
//     console.log(text)
//     s =s +"f"
}
concat()

//Write a function that takes two strings as input and checks if they are equal.
function equal(){
    let str1="I am awesome"
    let str2="This is a very good plan"
    // if(str1 ===str2){
    //     return true
    // }
    // else{
    //     false
    // }
    // console.log(str1.localeCompare(str2))
    console.log(str1==="str2")
    // console.log(equal(str1,str2))
}
equal()

//Write a function that takes two strings as input and returns the index of
// the first occurrence of the second string in the first string. 
//If the second string does not occur in the first string, 
//the function should return -1.
// function str3(text,text1){                                            
// let text="I am awesome"
// let text1="I am doing well"
// for(let i=0;i===text.length;i++){
    
// }
// }
function findIndex(str1, str2) {
    return str1.indexOf(str2);
  }
  const str1 = "Lynette Warukira";
  const str2 = "Warukira";
  const index = findIndex(str1, str2);
  console.log(index);
//Write a function that takes a string as input and returns a new string with 
//all the vowels removed.
function removevowels(){
    return w.replace(/[a,e,i,o,u]/gi, " ")
}
let w="Lynette Warukira"
console.log(removevowels(w))

function countvowels(){
    var count =0
    var vowels="a,e,i,o,u"
    for(v of vowels){
        if(word.includes(v)){
            count++
        }
    }
    return count
} 
let d="beautiful"
console.log(countvowels(d))

//Write a function that takes a string as input and returns a new string with all the consonants removed.
function removeconstants(str){
    const vowels= "a,e,i,o,u"
    let newString= ''
    for(let i=0;i<str.length;i++){
        const low = str[i]

        if(vowels.includes(low) && low.match(/[a-z]/i)){
            newString += low
}
            
 }
      return newString
}
const x="Gisemba"
console.log(removeconstants(x))

// function removeConsonates(str){
//     const vowels = ('a','e','i','o','u')
//     return str.replace([aeiou]/gi/ '')

// }
// let y = 'Lynette'
// console.log(removeConsonates(y))

function removeConsonates(){
    const str = 'somestring';
const reverseConsonants = (str = '') => {
   const arr = str.split("");
   let i = 0, j = arr.length - 1;
   const consonants = 'bcdfghjklnpqrstvwxyz';
   while(i < j){
      while(i < j && consonants.indexOf(arr[i]) < 0) {
         i++;
      }
      while(i< j && consonants.indexOf(arr[j]) < 0) {
         j--;
      }
      let tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
      i++;
      j--;
   }
   let result = "";
   for(let i = 0; i < arr.length; i++) {
      result += arr[i];
   }
   return result;
};
console.log(reverseConsonants(str));
}
removeConsonates()

function pattern(str){
    var vowelIndex=str.indexOf(str.match(/[aeiou]/));
    return "r" +str.slice(vowelIndex) 
}
console.log(pattern('xylographer'));

//Write a function that takes a string as input and returns a new string with all the digits removed.
function removedigits(num){
   // return num.match(/\D/g).join('')
     return num.match(/\d/g).join('')
    // let charArray = [...string];
    // let numbers = charArray.reduce(function (numString, element) {
    //    let nums = "0123456789";
    //    if (nums.includes(element)) {
    //       return numString + element;
    //    }
    //    return numString;
    // },"");
}
let num="I am 20 years old and was born in the year 2003"
console.log(removedigits(num))

//Write a function that takes a string as input and returns a new string with all the non-alphanumeric characters removed.
function removenonalphnumeric(word){
    //return word.match(/[^0-9 && a-z]/g," ")
   return word.replace(/[^0-9a-z]/g," ")


}
let word="i got a ticket_line of number 30 in the social_network hall"
console.log(removenonalphnumeric(word))

//Write a function that takes a string as input and returns a new string with the first letter of each word capitalized.
 function capitalise(name){
    let  names=name.split(' ')
    let newArray=[];
    for(let i=0;i< names.length;i++){
        newArray.push(names[i].charAt(0).toUpperCase()+names[i].slice(1));
    }
    return newArray.join(' ')
//     for(let i=0;i<firstletter.length;i++){
//         if()
//     }
//     let firstletter="lynette warukira murage kinga"
//     let names=firstletter.toUpperCase()
//     console.log(names);
}
 //capitalise()
