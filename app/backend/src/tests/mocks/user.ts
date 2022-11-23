const admin = {
  id: 1,
  username: '_gus_',
  role: 'admin',
  email: 'gus@admin.com',
  password: 'secret_do_gus', 
}

const user = {
  id: 2,
  username: 'Ronaldinho',
  role: 'user',
  email: 'ronaldinho@tfc.com',
  password: 'secret_do_ronaldinho', 
};

const validCredentials = {
  admin: {
    email: admin.email,
    password: admin.password
  },
  user: {
    email: user.email,
    password: user.password
  }
};

const tokenLength = 156;

export {
  admin,
  user,
  validCredentials,
  tokenLength
};
