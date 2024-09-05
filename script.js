let nums = ["", ""];
let operator = "";
let currentNumber = 0;

const clearButton = document.querySelector("#ac");
const plusminus = document.querySelector("#plusminus");
const mod = document.querySelector("#modulo");
const div = document.querySelector("#divide");
const mult = document.querySelector("#multiply");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const sub = document.querySelector("#subtract");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const sumTwo = document.querySelector("#sum");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const equal = document.querySelector("#equal");

clearButton.addEventListener("click", () => {
  nums = ["", ""];
  operator = "";
  currentNumber = 0;
});

equal.addEventListener("click", () => {
  if (operator === "sum") {
    alert(add(nums[0], nums[1]))
  }
})

plusminus.addEventListener("click", () => {
  nums[currentNumber] = (-parseInt(nums[currentNumber])).toString();
});

div.addEventListener("click", () => {
  operator = "divide";
});

mult.addEventListener("click", () => {
  operator = "multiply";
});

sub.addEventListener("click", () => {
  operator = "subtract";
});

sumTwo.addEventListener("click", () => {
  operator = "sum";
});

seven.addEventListener("click", () => {
  nums[currentNumber] = "7";
});

eight.addEventListener("click", () => {
  nums[currentNumber] = "8";
});

nine.addEventListener("click", () => {
  nums[currentNumber] = "9";
});

four.addEventListener("click", () => {
  nums[currentNumber] = "4";
});

five.addEventListener("click", () => {
  nums[currentNumber] = "5";
});

six.addEventListener("click", () => {
  nums[currentNumber] = "6";
});

one.addEventListener("click", () => {
  nums[currentNumber] = "1";
});

two.addEventListener("click", () => {
  nums[currentNumber] = "2";
});

three.addEventListener("click", () => {
  nums[currentNumber] = "3";
});

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(first, second, operator) {
  switch (operator) {
    case "+":
      return add(first, second);
    case "-":
      return subtract(first, second);
    case "*":
      return multiply(first, second);
    case "/":
      return divide(first, second);
  }
}
