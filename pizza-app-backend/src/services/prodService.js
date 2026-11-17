// const createProd = require("../controllers/prodController");
const { createProduct, findProduct, deleteProduct, findAllProduct } = require("../repositories/prodRepo");
const cloudinary = require('../config/cloudConfig');
const fs = require('fs/promises');

async function newProd(prodDetails, imagePath){
    try {

        const result = await cloudinary.uploader.upload(imagePath);
        await fs.unlink(imagePath);
        const responce = await createProduct({
        ...prodDetails, 
        productImage : result.secure_url
    })
    return responce;
    } catch (error) {
        throw new Error("Product creation failed: " + error.message);
    }    
}

async function getProd(id) {    
        const response = await findProduct(id)

        if(response) return response;
        else throw {
            reason : "Product not found!",
            statusCode: 404,
        }  
    }
async function getAllProd() {    
        const response = await findAllProduct()

        if(response) return response;
        else throw {
            reason : "Product not found!",
            statusCode: 404,
        }  
}  
async function delProd(id) {    
        const response = await deleteProduct(id)

        if(response) return response;
        else throw {
            reason : "Product not deleted!",
            statusCode: 500,
        }  
}  

module.exports ={ 
    newProd,
    getProd,
    delProd,
    getAllProd
}