const express = require("express"); // import express library
const cors = require("cors"); //import cors module
const app = express(); //Initialize express



var corsOptions = {
    origin: ['http://localhost:4200', 'https://survapp.netlify.app'],
  methods: ["GET", "POST", "DELETE", "PUT", "PATCH"]


 
};// only allow that listerning address to connnect to the database



const bodyParser = require('body-parser')

require("./App/config/dotenv.config"); //Import your environmental configs
const client = require ("./App/config/database.config")
const routes = require("./App/routes/routers")


app.use(express.json());  // to support JSON-encoded
app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true }));
// simple route  // to support JSON-encoded 
// app.use( cors({origin: true, credentials: true}) )
 
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

const port = process.env.PORT || 7074;
 
// const hostURL = '0.0.0.0'; //Fault-Tolerant listening port for Backend. Picks available dynamic IPv4 and IPv6 addresses of the local host

client.connect((err) =>{ // Connect to the Database
   if (err) {
      console.log(err )
     }
  else {
    console.log("Data logging initialised");
   }
});

app.get("/", (req, res) =>{
    res.status(200).send("Sever Initialized and Online. Ready to take OFF!");
});

app.use("/api", routes) // User endpoint API

app.listen(port , () =>{  
   console.log(`Here we go, All Engines started at ${port}.`) 
})
