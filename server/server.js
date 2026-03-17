const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

const app = express();

connectDB();

app.use(cors({
  origin:"",
  credentials:true,
  
}));
app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server running on port " + process.env.PORT);
});
