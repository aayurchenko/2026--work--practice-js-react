
function createValidator(...rules) {
  console.log(rules)
  return function validate(value) {
    return rules.every((rule) =>  rule(value) === true)
  }
}
const validatePassword = createValidator(
  hasMinLength,
  hasNumber,
  hasUpperCase
);

function hasMinLength(value) {
  return value.length >= 8;
}
function hasNumber(value) {
  return /\d/.test(value)
}

function hasUpperCase(value) {
  return /[A-Z]/.test(value)
}

console.log(validatePassword('hello'));       // false
console.log(validatePassword('helloworld'));  // false
console.log(validatePassword('HelloWorld'));  // false
console.log(validatePassword('Hello123'));    // true


function isNotEmpty(value) {
  return value.length > 0;
}

function hasNoSpaces(value) {
  return !value.includes(' ');
}

const validateUsername = createValidator(
  isNotEmpty,
  hasNoSpaces
);

console.log(validateUsername('Максим'));       // true
console.log(validateUsername('Максим Иванов')); // false
console.log(validateUsername(''));              // false