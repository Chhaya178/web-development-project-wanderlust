const mongoose = require("mongoose");
const initData = require("../init/data.js");
const Listing = require("../models/listing.js");



const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
.then((res)=>{
    console.log("connected to db");
})
.catch((err)=>{
    console.log(err);
});

async function main(){
    mongoose.connect(MONGO_URL);
}

const initDB = async ()=>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({
        ...obj, 
        owner: "664ac3975e5c340f9530796b" 
    }));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
}



initDB();

