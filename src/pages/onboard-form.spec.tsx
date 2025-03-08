import { render, screen } from "@testing-library/react";
import UserEvent, { userEvent } from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { OnboardingForm } from "./onboarding-form";

describe("OnboardingForm", () => {
  it("shows ribbon with success message after successful form submission", async () => {
    render(<OnboardingForm />);

    const firstNameInput = screen.getByRole("textbox", { name: /First Name/i });
    await UserEvent.type(firstNameInput, "John");
    const lastNameInput = screen.getByRole("textbox", { name: /Last Name/i });
    await UserEvent.type(lastNameInput, "Doe");
    const phoneInput = screen.getByRole("textbox", { name: /Phone Number/i });
    await UserEvent.type(phoneInput, "+11234567890");
    const corporationNumberInput = screen.getByRole("textbox", {
      name: /Corporation Number/i,
    });
    await UserEvent.type(corporationNumberInput, "123456789");

    await UserEvent.click(screen.getByRole("button", { name: /Submit/i }));

    expect(screen.getByText(/Submission was successful/i)).toBeInTheDocument();
  });

  it("displays required error message when submitting empty form", async () => {
    render(<OnboardingForm />);

    await userEvent.click(screen.getByRole("button", { name: "Submit" }));

    expect(screen.getByText(/First Name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Last Name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Phone Number is required/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Corporation Number is required/i)
    ).toBeInTheDocument();
  });

  it("displays long name error message when submitting form", async () => {
    render(<OnboardingForm />);

    const longName = "This is a very long name that will fail validation!!";
    const firstNameInput = screen.getByRole("textbox", { name: /First Name/i });
    await UserEvent.type(firstNameInput, longName);
    const lastNameInput = screen.getByRole("textbox", { name: /Last Name/i });
    await UserEvent.type(lastNameInput, longName);

    await userEvent.click(screen.getByRole("button", { name: "Submit" }));

    expect(
      screen.getByText(/First Name should have less than 50 characters/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Last Name should have less than 50 characters/i)
    ).toBeInTheDocument();
  });
});
