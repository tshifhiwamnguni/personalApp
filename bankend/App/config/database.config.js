const {Client} = require("pg");
// const client = new Client(process.env.DB);

 const client = new Client({
     connectionString:"postgres://nyktwnvpohxwpm:867b2dbb3f054d453e023a453016ac0bc559f10fa9d22e1c3ecfadd75c53f588@ec2-34-225-159-178.compute-1.amazonaws.com:5432/d7et04ebb4j6mf",
     ssl:{
        require: true,
         rejectUnauthorized: false //allows external  access to database when using nodejs
     }
 });

module.exports = client;