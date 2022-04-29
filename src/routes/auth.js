var express = require("express"),
  routes = express.Router();

var AuthController = require("../controllers/auth");
var AyncAwaitUtils = require("../utils/asyncAwaitUtils");

routes.post(
  "/login",
  AyncAwaitUtils.runAsyncWrapper(AuthController.Authenticate)
);

module.exports = routes;
