import http from 'http';

const PORT = process.env.PORT || 8080;
const db = { "likeCount": 10 };

// Middleware functions
const logger = (req, res, next) => {
    console.log(req.url, req.method);
    next();
};

const jsonMiddleware = (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
};

const corsMiddleware = (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === 'OPTIONS') {
        res.writeHead(204); // No Content
        res.end();
    } else {
        next();
    }
};

const getLikeCount = (req, res, next) => {
    res.end(JSON.stringify(db));
    console.log("Response sent: likeCount");
};

const notFoundHandler = (req, res) => {
    res.statusCode = 404;
    res.end(JSON.stringify({ message: 'Page not found' }));
};

const server = http.createServer((req, res) => {
    logger(req, res, () => {
        corsMiddleware(req, res, () => {
            jsonMiddleware(req, res, () => {
                if (req.method === "GET" && req.url === '/api/likeCount') {
                    getLikeCount(req, res);
                } else {
                    notFoundHandler(req, res);
                }
            });
        });
    });
});

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
