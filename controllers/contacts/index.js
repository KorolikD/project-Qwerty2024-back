const { ctrlWrapper } = require("../../helpers");
const getAllContacts = require("./getAllContacts");
const getOneContact = require("./getOneContact");
const createContact = require("./createContact");
const updateContact = require("./updateContact");
const updateStatusContact = require("./updateStatusContact");
const deleteContact = require("./deleteContact");

module.exports = {
  getAllContacts: ctrlWrapper(getAllContacts),
  getOneContact: ctrlWrapper(getOneContact),
  createContact: ctrlWrapper(createContact),
  updateContact: ctrlWrapper(updateContact),
  updateStatusContact: ctrlWrapper(updateStatusContact),
  deleteContact: ctrlWrapper(deleteContact),
};
