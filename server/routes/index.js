var express = require("express");
var router = express.Router();
let Contact = require("../model/contact.js");

// home page
router.get("/", function (req, res, next) {
  res.render("index", { title: "Home" });
});

// contact list page
router.get("/list", async (req, res, next) => {
  try {
    const contact_list = await Contact.find();
    res.render("list", {
      title: "Contacts",
      contact_list: contact_list,
    });
  } catch (err) {
    console.error(err);
    res.render("error", {
      title: "Error",
      message: "Error on the server",
      error: err,
    });
  }
});

module.exports = router;
