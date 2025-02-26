const mongoose = require("mongoose")

const messDetailsSchema = mongoose.Schema({
    userId: {
        type:String
    },

    messName :{
        type:String
    },
    address : {
                    shopNumber:{
                        type:Number
                    },
                    area:{
                        type:String
                    },
                    city:{
                        type:String
                    },
                    pincode:{
                        type:Number
                    },
                    landmark:{
                        type:String
                    }
              },
    contact: {
                    mobileNumber:{
                        type:Number
                    },
                    email:{
                        type:String
                    }
             },
    license: {
                    licenseNumber:{
                        type:String
                    },
                    licenseImage:{
                        type:String
                    }
             },
    foodType:{
        type:String
    },
    messImages:[{

        type:String
    }
    ]

})



const MessDetail = mongoose.model("MessDetail", messDetailsSchema)

module.exports = MessDetail;