const jwt = require('jsonwebtoken')

const getMessDataMiddleware = async(req,res,next)=>{
    try {
        
        const token = req.cookies?.token

        jwt.verify(token,process.env.Token_key,(err,decode)=>{
            if(err){
                console.log(err);
            }

            req.data = decode
        })

        next()

    } catch (error) {
        console.log(error);
    }
}

module.exports = getMessDataMiddleware