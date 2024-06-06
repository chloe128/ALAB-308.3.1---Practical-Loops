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
let headers = row[0].split(",");
let result = [];
for (let i = 1; i < row.length; i++) {
  let cells = row[i].split(",");
  let obj = {};
  for (let j = 0; j < headers.length; j++) {
    let header = headers[j].toLowerCase();
    obj[header] = cells[j];
  }
  result.push(obj);
}
// step3

result.pop();
result.unshift({ id: "48", name: "Barry", occupation: "Runner", age: "25" });
result.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });
console.log(result);

//calculate average age
let sumAge = 0;
for (let i = 0; i < result.length; i++) {
  sumAge = parseInt(result[i]["age"], 10) + sumAge;
}
let avgAge = sumAge / result.length;
console.log(avgAge);

//convert back to csv file
let newCsvData = headers.join(",") + "\n";

for (let i = 0; i < result.length; i++) {
  let newRow = [];
  for (let j = 0; j < headers.length; j++) {
    let header = headers[j].toLowerCase();
    newRow.push(result[i][header]);
  }
  newCsvData += newRow.join(",") + "\n";
}
console.log(newCsvData);
