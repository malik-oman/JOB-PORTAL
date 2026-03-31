import express from 'express'
import cookieParser from 'cookie-parser';
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDB } from './config/connectDB.js';
dotenv.config();

// ROUTER FILES==========================
import authRouter from './routes/authRoutes.js';
import userRouter from './routes/userRoutes.js'

const app = express()

const allowedOrigins = ["http://localhost:5173"];

//midlleware=======================
app.use(express.json())
app.use(cors({origin: allowedOrigins, credentials:true}));
app.use(cookieParser());

// CONNECTION DATABASE=======================
connectDB();

//API ENDPOINTS====================
app.get("/",(req,res)=>{
  res.send("helo")
})

// API ROUTES=========================
app.use("/uploads", express.static("uploads"))

app.use("/auth", authRouter);
app.use("/user", userRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT,() => {
  console.log(`SERVER IS RUNING ON PORT ${PORT}`)
})