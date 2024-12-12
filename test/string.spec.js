import { describe } from "mocha";
import { expect } from "chai";
import StringCalculator from "./../index.js";

describe("String Calculator", () => {
  let calculator;
  beforeEach(() => {
    calculator = new StringCalculator();
  });
  it("should 0 when given an empty string", () => {
    expect(calculator.add("")).to.equal(0);
  });

  describe("Returns the number itself if only one number is provided", () => {
    it("return 1, when given number is 1", () => {
      expect(calculator.add("1")).to.equal(1);
    });
  });
});
