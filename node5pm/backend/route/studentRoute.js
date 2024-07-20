const express=require("express");
const route=express.Router();
const stuControllers =require("../controller/studentController");


route.post("/stusave",stuControllers.stuDataSave);
route.get("/stuDisplay",stuControllers.stuDisplay);



module.exports=route;