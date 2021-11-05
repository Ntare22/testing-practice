function stringLength(string) {
  let count = 0;
  if (string.length === 0 || string.length >= 10) {
    return 'string should have at least one character';
  } else {
    for (let char of string) {
      count++;
    }
    return count;
  }
}

// console.log(stringLength('thsdfwegafgagadk'));

function reverseString(string) {
  let reversedStr = ''
  for (let i = string.length - 1; i >= 0; i--) {
    reversedStr += string[i];
  }
  return reversedStr;
}


// reverseString('string')

export { stringLength, reverseString }


