import { describe } from "mocha";
import { expect } from "chai";
import StringCalculator from "./../index.js";

describe("String Calculator", () => {
  it("should 0 when given an empty string", () => {
    let calculator = new StringCalculator();
    expect(calculator.add("")).to.equal(0);
  });
});
