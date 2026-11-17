const AppError = require("./appError");

class NotFoundError extends AppError{
    constructor(properties, resource){
        let notFoundProperties = "";
        properties.forEach(property => notFoundProperties+= `${property} , `); //join all properties into string with , as separator
        super(`Not able to find properties : ${notFoundProperties} for the resources ${resource}`, 404); // super() is used to call the constructor of the parent class
    }
}
module.exports = NotFoundError