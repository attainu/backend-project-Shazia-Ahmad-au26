const Register = require('../services/signUpService');
const LoginService = require('../services/loginService')

const router = require('express').Router();

router.post("/register",Register.create);
router.post("/login",LoginService.login);

module.exports = router;
