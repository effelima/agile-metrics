require('dotenv').config()
const LocalIssuesTool = require('./LocalIssuesToolConnectors')

class IssuesToolsConnectors {
    constructor() {
        let issues_tool = process.env.ISSUES_TOOL
        if (issues_tool == 'LOCAL')
            return new LocalIssuesTool()
    }
}

module.exports = IssuesToolsConnectors