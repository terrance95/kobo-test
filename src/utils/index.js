export function validateInput(input) {
  let regExp = /^\d{4}-\d{4}-\d{4}$/g;
  if (input.match(regExp)) {
    return true;
  } else {
    return false;
  }
}
