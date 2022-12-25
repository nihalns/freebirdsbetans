import express from "express";
import { createDon, deleteDon, getAllDon, updateDon } from "../controllers/donation.js";
import { verifyOrg, verifyOrgWithId, verifyUser } from "../utils/verifyToken.js";

const route = express.Router();

//create donation
route.post("/:id",verifyOrg,createDon)

//delete donation
route.delete("/:id",verifyOrgWithId,deleteDon)

//update donation
route.put("/:id",verifyOrgWithId,updateDon)

//view donation
route.get("/getDon/:id",getDon)

//view donation
route.get("/",getAllDon)

export default route;