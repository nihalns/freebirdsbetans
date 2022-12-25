import mongoose from "mongoose"

const serviceSchema = new mongoose.Schema({
    se_id:{
        type: String,
        required: true,
    },
    o_id:{
        type: String,
        required: true,
    },
    address:{
        type: String,
        required: true,
    },
    service:{
        type: String,
        required: true,
    },
    details:{
        type: String,
    },
},
{timestamps:true}
);
export default mongoose.model("Service",serviceSchema);