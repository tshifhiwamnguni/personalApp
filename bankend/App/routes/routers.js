const express = require("express");
const router = express.Router();
const  register  = require("../controllers/register.controllers");
const login = require("../controllers/login.controllers");

//const mail = require("../controllers/sendmail.controllers");
//const SendmailTransport = require("nodemailer/lib/sendmail-transport");
//const { sendMail } = require("../controllers/sendmail.controllers");

const create = require('../controllers/create.controller')
const deleter = require('../controllers/delete.controller')
const update = require('../controllers/update.controller')
const get = require('../controllers/get.controller')



//create 
router.post("/addrequest", create.addRequest);

router.post("/registeruser",register.registerUser)
router.post("/registersp",register.registerServiceProvider)


// read
router.get('/loginuser',login.loginUser)
router.get('/loginsp', login.loginsp)

router.get('/getplumbers',get.getPlumbers)
router.get('/getelects',get.getElect)
router.get('/getmasons',get.getMason)
router.get('/getpainters',get.getPainter)

//update
router.put('/updaterequest/:id', update.updateStatus )

//delete
router.delete('/deleterequest/:spname',deleter.deleteRequest)




module.exports = router;
