//const { Collection, default: mongoose } = require("mongoose");

const mongoose = require("mongoose");

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
