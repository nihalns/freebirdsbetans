import express from "express";
import { createInm, deleteInm, getAllInm, updateInm, getInm } from "../controllers/inmate.js";
import { verifyOrg, verifyOrgWithId, verifyUser } from "../utils/verifyToken.js";

const route = express.Router();

//create inmate
route.post("/:id",verifyOrg,createInm)

//delete inmate
route.delete("/:id",verifyOrgWithId,deleteInm)

//update inmate
route.put("/:id",verifyOrgWithId,updateInm)

//view inmate
route.get("/getSpon/:id",getInm)

//view inmate
route.get("/",getAllInm)

export default route;