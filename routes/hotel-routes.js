import express from "express";
import { getCancelationRate } from "../controller/hotelData-controller";
import { getYearData } from "../controller/hotelData-controller";
import { getMonthData } from "../controller/hotelData-controller";
import { hotelLocation } from "../controller/hotelData-controller";
import { Medium } from "../controller/hotelData-controller";

const hotelRouter = express.Router();

hotelRouter.get("/cancelation", getCancelationRate);
hotelRouter.get("/year", getYearData);
hotelRouter.get("/month", getMonthData);
hotelRouter.get("/location", hotelLocation);
hotelRouter.get("/medium", Medium);

export default hotelRouter;
