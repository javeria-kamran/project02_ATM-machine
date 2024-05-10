import inquirer from "inquirer";


// decalartion
let balance = 10000;
let Mpin = 9876;


// question -- 01
let answer = await inquirer.prompt([
  {
    name: "pin",
    message: "enter your MPIN",
    type: "number",
  },
]);

if (answer.pin === Mpin) {
  console.log("correct pin code!");
}


// question -- 02
let operationAns = await inquirer.prompt([
  {
    name: "operation",
    message: "What do you want to do?",
    type: "list",
    choices: ["withdraw", "check balance"],
  },
]);
console.log(operationAns);


// choose options
if (operationAns.operation === "withdraw") {
  let amountAns = await inquirer.prompt([
    {
      name: "amount",
      message: "enter your amount",
      type: "number",
    },
  ]);
  balance -= amountAns.amount;
  console.log("Your remaining balance is " + balance);
} else if (operationAns.operation === "check balance") {
  console.log("Your balance is " + balance);
} 


// if the MPIN is incorrect
else {
  console.log("Incorrect MPIN");
}
