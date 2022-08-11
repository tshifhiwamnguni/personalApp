const client = require("../config/database.config");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

/**
 * saves user details into DB guests table or hosts table
 * @param {Object} req { firstname, lastname, email, phone, password, userType}
 * @param {*} res
 * Reister function
 **/


module.exports.registerUser = async (req, res) => {
  const { firstname, lastname, email, phonenumber, password } = req.body;
  try {

    const data = await client.query(
      `SELECT * FROM users WHERE email= $1;`,
      [email]
    ); //Check if user exist

    const regData = data.rows;
    if (regData.length != 0) {
      return res.status(400).json({
        error: "Email already there, No need to register again.",
      });
    } else {
      bcrypt.hash(password, 10, (err, hash) => {
        //encryting the password so that it can't be hacked.
        const survusers = {
          firstname,
          lastname,
          email,
          phonenumber,
          password: hash,
         
        };
        var flag = 1;
        //Inserting data to Database

        client.query(
          `INSERT INTO users (firstname, lastname, email, phonenumber, password) VALUES ($1,$2,$3,$4,$5)`,
          [
            survusers.firstname,
            survusers.lastname,
            survusers.email,
            survusers.phonenumber,
            survusers.password
          ],
          (err) => {
            if (err) {
              flag = 0; //If user is not inserted to database assign flag as 0/false.
              console.error(err);
              return res.status(500).json({
                error: "Database error",
              });
            } else {
              flag = 1;
              res
                .status(200)
                .send({ message: "User added to database, not verified" });
            }
          }
        );
        if (flag) {
          const token = jwt.sign(
            {
              //Signing a jwt token
              email: survusers.email,
            },
            process.env.SECRET_KEY
          );
          survusers.token = token;
        }
      });
    }
  } catch {

    res.status(500).json({
      error: "Database error while registring user!", //Database connection error
    });
  }
};


module.exports.registerServiceProvider = async (req, res) => {
  const {  firstname,lastname,email,jobtype,city,avgrate,phonenumber,password } = req.body;
  try {

    const data = await client.query(
      `SELECT * FROM serviceprovider WHERE email= $1;`,
      [email]
    ); //Check if user exist

    const regData = data.rows;
    if (regData.length != 0) {
      return res.status(400).send({
        message: "Email already there, No need to register again.",
      })
    } else {
      bcrypt.hash(password, 10, (err, hash) => {
        //encryting the password so that it can't be hacked.
        const survusers = {
          firstname,
          lastname,
          email,
          jobtype,
          city,
          avgrate,
          phonenumber,
          password: hash,
         
        };
        var flag = 1;
        //Inserting data to Database

        client.query(
          `INSERT INTO serviceprovider (firstname,lastname,email,jobtype,city,avgrate,phonenumber,password) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)`,
          [
            survusers.firstname,
            survusers.lastname,
            survusers.email,
            survusers.jobtype,
            survusers.city,
            survusers.avgrate,
            survusers.phonenumber,
            survusers.password
          ],
          (err) => {
            if (err) {
              flag = 0; //If user is not inserted to database assign flag as 0/false.
              console.error(err);
              return res.status(500).json({
                error: "Database error",
              });
            } else {
              flag = 1;
              res
                .status(200)
                .send({ message: "User added to database, not verified" });
            }
          }
        );
        if (flag) {
          const token = jwt.sign(
            {
              //Signing a jwt token
              email: survusers.email,
            },
            process.env.SECRET_KEY
          );
          survusers.token = token;
        }
      });
    }
  } catch {

    res.status(500).json({
      error: "Database error while registring user!", //Database connection error
    });
  }
};