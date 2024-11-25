const mongoose = require("mongoose");

// create model for contacts
let contactModel = mongoose.Schema(
  {
    first: String,
    last: String,
    phone: String,
    email: String,
  },
  {
    collection: "contacts",
  }
);
module.exports = mongoose.model("Contact", contactModel);
