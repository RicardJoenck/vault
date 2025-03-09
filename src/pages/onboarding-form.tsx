import styled from "styled-components";
import {
  Input,
  Button,
  Card,
  ErrorMessage,
  Ribbon,
  Field,
  Form,
  Header,
  Layout,
  Main,
} from "../components";
import { ArrowRight } from "react-feather";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { ProfileDetails } from "../types/profile-details";
import {
  submitProfile,
  validateCorporationNumber,
} from "../services/vault-service";
import { validatePhoneNumber } from "../utils/validate-phone-number";

const CardHeader = styled.h2`
  font-size: 2rem;
  font-weight: 200;
`;

const Label = styled.label`
  font-size: 0.8rem;
  font-weight: 600;
`;

function OnboardingForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileDetails>({ mode: "onBlur" });
  const [ribbon, setRibbon] = useState<
    { type: "success" | "error"; message: string } | undefined
  >();

  const onSubmit: SubmitHandler<ProfileDetails> = async (data) => {
    const response = await submitProfile(data);
    setRibbon(response);
  };

  return (
    <Layout>
      <Header>Step 1 of 5</Header>
      <Main>
        <Card>
          {ribbon !== undefined && <Ribbon {...ribbon} />}
          <CardHeader style={{ alignSelf: "center" }}>
            Onboarding Form
          </CardHeader>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <section style={{ display: "flex", gap: "1.2em" }}>
              <Field>
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  {...register("firstName", {
                    required: "First Name is required",
                    maxLength: {
                      message: "First Name should have less than 50 characters",
                      value: 50,
                    },
                  })}
                />
                {errors.firstName && (
                  <ErrorMessage>{errors.firstName.message}</ErrorMessage>
                )}
              </Field>
              <Field>
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  {...register("lastName", {
                    required: "Last Name is required",
                    maxLength: {
                      message: "Last Name should have less than 50 characters",
                      value: 50,
                    },
                  })}
                />
                {errors.lastName && (
                  <ErrorMessage>{errors.lastName.message}</ErrorMessage>
                )}
              </Field>
            </section>
            <Field>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                {...register("phone", {
                  required: "Phone Number is required",
                  validate: validatePhoneNumber,
                })}
              />
              {errors.phone && (
                <ErrorMessage>{errors.phone.message}</ErrorMessage>
              )}
            </Field>
            <Field>
              <Label htmlFor="corporationNumber">Corporation Number</Label>
              <Input
                id="corporationNumber"
                {...register("corporationNumber", {
                  required: "Corporation Number is required",
                  minLength: {
                    value: 9,
                    message: "Corporation Number should have 9 numbers",
                  },
                  maxLength: {
                    value: 9,
                    message: "Corporation Number should have 9 numbers",
                  },
                  validate: validateCorporationNumber,
                })}
              />
              {errors.corporationNumber && (
                <ErrorMessage>{errors.corporationNumber.message}</ErrorMessage>
              )}
            </Field>
            <Button type="submit">
              Submit <ArrowRight size={18} />
            </Button>
          </Form>
        </Card>
      </Main>
    </Layout>
  );
}

export { OnboardingForm };
