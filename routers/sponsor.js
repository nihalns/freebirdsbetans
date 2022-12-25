import express from "express";
import { createSpon, deleteSpon, getAllSpon, updateSpon } from "../controllers/sponsor.js";
import { verifyOrg, verifyOrgWithId, verifyUser } from "../utils/verifyToken.js";

const route = express.Router();

//create sponsor
route.post("/:id",verifyOrg,createSpon)

//delete sponsor
route.delete("/:id",verifyOrgWithId,deleteSpon)

//update sponsor
route.put("/:id",verifyOrgWithId,updateSpon)

//view sponsor
route.get("/getSpon/:id",getSpon)

//view sponsors
route.get("/",getAllSpon)

export default route;