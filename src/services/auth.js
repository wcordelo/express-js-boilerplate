

const sampleUsers = [
  {
    name: "Safe User",
    email: "safe@example.com",
    password: "pw",
    lastLogin: "2017-09-22T21:01:13.184Z"
  },
  {
    name: "Unsafe User",
    email: "test@example.com",
    password: "pw",
    lastLogin: "2016-01-01T08:51:33.912Z"
  }
];

const authenticate = (email, password) => {
  const account = sampleUsers.find(a => a.email === email);
  if (account && account.password === password) {
    return account;
  } else {
    return null;
  }
}

const login = async (email, password) => {
  const account = authenticate(email, password);
  if (account) {
    return { success: true };
  } else {
    return {
      success: false,
      message: "The username or password you entered is invalid."
    };
  }
}

const Authenticate = async (authenticationRequest) => {
  return await login(authenticationRequest.email, authenticationRequest.password);
};

module.exports.Authenticate = Authenticate;
