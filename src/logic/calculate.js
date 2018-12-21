const mathOps = ["+", "-", "x", "/"];

function calculate(btn, obj) {
  if (!isNumber(btn)) {
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

export default calculate;