const User = require("../models/user");

module.exports.getUsers = (req, res) => {
  User.find({})
    .then((users) => res.status(200).send(users))
    .catch((err) => {
      console.error(err);
      return res
        .status(500)
        .send({ message: "An error has occurred on the server" });
    });
};
module.exports.getUserById = (req, res) => {
  User.findById(req.params.userId)
    .orFail()
    .then((foundUser) => res.status(200).send(foundUser))
    .catch((err) => {
      console.error(err);
      if (err.name === "CastError") {
        return res.status(400).send({ message: "Invalid user ID" });
      }
      if (err.name === "DocumentNotFoundError") {
        return res.status(404).send({ message: "User not found" });
      }
      return res
        .status(500)
        .send({ message: "An error has occurred on the server" });
    });
};
module.exports.createUser = (req, res) => {
  const { name, avatar } = req.body;
  User.create({ name, avatar })
    .then((newUser) => res.status(201).send(newUser))
    .catch((err) => {
      console.error(err);
      if (err.name === "ValidationError") {
        return res.status(400).send({ message: "Invalid user data" });
      }
      return res
        .status(500)
        .send({ message: "An error has occurred on the server" });
    });
};
