const Mathjs = require('mathjs')
const IssuesToolsConnectors = require('../connectors/IssuesToolsConnectors')

class IssueModel {

    #model
    #lead_time

    constructor() {
        this.#model = new IssuesToolsConnectors()
        this.#lead_time = this.#model.map(a => a.lead_time)
    }

    getAverageLeadTime() {
        let average = Mathjs.mean(this.#lead_time)
        return average
    }

    getMedianLeadTime() {
        let median = Mathjs.median(this.#lead_time)
        return median
    }

    getModeLeadTime() {
        let mode = Mathjs.mode(this.#lead_time)
        return mode
    }
}

module.exports = IssueModel