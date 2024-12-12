class StringCalculator {
  getSplitNumber = (numbers = "") => {
    let numberList = [];
    let regexMatch = /,|\n/;
    for (let i = 0; i < numbers.length; i++) {
      if (!numbers[i].match(regexMatch)) {
        numberList.push(parseInt(numbers[i]));
      }
    }
    return numberList;
  };

  add(numbers) {
    if (!numbers) {
      return 0;
    }

    const numArray = this.getSplitNumber(numbers);
    if (numArray.length <= 1) {
      return parseInt(numbers);
    }

    let sum = 0;
    sum = numArray.reduce((x, y) => parseInt(x) + parseInt(y), sum);
    return sum;
  }
}

export default StringCalculator;
