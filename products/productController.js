const express = require("express");
const app = express();
var jsonProducts = require("../product.json");

/*const getProduct = () =>{
   console.log("Producto List", jsonProducts);
   
}*/ 

const getProductById  = (id) => {

}

const updateProduct = (id) => {

}

const deleteProduct = () => {

}

exports.productController = (req) => {
  console.log("REQ:", req);
  if(req == "getProduct"){
    return jsonProducts;
    //var datos = getProduct();
  }else if(req == "updateProduct"){

  }
}