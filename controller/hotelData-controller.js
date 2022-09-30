import Hotels from "../models/Hotels";



export const getCancelationRate = async (req, res, next) => {
  let cancelled_hotelBookings;
  let total_hotelBookings;
  try {
    cancelled_hotelBookings = await Hotels.find({
      is_canceled:0
      });

    total_hotelBookings = await Hotels.find({});

  } catch (err) {
    console.log(err);
  }

  let total_cancelled=cancelled_hotelBookings.length;
  let total_bookings=total_hotelBookings.length;
  let total_uncancelled=total_bookings-total_cancelled;
  return res.status(200).json({total_hotelBookings:total_bookings,cancelled_hotelBookings:total_cancelled,total_uncancelled:total_uncancelled});
};

export const getYearData = async (req, res, next) => {
  let yearData2020;
  let yearData2021;
  let yearData2022;
  try {
    yearData2022 = await Hotels.find({
      arrival_date_year: 2022,
    });
    yearData2021 = await Hotels.find({
      arrival_date_year: 2021,
    });
    yearData2020 = await Hotels.find({
      arrival_date_year: 2020,
    });
  } catch (err) {
    console.log(err);
  }
  const count_year2020 = yearData2020.length;
  const count_year2021 = yearData2021.length;
  const count_year2022 = yearData2022.length;

  return res.status(200).json({ total_Data:count_year2020+count_year2021+count_year2022,year2020:count_year2020,year2021:count_year2021,year2022:count_year2022 });


};


export const getMonthData = async (req, res, next) => {
  let monthData= [];
  try {
    monthData[0] = await Hotels.find({
      arrival_date_month: "Januray",
    });
    monthData[1] = await Hotels.find({
      arrival_date_month: "February",
    });
    monthData[2] = await Hotels.find({
      arrival_date_month: "March",
    });
    monthData[3] = await Hotels.find({
      arrival_date_month: "April",
    });
    monthData[4] = await Hotels.find({
      arrival_date_month: "May",
    });
    monthData[5] = await Hotels.find({
      arrival_date_month: "June",
    });
    monthData[6] = await Hotels.find({
      arrival_date_month: "July",
    });
    monthData[7] = await Hotels.find({
      arrival_date_month: "August",
    });
    monthData[8] = await Hotels.find({
      arrival_date_month: "September",
    });
    monthData[9] = await Hotels.find({
      arrival_date_month: "October",
    });
    monthData[10] = await Hotels.find({
      arrival_date_month: "November",
    });
    monthData[11] = await Hotels.find({
      arrival_date_month: "December",
    });

  } catch (err) {
    console.log(err);
  }
  
  return res.status(200).json({
    total_Data: monthData[0].length+monthData[1].length+monthData[2].length+monthData[3].length+monthData[4].length+monthData[5].length+monthData[6].length+monthData[7].length+monthData[8].length+monthData[9].length+monthData[10].length+monthData[11].length,
    janMonth: monthData[0].length,
    febMonth: monthData[1].length,
    marMonth: monthData[2].length,
    aprMonth: monthData[3].length,
    mayMonth: monthData[4].length,
    junMonth: monthData[5].length,
    julMonth: monthData[6].length,
    augMonth: monthData[7].length,
    sepMonth: monthData[8].length,
    octMonth: monthData[9].length,
    novMonth: monthData[10].length,
    decMonth: monthData[11].length

    
    });

};

export const hotelLocation = async (req, res, next) => {
  let hotelLocationDataResort;
  let hotelLocationDataCity;
  try {
    hotelLocationDataResort = await Hotels.find({
      hotel: "Resort Hotel",
    });
    hotelLocationDataCity = await Hotels.find({
      hotel: "City Hotel",
    });
  } catch (err) {
    console.log(err);
  }
  const count_resort = hotelLocationDataResort.length;
  const count_city = hotelLocationDataCity.length;
  const total=count_resort+count_city;
  return res.status(200).json({total:total,resort:count_resort,city:count_city}); 
};

export const Medium = async (req, res, next) => {
  let mediumDataOnline;
  let mediumDataOffline;
  let mediumDataAgent;
  let mediumDataPartenShip;
  try {
    mediumDataOnline = await Hotels.find({
      medium: "Online",
    });
    mediumDataOffline = await Hotels.find({
      medium: "Offline",
    });
    mediumDataAgent = await Hotels.find({
      medium: "Agent",
    });
    mediumDataPartenShip = await Hotels.find({
      medium: "Partnership",
    });
  } catch (err) {
    console.log(err);
  }
  
  return res.status(200).json({
   total:mediumDataOnline.length+mediumDataOffline.length+mediumDataAgent.length+mediumDataPartenShip.length,
    online:mediumDataOnline.length,
    offline:mediumDataOffline.length,
    agent:mediumDataAgent.length,
    partnership:mediumDataPartenShip.length
  }); 
};







