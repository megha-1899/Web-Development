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
    "mongodb+srv://padsalgimegha:wCjzmdLVW4ImhTIH@cluster0.qh7ns.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
).then(()=>console.log("Connected to database"))
.then(()=>{
    app.listen(5000);
}).catch((err)=>console.log(err));
