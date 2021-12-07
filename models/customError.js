class CustomError {
    statusCode
    message


    constructor(statusCode,message){
        this.message = message,
        this.statusCode = statusCode
    }
}
const internalServerError = new CustomError(500, 'internal Server Error');

module.exports = {CustomError,internalServerError}