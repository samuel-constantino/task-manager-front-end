const validateEmail = (email) => /^[\w\-.]+@\w+\.com(\.br)?/.test(email);

const validatePassword = (password) => {
  const PASSWORD_LENGTH = 6;

  if (password.length >= PASSWORD_LENGTH) return true;
  return false;
};

module.exports = { validateEmail, validatePassword };
