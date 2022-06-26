//selecting elements
const input = document.querySelector("#input");

const calcButtons = document.querySelectorAll(".calc__button");

const additionBtn = document.querySelector("#addition");
const subtractionBtn = document.querySelector("#subtraction");
const multiplicationBtn = document.querySelector("#multiplication");
const divisionBtn = document.querySelector("#division");

const clearBtn = document.querySelector("#clear");
const eraseBtn = document.querySelector("#erase");
const equalBtn = document.querySelector("#equal");

let currentEqual = 0;

window.onload = () => {
  input.value = "";
};

// !We take every button on calc__button class
calcButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (currentEqual == 1) {
      input.value = "";
      currentEqual = 0;
    }
    input.value += btn.value;
    input.style.color = "#ff503f";
  });
});

equalBtn.addEventListener("click", () => {
  currentEqual = 1;
  let inputValue = input.value;

  try {
    let solution = eval(inputValue);

    if (Number.isInteger(solution)) {
      input.value = solution;
    } else {
      input.value = solution.toFixed(2);
    }
  } catch (err) {
    alert("Invalid input!");
  }
});

// !clear whole input
clearBtn.addEventListener("click", () => {
  input.value = "";
});

// !delete single digit
eraseBtn.addEventListener("click", () => {
  input.value = input.value.substr(0, input.value.length - 1);
});
