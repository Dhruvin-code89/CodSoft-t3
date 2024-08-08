document.addEventListener("DOMContentLoaded", function () {
  let a1 = null;
  let a2 = null;
  let operator = null;
  let display = document.querySelector("output");

  const buttons = document.querySelectorAll("button");
  buttons.forEach(button => {
    button.addEventListener("click", function () {
      let value = button.innerText;``

      if (button.id === "AC") {
        a1 = null;
        a2 = null;
        operator = null;
        display.innerText = "";
      } else if (button.id === "equal") {
        if (a1 !== null && a2 !== null && operator !== null) {
          let result;
          switch (operator) {
            case "+":
              result = parseFloat(a1) + parseFloat(a2);
              break;
            case "-":
              result = parseFloat(a1) - parseFloat(a2);
              break;
            case "*":
              result = parseFloat(a1) * parseFloat(a2);
              break;
            case "/":
              result = parseFloat(a1) / parseFloat(a2);
              break;
            case "%":
              result = parseFloat(a1) % parseFloat(a2);
              break;
            default:
              return;
          }
          display.innerText = result;
          a1 = result;
          a2 = null;
          operator = null;
        }
      } else if (["+", "-", "*", "/", "%"].includes(value)) {
        if (a1 !== null) {
          operator = value;
        }
      } else {
        if (operator === null) {
          a1 = (a1 !== null ? a1 : "") + value;
          display.innerText = a1;
        } else {
          a2 = (a2 !== null ? a2 : "") + value;
          display.innerText = a2;
        }
      }
    });
  });
});
