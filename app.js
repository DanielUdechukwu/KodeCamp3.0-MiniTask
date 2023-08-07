

const upperCase = (userInput) => {
  // console.log(userInput);
  let myArr = userInput.split(" ");
  
  for (let i = 0; i <= myArr.length - 1; i++) {
    myArr[i] = myArr[i].charAt(0).toUpperCase() + myArr[i].slice(1);
  }
  console.log(myArr.join(" "));
}

upperCase("my name is daniel");


const longString = (myString) => {
  let stringArr = myString.split(" ");
  // console.log(stringArr)
  let length = 0, newLength;

  for(let i = 0; i < stringArr.length; i++){
    if(stringArr[i].length > length){
      length = stringArr[i].length
      newLength = stringArr[i]
    }
  }
  // console.log(stringArr)
  console.log(newLength)
}

longString("My name is Daniel Udechukwu");

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return `${num} is not prime`;
    }
  }
  return `${num} is prime`;
}

const primeNumbers = isPrime(12);
console.log(primeNumbers);

const returnType = (arg) => {
  typeCheck = typeof arg;
  console.log(typeCheck)
}

returnType("Name")

const lowHigh = (numArray) => {
  let sortedArray = numArray.sort(function(a, b){return a-b})
  let sHighest, sLowest;
  sLowest = sortedArray[1];
  sHighest = sortedArray[sortedArray.length - 2];

  return `Second lowest = ${sLowest}, Second highest = ${sHighest}`
}

const checkHigh = lowHigh([2, 4, 8, 15, 12, 34, 22])
console.log(checkHigh)