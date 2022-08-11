const client = require("../config/database.config");

module.exports.updateStatus = (req, res) => {
    const id = req.params.id;
    const { status } = req.body;
    client.query(`UPDATE request SET status = $1 WHERE id= $2`,[status, id],(error) => {
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