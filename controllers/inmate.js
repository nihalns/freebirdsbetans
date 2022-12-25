import Inmate from "../models/inmate.js";
import { createError } from "../utils/error.js";

//create Inmate
export const createInm = async (req,res,next) => {
    try{
        const inm = new Inmate({
            i_id:req.params.id,
            name:req.body.name,
            age:req.body.age,
            gender:req.body.gender,
            image:req.body.image,
            dob:req.body.dob,
        })
        await inm.save();
        res.status(200).json(inm);
    }catch(err){
    next(createError(404,"Failed to create Inmate."))
    }
};

//update Inmate
export const updateInm = async (req,res,next) => {
    try{
        const inm = await Inmate.findByIdAndUpdate(req.params.id)
        res.status(200).json(inm);
    }catch(err){
    next(createError(404,"Failed to update Inmate."))
    }
};

//find Inmate
export const getInm = async (req,res,next) => {
    try{
        const inm = await Inmate.findById(req.params.id)
        res.status(200).json(inm);
    }catch(err){
    next(createError(404,"Failed to find Inmate."))
    }
};

//find all Inmates
export const getAllInm = async (req,res,next) => {
    try{
        const inm = await Inmate.find()
        res.status(200).json(inm);
    }catch(err){
    next(createError(404,"Failed to find Inmates."))
    }
};

//delete Inmate
export const deleteInm = async (req,res,next) => {
    try{
        const inm = await Inmate.findByIdAndDelete(req.params.id)
        res.status(200).json(inm);
    }catch(err){
    next(createError(404,"Inmate deleted successfully."))
    }
};