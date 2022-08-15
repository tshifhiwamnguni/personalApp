const client = require("../config/database.config");



//create a request
module.exports.addRequest = async (req, res) => {
    const {
      description ,spname, useremail,psemail, phonenumber
    } = req.body;

    try {
      const data = await client.query("SELECT * FROM request WHERE spname= $1", [spname]);
      const regData = data.rows;
      if (regData.length != 0) {
        return res.status(400).json({
          error: "youve already made a request to this handyman",
        });
      } else {
      
  
        client.query(
          `INSERT INTO request ( status , description ,spname, useremail,psemail, phonenumber) VALUES ($1,$2,$3,$4, $5, $6)`,
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
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({
        error: "Database error while creating a  request!",
      });
    }
  };
  