// static/script.js
let display = document.getElementById("display");
let expression = "";

function appendNumber(num) {
    if (display.innerText === "0") {
        display.innerText = num;
    } else {
        display.innerText += num;
    }
    expression += num;
}

function appendOperator(op) {
    display.innerText += ` ${op} `;
    expression += op;
}

function clearDisplay() {
    display.innerText = "0";
    expression = "";
}

function calculateResult() {
    fetch("/calculate", {
        method: "POST",
        body: JSON.stringify({ expression: expression }),
        headers: { "Content-Type": "application/json" }
    })
    .then(response => response.json())
    .then(data => {
        display.innerText = data.result;
        expression = data.result;
    })
    .catch(error => console.error("Error:", error));
}
