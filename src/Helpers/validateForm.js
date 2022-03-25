const validateEmail = (email) => /^[\w\-.]+@\w+\.com(\.br)?/.test(email);

const validatePassword = (password) => {
  const PASSWORD_LENGTH = 6;

  if (password.length >= PASSWORD_LENGTH) return true;
  return false;
};

const validateName = (name) => {
  const NAME_LENGTH = 6;
  if (name.length >= NAME_LENGTH) return true;
  return false;
};

const validateDescription = (description) => {
  const DESCRIPTION_LENGTH = 6;

  if (description.length >= DESCRIPTION_LENGTH) return true;
  return false;
};

const validateStatus = (status, options) => options.includes(status);

const validateTask = (task) => {
  const { name, description, status } = task;
  statusOptions = ['In progress'];
  return !(
    validateName(name)
    && validateDescription(description)
    && validateStatus(status, statusOptions)
  );
};
module.exports = {
  validateEmail,
  validatePassword,
  validateName,
  validateDescription,
  validateStatus,
  validateTask,
};
