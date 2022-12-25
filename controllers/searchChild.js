import search_child from "../models/search_child.js"
import { createError } from "../utils/error.js"

//create search_child
export const createSearchChild = async (req,res,next)=>{
    try{
        const searchChild= new search_child({
          sc_id:req.params.id,
          name:req.body.name,
          image:req.body.image,  
          sc_id:req.prams.id,
          ...req.body,
        })
        await searchChild.save()
        res.status(200).json(searchChild);
    }catch{err}{
      next(createError(400,"Failed to create Search child"))
    }
};

//update search_child
export const updateSearchChild = async (req,res,next) =>{
  try{
      const searchChild = await search_child.findByIdAndUpdate(req.params.id)
      res.status(200).json(searchChild);
  }catch(err){
      next(createError(400,"Failed to update search child."))
  }
};

//delete search_child
export const deleteSearchChild = async (req,res,next) =>{
  try{
      const searchChild = await search_child.findByIdAndDelete(req.params.id)
      res.status(200).json("deleted");
  }catch(err){
      next(createError(400,"Failed to delete search child."))
  }
};

//view search_child
export const SearchChild = async (req,res,next) =>{
  try{
      const searchChild = await search_child.findById(req.params.id)
      res.status(200).json(searchChild);
  }catch(err){
      next(createError(400,"Failed to get search child."))
  }
};

//view search_children
export const SearchChilds = async (req,res,next) =>{
  try{
      const searchChild = await search_child.find()
      res.status(200).json(searchChild);
  }catch(err){
      next(createError(400,"Failed to get search child."))
  }
};