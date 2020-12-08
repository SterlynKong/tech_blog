// require express router
const router = require("express").Router();

// require Comment model
const { Comment } = require("../../models/");

// require withAuth function
const withAuth = require("../../utils/auth");

// POST '/' create a Comment
router.post("/", withAuth, (req, res) => {
    Comment.create({ ...req.body, user_Id: req.session.user_Id })
        .then(newComment => {
            res.json(newComment);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

module.exports = router;