const students = require("../Models/model");


exports.register= async (req,res)=>{
    console.log("Inside register controller");
    const {firstName,lastName,address,email,gender,mobile,password,dateofBirth,course}=req.body
    console.log(req.body);
    try{
        const existingStudent=await students.findOne({email})
        if(existingStudent){
            res.status(406).json("This Student  Already Exist!!")
        }else{
            const newStudent=new students({
                firstName,lastName,address,email,gender,mobile,password,dateofBirth,course
            })
            await newStudent.save()
            res.status(200).json(newStudent)
        }
    }catch(err){
        res.status(401).json(err)
    }
}

exports.getAllStudents = async (req,res)=>{
    try{
        const allStudents=await students.find()
        if(allStudents){
         res.status(200).json(allStudents)
        } else{
         res.status(406).json("No Students Found!!!")
        }
     }catch(err){
         res.status(401).json(err)
     }
}