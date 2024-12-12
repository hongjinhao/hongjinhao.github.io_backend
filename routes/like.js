
import express from 'express';
const db = { "likeCount": 69 };

const router = express.Router();

// get like count
// GET /api/likeCount
router.get('/', (req, res, next) => {
    res.status(200).json(db);
});

// increase like count
// PUT /api/likeCount/increase
router.put('/increase', (req, res, next) => {
    db.likeCount++;
    res.status(200).json({msg: 'likeCount has been increased', db});
})

// decrease like count
// PUT /api/likeCount/decrease
router.put('/decrease', (req, res, next) => {
    db.likeCount--;
    res.status(200).json({msg: 'likeCount has been decreased', db});
})

export default router;







