const { HttpError } = require("../../helpers");
const { Contact } = require("../../models");

const getOneContact = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findById(id);

  if (!result) {
    throw HttpError(404);
  }

  res.json(result);
};

module.exports = getOneContact;
