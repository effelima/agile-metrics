const IssueModel = require('../models/IssueModel')

class DashboardControllers {
    get(req, res) {
        let issues = new IssueModel()
        let kpi = {
            mean : issues.getAverageLeadTime(),
            median : issues.getMedianLeadTime(),
            //mode : issues.getModeLeadTime(),
            frequency : issues.getModeFrequencyLeadTime()
        }
        return res.json(kpi)
    }
}

module.exports = new DashboardControllers