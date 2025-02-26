const express = require("express")
const { addUser, loginUser, messFormRendering, logoutUser } = require("../controllers/authControllers")
const authMiddleware = require("../middlewares/authMiddleware")
const messFormAccessMiddleware = require("../middlewares/messFormAccessMiddleware")

const router = express.Router()


router.post("/register",addUser)
router.post("/login",loginUser)
router.get("/auth",authMiddleware,(req,res)=>{
    // res.status(200).json({
    //     success: true,
    //     msg:"Done"
    // })
})
router.get("/messFormRendering",messFormAccessMiddleware,messFormRendering)
router.post("/logout",logoutUser)

module.exports = router;