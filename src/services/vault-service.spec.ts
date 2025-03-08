import { test, expect, describe } from "vitest";
import { validateCorporationNumber, submitProfile } from "./vault-service";

describe("validateCorporationNumber", () => {
  test("should return true for a valid corporation number", async () => {
    const result = await validateCorporationNumber("validNumber");
    expect(result).toEqual(true);
  });

  test("should return false for an invalid corporation number", async () => {
    const result = await validateCorporationNumber("invalidNumber");
    expect(result).toEqual("Invalid corporation number");
  });
});

describe("submitProfile", () => {
  test("should return success message for valid profile submission", async () => {
    const validProfile = {
      firstName: "John",
      lastName: "Doe",
      phone: "+11234567890",
      corporationNumber: "123456789",
    };
    const result = await submitProfile(validProfile);

    expect(result.type).toEqual("success");
    expect(result.message).toEqual("Submission was successful");
  });

  test("should return error message for invalid profile submission", async () => {
    const invalidProfile = {
      firstName: "Jane",
      lastName: "Smith",
      phone: "invalidPhone",
      corporationNumber: "987654321",
    };
    const result = await submitProfile(invalidProfile);

    expect(result.type).toEqual("error");
    expect(result.message).toEqual("Invalid phone number");
  });
});
