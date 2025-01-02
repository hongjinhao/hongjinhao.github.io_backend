/*
    This file contains the logger middleware function 
    Logs all request url and method
*/
const logger = (req, res, next) => {
  console.log(req.url, req.method);
  next();
};

export default logger;
