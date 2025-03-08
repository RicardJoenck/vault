import { ProfileDetails } from "../types/profile-details";

const validateCorporationNumber = async (number: string) => {
  try {
    const response = await fetch(
      `https://fe-hometask-api.dev.vault.tryvault.com/corporation-number/${number}`
    );

    const { valid, message } = await response.json();
    if (!response.ok) {
      throw new Error(message || "An unexpected error occurred");
    }

    return valid;
  } catch (error) {
    if (error instanceof Error) {
      return error.message;
    }
    return `Unknown API error: ${error}`;
  }
};

const submitProfile = async (profile: ProfileDetails) => {
  try {
    const response = await fetch(
      "https://fe-hometask-api.dev.vault.tryvault.com/profile-details",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(profile),
      }
    );

    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.message || "An unexpected error occurred");
    }

    return { type: "success" as const, message: "Submission was successful" };
  } catch (error) {
    if (error instanceof Error) {
      return { type: "error" as const, message: error.message };
    }
    return { type: "error" as const, message: `Unknown API error: ${error}` };
  }
};

export { submitProfile, validateCorporationNumber };
