const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();


//Middlewares
app.use(express.json());
app.use(cors());
app.use("/books", router);


mongoose.connect(
    "mongodb+srv://meghapadsalgi:mT5EWz2RhWEZVQZl@cluster0.rkidlq5.mongodb.net/myDB?retryWrites=true&w=majority"
    ).then(()=>console.log("Connected to database")).then(()=> {
    app.listen(5000);
}).catch((err)=>console.log(err));

//mT5EWz2RhWEZVQZl