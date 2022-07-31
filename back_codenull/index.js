const express=require("express");
const config=require("./src/config/config");
const morgan=require("morgan");

//Variable del servidor de la aplicacion
const app=express();

//Middlewares
app.use(require('./src/routers/products.router'));
app.use(morgan("dev"));


//Iniciamos el servidor http
app.listen(config.PORT,config.HOST,()=>{
    console.log(`Server On in ${config.HOST}:${config.PORT}`);
});