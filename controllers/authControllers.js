const User = require("../models/userModel");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");
const MessDetail = require("../models/messDetails");


const addUser = async(req,res)=>{
    try {
        
        // console.log(req.body);

        const {userId,password,role} = req.body;

        // console.log(password);

        const userExist = await User.findOne({username:userId})

        // console.log(userExist);

        if(userExist){
            return res.status(401).json({
                success:false,
                msg:"User already exists..."
            })
        }

        // console.log("nmnmnmnmnm");

        const enPass = await bcrypt.hash(password,12)

        const user = new User({
            username:userId,
            password:enPass,
            role:role
        })

        await user.save()

        res.status(200).json({
            success:true,
            msg:"User registered successfully..."
        })


    } catch (error) {
        console.log(error);
    }
}

const loginUser = async(req,res)=>{
    try {
        
        // console.log(req.body);

        const {userId,password} = req.body;

        const userExist = await User.findOne({username:userId})
        // console.log("existing  data",userExist);

        if(!userExist){
            return res.status(401).json({
                success:false,
                msg:"User is not registered..."
            })
        }

        const checkPass = await bcrypt.compare(password,userExist.password)

        // console.log("pass",checkPass);

        if(checkPass){

            const payLoad ={
                id:userExist._id,
                username:userExist.username,
                role:userExist.role
            }

            const token = await  jwt.sign(payLoad,process.env.Token_key,{expiresIn:60*60*5})

            const tokenOption = {
                httpOnly:true,
                sameSite:"lax",
                secure: true
            }

            // const tokenOption = {
            //     httpOnly :true,
            //     sameSite: "lax",
            //     secure: false
            // }




            await res.cookie("token",token,tokenOption)

            return res.status(200).json({
                success:true,
                msg:"User log in successfully...",
                data:token,
                role: userExist.role
            })
        }
            
       

    } catch (error) {
        console.log(error);
    }
}

const messFormRendering = async(req,res)=>{
    try {
        
        const data = req.data.id
        console.log("messFormRendering",data);

        const checkMessDetails = await MessDetail.findOne({userId:data})

        if(checkMessDetails){

            return res.status(401).json({
                success:false,
                msg:"Data already exists"
            })
            
        }else{
            res.status(200).json({
                success:true,
                msg:"You can access page"
            })
        }





    } catch (error) {
        console.log(error);
    }
}

const logoutUser =async(req,res)=>{
    try {
        
        res.clearCookie("token",{
            httpOnly :true,
            sameSite: "lax",
            secure: false
        })
        res.status(200).json({
            msg:"Logged out successfully",
            success: true
        })

    } catch (error) {
        console.log(error);
    }
}

module.exports = {addUser,loginUser,messFormRendering,logoutUser}