function calculate(btn, obj) {
  if (!isNumber(btn)) {
    if (btn === "=") {
      obj.firstValue = calculateOperation(obj.operation, obj.firstValue, obj.secondValue);
      obj.secondValue = null;
      obj.operation = null;
      return obj;
    }

    const mathOps = ["+", "-", "x", "/"];
    if (mathOps.includes(btn)) {
      obj.operation = btn;
      return obj;
    }
  }

  obj.firstValue = (obj.firstValue || "");
  if (!obj.operation) {
    obj.firstValue += btn;
    return obj;
  }

  obj.secondValue = (obj.secondValue || "");
  obj.secondValue += btn;
  return obj;
}

function isNumber(value) {
  return !isNaN(value);
}

function calculateOperation(operation, firstValue, secondValue) {
  const first = Number(firstValue),
    second = Number(secondValue);
  switch (operation) {
    case "+":
      return (first + second);

    case "-":
      return (first - second);

    case "x":
      return (first * second);

    case "/":
      return (first / second);
  
    default:
      throw new Error("operation not supported")
  }
}

export default calculate;