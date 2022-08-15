const client = require("../config/database.config");


module.exports.deleteRequest = (req, res) => {
    const requestid = req.params.requestid;
  
   try{
    client.query(`DELETE FROM request WHERE requestid = $1 `,[requestid],(error, results) => {
          if (error) {
            console.error(error);
            return res.status(500).json({
              error: "Database error",
            });
          }
          res.status(200).json({ message: "request  deleted" });
          //Return a status 200 if there is no error
        }
      );
    
   }
   catch(err){
    res.status(500).json({
        error: "Database error!",
      });
   }
  };