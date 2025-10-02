
const patterns = {
  name: /^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$/, 
  email: /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/,
  cedula: /^[0-9]{10}$/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
};

export function validateField(input, regex) {
  if (!regex.test(input.value)) {
    input.classList.add("invalid");
    input.classList.remove("valid");
    return false;
  }
  input.classList.remove("invalid");
  input.classList.add("valid");
  return true;
}

export function validateForm(form) {
  let isValid = true;

  form.querySelectorAll("[data-validate]").forEach((input) => {
    const rule = input.dataset.validate;
    if (patterns[rule]) {
      const valid = validateField(input, patterns[rule]);
      if (!valid) isValid = false;
    }
  });

  return isValid;
}

