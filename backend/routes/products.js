const express=require("express")
const router=express.Router();

const {getProducts, newProduct, getProductById, updateProduct, deleteProduct} = require("../controllers/productsController") //traemos la respuesta json desde el controlador

router.route('/productos').get(getProducts) //Establecemos desde que ruta queremos ver elgetProducts
//Establecemos la ruta
router.route('/producto/nuevo').post(newProduct);
router.route('/producto/:id').get(getProductById); //Ruta para consultar por ID
router.route('/producto/:id').put(updateProduct); //Creacion de la ruta de actualizacion
router.route('/producto/:id').delete(deleteProduct); //Creacion ruta de eliminacion por ID



module.exports=router; //para que se vea desde afuera 