import mongoose from "mongoose";

const inmateSchema= new mongoose.Schema({
   i_id:{
     type: String,
     required: true
   },
   name:{
    type: String,
    required: true,
    unique: true
   },
   age:{
    type: Number,
   },
   gender:{
    type: String,
    required: true
   },
   image:{
    type: [String],
    required: true
   },
   dob:{
    type: Date
   },
},
{timestamps:true}
);
export default mongoose.model("Inmate",inmateSchema);