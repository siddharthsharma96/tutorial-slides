const sanitizeNumber = number => {
  if (number && typeof number == 'string') {
    number = number.trim();
  }
  return +number;
}

const validateNumber = number => {
  number = sanitizeNumber(number);
  if (isNaN(number) || typeof number != "number") return false;
  return true;
}

let isValidNumber = validateNumber('12.2a')
console.log(isValidNumber)