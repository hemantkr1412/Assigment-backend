import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRouter from "./routes/user-routes";
import hotelRouter from "./routes/hotel-routes";
import dotenv from "dotenv";
   

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/hotelsdata", hotelRouter);
app.get("/", (req, res) => {
    res.send("Welcome to Hotel Booking API");
});


const PORT = process.env.PORT || 5000;
const url = process.env.MONGODB_URL;
mongoose.connect("mongodb+srv://hemantkumar:Hemant12345@cluster0.jmyz7uv.mongodb.net/databasehotel?retryWrites=true&w=majority"
)
.then(() => app.listen(PORT))
.then(() => console.log("Connected to Database and Listening To Localhost 4000"))
.catch((err) => console.log(err));

