import { describe, expect, it } from "vitest";
import { validatePhoneNumber } from "./validate-phone-number";

describe("validatePhoneNumber", () => {
  it("returns true for valid Canadian phone number", () => {
    expect(validatePhoneNumber("+11234567890")).toBe(true);
  });

  it("returns an error message for a number without +1", () => {
    expect(validatePhoneNumber("1234567890")).toBe(
      "Please enter a valid Canadian phone number starting with +1"
    );
  });

  it("returns an error message for a number with incorrect length", () => {
    expect(validatePhoneNumber("+1123456789")).toBe(
      "Please enter a valid Canadian phone number starting with +1"
    );
  });

  it("returns an error message for a number with extra digits", () => {
    expect(validatePhoneNumber("+112345678901")).toBe(
      "Please enter a valid Canadian phone number starting with +1"
    );
  });

  it("returns an error message for a number with invalid characters", () => {
    expect(validatePhoneNumber("+1abcdefghij")).toBe(
      "Please enter a valid Canadian phone number starting with +1"
    );
  });
});
