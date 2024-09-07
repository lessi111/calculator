let nums = ["", ""];
let operator = "";
let currentNumber = 0;
let result = 0;

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
const zero = document.querySelector("#zero");
const equal = document.querySelector("#equal");
const display = document.querySelector("#display");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
display.textContent = result;

const refresh = () => {
  display.textContent = `${nums[1] ? nums[0] : ""} ${
    operator && nums[1] ? operator : ""
  } ${!nums[1] ? nums[0] : nums[currentNumber]}`;
};

const clear = () => {
  nums = ["", ""];
  operator = "";
  currentNumber = 0;
};

const equals = () => {
  if (nums[0] && nums[1]) {
    if (operator === "sum") {
      result = add(+nums[0], +nums[1]);
    } else if (operator === "subtract") {
      result = subtract(+nums[0], +nums[1]);
    } else if (operator === "multiply") {
      result = multiply(+nums[0], +nums[1]);
    } else if (operator === "divide") {
      if (nums[0] === "0" || nums[1] === "0") {
        alert("I could barely make this calculator!!!");
        clear();
        result = null;
      } else {
        result = divide(+nums[0], +nums[1]);
      }
    } else if (operator === "modulo") {
      result = modulo(+nums[0], +nums[1]);
    }

    if (Number.isInteger(result)) {
      nums = [result.toString(), ""];
    } else if (result === null) {
      result = 0;
      nums = ["", ""];
    } else {
      nums = [result.toFixed(1).toString(), ""];
    }
    display.textContent = result;
  }
};

clearButton.addEventListener("click", () => {
  clear();
  display.textContent = "0";
});

equal.addEventListener("click", equals);

operators.forEach((item) => {
  item.addEventListener("click", () => {
    currentNumber = 1;
    if (nums[0] && nums[1]) {
      equals();
    }
  });
});

plusminus.addEventListener("click", () => {
  if (nums[1]) {
    nums[1] = (-parseInt(nums[1])).toString();
  } else {
    nums[0] = (-parseInt(nums[0])).toString();
  }
  refresh();
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

mod.addEventListener("click", () => {
  operator = "modulo";
});

operators.forEach((item) => {
  item.addEventListener("click", () => {
    if (!nums[0]) {
      currentNumber = 0;
      operator = "";
    }
  });
});

seven.addEventListener("click", () => {
  nums[currentNumber] += "7";
});

eight.addEventListener("click", () => {
  nums[currentNumber] += "8";
});

nine.addEventListener("click", () => {
  nums[currentNumber] += "9";
});

four.addEventListener("click", () => {
  nums[currentNumber] += "4";
});

five.addEventListener("click", () => {
  nums[currentNumber] += "5";
});

six.addEventListener("click", () => {
  nums[currentNumber] += "6";
});

one.addEventListener("click", () => {
  nums[currentNumber] += "1";
});

two.addEventListener("click", () => {
  nums[currentNumber] += "2";
});

three.addEventListener("click", () => {
  nums[currentNumber] += "3";
});

zero.addEventListener("click", () => {
  nums[currentNumber] += "0";
});

numbers.forEach((item) => {
  item.addEventListener("click", refresh);
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

function modulo(a, b) {
  return a % b;
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
