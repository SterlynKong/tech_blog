// require express router method
const router = require("express").Router();

// require User routes
const userRoutes = require('./user-routes.js');

// require Post routes
const postRoutes = require('./post-routes');

// require Comment routes
const commentRoutes = require('./comment-routes');

// set up routers (URL segments) for routes
router.use('/user', userRoutes);
router.use('/post', postRoutes);
router.use('/comment', commentRoutes);


module.exports = router;
