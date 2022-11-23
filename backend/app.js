const express=require("express");
const app = express();
const errorMiddleware= require("./middleware/errors")
const cookieParser= require("cookie-parser")
const bodyParser = require('body-parser')
const fileUpload = require('express-fileUpload')
const path = require("path")

//Seteamos archivo de configuracion
if(process.env.NODE_ENV !== "PRODUCTION") require("dotenv").config({path:'backend/config/config.env'})


//Uso de constantes importadas
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(fileUpload());
 
//Importar rutas
const productos=require("./routes/products")
const usuarios=require("./routes/auth")
const ordenes=require("./routes/orders")

if(process.env.NODE_ENV === "PRODUCTION"){
    app.use(express.static(path.join(__dirname,'../frontend/build')))

    app.get("*", (req,res) => {
        res.sendFile(path.resolve(__dirname,'../frontend/build/index.html'))
    })
}

app.use('/api',productos) //Sujeto a decision (ruta del navegador)
app.use('/api',usuarios)
app.use('/api',ordenes)
 
//MiddleWares para manejar errores
app.use(errorMiddleware)
 
module.exports=app