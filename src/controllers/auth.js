const authService = require("../services/auth");
const Authenticate = async (req, res) => {
  const { email, password } = req.body;

  return await authService
    .Authenticate({ email, password })
    .then((authenticationResponse) => {
      return res.status(200).json(authenticationResponse);
    })
    .catch((err) => {
      return res.status(400).json(err);
    });
};

module.exports.Authenticate = Authenticate;
