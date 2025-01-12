const display = document.querySelector(".display_input");

function toggleExtraButtons() {
  const extra = document.querySelector(".extra");
  const buttons = document.querySelectorAll(".buttons");

  if (extra.style.visibility === "hidden") {
    extra.style.visibility = "visible";
    buttons.style.borderRadius = "0px";
  } else {
    extra.style.visibility = "hidden";
    buttons.style.borderRadius = "0px";
  }
}

function appendNumber(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = `Error: ${error.message}`;
  }
}

function squareRoot() {
  try {
    display.value = Math.sqrt(display.value);
  } catch (error) {
    display.value = `Error: ${error.message}`;
  }
}
function square() {
  try {
    display.value = Math.pow(display.value, 2);
  } catch (error) {
    display.value = `Error: ${error.message}`;
  }
}
function sin() {
  try {
    display.value = Math.sin(display.value);
  } catch (error) {
    display.value = `Error: ${error.message}`;
  }
}
function cos() {
  try {
    display.value = Math.cos(display.value);
  } catch (error) {
    display.value = `Error: ${error.message}`;
  }
}
function tan() {
  try {
    display.value = Math.tan(display.value);
  } catch (error) {
    display.value = `Error: ${error.message}`;
  }
}
function sin1() {
  try {
    display.value = Math.asin(display.value);
  } catch (error) {
    display.value = `Error: ${error.message}`;
  }
}
function cos1() {
  try {
    display.value = Math.acos(display.value);
  } catch (error) {
    display.value = `Error: ${error.message}`;
  }
}
function tan1() {
  try {
    display.value = Math.atan(display.value);
  } catch (error) {
    display.value = `Error: ${error.message}`;
  }
}
