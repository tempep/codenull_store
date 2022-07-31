const express=require("express");
const conexion=require("../database");

const router=express.Router();


router.get('/',(req,res)=>{
    const result=conexion.query("INSERT INTO products SET ?",["Fernando",15000,20]);
    console.log(result);
});








module.exports=router;