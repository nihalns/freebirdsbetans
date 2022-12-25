import mongoose from "mongoose";

const searchchildSchema= new mongoose.Schema({
    sc_id:{
        type:String,
        required: true
    },
    name:{
        type:String,
    },
    image:{
        type:[String],
        required: true
    },

},
{timestamps:true}
);
export default mongoose.model("SearchChild",searchchildSchema);