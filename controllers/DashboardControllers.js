const IssueModel = require('../models/IssueModel')

class DashboardControllers {
    get(req, res) {
        let issues = new IssueModel()
        let kpis = {
            std : issues.getStdDeviationLeadTime(),
            mean : issues.getAverageLeadTime(),
            median : issues.getMedianLeadTime(),
            mode_frequency : issues.getModeFrequencyLeadTime(),
            sigma : issues.getSigma(),
            issues_lt : issues.getAllLt()
        }

        return res.json(kpis)
    }
}

module.exports = new DashboardControllers