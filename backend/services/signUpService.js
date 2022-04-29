const userDetails = require("../models/userSchema");

class Register {
  create = async (req, res) => {
    try {
      const { name, email, password } = req.body;
      if (!email) {
        throw { message: "email is required" };
      }
      const findUser = await userDetails.find({ email });

      if (findUser.length > 0) {
        throw { message: "email is already exist" };
      }

      const response = await userDetails.create({
        name,
        email,
        password,
      });
      return res.status(201).send({
        message: "Data saved successfully",
        error: false,
        data: response,
      });
    } catch (error) {
      return res.status(400).send({ message: error.message, error: true });
    }
  };
}

module.exports = new Register();
