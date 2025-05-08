const express = require("express");
const {
  getContacts,
  createContacts,
  deleteContacts,
  getOneContact,
  updateContacts,
} = require("../controllers/ContactController");
const router = express.Router();

router.route("/").get(getContacts);

router.route("/:id").get(getOneContact);

router.route("/").post(createContacts);

router.route("/:id").put(updateContacts);

router.route("/:id").delete(deleteContacts);

module.exports = router;
