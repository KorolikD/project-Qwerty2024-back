const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../../models');
const { HttpError } = require('../../helpers');

const { JWT_SECRET_KEY } = process.env;

const registration = async (req, res) => {
  const { name, email, password } = req.body;

  const user = await User.findOne({ email });
  if (user) {
    throw HttpError(409, 'Email in use');
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({ name, email, password: hashedPassword });

  const payload = {
    id: newUser._id,
  };

  const token = jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: '23h' });
  await User.findByIdAndUpdate(newUser._id, { token });

  res.status(201).json({ user: { name, email }, token });
};

module.exports = registration;
