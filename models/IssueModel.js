const IssuesToolsConnectors = require('../connectors/IssuesToolsConnectors')

class IssueModel {
    constructor() {
        this.model = new IssuesToolsConnectors()
        return this.model
    }
}

module.exports = IssueModel