
const logger = (req, res, next) => {
    console.log(req.url, req.method);
    next();
};

export default logger;