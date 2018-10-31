function reverseString(input) {
  const strArr = [...input];
  const revArr = strArr.reverse();
  let output = "";
    for (let i = 0; i < revArr.length; i++) {
      output += revArr[i];
    }
    return output;
}

export default reverseString;