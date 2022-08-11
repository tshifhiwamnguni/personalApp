const client = require("../config/database.config");


module.exports.getPlumbers = (req, res) => {
    const jobtype = req.params.jobtype;
    try{
    client.query(
      `SELECT * FROM serviceprovider WHERE jobtype=$1 `,
      ['plumber'],
      (error, results) => {
        if (error) {
            console.error(error);
            return res.status(500).json({
              error: "Database error",
            });
          }
          res.status(200).json(results.rows); //Return a status 200 if there is no error
      }
    );}catch(err){
        res.status(500).json({
            error: "Database error!",
          });
    }
  };
  
  module.exports.getMason = (req, res) => {
    const jobtype = req.params.jobtype;
    try{
    client.query(
      `SELECT * FROM serviceprovider WHERE jobtype=$1 `,
      ['mason'],
      (error, results) => {
        if (error) {
            console.error(error);
            return res.status(500).json({
              error: "Database error",
            });
          }
          res.status(200).json(results.rows); //Return a status 200 if there is no error
      }
    );}catch(err){
        res.status(500).json({
            error: "Database error!",
          });
    }
  };

  module.exports.getPainter = (req, res) => {
    const jobtype = req.params.jobtype;
    try{
    client.query(
      `SELECT * FROM serviceprovider WHERE jobtype=$1 `,
      ['painter'],
      (error, results) => {
        if (error) {
            console.error(error);
            return res.status(500).json({
              error: "Database error",
            });
          }
          res.status(200).json(results.rows); //Return a status 200 if there is no error
      }
    );}catch(err){
        res.status(500).json({
            error: "Database error!",
          });
    }
  };

  module.exports.getElect = (req, res) => {
    const jobtype = req.params.jobtype;
    try{
    client.query(
      `SELECT * FROM serviceprovider WHERE jobtype=$1 `,
      ['electrician'],
      (error, results) => {
        if (error) {
            console.error(error);
            return res.status(500).json({
              error: "Database error",
            });
          }
          res.status(200).json(results.rows); //Return a status 200 if there is no error
      }
    );}catch(err){
        res.status(500).json({
            error: "Database error!",
          });
    }
  };