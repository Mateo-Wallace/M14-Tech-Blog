const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
// const dashboardRoutes = require('./dashboard-routes');

router.use('/', homeRoutes);
// router.use('/', dashboardRoutes);
router.use('/api', apiRoutes);

module.exports = router;
