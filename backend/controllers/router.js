const Register = require('../services/signUpService');

const router = require('express').Router();

router.post("/register",Register.create);

module.exports = router;
