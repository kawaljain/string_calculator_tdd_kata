class StringCalculator {
  add(numbers) {
    if (!numbers) {
      return 0;
    }

    const getSplitNumber = (numbers, splitBy = ",", hasNew = false) => {
      let list = numbers.split(splitBy);
      if (splitBy === ",") {
        return list;
      } else {
        for (let i = 0; i < list.length; i++) {
          if (list[i].match(/,/g)) {
            let temp = list[i];
            list.splice(i, 1);
            list = [...list, ...getSplitNumber(temp)];
          }
        }
        return list;
      }
    };

    let splitBy = numbers.match(/\n/g) ? "\n" : ",";
    const numArray = getSplitNumber(numbers, splitBy);

    if (numArray.length <= 1) {
      return parseInt(numbers);
    }
    let sum = 0;
    sum = numArray.reduce((x, y) => parseInt(x) + parseInt(y), sum);
    return sum;
  }
}
// let calculator = new StringCalculator();
// calculator.add("1\n2,3");
export default StringCalculator;
