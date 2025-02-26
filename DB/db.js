const mongoose = require("mongoose")


const dbConnect = async()=>{
    try {
        // console.log(process.env.MONGO_URL);
        await mongoose.connect(process.env.MONGO_URL).
        then((res)=>console.log("database connected successfully")).
        catch(err=>console.log(err))

    } catch (error) {
        console.log(error);
    }
}

module.exports = dbConnect;