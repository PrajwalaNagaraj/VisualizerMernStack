const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.overlays = require("./overlays.model.js")(mongoose);
db.topology = require("./topology.model.js")(mongoose);

module.exports = db;
