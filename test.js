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
