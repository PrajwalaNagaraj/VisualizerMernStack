module.exports = mongoose => {
    /* "_id" : 128945.4567,"OverlayId" : "A1A111A","NodeName" :  "nd-001","Version" : "21.3.0.58", "PeerId": "a100002feb6040628e5fb7e70b04f002", 
    "EdgeId": "b0acbf3b235a49d1b3b1ca8cf63a356a", "CreatedTime": 1609190943.4206235, "ConnectedTime": 1609190945.9387763, 
    "State": "CEStateConnected", "Type": "CETypeSuccessor", "TapName": "tnl-a100002", "MAC": "0ADECECA4E1D", 
    "Stats": [{'best_conn': true, 'local_candidate': 'Cand[:2495472402:1:udp:2122260223:172.18.0.3:55979:local::0:_001EVIOICEUFRAG:_00000001EVIOICEPASSWORD:1:0:0]', 'new_conn': false, 'receiving': true, 'recv_bytes_second': 0, 'recv_ping_requests': 26, 'recv_ping_responses': 26, 'recv_total_bytes': 1744, 'remote_candidate': 'Cand[:738296951:1:udp:2122260223:172.18.0.2:38209:local::0:_001EVIOICEUFRAG:_00000001EVIOICEPASSWORD:0:0:0]', 'rtt': 0, 'sent_bytes_second': 0, 'sent_discarded_packets': 0, 'sent_ping_requests_before_first_response': 1, 'sent_ping_requests_total': 26, 'sent_ping_responses': 26, 'sent_total_bytes': 1002, 'sent_total_packets': 2, 'state': 2, 'timeout': false, 'writable': true}] })
    */
    var schema = mongoose.Schema(
      {
        _id: Number,//interval
        OverlayId: String,
        NodeName: String,
        Version: String,
        PeerId: String,
        EdgeId: String,
        CreatedTime: Number,
        ConnectedTime: Number,
        State: String,
        Type: String,
        TapName: String,
        MAC: String,
        Stats: Array
      },
      { timestamps: false }
    );
  
    //To represent "_id" as interval for front end 
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.interval = _id;
      return object;
    });
  
    const Topology = mongoose.model("topology", schema);
    return Topology;
  };