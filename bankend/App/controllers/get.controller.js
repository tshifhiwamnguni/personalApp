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

  ///////////// Requests

  module.exports.getPending = (req, res) => {

    try{
    client.query(
      `SELECT * FROM request WHERE status=$1 `,
      ['pending'],
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

  module.exports.getActive = (req, res) => {

    try{
    client.query(
      `SELECT * FROM request WHERE status=$1 `,
      ['active'],
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

  module.exports.getComplete = (req, res) => {
    try{
    client.query(
      `SELECT * FROM request WHERE status=$1 `,
      ['complete'],
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
  
  module.exports.getRejected = (req, res) => {
    try{
    client.query(
      `SELECT * FROM request WHERE status=$1 `,
      ['rejected'],
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


module.exports.getPendingSp = (req, res) => {
  const psmail = req.params.psemail;
  try{
    client.query(
      `SELECT * FROM request WHERE psemail=$1 `,
      [psmail],
      (error, results) => {
        //returns all surveys from surveys and orders them in ascending order
        if (error) {
          //checks for errors and return them
          console.log( error); //Throw the error in the terminal
        }
        res.status(200).json(results.rows); //Return a status 200 if there is no error
      }
    );}catch(err){
      res.status(500).json({
          error: "Database error!",
        });
  }
  };
