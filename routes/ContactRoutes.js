const express = require("express");
const {
  getContacts,
  createContacts,
  deleteContacts,
  getOneContact,
  updateContacts,
} = require("../controllers/ContactController");
const router = express.Router();

router.route("/").get(getContacts).post(createContacts);

router
  .route("/:id")
  .get(getOneContact)
  .put(updateContacts)
  .delete(deleteContacts);

// router.route("/").post(createContacts);

// router.route("/:id").put(updateContacts);

// router.route("/:id").delete(deleteContacts);

module.exports = router;
