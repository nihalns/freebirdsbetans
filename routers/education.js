import express from "express";
import { createEdu, deleteEdu, updateEdu, getEdu, getAllEdu } from "../controllers/education.js";
import { verifyOrg, verifyOrgWithId, verifyUser } from "../utils/verifyToken.js";

const route = express.Router();

//create education
route.post("/:id",verifyOrg,createEdu)

//delete education
route.delete("/:id",verifyOrgWithId,deleteEdu)

//update education
route.put("/:id",verifyOrgWithId,updateEdu)

//view education
route.get("/:id",getEdu)

//view educations
route.get("/",getAllEdu)

export default route;