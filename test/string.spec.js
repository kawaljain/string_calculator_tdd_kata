import { describe } from "mocha";
import { expect } from "chai";

describe("String Calculator", () => {
  it("should 0 when given an empty string", () => {
    let calculator = new StringCalculator();
    expect(calculator.add("")).to.equal(0);
  });
});
