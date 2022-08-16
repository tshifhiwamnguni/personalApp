const client = require("../config/database.config");



//create a request
module.exports.addRequest = async (req, res) => {
    const {
      description ,spname, useremail,psemail, phonenumber
    } = req.body;

    try {
 
      
  
        client.query(
          `INSERT INTO request ( status , description ,sp2name, useremail,psemail, phonenumber) VALUES ($1,$2,$3,$4, $5, $6)`,
          ["pending" , description ,spname, useremail,psemail, phonenumber],
          (err) => {
            if (err) {
              console.error(err);
              return res.status(500).json({
                error: "Database error",
              });
            } else {
   
              res
                .status(200)
                .send({ message: "added to database" });
            }
          }
        );
      
    } catch (err) {
      console.log(err);
      res.status(500).json({
        error: "Database error while creating a  request!",
      });
    }
  };
  