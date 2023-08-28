const router = require('express').Router()
const DashboardControllers = require('../controllers/DashboardControllers')

router.route('/').get(DashboardControllers.get)


module.exports = router