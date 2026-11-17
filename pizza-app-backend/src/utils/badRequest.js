const AppError = require("./appError");

class BadRequest extends AppError{
    constructor(invalidParams){
        let message = invalidParams.join('\n');
        super(`The request has following invalid parameters:\n${message}`, 400);
    }
}

module.exports = BadRequest;