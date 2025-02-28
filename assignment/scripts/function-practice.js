console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());
console.log('My own test:', hello());

// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return "Hello, " + name + "!";
}
// Remember to call the function to test
console.log(helloName('JD'));

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber,secondNumber) {
  return firstNumber + secondNumber;
}
console.log(addNumbers(30,7));

// 4. Function to multiply three numbers & return the result
function multiplyThree(num1,num2,num3) {
    return num1 * num2 * num3;
}
console.log(multiplyThree(3,2,10));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  }
  return false;
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log('isPositive - should say true', isPositive(3));
console.log(isPositive(3));
console.log('isPositive - should say false', isPositive(0));
console.log(isPositive(0));
console.log('isPositive - should say false', isPositive(-3));
console.log(isPositive(5));

// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast(array) {
  if (array.length>0){
    return array[array.length-1];
  }
  else {return 'undefined'
  }
}
console.log(getLast([1,2,3,4,5]));
console.log(getLast([]));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value, array) {
  // for (let i; i < array.length;i++) {
    for (let val of array) {
    if (val === value) {
      return true;
    }
  }
  return false;
};
console.log(find(8,[3,5,7,9]));
console.log(find(3,[3,4,5]));
console.log(find(4,[1,2,3,4,5,6,7,8,9]));



// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if (letter === string[0]) {
    return true;
  } else {
    return false;
  }
}
console.log('isFirstLetter - should say true', isFirstLetter('a', 'apple'));
console.log(isFirstLetter('a','apple'));
console.log('isFirstLetter - should say false', isFirstLetter('z', 'apple'));
console.log(isFirstLetter('z', 'apple'));


// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  // TODO: loop to add items
  for (let number of array) {
    sum += number;
  }
  // TODO: return the sum
  return sum;
}
console.log(sumAll([5,5,5,5,20,7]))

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive(array) {
  let outputArray = [];
  for (let number of array) {
    if (number > 0) {
      outputArray.push(number);
    }
  }
  return outputArray;
}
console.log(allPositive([1,2,3,4,5,0,-1, -20, -44]))

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

// You live in the city of Cartesia where all roads are laid out in a perfect grid. 
// You arrived ten minutes too early to an appointment, so you decided to take the opportunity 
// to go for a short walk. The city provides its citizens with a Walk Generating App on their 
//phones -- everytime you press the button it sends you an array of one-letter strings representing 
//directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter 
//(direction) and you know it takes you one minute to traverse one city block, so create a function 
//that will return true if the walk the app gives you will take you exactly ten minutes (you don't 
//want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

function isValidWalk(walk) {
  //first check if it will take 10 minutes
  if (walk.length != 10){
    console.log("not a 10 minute walk");
    return false;
  } else {
 //then calculate if you end at the same position, n/s and e/w need the same total
 //tally each of the instructions
    let northSouth = 0;
    let eastWest = 0;
    for (let i = 0; i < walk.length; i++){
      switch(walk[i]){
          case 'n': 
          northSouth++;
          break;
          case 's':
          northSouth--;
          break;
          case 'e':
          eastWest++;
          break;
          case 'w':
          eastWest--;
          break;
      };
    };
  // compare totals
    if (northSouth === 0 && eastWest === 0){
      console.log("valid walk");
      return true;
    } else {
      console.log("not valid, did not end at the starting location."); 
      return false; 
    }
  }
}

let test1 = ['n','s','n','s','n','s','n','s','n','s'];
let test2 = ['w','e','w','e','w','e','w','e','w','e','w','e'];
let test3 = ['w'];
let test4 = ['n','n','n','s','n','s','n','s','n','s'];
console.log("test1:");
isValidWalk(test1);
console.log("test2:");
isValidWalk(test2);
console.log("test3:");
isValidWalk(test3);
console.log("test4:");
isValidWalk(test4);




// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}