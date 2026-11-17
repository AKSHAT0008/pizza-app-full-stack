const Prod = require("../schema/productSchema");



async function createProduct(prodDetails){
    try {
        const newProd = await Prod.create(prodDetails);
        return newProd;
    } catch (error) {
        console.log(error.message);
        
    }
}

async function findProduct(id) {
    try {
        const responce = await Prod.findById(id);
        return responce;
    } catch (error) {
        console.log(error.message);
    }
}
async function findAllProduct() {
    try {
        const responce = await Prod.find();
        return responce;
    } catch (error) {
        console.log(error.message);
    }
}
async function deleteProduct(id) {
    try {
        const responce = await Prod.findByIdAndDelete(id);
        return true;
    } catch (error) {
        console.log(error.message);
    }
}


module.exports = {
    createProduct, findProduct, deleteProduct, findAllProduct
}