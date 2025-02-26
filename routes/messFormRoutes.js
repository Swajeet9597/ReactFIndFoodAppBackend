const express = require("express");
const { saveMessData, messDetailsData, menuDetailsData, priceDetailsData, timeDetailsData, saveMessDetails, deleteImage, deleteImageMess, saveMenuDetails, savePriceDetails, saveTimeDetails } = require("../controllers/messFormControllers");
const getMessDataMiddleware = require("../middlewares/getMessDataMiddleware");
const router = express.Router()


router.post("/messData",saveMessData)


router.get("/messDetailsData",getMessDataMiddleware,messDetailsData)
router.get("/menuDetailsData",getMessDataMiddleware,menuDetailsData)
router.get("/priceDetailsData",getMessDataMiddleware,priceDetailsData)
router.get("/timeDetailsData",getMessDataMiddleware,timeDetailsData)

router.post("/saveMessDetails",saveMessDetails)
router.post("/saveMenuDetails",saveMenuDetails)
router.post("/savePriceDetails",savePriceDetails)
router.post("/saveTimeDetails",saveTimeDetails)

router.delete("/deleteImage",getMessDataMiddleware, deleteImage)
router.delete("/deleteImageMess",getMessDataMiddleware, deleteImageMess)


module.exports = router;    