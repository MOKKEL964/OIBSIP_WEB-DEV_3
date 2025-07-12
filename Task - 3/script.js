function convertTemperature() {
  let inputValue = parseFloat(document.getElementById("tempInput").value);
  let fromUnit = document.getElementById("fromUnit").value;
  let toUnit = document.getElementById("toUnit").value;
  let resultBox = document.getElementById("result");

  if (isNaN(inputValue)) {
    resultBox.textContent = "Please enter a valid number.";
    return;
  }

  let celsius;

  if (fromUnit === "C") {
    celsius = inputValue;
  } else if (fromUnit === "F") {
    celsius = (inputValue - 32) * 5 / 9;
  } else if (fromUnit === "K") {
    celsius = inputValue - 273.15;
  }

  let result;

  if (toUnit === "C") {
    result = celsius;
  } else if (toUnit === "F") {
    result = (celsius * 9 / 5) + 32;
  } else if (toUnit === "K") {
    result = celsius + 273.15;
  }

  resultBox.textContent = result.toFixed(4) + " °" + toUnit;
}
