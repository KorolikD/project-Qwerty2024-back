const { User } = require('../../models');

const logout = async (req, res) => {
  await User.findByIdAndUpdate(req.user._id, { token: '' });
  res.status(200).json({ message: 'Logout success' });
};

module.exports = logout;
