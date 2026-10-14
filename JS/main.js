let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");

let currentInput = "";
let perviousInput = "";
let operator = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let value = button.textContent;

    if (value === "." || !isNaN(value)) {
      currentInput += value;
      display.value = perviousInput + "" + operator + ""+ currentInput ;
      return;
    }
    if (value === "AC") {
      currentInput = "";
      perviousInput = "";
      operator = "";
      display.value = "";
      return;
    }
    if (value === "DEL") {
      currentInput = currentInput.slice(0, -1);
      display.value = perviousInput+ ""+ operator +"" + currentInput ;
      return;
    }
    if (value === "=") {
      if (perviousInput === "" || currentInput === "") {
        return;
      }
      let num1 = parseFloat(perviousInput);
      let num2 = parseFloat(currentInput);
      let result;

      if (operator === "+") {
        result = num1 + num2;
      }
      if (operator === "-") {
        result = num1 - num2;
      }
      if (operator === "x") {
        result = num1 * num2;
      }
      if (operator === "÷") {
        result = num1 / num2;
      }
      

      display.value = result;
      currentInput = result.toString();
      perviousInput = "";
      operator = "";
      return;
    }
    if (currentInput === "") {
      return;
    }
    perviousInput = currentInput;
    currentInput = "";
    operator = value;


    display.value= perviousInput + ""+ operator +""+ currentInput;
   
  });
});
