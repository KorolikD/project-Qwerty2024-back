module.exports = (err, req, res, next) => {
  const { status = 500, message = "Server error", code, name } = err;

  if (name === "MongoServerError" && code === 11000) {
    return res.status(409).json({ message });
  }

  if (name === "ValidationError") {
    return res.status(400).json({ message });
  }

  res.status(status).json({ message });
};
