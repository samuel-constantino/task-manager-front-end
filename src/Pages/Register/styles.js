const mainContainerPkg = {
  component: 'main',
  maxWidth: 'xs',
};
const boxLoginPkg = {
  marginTop: 8,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};
const avatarPkg = {
  m: 1,
  bgcolor: 'primary.main',
};
const titlePkg = {
  component: 'h1',
  variant: 'h5',
};
const boxFormPkg = {
  component: 'form',
  noValidate: true,
};
const nameFieldPkg = {
  margin: 'normal',
  required: true,
  fullWidth: true,
  id: 'name',
  label: 'Nome',
  name: 'name',
  autoFocus: true,
};
const emailFieldPkg = {
  margin: 'normal',
  required: true,
  fullWidth: true,
  id: 'email',
  label: 'Email',
  name: 'email',
};
const passwordFieldPkg = {
  margin: 'normal',
  required: true,
  fullWidth: true,
  name: 'password',
  type: 'password',
};
const buttonSubmitPkg = {
  type: 'submit',
  fullWidth: true,
  variant: 'contained',
};

module.exports = {
  mainContainerPkg,
  boxLoginPkg,
  avatarPkg,
  titlePkg,
  boxFormPkg,
  nameFieldPkg,
  emailFieldPkg,
  passwordFieldPkg,
  buttonSubmitPkg,
};
