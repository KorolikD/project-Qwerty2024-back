const jwt = require('jsonwebtoken');
const { HttpError } = require('../helpers');
const { User } = require('../models');

const { JWT_SECRET_KEY } = process.env;

const authenticate = async (req, res, next) => {
  const { authorization = '' } = req.headers;

  const [type = 'Bearer', token] = authorization.split(' ');

  if (type !== 'Bearer' || !token) {
    next(HttpError(401, 'Not authorized'));
    return;
  }

  try {
    const { id } = jwt.verify(token, JWT_SECRET_KEY);

    const user = await User.findById(id);
    if (!user || !user.token || user.token !== token) {
      next(HttpError(401, 'Not authorized'));
    }

    req.user = user;
    next();
  } catch {
    next(HttpError(401, 'Not authorized'));
  }
};

module.exports = authenticate;
