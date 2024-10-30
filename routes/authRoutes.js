const express = require("express")
const {protect} = require("../middlewares/Protect")


const router =  express.Router();

const{registeruser , loginuser , logoutuser ,  getuserProfile }  = require("../controllers/authcontroller")

router.post("/register" ,  registeruser);
router.post("/login" , loginuser);
router.post("/logout" , logoutuser);
router.get("/profile" , protect ,  getuserProfile);

module.exports = router; 