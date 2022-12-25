import Donation from "../models/donation.js";
import { createError } from "../utils/error.js";

//create Donation
export const createDon = async (req,res,next) => {
    try{
        const don = new Education({
            d_id:req.params.id,
            date:req.params.body,
            details:req.body.details,
        })
        await don.save();
        res.status(200).json(don);
    }catch(err){
    next(createError(404,"Falied to create Donation."))
    }
};

//update Donation
export const updateDon = async (req,res,next) => {
    try{
        const don = await Donation.findByIdAndUpdate(req.params.id)
        res.status(200).json(don);
    }catch(err){
    next(createError(404,"Falied to update Education."))
    }
};

//find Donation
export const getDon = async (req,res,next) => {
    try{
        const don = await Donation.findById(req.params.id)
        res.status(200).json(don);
    }catch(err){
    next(createError(404,"Falied to find Donation."))
    }
};

//find all Donations
export const getAllDon = async (req,res,next) => {
    try{
        const don = await Donation.find()
        res.status(200).json(don);
    }catch(err){
    next(createError(404,"Falied to find Donations."))
    }
};

//delete Donation
export const deleteDon = async (req,res,next) => {
    try{
        const don = await Donation.findByIdAndDelete(req.params.id)
        res.status(200).json(don);
    }catch(err){
    next(createError(404,"Donation deleted successfully."))
    }
};