const stuModel=require("../model/studentModel");

const stuDataSave=async(req,res)=>{
      
    const {rollno,name,city,fees}=req.body;

    const stuData = await stuModel.create({
        rollno:rollno,
        name:name,
        city:city,
        fees:fees
       
    })
    res.status(200).send(stuData);
}
const stuDisplay=async(req,res)=>{

    const myData=await stuModel.find();

    res.status(200).json(myData);
    
}
module.exports={
   stuDataSave,
   stuDisplay
}