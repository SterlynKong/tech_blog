// require express router
const router = require("express").Router();

// require user routes
const userRoutes = require('./user-routes.js');

// require post routes
const postRoutes = require('./post-routes');

// require comment routes
const commentRoutes = require('./comment-routes');

// set up routers (URL segments) for routes
router.use('/user', userRoutes);
router.use('/post', postRoutes);
router.use('/comment', commentRoutes);

module.exports = router;
