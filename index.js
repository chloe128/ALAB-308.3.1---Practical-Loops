//part 1 Fizz Buzz//
for (let i = 1; i <= 100; i++) {
  if (i % 15 == 0) {
    console.log("Fizz Buzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

//part 2 prime time//

function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  if (n === 2) {
    return true;
  }
  if (n % 2 === 0) {
    return false;
  }
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (num % i == 0) {
      return false;
    }
    return true;
  }
}

function nextPrime(n) {
  while (true) {
    n++;
    if (isPrime(n)) {
      return n;
    }
  }
}

// Test with an example
let n = 101;
console.log(`The next prime number after ${n} is ${nextPrime(n)}.`);

//part3 Feeling loopy
let csvData =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
let row = csvData.split("\n");
for (let i = 0; i < row.length; i++) {
  let cells = row[i].split(",");
  let [ID, Name, Occupation, Age] = cells;
  console.log(ID, Name, Occupation, Age);
}
