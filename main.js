function findSecondLargest(arr) {
//  Initialize two variables will always be greater than -Infinity
  let largest = -Infinity;
  let secondLargest = -Infinity;
  for (let num of arr) {
    if (num > largest) {
      secondLargest = largest; 
      largest = num;
    } else if (num > secondLargest && num !== largest) {
      secondLargest = num;
    }
  }
// Return the second largest number
  return secondLargest ;
}

console.log(findSecondLargest([6, 13, 22, 18, 0, 3, 45, 57, 5, 12]));
