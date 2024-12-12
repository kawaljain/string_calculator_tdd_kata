class StringCalculator {
  getSplitNumber = (numbers = "", delimiters = /,|\n/) => {
    let numberList = [];

    for (let i = 0; i < numbers.length; i++) {
      if (!numbers[i].match(delimiters)) {
        numberList.push(parseInt(numbers[i]));
      }
    }
    return numberList;
  };

  add(numbers) {
    if (!numbers) {
      return 0;
    }
    let delimiters = /,|\n/;
    if (numbers.startsWith("//")) {
      let customDelimiters = numbers[2]; // always on 2 position as the requirement

      delimiters = new RegExp(`${customDelimiters}|\n`);
      numbers = numbers.slice(3);
    }

    const numArray = this.getSplitNumber(numbers, delimiters);

    if (numArray.length <= 1) {
      return parseInt(numbers);
    }

    let sum = 0;
    sum = numArray.reduce((x, y) => parseInt(x) + parseInt(y), sum);
    return sum;
  }
}

export default StringCalculator;
