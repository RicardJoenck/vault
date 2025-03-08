const validatePhoneNumber = (number: string) => {
  const phoneRegex = /^\+1\d{10}$/;

  if (!phoneRegex.test(number)) {
    return "Please enter a valid Canadian phone number starting with +1";
  }

  return true;
};

export { validatePhoneNumber };
