const app=require("./app");
const connectDatabase = require("./config/database");


//setear el archivo de configuracion
const dotenv=require("dotenv");
dotenv.config({path: 'backend/config/config.env'})

//configurar base de datos
connectDatabase();

//se crea el servidor - se llama al servidor
const server=app.listen(process.env.PORT, () => {
    console.log(`Servidor iniciado en el puerto: ${process.env.PORT} en modo: ${process.env.NODE_ENV}`)
})