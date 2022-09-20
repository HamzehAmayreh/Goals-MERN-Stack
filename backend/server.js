const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000; // access the port from .env file or 5000
const connectDB = require("./config/db");
const { errorHandler } = require("./middleware/errorMiddleware");

const app = express();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goalRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler);
app.listen(port, () => console.log(`server running on port ${port}`));
