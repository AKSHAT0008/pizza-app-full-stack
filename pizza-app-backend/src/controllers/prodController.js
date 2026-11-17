const {newProd, getProd, delProd, getAllProd} = require("../services/prodService");

async function createProd(req,res){
    try {
        const responce = await newProd(req.body,req.file.path);
        res.status(201).json({
            message: 'ok',
            res: responce,
            error: {}
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error',
            res: {},
            error: error.message
        })
    }
}

async function getAllProduct(req,res) {
    
    try {
        // const id = req.params.id;
        const responce = await getAllProd();
        res.status(200).json({
            message: 'ok',
            res: responce,
            error: {}
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error',
            res: {},
            error: error.message
        })
    } 
}
async function getProduct(req,res) {
    
    try {
        const id = req.params.id;
        const responce = await getProd(id);
        res.status(200).json({
            message: 'ok',
            res: responce,
            error: {}
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error',
            res: {},
            error: error.message
        })
    } 
}
async function delProduct(req,res) {
    
    try {
        const id = req.params.id;
        const responce = await delProd(id);
        res.status(200).json({
            message: 'ok',
            res: responce,
            error: {}
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error',
            res: {},
            error: error.message
        })
    } 
}
module.exports = {
    createProd,
    getProduct,
    delProduct,
    getAllProduct
} 