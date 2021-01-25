# VisualizerMernStack
Visualizer for EdgeVPN.io

Steps followed to create the project:

1) npm init -> Creates a package.json file to initialize the Node.js APP.

2) npm install express mongoose body-parser cors --save -> express for backend, mongoose for mongodb ODM, body-parser to parse the request and create the 
req.body object and CORS provides Express middleware to enable CORS with various options.

3) Created the "app" folder structure and "server.js" file at root.

4) app/config/db.config.js -> represents the URL to connect to mongoDB.

5) app/models -> folder contains -index.js -> necessary db initializations and export of libraries.
                                 -overlays.model.js -> Mongoose model representation for the underlying database collection ("overlays")
                                 -topology.model.js -> Mongoose model representation for the underlying database collection ("topology")
                                 
6) app/controllers -> Has the logic for /GET operations over "evio_db" -overlays.controller.js -> findAll() function gets all the intervals (_id of overlays) 
                                                                                                  on route : "http://localhost:8080/intervals"
                                                                       -topology.controller.js -> findAll() function gets the overlay information from 
                                                                                                  aggregation of "overlays" and "topology" collection for the 
                                                                                                  passed "interval" on route : "http://localhost:8080/overlays/$interval"
                                                                                                  
7) app/routes -> handles the client http requests -overlays.routes.js -> calls the corresponding controller function on right syntax(overlays.controller.js).
                                                  -topology.routes.js -> calls the corresponding controller function on right syntax(topology.controller.js).
                                                  
8) server.js -> responsible to start the root route and connects to local mongodb configured.

To run:

node server.js 


                                                                                                  
