import { describe } from "mocha";
import { expect } from "chai";
import StringCalculator from "./../index.js";

describe("String Calculator", () => {
  it("should 0 when given an empty string", () => {
    let calculator = new StringCalculator();
    expect(calculator.add("")).to.equal(0);
  });

  describe("Returns the number itself if only one number is provided", () => {
    it("return 1, when given number is 1", () => {
      let calculator = new StringCalculator();
      expect(calculator.add("1")).to.equal(1);
    });
  });
});
