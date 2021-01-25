const db = require("../models");
const Overlay = db.overlays;

// Retrieve all Intervals from the database.
exports.findAll = (req, res) => {

  Overlay.find({},{"_id":1})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving intervals."
      });
    });
};