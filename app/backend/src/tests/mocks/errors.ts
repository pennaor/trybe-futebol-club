const createError = (name: string, message: string) => {
  const error = new Error(message);
  error.name = name;
  return error;
};

const fkContraintError = createError('SequelizeForeignKeyConstraintError', '');

export {
  fkContraintError,
}
