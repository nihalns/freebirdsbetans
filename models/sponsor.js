import mongoose from "mongoose";

const sponsorSchema= new mongoose.Schema({
    s_id:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true,
    },
    phoneno:{
        type: Number,
        required: true,
        unique: true,
        min:10
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
},
{timestamps:true}
);
export default mongoose.model("Sponsor",sponsorSchema);