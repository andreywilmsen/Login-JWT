require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../model/model");
const validation = require("./validation");
let salt = 14;

let userController = {
  register: async (req, res) => {
    const { error } = validation.registerValidation(req.body);
    if (error) return res.status(401).send(error.message);

    let userVerified = await User.findOne({ email: req.body.email });
    if (userVerified) return res.status(401).send("Email already exists");
    try {
      let user = new User({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, salt),
      });
      user.save();
      res.send("User registered");
    } catch (err) {
      console.log(err);
    }
  },
  login: async (req, res) => {
    const { error } = validation.loginValidation(req.body);
    if (error) return res.status(401).send(error.message);

    let userFinded = await User.findOne({ email: req.body.email });
    if (!userFinded) return res.status(401).send("Email or password wrong!");
    if (bcrypt.compare(req.body.password, userFinded.password) === false)
      return res.status(401).send("Email or password wrong!");
    try {
      let token = jwt.sign(
        { email: req.body.email, password: req.body.password },
        process.env.TOKEN_SECRET
      );
      res.header("authorization-token", token);
      res.send("User logged");
    } catch (err) {
      console.log(err);
    }
  },
  edit: async (req, res) => {
    const { error } = validation.editValidation(req.body);
    if (error) return res.status(401).send(error.message);

    let userAdmin = jwt.verify(
      req.header("authorization-token"),
      process.env.TOKEN_SECRET
    );
    if (userAdmin.admin === false)
      return res.status(401).send("User not adminstrator");

    let findedUser = await User.findOne({ email: req.body.email });
    if (!findedUser) return res.status(401).send("Email wrong");
    try {
      await findedUser.updateOne({
        name: req.body.name,
        password: bcrypt.hashSync(req.body.password, salt),
      });
      res.send("User updated");
    } catch (err) {
      console.log(err);
    }
  },

  auth: async (req, res, next) => {
    let token = req.header("authorization-token");
    if (!token) res.status(401).send("Access denied");
    try {
      let validation = jwt.verify(token, process.env.TOKEN_SECRET);
      req.user = validation;
      next();
    } catch (err) {
      console.log(err);
    };
  },
};

module.exports = userController;
