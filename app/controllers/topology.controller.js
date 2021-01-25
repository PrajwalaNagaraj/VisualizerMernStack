const db = require("../models");
const Topology = db.topology;

// Retrieve all Overlay information from the database, given interval 
exports.findAll = (req, res) => {
  const intervalId = req.params.interval;

  console.log(intervalId);
  Topology.find()
    .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving tutorials."
    });
  });
  /*Topology.aggregate([{ "$match" : { "_id" : intervalId} }, 
                     {$lookup: { 
                            from:, 
                            localField:"_id", 
                            foreignField:"_id", 
                            as:"overlays_for_interval" 
                            } 
                     },  
                     { "$project": { 
                            "_id": 0, 
                            "Version":1, 
                            "overlays_for_interval.NumberOfEdges":1, 
                            "overlays_for_interval.NumberOfNodes":1, 
                            "OverlayId":1
                            }
                    }
    ]).exec((err, result) => {
        if(err) {
            console.log( result );
            res.status(404).send({ message: "Not found Overlay with intervalId " + intervalId });
        }else{
            res.status(200).send(result);
        }
    });*/
    /*mongo.model('topology').aggregate([
        { "$match" : { "_id" : intervalId} }, 
        {$lookup: { 
                from:"overlays", 
                localField:"_id", 
                foreignField:"_id", 
                as:"overlays_for_interval" 
                } 
         },  
         { 
            "$group": {
                "_id" : null,
                "allTags": {"$addToSet": "$overlays_for_interval" }
                }
        }
]).exec(function(err, result){

console.log( result );
res.status(200).send(result);

});*/
    
    
    
    /*then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Overlay with intervalId " + intervalId });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Overlay with interval=" + intervalId });
      });*/
};