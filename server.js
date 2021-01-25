const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//connec to db
const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
    //Start debugging log
    db.mongoose.connection.db.listCollections().toArray(function (err, names) {
      console.log(names); 
    });
    db.mongoose.model('topology').find()
    .then(data => {
      console.log(data);
    }).catch(err => {
      console.log("Some error occurred while retrieving data.");
    });//end debugging log
  
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Visualizer application." });
});

//routing logic for GET all intervals
require("./app/routes/overlays.routes")(app);
//routing logic for GET overlay information given interval
require("./app/routes/topology.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
