class StringCalculator {
  add(numbers) {
    if (!numbers) {
      return 0;
    }
    const numArray = numbers.split(",");
    if (numArray.length <= 1) {
      return parseInt(numbers);
    }
    let sum = 0;
    sum = numArray.reduce((x, y) => parseInt(x) + parseInt(y), sum);
    return sum;
  }
}

export default StringCalculator;
