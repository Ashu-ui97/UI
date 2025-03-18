// sum of even Number
function sumEven(arr){
  let sum = 0
  for ( let i =0 ; i < arr.length ; i++){
    if (arr[1]%2 ===0 ){
      sum += arr[i]
    }
  }
  return sum
}
console.log(sumEven([1,2,3,4,5,6,7]));

// frequency of character
function countChar (str){
  let count = {}
  for (let char in str ){
    count[str[char]]= (count[str[char]] || 0)+1
  }
  return count
}
console.log(countChar("asddgfhfmcj"));

// frequency of number
function countNumber (num){
  let count = {}
  for (let n in num){
    count[num[n]] = (count[num[n]] || 0)+1
  }
  return count
}
console.log(countNumber([1,2,3,4,5,6,7]));

// even numbers from an array
function findEven(arr){
  let numbers = []
  for (let num of arr){
    if (num % 2 !== 0){
      numbers.push(num)
    }
  }
  return numbers 
}
console.log(findEven([1,2,3,4,5,6,7]));

// reverse a string using for loop
function reverseString(str){
  let reverseStr =""
  for(let i = str.length -1 ; i >= 0 ; i--){
    reverseStr += str[i]
  }
  return reverseStr
}
console.log(reverseString("Hello"));

// reverse a string with string methods 
function reverse(str){
  return str.split("").reverse().join("")
}
console.log (reverse("Hello"))

// find max number in an array
function findMax ( arr){
  let max = arr[0]
  for (let index of arr){
    if (arr[index] > max){
      max = arr[index]
    }
  }
  return max
}
console.log (findMax([1,2,2,2,3,3,3,4,4,43,5,]))

// factorial of a number 
function factorial (num){
  let fact = 1
  for (let i = 1 ; i<=num ; i++){
    fact *= i
  }
  return fact
}

console.log (factorial(5))

//first non repeating string
function fistNonRepeatingString (str){
  for (let i =0 ; i<str.length ; i++){
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])){
      return str[i]
    }
  }
  return null
}
console.log (fistNonRepeatingString("ssddfgg"))

// all non repeating string 
function fistNonRepeatingString (str){
  let Data = []
  for (let i =0 ; i<str.length ; i++){
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])){
      Data.push(str[i])
    }
  }
  return Data.toString()
}

console.log (fistNonRepeatingString("ssdfgg"))

// remove duplicates from a given string 
function removeDuplicate (str){
  let data = ""
  for (let char of str){
   if (!data.includes(char)){
     data += char
   }
  }
  return data
}

console.log (removeDuplicate("ssdfgg"))

// remove duplicate from an array 
function removeDuplicate (arr){
  return arr.reduce((unique , current) =>{
    if (!unique.includes(current)){
      unique.push(current)
    }
    return unique 
  },[])
}

console.log (removeDuplicate([1,2,3,3,2,1,4]))

function removeDuplicate (arr){
  return [...new Set(arr)]
}
console.log (removeDuplicate([1,2,3,3,2,1,4]))
