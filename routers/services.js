import express from "express";
import { createServ, deleteServ, getAllServ, updateServ } from "../controllers/services.js";
import { verifyOrg, verifyOrgWithId, verifyUser } from "../utils/verifyToken.js";

const route = express.Router();

//create services
route.post("/:id",verifyOrg,createServ)

//delete services
route.delete("/:id",verifyOrgWithId,deleteServ)

//update services
route.put("/:id",verifyOrgWithId,updateServ)

//view service
route.get("/getServ/:id",getServ)

//view services
route.get("/",getAllServ)

export default route;