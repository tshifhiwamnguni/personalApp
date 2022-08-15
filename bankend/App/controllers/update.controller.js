const client = require("../config/database.config");

module.exports.updateStatus = (req, res) => {
    const requestid = req.params.requestid;
    const { status } = req.body;
    client.query(`UPDATE request SET status = $1 WHERE requestid= $2`,[status, requestid],(error) => {
        if (error) {
            console.error(error);
            return res.status(500).json({
              error: "Database error",
            });
          }
          res.status(200).json({ message: "new status " + status})
      }
    );
  };