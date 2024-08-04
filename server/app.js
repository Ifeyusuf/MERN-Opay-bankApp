const express = require("express");
const app = express();

const methodOverride = require("method-override");
const cookieParser = require("cookie-parser");
const cors = require("cors");

require("dotenv").config();
require("express-async-errors");

// connectDB
const connectDB = require("./db/connect");

// router
const userRouter =require("./routes/user");
const adminRouter =require("./routes/admin");

const errorHandlerMiddleware = require("./middleWare/error-handler");
const notFoundMiddleware = require("./middleWare/not-found");

const port = process.env.PORT || 8080


// static middleware
app.use(express.static("public"));
app.use(express.urlencoded({extended: false})); 
app.use(express.json());
app.use(methodOverride("_method"));
app.use(cookieParser());

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

// routes
app.use("/api/v1/", userRouter);
app.use("/api/v2/", adminRouter);


app.use(errorHandlerMiddleware);
app.use(notFoundMiddleware);


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, ()=> console.log(` Server is listening on port ${port}.... `) );
    } catch (error) {
        console.log(" error ");
    }
}

start();
