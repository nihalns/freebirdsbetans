import Sponsor from "../models/sponsor.js";
import { createError } from "../utils/error.js";

//create Sponsor
export const createSpon = async (req,res,next) => {
    try{
        const spon = new Sponsor({
            s_id:req.params.id,
            name:req.body.name,
            address:req.body.address,
            phoneno:req.body.phoneno,
            email:req.body.email,
        })
        await spon.save();
        res.status(200).json(spon);
    }catch(err){
    next(createError(404,"Failed to create Sponsor."))
    }
};

//update Sponsor
export const updateSpon = async (req,res,next) => {
    try{
        const spon = await Sponsor.findByIdAndUpdate(req.params.id)
        res.status(200).json(spon);
    }catch(err){
    next(createError(404,"Falied to update Sponsor."))
    }
};

//find Sponsor
export const getSpon = async (req,res,next) => {
    try{
        const spon = await Sponsor.findById(req.params.id)
        res.status(200).json(spon);
    }catch(err){
    next(createError(404,"Failed to find Sponsor."))
    }
};

//find all Sponsors
export const getAllSpon = async (req,res,next) => {
    try{
        const spon = await Sponsor.find()
        res.status(200).json(spon);
    }catch(err){
    next(createError(404,"Failed to find Sponsors."))
    }
};

//delete Donation
export const deleteSpon = async (req,res,next) => {
    try{
        const spon = await Sponsor.findByIdAndDelete(req.params.id)
        res.status(200).json(spon);
    }catch(err){
    next(createError(404,"Sponsor deleted successfully."))
    }
};