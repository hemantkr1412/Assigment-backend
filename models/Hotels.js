import mongoose from "mongoose";

const Schema = mongoose.Schema;

const HotelSchema = new Schema({
    id:{type:Number,required:true},
    hotel:{type:String},
    is_canceled:{type:Number},
    arrival_date_year:{type:Number},
    arrival_date_month:{type:String},
    medium:{type:String},

},{collection:"hotelsdata"});

export default mongoose.model('Hoteldata',HotelSchema);