module.exports = app => {
    const overlays = require("../controllers/overlays.controller.js");
  
    var router = require("express").Router();
  
    // Retrieve all Intervals
    router.get("/intervals", overlays.findAll);
  
  
    app.use('/', router);
  };