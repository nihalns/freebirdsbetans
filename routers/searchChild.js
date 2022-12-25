import express from "express";
import { createSearchChild, SearchChild, SearchChilds, updateSearchChild } from "../controllers/searchChild.js";
import { verifyOrg } from "../utils/verifyToken.js";

const route = express.Router();

//create search child
route.post("/:id",createSearchChild)

//update search child
route.put("/:id",verifyOrg,updateSearchChild)

//view search child
route.get("/:id",SearchChild)

//view search children
route.get("/",SearchChilds)

export default route;