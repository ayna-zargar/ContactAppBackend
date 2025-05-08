//get all contacts
const getContacts = (req, res) => {
  res.status(200).json({ message: "get all contacts" });
};

//create contact
const createContacts = (req, res) => {
  res.status(200).json({ message: "create contacts" });
};

//update contact
const updateContacts = (req, res) => {
  res.status(200).json({ message: `Update contact for ${req.params.id}` });
};

//delete contact
const deleteContacts = (req, res) => {
  res.status(200).json({ message: `Delete contact for ${req.params.id}` });
};

//delete contact
const getOneContact = (req, res) => {
  res.status(200).json({ message: `Get contact for ${req.params.id}` });
};

module.exports = {
  getContacts,
  createContacts,
  updateContacts,
  deleteContacts,
  getOneContact,
};
