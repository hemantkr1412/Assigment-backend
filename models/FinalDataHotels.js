import mongoose from "mongoose";

const Schema = mongoose.Schema;

const hotel_typeSchema = new Schema({
    total_resort_hotel:{type:Number},
    total_city_hotel:{type:Number},

});

const bookings_yearSchema = new Schema({
    total_bookings_year_2015:{type:Number},
    total_bookings_year_2016:{type:Number},
    total_bookings_year_2017:{type:Number},
});

const bookings_monthSchema = new Schema({
    total_bookings_month_jan:{type:Number},
    total_bookings_month_feb:{type:Number},
    total_bookings_month_mar:{type:Number},
    total_bookings_month_apr:{type:Number},
    total_bookings_month_may:{type:Number},
    total_bookings_month_jun:{type:Number},
    total_bookings_month_jul:{type:Number},
    total_bookings_month_aug:{type:Number},
    total_bookings_month_sep:{type:Number},
    total_bookings_month_oct:{type:Number},
    total_bookings_month_nov:{type:Number},
    total_bookings_month_dec:{type:Number},
});


const mediumSchema = new Schema({
    total_medium_online:{type:Number},
    total_medium_offline:{type:Number},
    total_medium_agent:{type:Number},
    total_medium_partnerShip:{type:Number},

});



const FinalDataHotelsSchema = new Schema({
    numOfData:{type:Number},
    hotel_type:hotel_typeSchema,
    total_cancelled:{type:Number},
    bookings_year:bookings_yearSchema,
    bookings_month:bookings_monthSchema,
    medium:mediumSchema

});

export default mongoose.model('FinalDataHotel',FinalDataHotelsSchema);