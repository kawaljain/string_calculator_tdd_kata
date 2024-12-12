class StringCalculator {
  add(numbers) {
    if (!numbers) {
      return 0;
    }
    const numArray = numbers.split(",");
    if (numArray.length <= 1) {
      return parseInt(numbers);
    }
  }
}

export default StringCalculator;
