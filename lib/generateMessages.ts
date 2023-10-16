function getMinError(label: string, min = 3) {
  return `${label} must contain at least ${min} characters`;
}

function getMaxError(label: string, max = 255) {
  return `${label} must contain at most ${max} characters`;
}

function getRequiredError(label: string) {
  return `${label} is required`;
}

export { getMinError, getMaxError, getRequiredError };
