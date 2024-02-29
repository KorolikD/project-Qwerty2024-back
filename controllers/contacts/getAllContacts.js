const { Contact } = require("../../models");

const getAllContacts = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 10, favorite } = req.query;

  const skip = (page - 1) * limit;

  if (favorite === "true" || favorite === "false") {
    const result = await Contact.find({ owner, favorite });
    res.json(result);
    return;
  }

  const result = await Contact.find({ owner }, null, {
    skip,
    limit,
  });

  res.json(result);
};

module.exports = getAllContacts;
