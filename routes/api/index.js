const router = require('express').Router();
const userRoutes = require('./user');
const thoughtRoutes = require('./thought');

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;