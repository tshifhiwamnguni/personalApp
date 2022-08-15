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



//Post 
router.post("/addrequest", create.addRequest);

router.post("/registeruser",register.registerUser)
router.post("/registersp",register.registerServiceProvider)

router.post('/loginuser',login.loginuser)
router.post('/loginsp', login.loginsp)


// read
router.get('/getpending', get.getPending)
router.get('/getactive', get.getActive)
router.get('/getcomplete', get.getComplete)
router.get('/getrejected', get.getRejected)

router.get("/getpending/:psemail", get.getPendingSp);

router.get('/getplumbers',get.getPlumbers)
router.get('/getelects',get.getElect)
router.get('/getmasons',get.getMason)
router.get('/getpainters',get.getPainter)

//update
router.put('/updaterequest/:requestid', update.updateStatus )

//delete
router.delete('/deleterequest/:requestid',deleter.deleteRequest)




module.exports = router;
