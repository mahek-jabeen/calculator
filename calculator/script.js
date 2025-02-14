let result = document.getElementById("result");

function appendValue(value) {
    if (result.innerText === "0" && value !== ".") {
        result.innerText = value;
    } else {
        result.innerText += value;
    }
}

function clearScreen() {
    result.innerText = "0";
}

function deleteLast() {
    result.innerText = result.innerText.slice(0, -1);
    if (result.innerText === "") {
        result.innerText = "0";
    }
}

function calculate() {
    try {
        result.innerText = eval(result.innerText);
    } catch {
        result.innerText = "Error";
    }
}
