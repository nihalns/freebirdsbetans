import mongoose from "mongoose";

const donationSchema= new mongoose.Schema({
   d_id:{
    type: String,
    required: true
   },
   o_id:{
      type:String,
      required: true
   },
   date:{
    type: Date,
    required: true
   },
   details:{ 
    type: String,
    required: true
   },

},
{timestamps:true}
);
export default mongoose.model("Donation",donationSchema);