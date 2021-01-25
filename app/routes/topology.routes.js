module.exports = app => {
    const topology = require("../controllers/topology.controller.js");
  
    var router = require("express").Router();
  
    // Retrieve all Intervals
    router.get("/overlays/:interval", topology.findAll);
  
  
    app.use('/', router);
  };