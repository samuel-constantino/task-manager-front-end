const mainContainerPkg = {
  component: 'main',
  maxWidth: 'xs',
};
const boxCreateTaskPkg = {
  marginTop: 8,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};
const titleTaskPkg = {
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
  label: 'Name',
  name: 'name',
  autoFocus: true,
};
const descriptionFieldPkg = {
  margin: 'normal',
  required: true,
  fullWidth: true,
  name: 'description',
  label: 'Descrição',
  type: 'description',
  id: 'description',
};
const statusFieldPkg = {
  margin: 'normal',
  required: true,
  fullWidth: true,
  name: 'status',
  label: 'Status',
  type: 'status',
  id: 'status',
};
const priorityFieldPkg = {
  margin: 'normal',
  required: true,
  fullWidth: true,
  name: 'priority',
  label: 'Prioridade',
  type: 'priority',
  id: 'priority',
};
const buttonSubmitPkg = {
  type: 'submit',
  fullWidth: true,
  variant: 'contained',
};

module.exports = {
  mainContainerPkg,
  boxCreateTaskPkg,
  titleTaskPkg,
  boxFormPkg,
  nameFieldPkg,
  descriptionFieldPkg,
  statusFieldPkg,
  priorityFieldPkg,
  buttonSubmitPkg,
};
