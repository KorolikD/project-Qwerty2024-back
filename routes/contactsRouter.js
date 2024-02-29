const contactsRouter = require("express").Router();
const {
  getAllContacts,
  getOneContact,
  deleteContact,
  createContact,
  updateContact,
  updateStatusContact,
} = require("../controllers/contacts");
const { validateBody, isValidId, authenticate } = require("../middlewares");
const {
  createContactSchema,
  updateContactSchema,
  updateStatusContactSchema,
} = require("../schemas");

contactsRouter.get("/", authenticate, getAllContacts);

contactsRouter.get("/:id", authenticate, isValidId, getOneContact);

contactsRouter.delete("/:id", authenticate, isValidId, deleteContact);

contactsRouter.post(
  "/",
  authenticate,
  validateBody(createContactSchema),
  createContact
);

contactsRouter.put(
  "/:id",
  authenticate,
  isValidId,
  validateBody(updateContactSchema),
  updateContact
);

contactsRouter.patch(
  "/:id/favorite",
  authenticate,
  isValidId,
  validateBody(updateStatusContactSchema),
  updateStatusContact
);

module.exports = contactsRouter;
