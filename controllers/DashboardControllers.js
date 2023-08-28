const IssueModel = require('../models/IssueModel')

class DashboardControllers {
    get(req, res) {
        return res.json(new IssueModel)
    }
}

module.exports = new DashboardControllers