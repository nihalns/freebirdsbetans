import Services from "../models/services.js";
import { createError } from "../utils/error.js";

//create Services
export const createServ = async (req,res,next) => {
    try{
        const serv = new Services({
            se_id:req.params.id,
            address:req.body.address,
            service:req.body.service,
            details:req.body.details,
        })
        await serv.save();
        res.status(200).json(serv);
    }catch(err){
    next(createError(404,"Failed to create Services."))
    }
};

//update Services
export const updateServ = async (req,res,next) => {
    try{
        const serv = await Services.findByIdAndUpdate(req.params.id)
        res.status(200).json(serv);
    }catch(err){
    next(createError(404,"Falied to update Services."))
    }
};

//find Service
export const getServ = async (req,res,next) => {
    try{
        const serv = await Services.findById(req.params.id)
        res.status(200).json(serv);
    }catch(err){
    next(createError(404,"Failed to find Service."))
    }
};

//find all Services
export const getAllServ = async (req,res,next) => {
    try{
        const serv = await Services.find()
        res.status(200).json(serv);
    }catch(err){
    next(createError(404,"Failed to find Services."))
    }
};

//delete Services
export const deleteServ = async (req,res,next) => {
    try{
        const serv = await Services.findByIdAndDelete(req.params.id)
        res.status(200).json(serv);
    }catch(err){
    next(createError(404,"Services deleted successfully."))
    }
};