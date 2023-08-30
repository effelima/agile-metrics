const IssueModel = require('../models/IssueModel')

class DashboardControllers {
    get(req, res) {
        let issues = new IssueModel()
        let kpis = {
            issues_lt : issues.getSigma()
        }

        return res.json(kpis)
    }
}

module.exports = new DashboardControllers