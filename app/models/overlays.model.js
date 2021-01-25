module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        _id: Number, //interval
        NumberOfNodes: Number,
        NumberOfEdges: Number,
        OverlayId: String
      },
      { timestamps: false }
    );
  
    //To represent "_id" as interval for front end 
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.interval = _id;
      return object;
    });
  
    const Overlay = mongoose.model("overlays", schema);
    return Overlay;
  };

