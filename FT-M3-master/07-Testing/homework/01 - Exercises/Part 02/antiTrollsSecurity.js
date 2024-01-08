const antiTrollsSecurity = string => {
  let newString = '';
  for (let i = 0; i < string.length; i++) {
    if (
      string[i] !== 'a' &&
      string[i] !== 'e' &&
      string[i] !== 'i' &&
      string[i] !== 'o' &&
      string[i] !== 'u' &&
      string[i] !== 'A' &&
      string[i] !== 'E' &&
      string[i] !== 'I' &&
      string[i] !== 'O' &&
      string[i] !== 'U'
    ) {
      newString += string[i];
    }
  }
  return newString;
};

module.exports = antiTrollsSecurity;
