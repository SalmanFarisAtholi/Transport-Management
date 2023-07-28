const express = require("express");
const router = express.Router();

const {
  index,
  loads,
  companies,
  vehchles,
  addLoad,
  addLorry,
  addCompany,
  addCompanyDetailes,
  addLoadDetailes,
  deleteLoad,
  editCompany,
  editCompanyDetailes,
  addLorryDetailes,
  deleteLorry,
  more,
  addEntry,
  postAddEntry,
  deleteEntry
} = require("../controllers/controller");

router.get("/", index);
router.get("/loads", loads);
router.get("/companies", companies);
router.get("/vehchles", vehchles);
router.get("/addLorry", addLorry);
router.get("/addLoad", addLoad);
router.get("/addCompany", addCompany);
router.get("/deleteLoad/:id",deleteLoad)
router.get("/editCompany/:id",editCompany)
router.get("/deleteLorry/:id",deleteLorry)
router.get("/more/:id",more)
router.get("/addEntry/:id",addEntry)
router.get("/more/deleteEntry/:ucode/:id/:profit",deleteEntry)



router.post("/addCompanyDetailes",addCompanyDetailes)
router.post("/addLoadDetailes",addLoadDetailes)
router.post("/editCompanyDetailes/:id",editCompanyDetailes)
router.post("/addLorryDetailes",addLorryDetailes)
router.post("/postAddEntry/:id",postAddEntry)


module.exports = router;
