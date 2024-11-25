var express = require("express");
var router = express.Router();
let Contact = require("../model/contact.js");

// delete contact from mongodb using object id
router.post("/delete", async (req, res, next) => {
  try {
    await Contact.findByIdAndDelete(req.body.id);
    res.redirect("/list");
  } catch (err) {
    console.error(err);
    res.render("error", {
      title: "Error",
      message: "Error on the server",
      error: err,
    });
  }
});

//create new contact with post body values
router.post("/create", async (req, res, next) => {
  try {
    var { first, last, phone, email } = req.body;
    new_contact = new Contact({
      first,
      last,
      phone,
      email,
    });
    await new_contact.save();
    res.redirect("/list");
  } catch (err) {
    console.error(err);
    res.render("error", {
      title: "Error",
      message: "Error on the server",
      error: err,
    });
  }
});

// edit contact with post body values using object id
router.post("/edit", async (req, res, next) => {
  try {
    var { id, first, last, phone, email } = req.body;
    await Contact.findByIdAndUpdate(id, { first, last, phone, email });
    res.redirect("/list");
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
